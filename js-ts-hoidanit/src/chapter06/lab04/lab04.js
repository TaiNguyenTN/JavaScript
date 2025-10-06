console.log("Lab 04");

const username = document.getElementById("Username");
const password = document.getElementById("Password");
const loginBtn = document.getElementById("Login");

loginBtn.addEventListener("click", () => {
  if (username.value === "hoidanit@gmail.com" && password.value === "123456") {
    alert("Login successful!");
    window.location.href = "success.html";
  } else {
    alert("Login failed!");
    username.style.borderColor = "red";
    password.style.borderColor = "red";
  }
});
