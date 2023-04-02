"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacts_1 = require("./Contacts");
var Person_1 = require("./Person");
var persona2 = new Person_1.Person("Ailin", 29, "Fernando Guanarteme 24");
var persona1 = new Person_1.Person("Marcel", 30, "Luis Morote 17");
var Contactos1 = new Contacts_1.Contacts();
Contactos1.people = [persona1, persona2];
// console.log(Contactos1)
Contactos1.printCalendar();
