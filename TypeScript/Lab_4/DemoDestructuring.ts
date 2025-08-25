// Destructuring: Phá vỡ cấu trúc
// Object
// Array

let person = {
  id: 1,
  name: "person 1",
  age: 20,
};

// Bạn hãy lấy các thuộc tính của person: id, name, age ra và lưu trữ thành các biến riêng lẻ
// let v_id = person.id;
// let v_name = person.name;
// let v_age = person.age;

//
// let { id, name, age } = person; // Destructuring  let id = person.id
// let { name: v_name } = person;
// let { age: v_age } = person;

let { id: v_id, age: v_age } = person;
console.log(`v_id: ${v_id}`);

let name_Array: String[] = ["Name1", "Name2", "Name3"];

// let [student1, student2, student3] = name_Array;
//student1 = Name1  ==> let student1 = name_Array[0]
// student2 = Name2
let [student1, , student3] = name_Array;

// ... Spread  == Dàn ra
// let person = {
//     id: 1,
//     name: "person 1",
//     age: 20,
//   };

// Cần tạo thêm 1 đối tượng student, id: 1, name:"person 1",age: 20, score: 9, class: Railway93
// let student = {
//   id: 1,
//   name: "person 1",
//   age: 20,
//   score: 9,
//   class: "Railway93",
// };

let student = {
  ...person,
  score: 9,
  class: "Railway93",
};

console.log(student);
