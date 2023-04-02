"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setnPages = function (paginas) {
        this.nPages = paginas;
    };
    Book.prototype.getisbn = function () {
        return this.isbn;
    };
    Book.prototype.setIsbn = function (nuevoisbn) {
        this.isbn = nuevoisbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (autor) {
        this.author = autor;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (edit) {
        this.editorial = edit;
    };
    Book.prototype.toString = function () {
        console.log("Title - " + this.title);
        console.log("Number of pages - " + this.nPages);
        console.log("ISBN - " + this.isbn);
        console.log("Autor - " + this.author);
        console.log("Editorial - " + this.editorial);
    };
    return Book;
}());
exports.Book = Book;
// console.log(Libro1)
// Libro1.toString()
