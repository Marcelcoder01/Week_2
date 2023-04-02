import { Person } from "./Person";

export class Contacts{
    people: Person [];
    
    constructor(){
        this.people = []
    }


  printCalendar(): void {
    console.log(this.people)
}
}

