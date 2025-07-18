const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../models/contacts");

const { contactSchema, updateContactSchema } = require("../utils/validation");

const listContactsController = async (req, res) => {
  try {
    const contacts = await listContacts();
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
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const { name, email, phone } = req.body;
    const newContact = await addContact({ name, email, phone });
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
    const { error } = updateContactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const { contactId } = req.params;
    const updated = await updateContact(contactId, req.body);

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
};
