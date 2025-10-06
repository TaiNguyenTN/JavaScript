console.log("Hello World");

// const diemToan = 9;
// const diemLy = 8;
// const diemHoa = 7;

// function tinhDiemTrungBinh(diemHoa, diemLy, diemToan) {
//   return (diemToan + diemLy + diemHoa) / 3;
// }

// function xepLoai(diemTrungBinh) {
//   switch (true) {
//     case diemTrungBinh >= 8:
//       return "Giỏi";
//     case diemTrungBinh >= 6.5:
//       return "Khá";
//     case diemTrungBinh >= 5:
//       return "Trung bình";
//     default:
//       return "Yếu";
//   }
// }

// console.log("Điểm trung bình: " + tinhDiemTrungBinh(diemHoa, diemLy, diemToan));
// console.log(
//   "Xếp loại: " + xepLoai(tinhDiemTrungBinh(diemHoa, diemLy, diemToan))
// );

const diemTB = (toan, van, anh) => (toan + van + anh) / 3;
const xepLoai = (diemTB) => {
  if (diemTB >= 9) return "Xuất sắc";
  else if (diemTB >= 8 && diemTB < 9) return "Giỏi";
  else if (diemTB >= 6.5 && diemTB < 8) return "Khá";
  else if (diemTB >= 5 && diemTB < 6.5) return "Trung bình";
  else return "Yếu";
};

const toan = 7;
const van = 6;
const anh = 5;

console.log(`
Diem trung binh: ${diemTB(toan, van, anh)}
Xep loai: ${xepLoai(diemTB(toan, van, anh))}
`);
