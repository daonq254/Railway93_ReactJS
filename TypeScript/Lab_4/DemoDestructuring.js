// Destructuring: Phá vỡ cấu trúc
// Object
// Array
var person = {
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
var v_id = person.id, v_name = person.name, v_age = person.age;
console.log("v_id: ".concat(v_id));
