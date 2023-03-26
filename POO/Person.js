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
module.exports = Person 