"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var libro1 = new Book_1.Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var libro2 = new Book_1.Book("Las 48 leyes del Poder", 357, "E4556ASDGF", "Robert Greene", "Pinguino");
var Library = /** @class */ (function () {
    function Library(books, adress, manager) {
        this.books = [];
        this.adress = adress;
        this.manager = manager;
    }
    Library.prototype.getAdress = function () {
        return this.adress;
    };
    Library.prototype.setAdress = function (direccion) {
        this.adress = direccion;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manejador) {
        this.manager = manejador;
    };
    Library.prototype.toString = function () {
        console.log(this.books);
    };
    Library.prototype.getNumberofBooks = function () {
        return this.books.length;
    };
    return Library;
}());
var arrayBooks = [libro1, libro2];
var MiLibreria = new Library(arrayBooks, "Luis Morote 17", "Pepito Juan");
console.log(MiLibreria);
MiLibreria.toString();
