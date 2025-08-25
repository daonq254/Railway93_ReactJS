"use strict";
// import { myName, Person, student } from "./Person";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person"); // import Person  ==> Alias
// Demo Thực hiện tạo các đối tượng từ class Person
// let person1: Person = new Person(1, "person1", "HN");
// let person2: Person = new Person(2, "person2", "HN");
// let person3: Person = new Person(3, "person3", "HN");
// console.log(`Thông tin Person 1: ${person1.getId()} ${person1.getName()} ${person1.getAddress()}`);
// console.log("My Name is: ", myName);
// console.log("Student 1 is: ", student);
var person = new Person_1.default(3, "person3", "HN");
console.log("Person_Alias: ".concat(person.getId(), " ").concat(person.getName()));
