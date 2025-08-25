// Higher Order Function: Hàm bậc cao
// Là loại hàm mà có thể nhận hàm khác làm tham số đầu vào hoặc trả về 1 hàm khác
// function (a:number, b: number, f){
//
// }

// function f (a:number, b: number){
//  return f1(){

//      }
// }
// Demo
// Phép cộng
function sum(a: number, b: number) {
  return a + b;
}
// Phép trừ
function minus(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}
console.log(`Tổng của 2 số là: ${sum(10, 20)}`); //30
console.log(`Hiệu của 2 số là: ${minus(50, 10)}`); // 40
console.log(`Phép nhân của 2 số là: ${multiply(10, 20)}`); //200

// Khai báo hàm HOF calculate
function calculate(a: number, b: number, f) {
  let result = f(a, b);
  console.log(`Kết quả phép tính ${f} là: ${result}`);
}

// sử dụng hàm HOF calculate
console.log("Sử dụng hàm HOF");

calculate(60, 70, sum);
calculate(60, 70, minus);
calculate(60, 70, multiply);

// 1 hàm sau khi xử lý xong thì có thể trả ra 1 hàm khác
// plus: Hàm HOF
function plus(x: number) {
  // abc
  // xyz
  return function plus_New(y: number) {
    return x + y;
  };
}

// Sử dụng
console.log("-----------------------");
let result_2 = plus(2); // x= 2  ==> plus_New(y) {return 2+y}

let result_2_3 = result_2(3); // plus_New(3) {return 2+3}   // 5
let result_2_4 = result_2(4);
let result_2_10 = result_2(10);

//
let result_5 = plus(5);
let result_5_10 = result_5(10);
let result_5_50 = result_5(50);

console.log("Kết quả phép tính: ", result_2);
