const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
  current,
  verifyEmail,
  resendVerifyEmail,
} = require("../controllers/users");

const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const updateAvatar = require("../controllers/updateAvatar");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", auth, logout);
router.get("/current", auth, current);

router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", resendVerifyEmail);

router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

module.exports = router;
