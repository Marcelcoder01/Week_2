import { Contacts } from "./Contacts";
import { Person } from "./Person";

let persona2 = new Person("Ailin", 29, "Fernando Guanarteme 24")
let persona1 = new Person("Marcel", 30, "Luis Morote 17")


let Contactos1 = new Contacts()

Contactos1.people = [persona1, persona2]

// console.log(Contactos1)
Contactos1.printCalendar()