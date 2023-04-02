import { Person } from "./Person";

let persona2 = new Person("Ailin", 29, "Fernando Guanarteme 24")
let persona1 = new Person("Marcel", 30, "Luis Morote 17")

export class Contacts{
    people: Person [];
    
    constructor(){
        this.people = []
    }

printCalendar(): void {
    console.log(this.people)
}
}

