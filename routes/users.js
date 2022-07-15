const router = require("express").Router();

const {
  authenticate,
  authenticateUser,
} = require("../middleware/authentication");
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
  getAllUsers,
  getFollowUsers,
  getSuggestUsers,
} = require("../controllers/userController");

router.get("/all", authenticate, getAllUsers);
router.get("/followings", authenticate, getFollowUsers);
router.get("/suggest", authenticate, getSuggestUsers);
router
  .route("/:id")
  .put(authenticateUser, updateUser)
  .delete(authenticateUser, deleteUser);
router.get("/", authenticate, getUser);
router.put("/follow/:id", authenticate, followUser);
router.put("/unfollow/:id", authenticate, unfollowUser);

module.exports = router;
