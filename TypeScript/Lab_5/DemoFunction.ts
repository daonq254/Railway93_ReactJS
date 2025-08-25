// Cách 1
// function sum(a: number, b: number) {
//   let result: number = a + b;
//   return result;
// }
// sum(10, 20);
// Cách 2: Khai báo 1 biến tham chiếu tới 1 hàm
// let v_sum = function (a: number, b: number) {
//   let result: number = a + b;
//   return result;
// };
// 20, 30
//v_sum(20, 30); / / 50;
// sum(10, 29);
// Cách 3: Arrow Function
// let v_sum = (a: number, b: number) => {
//   let result: number = a + b;
//   return result;
// };
// v_sum(20, 30);
let v_sum = (a: number, b: number) => a + b;
v_sum(20, 30);
