console.log("Video 39");

const myClass = ["hoidanit", "nguyyenquoctai", "vinh", "hoang", "huy", "tung"];

for (let i = 0; i < myClass.length; i++) {
  console.log("Index: ", i, "Value: ", myClass[i]);
}

// console.log("-----");
// myClass.forEach(function (value, index) {
//   console.log("Index: ", index, "Value: ", value);
// });

console.log("=====================");
myClass.forEach((value, index) => {
  console.log("Index: ", index, "Value: ", value);
});
