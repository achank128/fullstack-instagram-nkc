import { Users, IMGURL } from "./data.js";
import { userRequest } from "./api.js";
const myAccount = JSON.parse(localStorage.getItem("user"));

//HEADER
//Overlay
const overlay = document.getElementById("overlay");
//Create post input
const selectFileInput = document.querySelector(".select-file");
const createPostContent = document.querySelector(".create-post-content");
const sharePostBtn = document.querySelector(".share-post-btn");
const captionPostInput = document.querySelector(".caption-post");
//Search Input
const inputSearch = document.getElementById("input-search");
const searchHistory = document.querySelector(".search-history");
const closeSearchHistory = document.querySelector(".close-search-history");
//Create Post
const navCreatePost = document.querySelector(".nav-create-post");
const navCreatePostOn = document.querySelector(".nav-create-post-on");
const createPostOverlay = document.querySelector(".create-post-overlay");
const btnCloseCreatePost = document.querySelector(".close-create-post-btn");
//Notify
const navNotify = document.querySelector(".nav-notify");
const navNotifyOn = document.querySelector(".nav-notify-on");
const notifyBox = document.querySelector(".notify-box");
const notifyContent = document.querySelector(".notify-content");
//Account
const navAvatarAccountImg = document.querySelector(".nav-avatar-account-img");
const navAccountSetting = document.querySelector(".nav-account-setting");
const logOut = document.querySelector(".log-out");

/* ------------------------------------------------------------------- */
//Create Post
var files = [];
selectFileInput.addEventListener("change", (e) => {
  const fileList = e.target.files;
  for (var i = 0, f; (f = fileList[i]); i++) {
    files.push(fileList[i]);
  }
  let typeFile;
  if (files.length === 1)
    typeFile = files[0].name.slice(
      files[0].name.length - 3,
      files[0].name.length
    );
  if (typeFile === "mp4") {
    createPostContent.innerHTML = `<video class="video-post" loop autoplay muted>
    <source src="${URL.createObjectURL(files[0])}" type="video/mp4">
    </video>`;
  } else {
    createPostContent.innerHTML = `${files
      .map((file) => `<img src=${URL.createObjectURL(file)} alt="" />`)
      .join("")}
    `;
  }
});

const handleUpload = async () => {
  if (files.length > 0) {
    var filesName = [];
    const data = new FormData();
    files.forEach((file) => {
      data.append("file", file);
    });
    try {
      const res = await axios.post("http://localhost:5000/api/upload", data);
      res.data.forEach((file) => {
        filesName.push(file.filename);
      });
      await handleCreatePost(filesName);
    } catch (err) {}
  }
};
const handleCreatePost = async (filesName) => {
  let postVideo = false,
    typeFile;
  if (filesName.length === 1)
    typeFile = filesName[0].slice(filesName[0].length - 3, filesName[0].length);

  if (typeFile === "mp4") postVideo = true;

  try {
    const res = await userRequest.post("/posts", {
      userId: user._id,
      desc: captionPostInput.value,
      numOfPhoto: postVideo ? 0 : filesName.length,
      photo: filesName.length === 1 ? filesName[0] : null,
      video: postVideo ? filesName[0] : null,
      photos: filesName,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

sharePostBtn.addEventListener("click", () => {
  handleUpload();
});

//Navbar
const deleteAllNav = () => {
  searchHistory.classList.remove("active");
  closeSearchHistory.classList.remove("active");
  navNotifyOn.classList.remove("active");
  notifyBox.classList.remove("active");
  navAvatarAccountImg.classList.remove("nav-img-active");
  navAccountSetting.classList.remove("active");
};

//Overlay out
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  deleteAllNav();
});

//Input Search click
inputSearch.addEventListener("focus", () => {
  deleteAllNav();
  overlay.classList.add("active");
  searchHistory.classList.add("active");
  closeSearchHistory.classList.add("active");
});
closeSearchHistory.addEventListener("click", () => {
  searchHistory.classList.remove("active");
  closeSearchHistory.classList.remove("active");
});

//Create Post
navCreatePost.addEventListener("click", () => {
  deleteAllNav();
  navCreatePostOn.classList.add("active");
  createPostOverlay.classList.add("open-modal");
});
btnCloseCreatePost.addEventListener("click", () => {
  navCreatePostOn.classList.remove("active");
  createPostOverlay.classList.remove("open-modal");
});

//Notify
navNotify.addEventListener("click", () => {
  deleteAllNav();
  overlay.classList.add("active");
  notifyBox.classList.add("active");
  navNotifyOn.classList.add("active");
});
navNotifyOn.addEventListener("click", () => {
  navNotifyOn.classList.remove("active");
  notifyBox.classList.remove("active");
});

//Account
navAvatarAccountImg.addEventListener("click", () => {
  deleteAllNav();
  overlay.classList.toggle("active");
  navAvatarAccountImg.classList.toggle("nav-img-active");
  navAccountSetting.classList.toggle("active");
});
navAvatarAccountImg.src = IMGURL + myAccount.profilePicture;

logOut.addEventListener("click", () => {
  localStorage.clear();
  location.replace("./index.html");
});

//Notify content
notifyContent.innerHTML = `
  <h4>This Month</h4>
  ${Users.map(
    (user) =>
      `
      <div class="notify-item" data-id=${user.id}>
        <img
          src=${user.profilePicture}
          alt="avt"
        />
        <div class="notify-info">
          <span>${user.username}</span>
          <p class="notify-desc">started follow you.</p>
          <p class="notify-time">${user.id}w</p>
        </div>
        <button class="notify-btn-follow">Follow</button>
      </div>
    `
  ).join("")}
`;
const notifyItems = document.querySelectorAll(".notify-item");
notifyItems.forEach((notifyItem) => {
  const btnFollow = notifyItem.querySelector(".notify-btn-follow");
  btnFollow.addEventListener("click", () => {
    btnFollow.classList.forEach((classBtn) => {
      if (classBtn === "notify-btn-following") {
        btnFollow.classList.remove("notify-btn-following");
        btnFollow.textContent = "Follow";
      } else {
        btnFollow.textContent = "Following";
        btnFollow.classList.add("notify-btn-following");
      }
    });
  });
});
