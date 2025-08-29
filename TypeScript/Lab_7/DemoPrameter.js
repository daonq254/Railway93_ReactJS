function hello(name) {
    if (name === void 0) { name = "User"; }
    console.log("Hello ".concat(name));
}
hello("DAONQ"); // Hello DAONQ
hello(); // Hello User
function f() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    console.log("Hello ".concat(name));
}
// function f1(name1, name2) {
//   console.log(`Hello ${name}`);
// }
f("DAONQ");
f("DAONQ", "VuDT");
f("DAONQ", "ChungBui", "CuongVan");
f("DAONQ", "ChungBui", "CuongVan", "ChungBui");
