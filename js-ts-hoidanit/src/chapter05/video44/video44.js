console.log("Video 44");

const sv1 = {
  username: "hoirdanit",
  score: 9.6,
};

const sv2 = {
  username: "eric",
  score: 3,
};

const sv3 = {
  username: "bla bla",
  score: 5,
};

const sinhvien = [sv1, sv2, sv3];
console.log(">>> check sinhvien: ", sinhvien);

console.log("Name of students");
// sinhvien.forEach((item, index) =>
//   console.log("index: ", index, " -name: ", item.username)
// );

const person = {
  email: "hoirdanit@gmail.com",
  age: 25,
  address: "vietnam",
};

// for (let key in person) {
//   console.log(key, " : ", person[key]);
// }

// for (let value of Object.values(person)) {
//   console.log("value: ", value);
// }

for (let [key, value] of Object.entries(person)) {
  console.log(key, " : ", value);
}
