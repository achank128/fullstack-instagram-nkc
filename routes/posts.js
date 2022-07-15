const router = require("express").Router();
const {
  createPost,
  likePost,
  getPost,
  getTimelinePosts,
  getUserPost,
} = require("../controllers/postController");

const { authenticate } = require("../middleware/authentication");

router.post("/", authenticate, createPost);
router.get("/:id", authenticate, getPost);
router.put("/like/:id", authenticate, likePost);
router.get("/user/timeline", authenticate, getTimelinePosts);
router.get("/profile/:username", authenticate, getUserPost);

module.exports = router;
