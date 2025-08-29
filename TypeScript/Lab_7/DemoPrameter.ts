function hello(name = "User") {
  console.log(`Hello ${name}`);
}

hello("DAONQ"); // Hello DAONQ
hello(); // Hello User

function f(...name) {
  console.log(`Hello ${name}`);
}
// function f1(name1, name2) {
//   console.log(`Hello ${name}`);
// }

f("DAONQ");

f("DAONQ", "VuDT");

f("DAONQ", "ChungBui", "CuongVan");
f("DAONQ", "ChungBui", "CuongVan", "ChungBui");
