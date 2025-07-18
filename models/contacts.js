const Contact = require("./schemas/contact"); 

const listContacts = async (filter = {}) => {
  return await Contact.find(filter);
};

const getContactById = async (contactId) => {
  return await Contact.findById(contactId);
};

const addContact = async (data) => {
  return await Contact.create(data);
};

const removeContact = async (contactId) => {
  return await Contact.findByIdAndDelete(contactId);
};

const updateContact = async (contactId, data) => {
  return await Contact.findByIdAndUpdate(contactId, data, { new: true });
};

const updateStatusContact = async (contactId, data) => {
  return await Contact.findByIdAndUpdate(contactId, data, { new: true });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
