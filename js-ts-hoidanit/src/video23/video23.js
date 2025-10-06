console.log('Video 22');

const name = "Nguyen Quoc Tai";
const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - 2004;

console.log(`Ten: ${name}
Tuoi: ${age}
Sinh vien: ${age > 18}`);

console.log("Version 02: Object");
const student = {
    name: "Nguyen Quoc Tai",
    age: currentYear - 2004,
    isStudent: age > 18
}

console.log(student);