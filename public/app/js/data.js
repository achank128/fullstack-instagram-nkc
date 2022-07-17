// export const IMGURL = "http://localhost:5000/image/";
// export const BASE_URL = "http://localhost:5000/api";
export const IMGURL = "https://instagram-nkc.herokuapp.com/image/";
export const BASE_URL = "https://instagram-nkc.herokuapp.com/api";
export const myAccount = JSON.parse(localStorage.getItem("user"));

export const formater = Intl.NumberFormat("en-US");
export const formaterK = (num) => {
  if (num > 1000000) {
    const million = ((num % 1000000000) - (num % 1000000)) / 1000000;
    const thousand = ((num % 1000000) - (num % 100000)) / 100000;
    return `${million},${thousand}m`;
  } else if (num > 10000) {
    const thousand = ((num % 1000000) - (num % 1000)) / 1000;
    const hundred = ((num % 1000) - (num % 100)) / 100;
    return `${thousand},${hundred}k`;
  }
  return Intl.NumberFormat("en-US").format(num);
};

export const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};
export const Users = [
  {
    id: 1,
    username: "vtv24news",
    profilePicture: "./image/avatar/vtv24news.jpg",
  },
  {
    id: 2,
    username: "onefootball",
    profilePicture: "./image/avatar/onefootball.png",
  },
  {
    id: 3,
    username: "marvel",
    profilePicture: "./image/avatar/marvel.jpeg",
  },

  {
    id: 4,
    username: "javascript.js",
    profilePicture: "./image/avatar/javascript.jpg",
  },
  {
    id: 5,
    username: "phuong.anh.17.09",
    profilePicture: "./image/avatar/phuonganh.jpg",
  },
  {
    id: 6,
    username: "davidbeckham",
    profilePicture: "./image/avatar/davidbeckham.jpg",
  },
  {
    id: 7,
    username: "neymarjr",
    profilePicture: "./image/avatar/neymarjr.jpg",
  },
  {
    id: 8,
    username: "tueanee_",
    profilePicture: "./image/avatar/tueanee_.jpg",
  },
  {
    id: 9,
    username: "anhdaden",
    profilePicture: "./image/avatar/anhdaden.jpg",
  },
  {
    id: 10,
    username: "thu.theoo",
    profilePicture: "./image/avatar/thutheoo.jpg",
  },
  {
    id: 11,
    username: "snoopdogg",
    profilePicture: "./image/avatar/snoopdogg.jpg",
  },
];

