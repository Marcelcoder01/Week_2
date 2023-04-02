"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var libro2 = new Book_1.Book("Las 48 leyes del Poder", 357, "E4556ASDGF", "Robert Greene", "Pinguino");
// console.log(libro2)
libro2.setTitle("Arte de la seduccion");
console.log(libro2.getTitle());
