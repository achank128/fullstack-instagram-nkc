import { publicRequest } from "./api.js";
import { myAccount } from "./data.js";

if (myAccount) {
  location.replace("./home.html");
}

const form = document.getElementById("form");
const emailInput = form.querySelector(".email-input");
const nameInput = form.querySelector(".name-input");
const usernameInput = form.querySelector(".username-input");
const passwordInput = form.querySelector(".password-input");
const errorMsg = form.querySelector(".error-msg");

const register = async (e) => {
  e.preventDefault();
  try {
    const res = await publicRequest.post("/auth/register", {
      email: emailInput.value,
      fullName: nameInput.value,
      username: usernameInput.value,
      password: passwordInput.value,
    });
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    location.replace("./home.html");
  } catch (error) {
    errorMsg.style.visibility = "inherit";
    errorMsg.textContent = error.response.data;
  }
};

form.addEventListener("submit", register);
