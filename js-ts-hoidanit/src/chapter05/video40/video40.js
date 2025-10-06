console.log("Video 40");

const scores = [10, 20, 30, 40, 50];

//read data
// scores.forEach((scores, index) => {
//   console.log("index: ", index, "score: ", scores);
// });

//modify data
const scoresV2 = scores.map((element, index) => {
  return element * 10;
});

const scoresV3 = scores.map((element) => element * 10);

console.log("scores: ", scores);
console.log("scoresV2: ", scoresV2);
console.log("scoresV3: ", scoresV3);
