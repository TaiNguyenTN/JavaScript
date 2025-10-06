console.log("Hello World");

//Phạm vi toàn cục (Global Scope)
let globalVar = "Tôi là biến toàn cục";

function show() {
  console.log(globalVar);
}

show();
console.log(globalVar);

//Phạm vi hàm (Function Scope)
function sayHi() {
  let name1 = "HoidanIT";
  console.log("Hi " + name1);
}

sayHi();
console.log(name1); //Lỗi vì biến name chỉ có phạm vi trong hàm sayHi
