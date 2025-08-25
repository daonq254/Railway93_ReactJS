// var let
// Sử dụng khai báo các biến
// Scope
// Hoisting
// Khai báo lại: reDeclare
console.log("My Name is ".concat(myName)); // Chạy được ==> vẫn có kết quả
//
//
var myName = "DAONQ";
//
//
// console.log(`My Name is ${myName}`); // "DAONQ"
// var myAge = 20; // Khai báo biến myAge giá trị khởi tao 20
// //
// //
// //
// //
// //
// //myAge = 40; // Gán lại dữ liệu cho biến myAge = 40
// var myAge = 40; // Khai báo lại  ==> K tốt
// console.log(`My Age: ${myAge}`); // 40
// function f1(params) {
//   var v_f1 = "f1";
//   console.log(v_f1);
// }
// if (true) {
//   var v_if = "v_if";
//   console.log(v_if);
// }
// console.log(v_if); // Không tốt
