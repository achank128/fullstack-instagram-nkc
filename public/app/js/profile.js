import { userRequest } from "./api.js";
import { formater, IMGURL } from "./data.js";
const myAccount = JSON.parse(localStorage.getItem("user"));

const getUserPost = async () => {
  try {
    const res = await userRequest.get("/posts/profile/" + myAccount.username);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const userPost = await getUserPost();

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
      src="${IMGURL + myAccount.profilePicture}"
      alt="avt"
    />
  </div>
  <div class="profile-info-detail">
    <div class="top">
      <h2 class="username">${myAccount.username}</h2>
      <a class="btn-edit-profile">Edit Profile</a>
      <button class="btn-setting-profile">
        <i class="fa-solid fa-gear"></i>
      </button>
    </div>
    <div class="mid">
      <div class="posts-amount">
        <p>${userPost?.length}</p>
        posts
      </div>
      <div class="followers-amount">
        <p>${myAccount.followers.length}</p>
        followers
      </div>
      <div class="following-amount">
        <p>${myAccount.followings.length}</p>
        following
      </div>
    </div>
    <div class="bottom">
      <span class="name">${myAccount.fullName}</span>
      <div class="bio">${myAccount.bio}</div>
    </div>
  </div>
`;

profileInfoMobile.innerHTML = `
  <div class="bottom-bio">
      <span class="name">${myAccount.fullName}</span>
      <div class="bio">${myAccount.bio}</div>
  </div>
  <div class="bottom-follower">
      <div class="posts-amount">
        <p>${userPost?.length}</p>
        posts
      </div>
      <div class="followers-amount">
        <p>${myAccount.followers.length}</p>
        followers
      </div>
      <div class="following-amount">
        <p>${myAccount.followings.length}</p>
        following
      </div>
  </div>
  
`;

profilePosts.innerHTML = userPost
  .map((post) => {
    if (post.numOfPhoto > 0) {
      return `
      <div class="post-photo">
        <div class="post-photo-content">
          <a href="#">
            <img class="photo" src=${IMGURL + post.photos[0]} alt="avt" />
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
          </a>
        </div>
      </div>
    `;
    }
  })
  .join("");
