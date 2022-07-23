//Ejercicio de "<" ">"
/*let edad = parseInt(prompt("Que edad tenes ?"));

if(edad < 18){
    console.log("Eres menor de edad!");
}else{
    console.log("Eres mayor de edad!");
}*/

//ejercicio 1 de control de flujos
/*
let num = parseInt(prompt("Ingrese un numero "));

if(num >= 1000){
    console.log("El numero ingresado es mayor a 1000");
}else{
    console.log("El numero ingresado es menor a 1000");
    
}*/

//ejercicio 2 de control de flujos
/*
let saludo = prompt("ingrese la palabra hola ");

if(((saludo == "hola") || (saludo == "Hola") || (saludo == "HOLA"))){
    console.log("Hola,como estas?");
}else{
    console.log("Usted no ingreso la palabra hola");
}
*/

//ejercicio 3 de control de flujos
/*
let num = parseInt(prompt("Ingrese el numero"));

if((num>=10)&&(num<=50)){
    alert("El numero esta entre 10 y 50");
}else{
    alert("El numero está fuera de rango");
}*/

//ejercicio random signos
/*
let signo = prompt("Ingresa tu signo");

if(((signo == "Aries") || (signo == "ARIES") || (signo == "aries"))){
    alert("Naciste entre el 21 de marzo y el 19 de abril");
}else if(((signo == "Tauro") || (signo == "TAURO") || (signo == "tauro"))){
    alert("Naciste entre el 20 de abril y el 20 de mayo");
}else if(((signo == "Geminis") || (signo == "GEMINIS") || (signo == "geminis"))){
    alert("Naciste entre el 21 de mayo y el 20 de junio");
}else if(((signo == "Cancer") || (signo == "CANCER") || (signo == "cancer"))){
    alert("Naciste entre el 21 de junio y el 22 de julio");
}else if(((signo == "Leo") || (signo == "LEO") || (signo == "leo"))){
    alert("Naciste entre el 23 de julio y el 22 de agosto");
}else if(((signo == "Virgo") || (signo == "VIRGO") || (signo == "virgo"))){
    alert("Naciste entre el 23 de agosto y el 22 de septiembre");
}else if(((signo == "Libra") || (signo == "LIBRA") || (signo == "libra"))){
    alert("Naciste entre el 23 de septiembre y el 22 de octubre");
}else if(((signo == "Escorpio") || (signo == "ESCORPIO") || (signo == "escorpio"))){
    alert("Naciste entre el 23 de octubre y el 23 de noviembre");
}else if(((signo == "Sagitario") || (signo == "SAGITARIO") || (signo == "sagitario"))){
    alert("Naciste entre el 22 de noviembre y el 21 de diciembre");
}else if(((signo == "Capricornio") || (signo == "CAPRICORNIO") || (signo == "capricornio"))){
    alert("Naciste entre el 22 de diciembre y el 19 de enero");
}else if(((signo == "Acuario") || (signo == "ACUARIO") || (signo == "acuario"))){
    alert("Naciste entre el 20 de enero y el 18 de febrero");
}else if(((signo == "Piscis") || (signo == "PISCIS") || (signo == "piscis"))){
    alert("Naciste entre el 19 de febrero y el 20 de marzo");
}else{
    alert("No ingresaste un signo");
}
*/

//Ciclo for para numeros primos

//debugger
let primo = parseInt(prompt("Ingrese un numero para saber si es primo"));

let esPrimo = true;

for(let i = 2; i < primo; i++){
    if(primo % i === 0){
        esPrimo = false;
    }
}

if(esPrimo){
    alert("El numero "+primo+" es primo");
}else{
    alert("El numero "+primo+" no es primo");
}