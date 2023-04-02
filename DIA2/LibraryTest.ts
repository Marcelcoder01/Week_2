import { Library } from "./Library";
import { Book } from "./Book";

let libro1 = new Book("Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now Editions");
let libro2 = new Book("Las 48 leyes del Poder", 357,"E4556ASDGF","Robert Greene", "Pinguino")

let arrayBooks = [libro1, libro2]

let MiLibreria = new Library(arrayBooks, "Luis Morote 17", "Pepito Juan")
// console.log(MiLibreria)
// console.log(MiLibreria.getNumberofBooks())
// console.log(MiLibreria.findByAuthor("Robert Greene"))
// console.log(MiLibreria.toString())
// console.log(MiLibreria.getAdress())
MiLibreria.setManager("Marcel Soto")
console.log(MiLibreria.getManager())