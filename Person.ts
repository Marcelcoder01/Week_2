export class Person{
    name: string;
    age: number;
    private adress: string;

    constructor(name: string, age: number, adress: string){
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
printName(): string{
    return this.name;
}
yearOfBirth(currentYear: number): number {
    return currentYear - this.age
}
setAdress(adress: string):void{
    this.adress = adress
}
getAdress(): string {
    return this.adress
}
}