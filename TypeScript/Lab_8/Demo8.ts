let numberArray = [1, 2, 4, 5, 7, 9];
// Bạn hãy thực hiện tạo ra 1 mảng mới với các phần tử bằng các phần tử của mảng numberArray tăng lên 5 đơn vị
// numberArray_new = [6,7,9,...]
// let numberArray_new: number[] = [];
// numberArray.forEach((num) => {
//   let num_new = num + 5;
//   numberArray_new.push(num_new);
// });

// console.log(`numberArray_new: ${numberArray_new}`);

let numberArray_new = numberArray.map(function (num, index) {
  // logic
  return num + 5 + index; // Tạo ra từng phần tử trong mảng mới
});
console.log(`numberArray_new: ${numberArray_new}`);
