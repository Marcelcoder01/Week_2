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
let persona1 = new Person("Marcel", "Soto", 69, 172, 1992)
// persona1.edad()
persona1.printHobbies()


