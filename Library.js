"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, adress, manager) {
        this.books = books;
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
        console.log(this.books.toString());
    };
    Library.prototype.getNumberofBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var ArrayAutor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                ArrayAutor.push(this.books[i]);
            }
        }
        return ArrayAutor;
    };
    return Library;
}());
exports.Library = Library;
