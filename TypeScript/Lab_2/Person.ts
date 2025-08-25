export default class Person {
  private id: number;
  private name: String;
  private address: String;

  constructor(id: number, name: String, address: String) {
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
  public getId(): number {
    return this.id;
  }

  /**
   * Getter name
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Getter address
   * @return {String}
   */
  public getAddress(): String {
    return this.address;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public setId(value: number) {
    this.id = value;
  }

  /**
   * Setter name
   * @param {String} value
   */
  public setName(value: String) {
    this.name = value;
  }

  /**
   * Setter address
   * @param {String} value
   */
  public setAddress(value: String) {
    this.address = value;
  }
}

//
var myName = "daonq";
var student = {
  id: 1,
  name: "Student1",
};
export { myName, student };
// Demo Thực hiện tạo các đối tượng từ class Person
// let person1: Person = new Person(1, "person1", "HN");
// let person2: Person = new Person(2, "person2", "HN");
// let person3: Person = new Person(3, "person3", "HN");

// console.log(`Thông tin Person 1: ${person1.getId()} ${person1.getName()} ${person1.getAddress()}`);
