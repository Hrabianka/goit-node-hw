const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const User = require("../models/user");

const avatarsDir = path.join(__dirname, "../public/avatars");

const updateAvatar = async (req, res) => {
  try {
    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.user;

    const ext = path.extname(originalname);
    const filename = `${_id}${ext}`;
    const resultPath = path.join(avatarsDir, filename);

    const image = await Jimp.read(tempUpload);
    await image.resize(250, 250).writeAsync(tempUpload);

    await fs.rename(tempUpload, resultPath);

    const avatarURL = `/avatars/${filename}`;
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.status(200).json({ avatarURL });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateAvatar;
