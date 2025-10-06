console.log("video 51");

const mybtnElement = document.getElementById("btn");

const myTitleElement = document.getElementById("title");

const myBackBtnElement = document.getElementById("backBtn");

mybtnElement.addEventListener("click", () => {
  console.log("You clicked me!");
  myTitleElement.innerHTML = "Just the content with hoidanit";
});

myBackBtnElement.addEventListener("click", () => {
  console.log("You clicked me!");
  myTitleElement.innerHTML = "JavaScript";
});
