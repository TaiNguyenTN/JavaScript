console.log("video 53");

const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
  console.log("Click me");
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "green";
});

backBtnElement.addEventListener("click", () => {
  console.log("Click me");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "unset";
});
