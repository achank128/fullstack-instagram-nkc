import {
  Posts,
  Users,
  Comments,
  myAccount,
  formater,
  formaterK,
} from "./data.js";

const explorePosts = document.querySelector(".explore-posts");
const displayGroup2photo1video = (postPhoto1, postPhoto2, postVideo) => {
  return `
<div class="group-1-2photo-1video" >
  <div class="post-item post-photo" data-id=${postPhoto1.id}>
    <a >
      <img src=${
        postPhoto1.numOfPhoto > 1 ? postPhoto1.photos[0] : postPhoto1.photo
      } />
      ${
        postPhoto1.numOfPhoto > 1
          ? `<span class="multiphoto"><i class="fa-solid fa-clone"></i></span>`
          : ""
      }
      
      <div class="hover-overlay">
        <div class="amount">
          <span class="heart-amount">
            <i class="fa-solid fa-heart"></i>
            <p>${formater.format(postPhoto1.like)}</p>
          </span>
          <span class="comment-amount">
            <i class="fa-solid fa-comment"></i>
            <p>${formater.format(postPhoto1.comment)}</p>
          </span>
        </div>
      </div>
    </a>
  </div>

  <div class="post-item post-video" data-id=${postVideo.id}>
    <a >
      <video autoplay loop muted>
            <source src=${postVideo.video} type="video/mp4">
            Your browser does not support the video tag.
      </video>
      <span class="videoplay"><i class="fa-solid fa-play"></i></span>
      <div class="hover-overlay">
        <div class="amount">
          <span class="view-amount">
            <i class="fa-solid fa-play"></i>
            <p>${formaterK(postVideo.view)}</p>
          </span>
          <span class="comment-amount">
            <i class="fa-solid fa-comment"></i>
            <p>${formater.format(postVideo.comment)}</p>
          </span>
        </div>
      </div>
    </a>
  </div>

  <div class="post-item post-photo" data-id=${postPhoto2.id}>
    <a >
      <img
        class="photo"
        src=${
          postPhoto2.numOfPhoto > 1 ? postPhoto2.photos[0] : postPhoto2.photo
        }
        alt="avt"
      />
      ${
        postPhoto2.numOfPhoto > 1
          ? `<span class="multiphoto"><i class="fa-solid fa-clone"></i></span>`
          : ""
      }
      <div class="hover-overlay">
        <div class="amount">
          <span class="heart-amount">
            <i class="fa-solid fa-heart"></i>
            <p>${formater.format(postPhoto2.like)}</p>
          </span>
          <span class="comment-amount">
            <i class="fa-solid fa-comment"></i>
            <p>${formater.format(postPhoto2.comment)}</p>
          </span>
        </div>
      </div>
    </a>
  </div>
</div>
  `;
};
const displayGroup3photo = (postPhoto1, postPhoto2, postPhoto3) => {
  return ` 
<div class="group-2-3photo">
  <div class="post-item post-photo" data-id=${postPhoto1.id}>
    <a >
      <img
        class="photo"
        src=${
          postPhoto1.numOfPhoto > 1 ? postPhoto1.photos[0] : postPhoto1.photo
        }
        alt="avt"
      />
      ${
        postPhoto1.numOfPhoto > 1
          ? `<span class="multiphoto"><i class="fa-solid fa-clone"></i></span>`
          : ""
      }
      <div class="hover-overlay">
        <div class="amount">
          <span class="heart-amount">
            <i class="fa-solid fa-heart"></i>
            <p>${formater.format(postPhoto1.like)}</p>
          </span>
          <span class="comment-amount">
            <i class="fa-solid fa-comment"></i>
            <p>${formater.format(postPhoto1.comment)}</p>
          </span>
        </div>
      </div>
    </a>
  </div>

  <div class="post-item post-photo" data-id=${postPhoto2.id}>
    <a >
      <img
        class="photo"
        src=${
          postPhoto2.numOfPhoto > 1 ? postPhoto2.photos[0] : postPhoto2.photo
        }
        alt="avt"
      />
      ${
        postPhoto2.numOfPhoto > 1
          ? `<span class="multiphoto"><i class="fa-solid fa-clone"></i></span>`
          : ""
      }
      <div class="hover-overlay">
        <div class="amount">
          <span class="heart-amount">
            <i class="fa-solid fa-heart"></i>
            <p>${formater.format(postPhoto2.like)}</p>
          </span>
          <span class="comment-amount">
            <i class="fa-solid fa-comment"></i>
            <p>${formater.format(postPhoto2.comment)}</p>
          </span>
        </div>
      </div>
    </a>
  </div>

  <div class="post-item post-photo" data-id=${postPhoto3.id}>
    <a >
      <img
        class="photo"
        src=${
          postPhoto3.numOfPhoto > 1 ? postPhoto3.photos[0] : postPhoto3.photo
        }
        alt="avt"
      />
      ${
        postPhoto3.numOfPhoto > 1
          ? `<span class="multiphoto"><i class="fa-solid fa-clone"></i></span>`
          : ""
      }
      <div class="hover-overlay">
        <div class="amount">
          <span class="heart-amount">
            <i class="fa-solid fa-heart"></i>
            <p>${formater.format(postPhoto3.like)}</p>
          </span>
          <span class="comment-amount">
            <i class="fa-solid fa-comment"></i>
            <p>${formater.format(postPhoto3.comment)}</p>
          </span>
        </div>
      </div>
    </a>
  </div>
</div>
  `;
};
const displayGroup1video2photo = (postVideo, postPhoto1, postPhoto2) => {
  return `
<div class="group-3-1video-2photo">
  <div class="post-item post-video" data-id=${postVideo.id}>
    <a >
      <video class="video-post" autoplay loop muted>
        <source src=${postVideo.video} type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <span class="videoplay"><i class="fa-solid fa-play"></i></span>
      <div class="hover-overlay">
        <div class="amount">
          <span class="view-amount">
            <i class="fa-solid fa-play"></i>
            <p>${formaterK(postVideo.view)}</p>
          </span>
          <span class="comment-amount">
            <i class="fa-solid fa-comment"></i>
            <p>${formater.format(postVideo.comment)}</p>
          </span>
        </div>
      </div>
    </a>
  </div>

  <div class="post-item post-photo" data-id=${postPhoto1.id}>
    <div class="post-photo-content">
      <a >
        <img
        class="photo"
        src=${
          postPhoto1.numOfPhoto > 1 ? postPhoto1.photos[0] : postPhoto1.photo
        } 
        alt="avt" />
        ${
          postPhoto1.numOfPhoto > 1
            ? `<span class="multiphoto"><i class="fa-solid fa-clone"></i></span>`
            : ""
        }
        <div class="hover-overlay">
          <div class="amount">
            <span class="heart-amount">
              <i class="fa-solid fa-heart"></i>
              <p>${formater.format(postPhoto1.like)}</p>
            </span>
            <span class="comment-amount">
              <i class="fa-solid fa-comment"></i>
              <p>${formater.format(postPhoto1.comment)}</p>
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>

  <div class="post-item post-photo" data-id=${postPhoto2.id}>
    <div class="post-photo-content">
      <a >
        <img
          class="photo"
          src=${
            postPhoto2.numOfPhoto > 1 ? postPhoto2.photos[0] : postPhoto2.photo
          } 
          alt="avt"
        />
        ${
          postPhoto2.numOfPhoto > 1
            ? `<span class="multiphoto"><i class="fa-solid fa-clone"></i></span>`
            : ""
        }
        <div class="hover-overlay">
          <div class="amount">
            <span class="heart-amount">
              <i class="fa-solid fa-heart"></i>
              <p>${formater.format(postPhoto2.like)}</p>
            </span>
            <span class="comment-amount">
              <i class="fa-solid fa-comment"></i>
              <p>${formater.format(postPhoto2.comment)}</p>
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
`;
};

