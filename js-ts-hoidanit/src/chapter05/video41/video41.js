console.log("Video 41");

const ages = [10, 20, 30, 25, 15, 19];

const agesX2 = ages.map((item, index) => item * 2);

// const agesGreatThan20 = ages.filter((item, index) => {
//   return item > 20;
// });

const agesGreatThan20 = ages.filter((item, index) => item > 20);

console.log("Orginal: ", ages);
console.log("agesX2: ", agesX2);
console.log("agesGreatThan20: ", agesGreatThan20);
console.log("Original: ", ages);
