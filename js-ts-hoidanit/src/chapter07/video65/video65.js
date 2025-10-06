console.log("video 65");

const greeting = (name, callback) => {
  console.log("Xin chao " + name);
  callback();
};

const hello = () => {
  console.log("Learn callback...");
};

const hi = () => {
  console.log("Say hi...");
};

greeting("Nguyen Quoc Tai", hello);
greeting("Nguyen Van A", hi);
