import { userRequest } from "./api.js";
import {
  formater,
  IMGURL,
  postModalImage,
  postPhoto,
  showComment,
  showPostOverlay,
} from "./data.js";
const myAccount = JSON.parse(localStorage.getItem("user"));
var userProfile = myAccount;

if (!myAccount) location.replace("./index.html");

const usernameProfile = window.location.search.slice(
  1,
  window.location.search.length
);

const getUserPost = async (username) => {
  try {
    const res = await userRequest.get("/posts/profile/" + username);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (username) => {
  try {
    const res = await userRequest.get("/users?username=" + username);
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

const getAllUsers = async () => {
  try {
    const res = await userRequest.get("/users/all");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

if (usernameProfile) {
  userProfile = await getUser(usernameProfile);
}

const userPost = await getUserPost(userProfile.username);

//PROFILE
const profile = document.querySelector(".profile");
const profileInfo = profile.querySelector(".profile-info");
const profileInfoMobile = profile.querySelector(".profile-info-mobile");
const profilePosts = profile.querySelector(".profile-posts");
//Post-bar
const postsPage = profile.querySelector(".posts-page");
const reelsPage = profile.querySelector(".reels-page");
const savedPage = profile.querySelector(".saved-page");
const taggedPage = profile.querySelector(".tagged-page");

const deleteActive = () => {
  postsPage.classList.remove("active-bar");
  reelsPage.classList.remove("active-bar");
  savedPage.classList.remove("active-bar");
  taggedPage.classList.remove("active-bar");
};

postsPage.addEventListener("click", () => {
  deleteActive();
  postsPage.classList.add("active-bar");
});
reelsPage.addEventListener("click", () => {
  deleteActive();
  reelsPage.classList.add("active-bar");
});
savedPage.addEventListener("click", () => {
  deleteActive();
  savedPage.classList.add("active-bar");
});
taggedPage.addEventListener("click", () => {
  deleteActive();
  taggedPage.classList.add("active-bar");
});

profileInfo.innerHTML = `
  <div class="profile-user-img">
    <img
      src="${IMGURL + userProfile.profilePicture}"
      alt="avt"
    />
  </div>
  <div class="profile-info-detail">
    <div class="top">
      <h2 class="username">${userProfile.username}</h2>
      ${
        usernameProfile
          ? ""
          : `<a class="btn-edit-profile">Edit Profile</a>
      <button class="btn-setting-profile">
        <i class="fa-solid fa-gear"></i>
      </button>
      `
      }
      
    </div>
    <div class="mid">
      <div class="posts-amount">
        <p>${userPost?.length}</p>
        post${userPost?.length ? "s" : ""}
      </div>
      <div class="followers-amount">
        <p>${userProfile.followers.length}</p>
        follower${userProfile.followers.length > 1 ? "s" : ""}
      </div>
      <div class="following-amount">
        <p>${userProfile.followings.length}</p>
        following${userProfile.followings.length > 1 ? "s" : ""}
      </div>
    </div>
    <div class="bottom">
      <span class="name">${userProfile.fullName}</span>
      <div class="bio">${userProfile.bio}</div>
    </div>
  </div>
`;

profileInfoMobile.innerHTML = `
  <div class="bottom-bio">
      <span class="name">${userProfile.fullName}</span>
      <div class="bio">${userProfile.bio}</div>
  </div>
  <div class="bottom-follower">
      <div class="posts-amount">
        <p>${userPost?.length}</p>
        post${userPost?.length ? "s" : ""}
      </div>
      <div class="followers-amount">
        <p>${userProfile.followers.length}</p>
        follower${userProfile.followers.length > 1 ? "s" : ""}
      </div>
      <div class="following-amount">
        <p>${userProfile.followings.length}</p>
        following${userProfile.followings.length > 1 ? "s" : ""}
      </div>
  </div>
  
`;

profilePosts.innerHTML = userPost
  ?.map((post) => {
    if (post.numOfPhoto > 0) {
      return `
      <div class="post-photo" data-id=${post._id}>
        <div class="post-photo-content">
            <img class="photo" src=${IMGURL + post.photos[0]} alt="photo" />
            <div class="hover-overlay">
              <div class="amount">
                <span class="heart-amount">
                  <i class="fa-solid fa-heart"></i>
                  <p>${formater.format(post.likes.length)}</p>
                </span>
                <span class="comment-amount">
                  <i class="fa-solid fa-comment"></i>
                  <p>${formater.format(post.comments.length)}</p>
                </span>
              </div>
            </div>
        </div>
      </div>
    `;
    }
  })
  .join("");

//Edit Profile
if (!usernameProfile) {
  const profileImg = profile.querySelector(".profile-user-img");
  const editProfile = profile.querySelector(".edit-profile");
  const editProfileForm = profile.querySelector(".edit-profile-form");
  const editProfileBtn = profile.querySelector(".btn-edit-profile");
  const selectFileInput = profile.querySelector(".select-file");
  const fullnameInput = profile.querySelector(".fullname-input");
  const bioInput = profile.querySelector(".bio-input");

  editProfileBtn.addEventListener("click", () => {
    editProfile.classList.toggle("active");
  });

  fullnameInput.value = myAccount.fullName ? myAccount.fullName : "";
  bioInput.value = myAccount.bio ? myAccount.bio : "";

  let file;

  selectFileInput.addEventListener("change", (e) => {
    file = e.target.files[0];
    profileImg.innerHTML = `<img
    src="${URL.createObjectURL(file)}"
    alt="avt"
  />`;
  });

  const handleEditProfile = async () => {
    try {
      let fileUpload;
      if (file) {
        const data = new FormData();
        data.append("file", file);
        fileUpload = await userRequest.post("/upload", data);
      }

      if (fileUpload) {
        const res = await userRequest.put("/users/" + myAccount._id, {
          fullName: fullnameInput.value,
          bio: bioInput.value,
          profilePicture: fileUpload.data[0].filename,
        });
        localStorage.setItem("user", JSON.stringify(res.data));
      } else {
        const res = await userRequest.put("/users/" + myAccount._id, {
          fullName: fullnameInput.value,
          bio: bioInput.value,
        });
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  editProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleEditProfile();
  });
}
//Overlay Post
const postOverlay = document.querySelector(".post-overlay");
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
    } else if (type === "dec") {
      const res = await userRequest.put("/posts/like/" + id);
      likeAmount.innerHTML = `${formater.format(res.data.likes)} like${
        res.data.likes > 1 ? "s" : ""
      }`;
    }
  };
  const likePostItem = () => {
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
  heart.addEventListener("click", likePostItem);
};

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
  console.log("first");
  const id = post.dataset.id;
  const postData = userPost.find((p) => p._id === id);

  postOverlay.classList.add("open-modal");
  postOverlay.innerHTML = showPostOverlay(postData, userProfile);
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

const postsPhoto = profile.querySelectorAll(".post-photo");
postsPhoto.forEach((post) => {
  const postContent = post.querySelector(".post-photo-content");
  postContent.addEventListener("click", () => {
    openPostOverlay(post);
  });
});
