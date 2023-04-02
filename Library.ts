import { Book } from "./Book";
let libro1 = new Book("Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now Editions");
let libro2 = new Book("Las 48 leyes del Poder", 357,"E4556ASDGF","Robert Greene", "Pinguino")

class Library{
    private books: Book[];
    private adress: string;
    private manager: string;

    constructor(books: Book[], adress: string, manager: string){
        this.books = [];
        this.adress = adress;
        this.manager = manager;  
    }
getAdress():string {
    return this.adress
}
setAdress(direccion:string):void{
    this.adress = direccion
}
getManager():string{
    return this.manager
}
setManager(manejador:string):void{
    this.manager = manejador
}
toString(): void{
    console.log(this.books)
}
getNumberofBooks():number {
    return this.books.length;
}
}

let arrayBooks = [libro1, libro2]

let MiLibreria = new Library(arrayBooks, "Luis Morote 17", "Pepito Juan")
console.log(MiLibreria)



MiLibreria.toString()
