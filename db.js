const mongoose = require("mongoose");

const DB_URI =
  "mongodb+srv://hrabiaanitagabriela:2jzYFcTcTjsSP1av@goit-contacts.dkts132.mongodb.net/db-contacts?retryWrites=true&w=majority&appName=goit-contacts";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
    process.exit(1);

  });