export const Posts = [
  {
    id: 1,
    userId: 1,
    numOfPhoto: 1,
    photo: "./image/post/post1_vtv24news.jpg",
    desc: "Nếu bạn nhận ra đây là phim gì, bạn sẽ nói điều gì về bộ phim mà không để người khác biết được tên của bộ phim này?",
    date: "8 mins ago",
    like: 762,
    comment: 54,
  },
  {
    id: 2,
    userId: 2,
    numOfPhoto: 7,
    photos: [
      "./image/post/post2_onefootball_1.jpg",
      "./image/post/post2_onefootball_2.jpg",
      "./image/post/post2_onefootball_3.jpg",
      "./image/post/post2_onefootball_4.jpg",
      "./image/post/post2_onefootball_5.jpg",
      "./image/post/post2_onefootball_6.jpg",
      "./image/post/post2_onefootball_7.jpg",
    ],
    desc: "Happy National Pet Day! 🐶",
    date: "34 mins ago",
    like: 29535,
    comment: 1847,
  },
  {
    id: 3,
    userId: 3,
    numOfPhoto: 0,
    video: "./image/post/post3_marvel.mp4",
    desc: "Nothing will prepare you for this. 🤯 In ❶ week, Marvel Studios’ Doctor Strange in the Multiverse of Madness arrives. Get tickets now to experience it only in theaters May 6. Link in Bio.",
    date: "2 hours ago",
    like: 109372,
    view: 210933,
    comment: 3279,
  },
  {
    id: 4,
    userId: 4,
    numOfPhoto: 1,
    photo: "./image/post/post4_javascript.jpg",
    desc: "🤣",
    date: "6 hours ago",
    like: 1363,
    comment: 46,
  },
  {
    id: 5,
    userId: 5,
    numOfPhoto: 1,
    photo: "./image/post/post5_phuonganh.jpg",
    desc: "Có người thích bạn vì bạn mang đến sự vui vẻ Nhưng cũng có người thích bạn vì có bạn, họ mới vui vẻ ..",
    date: "11 hours ago",
    like: 8115,
    comment: 48,
  },
  {
    id: 6,
    userId: 6,
    numOfPhoto: 1,
    photo: "./image/post/post6_davidbeckham.jpg",
    desc: "My beautiful boys 💙💙💙 & a very proud dad.. Congratulations Bust on a lifetime of happiness, we will always be by your side ❤️ @brooklynbeckham @romeobeckham @cruzbeckham we love you @victoriabeckham ❤️",
    date: "4 hours ago",
    like: 1796863,
    comment: 4837,
  },
  {
    id: 7,
    userId: 2,
    numOfPhoto: 1,
    photo: "./image/post/post7_onefootball.jpg",
    desc: "What are they saying? Wrong answers only! 👀👇",
    date: "5 hours ago",
    like: 53439,
    comment: 318,
  },
  {
    id: 8,
    userId: 7,
    numOfPhoto: 1,
    photo: "./image/post/post8_neymarjr.jpg",
    desc: "3 ⚽️ 3 🅰️ 3 ⚽️",
    date: "1 day ago",
    like: 4646599,
    comment: 84,
  },
  {
    id: 9,
    userId: 8,
    numOfPhoto: 4,
    photos: [
      "./image/post/post9_tueanee_1.jpg",
      "./image/post/post9_tueanee_2.jpg",
      "./image/post/post9_tueanee_3.jpg",
      "./image/post/post9_tueanee_4.jpg",
    ],
    desc: "babii boo 💕",
    date: "2 days ago",
    like: 5564,
    comment: 3,
  },
  {
    id: 10,
    userId: 9,
    numOfPhoto: 0,
    video: "./image/post/post10_anhdaden.mp4",
    desc: "Gòi xong :( Follow @genzcogivuii để xem thêm nhiều thứ hay ho nhé #anhdaden",
    date: "21 hours ago",
    like: 51990,
    view: 61338,
    comment: 82,
  },
  {
    id: 11,
    userId: 10,
    numOfPhoto: 4,
    photos: [
      "./image/post/post11_thutheoo_1.jpg",
      "./image/post/post11_thutheoo_2.jpg",
      "./image/post/post11_thutheoo_2.jpg",
      "./image/post/post11_thutheoo_4.jpg",
    ],
    desc: "Nắng bể đầu 🤯 Full set xinh từ nhà @_jangbasic",
    date: "18 hours ago",
    like: 2546,
    comment: 18,
  },
  {
    id: 12,
    userId: 11,
    numOfPhoto: 1,
    photo: "./image/post/post12_snoopdogg.jpg",
    desc: "😂",
    date: "1 day ago",
    like: 395217,
    comment: 3863,
  },
];

export const Comments = [
  {
    id: 1,
    userId: 6,
    comment: "Gonna cry?",
    like: 172,
    date: "1h",
  },
  {
    id: 2,
    userId: 2,
    comment: "I was not expecting that",
    like: 34,
    date: "1h",
  },
  {
    id: 3,
    userId: 11,
    comment: "Wow",
    like: 26,
    date: "3h",
  },
  {
    id: 4,
    userId: 4,
    comment: "Pretty❤️",
    like: 18,
    date: "5h",
  },
  {
    id: 5,
    userId: 8,
    comment: "OMGGG 🔥🔥😍😍😍",
    like: 1,
    date: "2h",
  },
  {
    id: 6,
    userId: 7,
    comment: "I forgot I have ta wait an hour to see real comments 😑🤔",
    like: 182,
    date: "1h",
  },
];
//Search Account
export const searchList = (users) => {
  return `
  <div class="search-history-list">
    ${users
      .map(
        (user) =>
          `<div class="account">
      <img src=${IMGURL + user.profilePicture} alt="avt" />
      <div class="account-info">
        <div class="account-name">
          <a href="./profile.html?${user.username}">
            <span>${user.username}</span>
          </a>
        </div>
        <div class="account-fullname">${user.fullName}</div>
      </div>
    </div>`
      )
      .join("")}
  </div>`;
};

