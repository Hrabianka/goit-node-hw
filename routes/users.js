const express = require("express");
const router = express.Router();

const { signup, login, logout, current } = require("../controllers/users");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const updateAvatar = require("../controllers/updateAvatar");

router.post("/signup", signup);

router.post("/login", login);

router.get("/logout", auth, logout);

router.get("/current", auth, current);

router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

module.exports = router;