explorePosts.innerHTML = Posts.map((post, index) => {
  if (post.video) {
    if (index % 3 === 0) {
      return displayGroup1video2photo(
        Posts[index],
        Posts[index + 1],
        Posts[index + 2]
      );
    } else if (post.video && index % 3 === 1) {
      return displayGroup1video2photo(
        Posts[index],
        Posts[index + 1],
        Posts[index - 1]
      );
    } else if (post.video && index % 3 === 2) {
      return displayGroup2photo1video(
        Posts[index - 2],
        Posts[index - 1],
        Posts[index]
      );
    }
  } else {
    if (index % 3 === 1 && !Posts[index + 1].video && !Posts[index - 1].video) {
      return displayGroup3photo(
        Posts[index - 1],
        Posts[index],
        Posts[index + 1]
      );
    }
  }
}).join("");

//Post-overlay
const postOverlay = document.querySelector(".post-overlay");

const likeComment = (comment) => {
  let isLiked = false;
  const heartComment = comment.querySelector(".heart-comment");
  const heartCommentActive = comment.querySelector(".heart-comment-active");
  const commentLike = comment.querySelector(".comment-like");
  const id = parseInt(comment.dataset.id);
  const updateLike = (type) => {
    if (type === "inc") {
      Comments.forEach((comment) => {
        if (comment.id === id) {
          comment.like++;
          commentLike.innerHTML = `${formater.format(comment.like)} likes`;
        }
      });
    } else if (type === "dec") {
      Comments.forEach((comment) => {
        if (comment.id === id) {
          comment.like--;
          commentLike.innerHTML = `${formater.format(comment.like)} likes`;
        }
      });
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

const likePostItem = (post) => {
  let isLiked = false;
  const heart = post.querySelector(".heart");
  const heartActive = post.querySelector(".heart-active");
  const postImage = post.querySelector(".post-image");
  const likeAmount = post.querySelector(".like-amount");
  const id = parseInt(post.dataset.id);
  const updateLike = (type) => {
    if (type === "inc") {
      Posts.forEach((postData) => {
        if (postData.id === id) {
          postData.like++;
          likeAmount.innerHTML = `${formater.format(postData.like)} likes`;
        }
      });
    } else if (type === "dec") {
      Posts.forEach((postData) => {
        if (postData.id === id) {
          postData.like--;
          likeAmount.innerHTML = `${formater.format(postData.like)} likes`;
        }
      });
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

const addComment = (post) => {
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

const handleAddComment = (e) => {
  e.preventDefault();
  const addCommentInput = postOverlay.querySelector(".add-comment-input");
  const value = addCommentInput.value;
  const element = document.createElement("div");
  let attr = document.createAttribute("data-id");
  attr.value = myAccount.id;
  element.setAttributeNode(attr);
  element.classList.add("comment");
  element.innerHTML = `
  
    <div class="comment-account">
      <img
        src=${myAccount.profilePicture}
        alt="avt"
      />
      <div class="comment-info">
        <p>
          <span>${myAccount.username}</span>${value}
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
  const commentsContainer = postOverlay.querySelector(".comments-container");
  commentsContainer.insertBefore(element, commentsContainer.children[0]);
  const comments = postOverlay.querySelectorAll(".comment");
  comments.forEach((comment) => {
    likeComment(comment);
  });
};

const openPostOverlay = (post) => {
  const id = parseInt(post.dataset.id);
  const postData = Posts.find((postItem) => {
    return postItem.id === id;
  });

  const user = Users.find((user) => {
    return user.id === postData.userId;
  });
  const postModalImage = () => {
    if (postData.numOfPhoto === 1) {
      return `
      <div class="post-image">
      <div class="photo"> 
        <img
          src=${postData.photo}
          alt="post-image"
        />    
      </div>
      </div>
      `;
    } else if (postData.numOfPhoto === 0) {
      return `
      <div class="post-image">
        <div class="video">
          <video class="video-post" loop autoplay muted>
            <source src="${postData.video}" type="video/mp4">
          </video>
        </div>
      </div> 
      <i class="play-video-post fa-solid fa-play"></i>
      <div class="video-audio">
        <i class="fa-solid fa-volume-high video-audio-on deactive"></i>
        <i class="fa-solid fa-volume-xmark video-audio-off"></i>
      </div>
        `;
    } else {
      return `
      <div class="photo-prev">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="photo-next">
        <i class="fa-solid fa-angle-right"></i>
      </div>
      <div class="post-image">
      ${postData.photos
        .map((photo, index) => {
          return `
            <div class=${"photo" + index}>
              <img
                src=${photo}
                alt="post-image"
              />
            </div>
          `;
        })
        .join("")}
      </div>
      <div class="photo-amount">
          ${postData.photos
            .map((post, index) => {
              return `
              <div class="dot dot${index}"></div>
              `;
            })
            .join("")}
      </div>
        `;
    }
  };
  postOverlay.classList.add("open-modal");
  postOverlay.innerHTML = `
  <div class="post-modal-content">
    <!-- Post image -->
    <div class="post-photo">  
    </div>
    <!-- Post info -->
    <div class="post-modal-info">
      <!-- Post top -->
      <div class="top">
        <div class="top-left">
          <img
            src=${user.profilePicture}
            alt="avt"
          />
          <span>${user.username}</span>
          <i class="fa-solid fa-circle"></i>
         
          <div class="loading-following-modal">
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
          <button class="btn-follow-account">Follow</button>
        </div>
        <span class="top-right">
          <i class="fa-solid fa-ellipsis"></i>
        </span>
      </div>
      <!-- Post center -->
      <div class="center">
        <div class="text-post-modal">
          <div class="user-post">
            <img
              src=${user.profilePicture}
              alt="avt"
            />
            <div class="post-caption">
              <p>
                <span>${user.username}</span>${postData.desc}
                <button>more</button>
              </p>
              <p class="post-date-min">${postData.date}</p>
            </div>
          </div>
          <div class = "comments-container">
            ${Comments.map((comment) => {
              const userComment = Users.find((user) => {
                return user.id === comment.userId;
              });
              return `
                <div class="comment" data-id=${comment.id}>
                  <div class="comment-account">
                    <img
                      src=${userComment.profilePicture}
                      alt="avt"
                    />
                    <div class="comment-info">
                      <p>
                        <span>${userComment.username}</span>${comment.comment}
                      </p>
                      <div class="comment-info-reply">
                        <p class="comment-time">${comment.date}</p>
                        <p class="comment-like">
                          ${comment.like} like${comment.like > 1 ? "s" : ""}
                        </p>
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
                </div>`;
            }).join("")}
          </div>    
        </div>
      </div>

      <!-- Post bottom -->
      <div class="bottom">
        <div class="interact-post-modal">
          <div class="left">
            <div class="heart">
              <button class="heart-default">
                <i class="fa-regular fa-heart"></i>
              </button>
              <button class="heart-active">
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
            <div class="comment-icon">
              <button>
                <i class="fa-regular fa-comment"></i>
              </button>
            </div>
            <div class="share">
              <button>
                <i class="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div class="right">
            <div class="save">
              <button>
                <i class="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
        <p class="like-amount">
          ${formater.format(postData.like)} like${postData.like > 1 ? "s" : ""}
        </p>
        <p class="post-date">${postData.date}</p>
        <form class="add-comment">
          <button class="emojis">
            <i class="fa-regular fa-face-smile"></i>
          </button>
          <input class="add-comment-input" type="text" placeholder="Add a comment..." />
          <button type="submit" class="submit-comment">Post</button>
        </form>
      </div>
    </div>
    <button class="close-post-modal"><i class="fas fa-times"></i></button>
    <button class="post-modal-prev">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button class="post-modal-next">
      <i class="fa-solid fa-angle-right"></i>
    </button>
    `;
  document.querySelector(".post-photo").innerHTML = postModalImage();
  let attr = document.createAttribute("data-id");
  attr.value = id;
  postOverlay.setAttributeNode(attr);

  likePostItem(postOverlay);
  if (postData.numOfPhoto === 0) {
    handlePostVideo(postOverlay);
  }
  if (postData.numOfPhoto > 1) {
    handlePostPhotos(postOverlay);
  }

  //btn follow
  const btnFollow = postOverlay.querySelector(".btn-follow-account");
  const loadingFollowing = postOverlay.querySelector(
    ".loading-following-modal"
  );
  btnFollow.addEventListener("click", () => {
    if (btnFollow.textContent === "Follow") {
      loadingFollowing.classList.add("active");
      btnFollow.classList.add("inactive");
      setTimeout(() => {
        loadingFollowing.classList.remove("active");
        btnFollow.classList.remove("inactive");
        btnFollow.textContent = "Following";
        btnFollow.style.color = "#262626";
      }, 600);
    } else {
      btnFollow.textContent = "Follow";
      btnFollow.style.color = "#0095f6";
    }
  });

  //Form add comment
  const formAddComment = postOverlay.querySelector(".add-comment");
  formAddComment.addEventListener("submit", handleAddComment);
  addComment(postOverlay);
  const comments = postOverlay.querySelectorAll(".comment");
  comments.forEach((comment) => {
    likeComment(comment);
  });

  //close modal
  const closePostModal = document.querySelector(".close-post-modal");
  closePostModal.addEventListener("click", () => {
    postOverlay.classList.remove("open-modal");
  });

  //transPost
  const postModalPrev = postOverlay.querySelector(".post-modal-prev");
  postModalPrev.addEventListener("click", () => {
    const index = Math.floor(Math.random() * 12);
    openPostOverlay(postItems[index]);
  });
  const postModalNext = postOverlay.querySelector(".post-modal-next");
  postModalNext.addEventListener("click", () => {
    const index = Math.floor(Math.random() * 12);
    openPostOverlay(postItems[index]);
  });
};

const postItems = document.querySelectorAll(".post-item");
postItems.forEach((post) => {
  const postHover = post.querySelector(".hover-overlay");
  postHover.addEventListener("click", () => {
    openPostOverlay(post);
  });
});