//New Feed Post ---------------------------
export const postPhoto = (post, user) => {
  return `
<div class="post-item post-photo" data-id=${post._id}>
  <!-- Post top -->
  <div class="top">
    <a href="./profile.html?${user.username}">
      <div class="top-left">
        <img
        src=${IMGURL + user.profilePicture}
        alt="avt"
        />
        <span>${user.username}</span>
      </div>
    </a>
    <span class="top-right">
      <i class="fa-solid fa-ellipsis"></i>
    </span>
  </div>

  <!-- Post center -->
  <div class="center">
    <div class="post-content-center">
      <div class="post-image">
        <div class="photo0">
          <img
            src=${IMGURL + post.photo}
            alt="post-image"
          />
        </div>
      </div>
    </div>
    <div class="photo-amount">

    </div>
  </div>

  <!-- Post bottom -->
  <div class="bottom">
    <div class="interact-post">
      <div class="left">
        <div class="heart">
          <button class="heart-default">
            <i class="fa-regular fa-heart"></i>
          </button>
         
          <button class="heart-active  ${
            post.likes.includes(myAccount._id) ? "active" : ""
          }">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="comment">
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

    <div class="text">
      <p class="like-amount">
        ${formater.format(post.likes.length)}
        like${post.likes && post.likes.length > 1 ? "s" : ""} 
      </p>
      <p class="user">
        <a href="./profile.html?${user.username}">
          <span>${user.username}</span>
        </a>
        ${post.desc}<button>more</button>
      </p>
      <button class="comments-amount">View all ${formater.format(
        post.comments.length
      )} comments</button>
      
      <p class="post-date">${timeSince(Date.parse(post.createdAt))}</p>
    </div>
    <div class="comments-container"></div>
    <form class="add-comment">
      <button class="emojis">
        <i class="fa-regular fa-face-smile"></i>
      </button>
      <input class="add-comment-input" type="text" placeholder="Add a comment..." />
      <button type="submit" class="submit-comment">Post</button>
    </form>
  </div>
</div>`;
};

export const postPhotos = (post, user) => {
  return `
<div class="post-item post-photos"  data-id=${post._id}>
  <!-- Post top -->
  <div class="top">
  <a href="./profile.html?${user.username}">
    <div class="top-left">
      <img
      src=${IMGURL + user.profilePicture}
      alt="avt"
      />
      <span>${user.username}</span>
    </div>
  </a>
    <span class="top-right">
      <i class="fa-solid fa-ellipsis"></i>
    </span>
  </div>

  <!-- Post center -->
  <div class="center">
    <div class="post-content-center">
      <div class="photo-prev">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="photo-next">
        <i class="fa-solid fa-angle-right"></i>
      </div>

      <div class="post-image">
        ${post.photos
          .map((photo, index) => {
            return `
              <div class=${"photo" + index}>
                <img
                  src=${IMGURL + photo}
                  alt="post-image"
                />
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
    <div class="photo-amount">
          ${post.photos
            .map((post, index) => {
              return `
              <div class="dot dot${index}"></div>
              `;
            })
            .join("")}
    </div>
  </div>

  <!-- Post bottom -->
  <div class="bottom">
    <div class="interact-post">
      <div class="left">
        <div class="heart">
          <button class="heart-default">
            <i class="fa-regular fa-heart"></i>
          </button>
          <button class="heart-active  ${
            post.likes.includes(myAccount._id) ? "active" : ""
          }">
            <i class="fa-solid fa-heart"></i>
          </button>      
        </div>
        <div class="comment">
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

    <div class="text">
      <p class="like-amount">
        ${formater.format(post.likes.length)}
        like${post.likes && post.likes.length > 1 ? "s" : ""} 
      </p>
      <p class="user">
        <a href="./profile.html?${user.username}">
          <span>${user.username}</span>
        </a>
        ${post.desc}<button>more</button>
      </p>
      <button class="comments-amount">View all ${formater.format(
        post.comments.length
      )} comments</button>
      
      <p class="post-date">${timeSince(Date.parse(post.createdAt))}</p>
    </div>

    <div class="comments-container"></div>
    <form class="add-comment">
      <button class="emojis">
        <i class="fa-regular fa-face-smile"></i>
      </button>
      <input class="add-comment-input" type="text" placeholder="Add a comment..." />
      <button type="submit" class="submit-comment">Post</button>
    </form>
  </div>
</div>`;
};

export const postVideo = (post, user) => {
  return `
