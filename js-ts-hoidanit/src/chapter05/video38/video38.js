console.log("Video 38");

const names = ["hoidanit", "tainguyen", "nguyenquoctai", "hoangvanphuc"];
console.log("0 = ", names[0]);
console.log("1 = ", names[1]);

console.log("Before ", names);
names.push("nguyenvana", "nguyenvanc", "ahihi"); //Add to the end
names.unshift("nguyenvanb"); //Add to the beginning

names.pop(); //Remove from the end
names.shift(); //Remove from the beginning

console.log("After ", names);
