const express = require("express");
const router = express.Router();

const { signup, login, logout, current } = require("../controllers/users");
const auth = require("../middlewares/auth");

router.post("/signup", signup);

router.post("/login", login);

router.get("/logout", auth, logout);

router.get("/current", auth, current);

module.exports = router;
