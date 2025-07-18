const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../models/contacts");

const listContactsController = async (req, res) => {
  try {
    const { favorite } = req.query;

    let filter = {};
    if (favorite !== undefined) {
      filter.favorite = favorite === "true"; 
    }

    const contacts = await listContacts(filter);
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addContactController = async (req, res) => {
  try {
    const { name, email, phone, favorite } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "missing required name - field" });
    }

    const newContact = await addContact({ name, email, phone, favorite });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeContactController = async (req, res) => {
  try {
    const { contactId } = req.params;
    const deleted = await removeContact(contactId);

    if (!deleted) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContactController = async (req, res) => {
  try {
    const { contactId } = req.params;
    const body = req.body;

    if (!body || Object.keys(body).length === 0) {
      return res.status(400).json({ message: "missing fields" });
    }

    const updated = await updateContact(contactId, body);

    if (!updated) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStatusContactController = async (req, res) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;

    if (favorite === undefined) {
      return res.status(400).json({ message: "missing field favorite" });
    }

    const updated = await updateStatusContact(contactId, { favorite });

    if (!updated) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listContacts: listContactsController,
  getById,
  addContact: addContactController,
  removeContact: removeContactController,
  updateContact: updateContactController,
  updateStatusContactController,
};
