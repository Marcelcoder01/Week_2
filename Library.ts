import { Book } from "./Book";

export class Library{
    private books: Book[];
    private adress: string;
    private manager: string;

    constructor(books: Book[], adress: string, manager: string){
        this.books = books;
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
    console.log(this.books.toString())
}
getNumberofBooks():number {
    return this.books.length;
}

findByAuthor(author: string):Book[] {
    let ArrayAutor: Book[] = []
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].getAuthor() == author) {
            ArrayAutor.push(this.books[i])
            
        }
    }
   return ArrayAutor
}
}








