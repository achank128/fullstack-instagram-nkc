import {
  formater,
  postPhoto,
  postPhotos,
  postVideo,
  showPostOverlay,
  postModalImage,
  myAccount,
  IMGURL,
  showComment,
} from "./data.js";
import { userRequest } from "./api.js";

//API
const getFollowUsers = async () => {
  try {
    const res = await userRequest.get("/users/followings");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getSuggestUsers = async () => {
  try {
    const res = await userRequest.get("/users/suggest");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  try {
    const res = await userRequest.get("/users/all");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getTimelinePost = async () => {
  try {
    const res = await userRequest.get("/posts/user/timeline");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getPostComments = async (id) => {
  try {
    const res = await userRequest.get("/comments/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const Posts = await getTimelinePost();
const Users = await getFollowUsers();
Users.push(myAccount);

//RIGHTBAR
const rightbarAccountInfo = document.querySelector(".rightbar-account-info");
const accountSuggestList = document.querySelector(".account-suggest-list");

rightbarAccountInfo.innerHTML = `
  <a href="/profile.html">
    <img src=${
      IMGURL + myAccount.profilePicture
    } class="avatar-profile-rightbar" alt="avt" />
  </a>
  <div class="account-info-text">
    <a href="./profile.html" class="account-username">${myAccount.username}</a>
    <p class="account-name">${myAccount.fullName}</p>
  </div>
  <button class="btn-account-switch">Switch</button>
`;

const suggestUsers = await getSuggestUsers();
accountSuggestList.innerHTML = suggestUsers
  .map((user) => {
    return `
  <div class="account-suggest-info" data-id=${user._id}>
      <img
        src=${IMGURL + user.profilePicture}
        alt="avt"
      />
    <div class="account-suggest-text">
      <a class="account-suggest-username">${user.username}</a>
      <p class="account-suggest-name">Followed by ${user.username}</p>
    </div>
    <div class="loading-following-rightbar">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <button class="btn-account-follow">Follow</button>
  </div>
  `;
  })
  .join("");

const accountSuggestInfo = document.querySelectorAll(".account-suggest-info");
accountSuggestInfo.forEach((account) => {
  const btnFollow = account.querySelector(".btn-account-follow");
  const loadingFollowing = account.querySelector(".loading-following-rightbar");
  const handleFollow = async () => {
    if (btnFollow.textContent === "Follow") {
      loadingFollowing.classList.add("active");
      btnFollow.classList.add("deactive");
      await userRequest.put("/users/follow/" + account.dataset.id);
      loadingFollowing.classList.remove("active");
      btnFollow.classList.remove("deactive");
      btnFollow.textContent = "Following";
      btnFollow.style.color = "#262626";
    } else {
      btnFollow.textContent = "Follow";
      btnFollow.style.color = "#0095f6";
    }
  };
  btnFollow.addEventListener("click", handleFollow);
});

/* ------------------------------------------------------------------- */

//FEED
const feed = document.getElementById("feed");
//-------------Story--------------
const storyContent = feed.querySelector(".story-content");
const storyPrev = feed.querySelector(".story-prev");
const storyNext = feed.querySelector(".story-next");
storyContent.innerHTML = Users.map((user) => {
  if (user._id !== myAccount._id)
    return `
    <div class="story-post">
      <span class="story-outline">
        <img
          src=${IMGURL + user.profilePicture}
          alt="avt"
        />
      </span>
      <p class="username">${user.username}</p>
    </div>
  `;
}).join("");

const widthFeed = feed.clientWidth;
let numTrans = 7;
let trans = 4;
if (widthFeed < 500) {
  numTrans = 5;
  trans = 5;
}
if (widthFeed < 400) {
  numTrans = 4;
  trans = 4;
}
const numStorybegin = numTrans;
const numStory = Users.length;

const transformStory = (num) => {
  storyContent.style.transform = `translateX(-${num * 78}px)`;
};

const handleNextStory = () => {
  if (numStory - numTrans <= trans) {
    numTrans += numStory - numTrans;
    storyNext.classList.add("deactive");
  } else {
    numTrans += trans;
  }
  storyPrev.classList.add("active");
  transformStory(numTrans - numStorybegin);
};

const handlePrevStory = () => {
  if (numTrans - numStorybegin <= trans) {
    numTrans -= numTrans - numStorybegin;
    storyPrev.classList.remove("active");
  } else {
    numTrans -= trans;
  }
  transformStory(numTrans - numStorybegin);
  storyNext.classList.remove("deactive");
};

storyNext.addEventListener("click", handleNextStory);
storyPrev.addEventListener("click", handlePrevStory);

//--------------Post---------------
const posts = feed.querySelector(".posts");

posts.innerHTML = Posts.map((post) => {
  const user = Users.find((u) => u._id === post.userId);

  if (post.numOfPhoto === 1) {
    return postPhoto(post, user);
  } else if (post.numOfPhoto === 0) {
    return postVideo(post, user);
  } else if (post.numOfPhoto > 1) {
    return postPhotos(post, user);
  }
}).join("");

const postOverlay = document.querySelector(".post-overlay");
const postItem = feed.querySelectorAll(".post-item");
const postPhotosItem = feed.querySelectorAll(".post-photos");
const postVideoItem = feed.querySelectorAll(".post-video");

//Post-item-feed
const handlePostPhotos = (post) => {
  let dotCounter = 0;
  const postImage = post.querySelector(".post-image");
  const photoPrev = post.querySelector(".photo-prev");
  const photoNext = post.querySelector(".photo-next");
  const dots = post.querySelectorAll(".dot");

  //dot
  const resetDot = () => {
    dots.forEach((dot) => {
      dot.classList.remove("dot-current");
    });
    const dotCurrent = post.querySelector(`.dot${dotCounter}`);
    dotCurrent.classList.add("dot-current");
  };
  resetDot();

  const carousel = () => {
    postImage.style.transform = `translateX(-${dotCounter * 100}%)`;
    resetDot();
  };

  photoPrev.addEventListener("click", () => {
    dotCounter--;
    if (dotCounter < 1) {
      photoPrev.classList.remove("active");
    }
    photoNext.classList.remove("deactive");
    carousel();
  });
  photoNext.addEventListener("click", () => {
    dotCounter++;
    if (dotCounter === dots.length - 1) {
      photoNext.classList.add("deactive");
    }
    photoPrev.classList.add("active");
    carousel();
  });
};

const handlePostVideo = (post) => {
  let isAudioOn = false;
  const playVideoPost = post.querySelector(".play-video-post");
  const videoPost = post.querySelector(".video-post");
  const videoAudio = post.querySelector(".video-audio");
  const videoAudioOn = post.querySelector(".video-audio-on");
  const videoAudioOff = post.querySelector(".video-audio-off");
  videoPost.addEventListener("click", () => {
    videoPost.pause();
    playVideoPost.classList.add("active");
  });
  playVideoPost.addEventListener("click", () => {
    playVideoPost.classList.remove("active");
    videoPost.play();
  });
  videoAudio.addEventListener("click", () => {
    if (!isAudioOn) {
      videoPost.muted = false;
      videoAudioOff.classList.add("deactive");
      videoAudioOn.classList.remove("deactive");
      isAudioOn = true;
    } else {
      videoPost.muted = true;
      videoAudioOn.classList.add("deactive");
      videoAudioOff.classList.remove("deactive");
      isAudioOn = false;
    }
  });
};

const likePost = (post) => {
  const heart = post.querySelector(".heart");
  const heartActive = post.querySelector(".heart-active");
  const postImage = post.querySelector(".post-image");
  const likeAmount = post.querySelector(".like-amount");
  let isLiked = heartActive.classList.contains("active");
  const id = post.dataset.id;

  const updateLike = async (type) => {
    if (type === "inc") {
      const res = await userRequest.put("/posts/like/" + id);
      likeAmount.innerHTML = `${formater.format(res.data.likes)} like${
        res.data.likes > 1 ? "s" : ""
      }`;
      Posts;
    } else if (type === "dec") {
      const res = await userRequest.put("/posts/like/" + id);
      likeAmount.innerHTML = `${formater.format(res.data.likes)} like${
        res.data.likes > 1 ? "s" : ""
      }`;
    }
  };
  const likePost = () => {
    if (!isLiked) {
      updateLike("inc");
      heartActive.classList.add("active");
      isLiked = true;
    } else {
      updateLike("dec");
      heartActive.classList.remove("active");
      isLiked = false;
    }
  };
  const likePostImage = () => {
    if (!isLiked) {
      updateLike("inc");
      heartActive.classList.add("active");
      isLiked = true;
    }
  };

  postImage.addEventListener("dblclick", likePostImage);
  heart.addEventListener("click", likePost);
};

const addCommentActive = (post) => {
  const addCommentInput = post.querySelector(".add-comment-input");
  const submitComment = post.querySelector(".submit-comment");
  addCommentInput.addEventListener("input", (e) => {
    if (e.target.value) {
      submitComment.classList.add("submit-comment-on");
    } else {
      submitComment.classList.remove("submit-comment-on");
    }
  });
};

//Post-overlay-------------------------------------------
const likeComment = (comment) => {
  const heartComment = comment.querySelector(".heart-comment");
  const heartCommentActive = comment.querySelector(".heart-comment-active");
  const commentLike = comment.querySelector(".comment-like");
  let isLiked = heartCommentActive.classList.contains("active");
  const id = comment.dataset.id;

  const updateLike = async (type) => {
    if (type === "inc") {
      const res = await userRequest.put("/comments/like/" + id);
      commentLike.innerHTML = `${formater.format(res.data.likes)} like${
        res.data.likes > 1 ? "s" : ""
      }`;
    } else if (type === "dec") {
      const res = await userRequest.put("/comments/like/" + id);
      commentLike.innerHTML = `${formater.format(res.data.likes)} like${
        res.data.likes > 1 ? "s" : ""
      }`;
    }
  };
  const handleLikeComment = () => {
    if (!isLiked) {
      updateLike("inc");
      heartCommentActive.classList.add("active");
      isLiked = true;
    } else {
      updateLike("dec");
      heartCommentActive.classList.remove("active");
      isLiked = false;
    }
  };

  heartComment.addEventListener("click", handleLikeComment);
};

const handleAddComment = async (post) => {
  try {
    const addCommentInput = postOverlay.querySelector(".add-comment-input");

    const res = await userRequest.post("/comments", {
      postId: post._id,
      content: addCommentInput.value,
    });
    const element = document.createElement("div");
    let attr = document.createAttribute("data-id");
    attr.value = res.data._id;
    element.setAttributeNode(attr);
    element.classList.add("comment");
    element.innerHTML = `
      <div class="comment-account">
        <img
          src=${IMGURL + myAccount.profilePicture}
          alt="avt"
        />
        <div class="comment-info">
          <p>
            <span>${myAccount.username}</span>${addCommentInput.value}
          </p>
          <div class="comment-info-reply">
            <p class="comment-time">1s</p>
            <button class="btn-reply-comment">Reply</button>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
      <div class="heart-comment">
        <button class="heart-comment-default">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button class="heart-comment-active">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
    `;
    addCommentInput.value = "";
    const commentsContainer = postOverlay.querySelector(".comments-container");
    commentsContainer.insertBefore(element, commentsContainer.children[0]);
  } catch (error) {
    console.log(error);
  }

  const comments = postOverlay.querySelectorAll(".comment");
  comments.forEach((comment) => {
    likeComment(comment);
  });
};

const openPostOverlay = async (post) => {
  const id = post.dataset.id;
  const postData = Posts.find((p) => p._id === id);
  const user = Users.find((u) => u._id === postData.userId);

  postOverlay.classList.add("open-modal");
  postOverlay.innerHTML = showPostOverlay(postData, user);
  let attr = document.createAttribute("data-id");
  attr.value = id;
  postOverlay.setAttributeNode(attr);

  //Show post photo
  document.querySelector(".post-photo").innerHTML = postModalImage(postData);

  //Show post comments
  const Comments = await getPostComments(postData._id);
  const AllUser = await getAllUsers();
  document.querySelector(".comments-container").innerHTML = Comments.map(
    (comment) => {
      const user = AllUser.find((u) => u._id === comment.userId);
      return showComment(comment, user);
    }
  ).join("");

  //Like post
  likePost(postOverlay);

  if (postData.numOfPhoto === 0) {
    handlePostVideo(postOverlay);
  }
  if (postData.numOfPhoto > 1) {
    handlePostPhotos(postOverlay);
  }

  //Form add comment
  const formAddComment = postOverlay.querySelector(".add-comment");
  formAddComment.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAddComment(postData);
  });
  addCommentActive(postOverlay);
  const comments = postOverlay.querySelectorAll(".comment");
  comments.forEach((comment) => {
    likeComment(comment);
  });

  //close modal
  const closePostModal = document.querySelector(".close-post-modal");
  closePostModal.addEventListener("click", () => {
    postOverlay.classList.remove("open-modal");
  });
};

// Post action ----------------------------------
postItem.forEach((post) => {
  likePost(post);
  addCommentActive(post);
  const btnComment = post.querySelector(".comment");
  const commentAmount = post.querySelector(".comments-amount");
  btnComment.addEventListener("click", () => {
    openPostOverlay(post);
  });
  commentAmount.addEventListener("click", () => {
    openPostOverlay(post);
  });
});

postPhotosItem.forEach((post) => {
  handlePostPhotos(post);
});

postVideoItem.forEach((post) => {
  handlePostVideo(post);
});
