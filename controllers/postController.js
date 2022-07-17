const Post = require("../models/Post");
const User = require("../models/User");

const createPost = async (req, res) => {
  try {
    const post = await Post.create({ userId: req.user.userId, ...req.body });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.user.userId)) {
      await post.updateOne({ $push: { likes: req.user.userId } });
      res
        .status(200)
        .json({ msg: "The post has been liked", likes: post.likes.length + 1 });
    } else {
      await post.updateOne({ $pull: { likes: req.user.userId } });
      res.status(200).json({
        msg: "The post has been disliked",
        likes: post.likes.length - 1,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserPost = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id }).sort({ createdAt: 1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTimelinePosts = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.userId);
    currentUser.followings.push(req.user.userId);
    const followPosts = await Post.find({
      userId: {
        $in: currentUser.followings,
      },
    }).sort({ createdAt: -1 });
    res.status(200).json(followPosts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createPost,
  likePost,
  getPost,
  getUserPost,
  getTimelinePosts,
};
