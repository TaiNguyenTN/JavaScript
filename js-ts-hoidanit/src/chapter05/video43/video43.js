console.log("Video 43");

const person = {
  name: "Nguyen Van A",
  age: 18,
  address: "Ha Noi",
};

//get value
console.log("Before:", person);

//set value
person.name = "Nguyen Van B";
person.contry = "Viet Nam";
console.log("After:", person);

//delete value
delete person.age;
console.log("After delete:", person);
