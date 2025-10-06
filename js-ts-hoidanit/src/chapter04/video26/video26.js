console.log("Video 26");

//if, if-else, if-else if - else

const score = 10;
if(score >= 9){
    console.log("Xuất sắc");
} else if (score <9 && score >= 7){
    console.log("Giỏi");
} else {
    console.log("Khá");
}

//switch-case
const score1 = 8;
switch(score1){
    case 10:
        console.log("Xuất sắc");
        break;
    case 9:
        console.log("Giỏi");
        break;
    case 8:
        console.log("Khá");
        break;
    default:
        console.log("Không đạt");
}