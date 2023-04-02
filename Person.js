"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAdress = function (adress) {
        this.adress = adress;
    };
    Person.prototype.getAdress = function () {
        return this.adress;
    };
    return Person;
}());
exports.Person = Person;
