"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var persona1 = new Person_1.Person("Marcel", 30, "Luis Morote 17");
// console.log(persona1)
console.log(persona1.yearOfBirth(2023));
persona1.setAdress("Hoya del Enamorado 16");
console.log(persona1.getAdress());
console.log(persona1.printName());
