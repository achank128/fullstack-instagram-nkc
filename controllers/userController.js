const User = require("../models/User");

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    const newUser = await User.findById(req.params.id).select("-password");
    res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId).select("-password")
      : await User.findOne({ username: username }).select("-password");

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const followUser = async (req, res) => {
  if (req.user.userId !== req.params.id) {
    try {
      const userFollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.user.userId);
      if (!currentUser.followings.includes(req.params.id)) {
        await userFollow.updateOne({ $push: { followers: req.user.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("User has been followed");
      } else {
        res.status(400).json("You already follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(400).json("You can not follow yourself");
  }
};

const unfollowUser = async (req, res) => {
  if (req.user.userId !== req.params.id) {
    try {
      const userUnfollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.user.userId);
      if (currentUser.followings.includes(req.params.id)) {
        await userUnfollow.updateOne({ $pull: { followers: req.user.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("User has been unfollowed");
      } else {
        res.status(403).json("You dont follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can not unfollow yourself");
  }
};

const getFollowUsers = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.userId);
    const followUsers = await Promise.all(
      currentUser.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    res.status(200).json(followUsers);
  } catch (error) {}
};

const getSuggestUsers = async (req, res) => {
  const currentUser = await User.findById(req.user.userId);
  const followUsers = await Promise.all(
    currentUser.followings.map((friendId) => {
      const user = User.findById(friendId);
      return user;
    })
  );
  const followUsersId = followUsers.map((u) => u._id);
  const users = await User.find({
    _id: { $nin: [req.user.userId, ...followUsersId] },
  });
  res.status(200).json(users);
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
  getFollowUsers,
  getSuggestUsers,
  getAllUsers,
};
