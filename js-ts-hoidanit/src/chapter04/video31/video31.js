console.log("video 31");

// function add(a, b){
//     return a + b;
// }

// (a, b) => a + b;

// (8, 9);
// console.log(add(2, 3));
// (function (){
//     console.log("Hello world");
// })();

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(2, 3));

//return
const sum = (a, b, c) => {
  if (typeof a !== "number") {
    return 0;
  }
  return a + b + c;
};

console.log(sum("ahihi", 3, 4));
