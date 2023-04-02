export class Book {
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;
    
    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    getTitle():string {
        return this.title;
    }
    setTitle(newTitle: string):void{
        this.title = newTitle;
    }
    getnPages():number {
        return this.nPages
    }
    setnPages(paginas:number):void{
        this.nPages = paginas
    }
    getisbn():string {
        return this.isbn
    }
    setIsbn(nuevoisbn:string):void{
        this.isbn = nuevoisbn
    }
    getAuthor():string {
        return this.author
    }
    setAuthor(autor:string):void{
        this.author = autor
    }
    getEditorial():string {
        return this.editorial
    }
    setEditorial(edit:string){
        this.editorial = edit
    }
toString(): void{
    console.log("Title - " + this.title);
    console.log("Number of pages - " + this.nPages);
    console.log("ISBN - " + this.isbn);
    console.log("Autor - " + this.author);
    console.log("Editorial - " + this.editorial);
}
}


// console.log(Libro1)
// Libro1.toString()
