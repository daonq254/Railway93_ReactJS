"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // getter setter
    // Ctrl +Shif + P
    /**
     * Getter id
     * @return {number}
     */
    Person.prototype.getId = function () {
        return this.id;
    };
    /**
     * Getter name
     * @return {String}
     */
    Person.prototype.getName = function () {
        return this.name;
    };
    /**
     * Getter address
     * @return {String}
     */
    Person.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Setter id
     * @param {number} value
     */
    Person.prototype.setId = function (value) {
        this.id = value;
    };
    /**
     * Setter name
     * @param {String} value
     */
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    /**
     * Setter address
     * @param {String} value
     */
    Person.prototype.setAddress = function (value) {
        this.address = value;
    };
    return Person;
}());
exports.default = Person;
//
var myName = "daonq";
var student = {
    id: 1,
    name: "Student1",
};
// export { Person, myName, student };
// Demo Thực hiện tạo các đối tượng từ class Person
// let person1: Person = new Person(1, "person1", "HN");
// let person2: Person = new Person(2, "person2", "HN");
// let person3: Person = new Person(3, "person3", "HN");
// console.log(`Thông tin Person 1: ${person1.getId()} ${person1.getName()} ${person1.getAddress()}`);
