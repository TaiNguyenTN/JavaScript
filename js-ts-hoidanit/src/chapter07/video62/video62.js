console.log("Video 62");

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 5000);

// console.log("3");

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve("hoidanit");
    }, 2000);
  });
};

myPromise();
