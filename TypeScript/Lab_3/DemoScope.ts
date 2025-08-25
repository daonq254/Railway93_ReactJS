// Thể hiện phạm vi truy cập của các Biến, hàm, đối tượng, ....
// 1 số loại Scope
// Global Scope
// Function Scope
// Block Scope
// Lexical Scope
let myName = "daonq";

// ...
// ...
console.log(`My Name is ${myName}`);

function f1(params) {
  //
  console.log(`My Name is ${myName}`);
  let v_f1 = "f1";
  console.log(`f1 is ${v_f1}`);
}
//
// console.log(`f1 is ${v_f1}`);
//
if (true) {
  //
  console.log(`My Name is ${myName}`);
  //   console.log(`f1 is ${v_f1}`);
  let v_if = "if Block";
  console.log(`v_if is ${v_if}`);
} else {
  //
}
// ...
// console.log(`v_if is ${v_if}`);
function f2(params) {
  //   console.log(`f1 is ${v_f1}`);
  //   console.log(`v_if is ${v_if}`);
  let v_f2 = "f2";
  console.log(`My Name is ${myName}`);
  console.log(`v_f2 is ${v_f2}`);
  // Khai báo hàm f2_1
  function f2_1(params) {
    console.log(`v_f2 is ${v_f2}`);
    function f2_1_1(params) {
      console.log(`v_f2 is ${v_f2}`);
    }
  }
}
