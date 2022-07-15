const router = require("express").Router();
const {
  getCommentPost,
  createComment,
  likeComment,
} = require("../controllers/commentController");

const { authenticate } = require("../middleware/authentication");

router.get("/:postId", authenticate, getCommentPost);
router.post("/", authenticate, createComment);
router.put("/like/:id", authenticate, likeComment);

module.exports = router;
