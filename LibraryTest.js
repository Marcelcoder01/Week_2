"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library_1 = require("./Library");
var Book_1 = require("./Book");
var libro1 = new Book_1.Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var libro2 = new Book_1.Book("Las 48 leyes del Poder", 357, "E4556ASDGF", "Robert Greene", "Pinguino");
var arrayBooks = [libro1, libro2];
var MiLibreria = new Library_1.Library(arrayBooks, "Luis Morote 17", "Pepito Juan");
// console.log(MiLibreria)
// console.log(MiLibreria.getNumberofBooks())
// console.log(MiLibreria.findByAuthor("Robert Greene"))
// console.log(MiLibreria.toString())
// console.log(MiLibreria.getAdress())
MiLibreria.setManager("Marcel Soto");
console.log(MiLibreria.getManager());
