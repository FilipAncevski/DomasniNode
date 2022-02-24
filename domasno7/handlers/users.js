const User = require("../models/User");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = +process.env.SALT_ROUNDS;
const { createToken } = require("../middlewares/jwt");

const registeringNewUser = async (req, res, next) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json(`Missing required parameter`);
  }

  try {
    const bcryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    await User.create({ email, username, password: bcryptedPassword });
    return res.status(200).json(`${username} was created successfully`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json(`Missing or invalid required parameter`);
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json("User not found");
    }

    await bcrypt.compare(password, user.password);

    const token = createToken(user.username, user._id);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  registeringNewUser,
  loginUser,
};
