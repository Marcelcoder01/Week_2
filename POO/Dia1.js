class Person{
    constructor(nombre, apellido, peso, altura, añonacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
        this.altura = altura;
        this.yearOfBirth = añonacimiento;
        this.hobbies = ["Correr", "Dormir", "Fiesta"]
    }
    printAll(){
        console.log("nombre - " + this.nombre);
        console.log("apellido - " + this.apellido);
        console.log("peso - " + this.peso);
        console.log("altura - " + this.altura);
        
    }
    edad(){
        console.log(2023 - this.yearOfBirth)
    }
    printHobbies(){
        console.log("Los hobbies son " + this.hobbies)
    }
}

// function IMC (peso, altura){
//     console.log(
//         persona1.nombre + ", tu IMC es de " + persona1.peso/(persona1.altura * persona1.altura) * 10000)
// }
// IMC ()

// persona1.edad()
// persona1.printHobbies()

let persona1 = new Person("Marcel", "Soto", 69, 172, 1992)
let persona2 = new Person ("Ailin", "Lebek", 60, 165, 1994)

class Contacts{
    constructor(){
        this.arrpersonas = [];
        
    }
    printPersons(){
        console.log(this.arrpersonas)
    }
}

let Contacts1 = new Contacts()
Contacts1.arrpersonas.push(persona1, persona2)

console.log(Contacts1)

// Contacts1.printPersons()
