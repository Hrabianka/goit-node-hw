const express = require("express");
const router = express.Router();

const {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContactController,
} = require("../../controllers/contacts");

router.get("/", listContacts);
router.get("/:contactId", getById);
router.post("/", addContact);
router.delete("/:contactId", removeContact);
router.put("/:contactId", updateContact);
router.patch("/:contactId/favorite", updateStatusContactController);

module.exports = router;