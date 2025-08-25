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
function sum(a, b) {
    return a + b;
}
// Phép trừ
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
console.log("T\u1ED5ng c\u1EE7a 2 s\u1ED1 l\u00E0: ".concat(sum(10, 20))); //30
console.log("Hi\u1EC7u c\u1EE7a 2 s\u1ED1 l\u00E0: ".concat(minus(50, 10))); // 40
console.log("Ph\u00E9p nh\u00E2n c\u1EE7a 2 s\u1ED1 l\u00E0: ".concat(multiply(10, 20))); //200
// Khai báo hàm HOF calculate
function calculate(a, b, f) {
    var result = f(a, b);
    console.log("K\u1EBFt qu\u1EA3 ph\u00E9p t\u00EDnh ".concat(f, " l\u00E0: ").concat(result));
}
// sử dụng hàm HOF calculate
console.log("Sử dụng hàm HOF");
calculate(60, 70, sum);
calculate(60, 70, minus);
calculate(60, 70, multiply);
// 1 hàm sau khi xử lý xong thì có thể trả ra 1 hàm khác
// plus: Hàm HOF
function plus(x) {
    // abc
    // xyz
    return function plus_New(y) {
        return x + y;
    };
}
// Sử dụng
console.log("-----------------------");
var result = plus(2);
var result_2 = result(3); //5
console.log("Kết quả phép tính: ", result_2);
