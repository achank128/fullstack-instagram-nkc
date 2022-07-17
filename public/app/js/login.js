import { publicRequest } from "./api.js";
import { myAccount } from "./data.js";

if (myAccount) {
  location.replace("./home.html");
}

const form = document.getElementById("form");
const usernameInput = form.querySelector(".username-input");
const passwordInput = form.querySelector(".password-input");
const errorMsg = form.querySelector(".error-msg");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const login = async (email, username, password) => {
  try {
    const res = await publicRequest.post("/auth/login", {
      email,
      username,
      password,
    });
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    location.replace("./home.html");
  } catch (error) {
    errorMsg.style.visibility = "inherit";
    errorMsg.textContent = error.response.data;
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (validateEmail(username)) {
    login(username, "", password);
  } else {
    login("", username, password);
  }
};

form.addEventListener("submit", handleLogin);
