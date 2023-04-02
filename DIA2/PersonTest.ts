import { Person } from "./Person";
let persona1 = new Person("Marcel", 30, "Luis Morote 17")
// console.log(persona1)

console.log(persona1.yearOfBirth(2023))
persona1.setAdress("Hoya del Enamorado 16")
console.log(persona1.getAdress())
console.log(persona1.printName())