<div class="post-item post-video " data-id=${post._id}>
  <!-- Post top -->
  <div class="top">
    <a href="./profile.html?${user.username}">
      <div class="top-left">
        <img
        src=${IMGURL + user.profilePicture}
        alt="avt"
        />
        <span>${user.username}</span>
      </div>
    </a>
    <span class="top-right">
      <i class="fa-solid fa-ellipsis"></i>
    </span>
  </div>

  <!-- Post center -->
  <div class="center">
    <div class="post-content-center">
      <div class="post-image">
        <div class="video">
          <video class="video-post" loop autoplay muted>
            <source src="${IMGURL + post.video}" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    <i class="play-video-post fa-solid fa-play"></i>
    <div class="video-audio">
      <i class="fa-solid fa-volume-high video-audio-on deactive"></i>
      <i class="fa-solid fa-volume-xmark video-audio-off"></i>
    </div>
    <div class="photo-amount">
    </div>
  </div>

  <!-- Post bottom -->
  <div class="bottom">
    <div class="interact-post">
      <div class="left">
        <div class="heart">
          <button class="heart-default">
            <i class="fa-regular fa-heart"></i>
          </button>
          <button class="heart-active  ${
            post.likes.includes(myAccount._id) ? "active" : ""
          }">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="comment">
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

    <div class="text">
    <p class="view-amount">${formater.format(post.likes.length)} views</p>
    <p class="like-amount deactive">
      ${formater.format(post.likes.length)} 
      like${post.likes && post.likes.length > 1 ? "s" : ""}
    </p>
      <p class="user">
        <a href="./profile.html?${user.username}">
          <span>${user.username}</span>
        </a>
        ${post.desc}<button>more</button>
      </p>
      <button class="comments-amount">View all ${formater.format(
        post.comments.length
      )} comments</button>
      
      <p class="post-date">${timeSince(Date.parse(post.createdAt))}</p>
    </div>

    <div class="comments-container"></div>
    <form class="add-comment">
      <button class="emojis">
        <i class="fa-regular fa-face-smile"></i>
      </button>
      <input class="add-comment-input" type="text" placeholder="Add a comment..." />
      <button type="submit" class="submit-comment">Post</button>
    </form>
  </div>
</div>`;
};

//Explore Post ------------------------------
export const displayGroup2photo1video = (postPhoto1, postPhoto2, postVideo) => {
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

export const displayGroup3photo = (postPhoto1, postPhoto2, postPhoto3) => {
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

export const displayGroup1video2photo = (postVideo, postPhoto1, postPhoto2) => {
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

//Overlay Post -------------------------------
export const showPostOverlay = (post, user) => {
  return `
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
            src=${IMGURL + user.profilePicture}
            alt="avt"
          />
          <a href="./profile.html?${user.username}">
            <span>${user.username}</span>
          </a>
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
              src=${IMGURL + user.profilePicture}
              alt="avt"
            />
            <div class="post-caption">
              <p>
              <a href="./profile.html?${user.username}">
                <span>${user.username}</span>
              </a>
              ${post.desc}
                <button>more</button>
              </p>
              <p class="post-date-min">${timeSince(
                Date.parse(post.createdAt)
              )}</p>
            </div>
          </div>
          <div class="comments-container">
            <div class="comment-loading">
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
              <button class="heart-active  ${
                post.likes.includes(myAccount._id) ? "active" : ""
              }">
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
          ${formater.format(post.likes.length)} 
          like${post.likes && post.likes.length > 1 ? "s" : ""}
        </p>
        <p class="post-date">${timeSince(Date.parse(post.createdAt))}</p>
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
    `;
};

export const postModalImage = (post) => {
  if (post.numOfPhoto === 1) {
    return `
    <div class="post-image">
    <div class="photo"> 
      <img
        src=${IMGURL + post.photo}
        alt="post-image"
      />    
    </div>
    </div>
    `;
  } else if (post.numOfPhoto === 0) {
    return `
    <div class="post-image">
      <div class="video">
        <video class="video-post" loop autoplay muted>
          <source src="${IMGURL + post.video}" type="video/mp4">
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
    ${post.photos
      .map((photo, index) => {
        return `
          <div class=${"photo" + index}>
            <img
              src=${IMGURL + photo}
              alt="post-image"
            />
          </div>
        `;
      })
      .join("")}
    </div>
    <div class="photo-amount">
        ${post.photos
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

export const showComment = (comment, user) => {
  return `
      <div class="comment" data-id=${comment._id}>
        <div class="comment-account">
          <img
            src=${IMGURL + user.profilePicture}
            alt="avt"
          />
          <div class="comment-info">
            <p>
              <a href="./profile.html?${user.username}">
                <span>${user.username}</span>
              </a>${comment.content}
            </p>
            <div class="comment-info-reply">
              <p class="comment-time">${timeSince(
                Date.parse(comment.createdAt)
              )}</p>
              <p class="comment-like">
                ${formater.format(comment.likes.length)} 
                like${comment.likes.length > 1 ? "s" : ""}
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
          <button class="heart-comment-active ${
            comment.likes.includes(myAccount._id) ? "active" : ""
          }">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>`;
};
