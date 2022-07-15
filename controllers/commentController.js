const Comment = require("../models/Comment");
const Post = require("../models/Post");

const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const comment = await Comment.create({
      postId,
      userId: req.user.userId,
      content,
    });
    const post = await Post.findById(postId);
    await post.updateOne({ $push: { comments: req.user.userId } });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

const likeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment.likes.includes(req.user.userId)) {
      await comment.updateOne({ $push: { likes: req.user.userId } });
      res.status(200).json({
        msg: "The comment has been liked",
        likes: comment.likes.length + 1,
      });
    } else {
      await comment.updateOne({ $pull: { likes: req.user.userId } });
      res.status(200).json({
        msg: "The comment has been disliked",
        likes: comment.likes.length - 1,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCommentPost = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createComment,
  likeComment,
  getCommentPost,
};
