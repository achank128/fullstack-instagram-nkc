const User = require("../models/User");

const register = async (req, res) => {
  const { email, fullName, username, password } = req.body;

  //Email, Username already exists
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json("Email already exists");
  }
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    return res.status(400).json("Username already exists");
  }

  //Create User
  const user = await User.create({
    email,
    fullName,
    username,
    password,
    profilePicture: "no-avatar.png",
  });
  const token = user.createJWT();
  const { password: pass, ...other } = user._doc;
  return res.status(200).json({
    user: other,
    token,
  });
};

const login = async (req, res) => {
  const { email, username, password } = req.body;

  if (email) {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json("Username or Email does not exist.");
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) return res.status(401).json("Incorrect password.");
    const token = user.createJWT();
    const { password: pass, ...other } = user._doc;
    return res.status(200).json({
      user: other,
      token,
    });
  } else {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json("Username or Email does not exist.");
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) return res.status(401).json("Incorrect password.");
    const token = user.createJWT();
    const { password: pass, ...other } = user._doc;
    return res.status(200).json({
      user: other,
      token,
    });
  }
};

module.exports = {
  register,
  login,
};
