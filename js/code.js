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
/*let primo = parseInt(prompt("Ingrese un numero para saber si es primo"));

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
*/

//ciclo while para horas trabajadas
/*
let nombre = prompt("Ingrese su nombre: ");
let diasHoras= [lunes=0, martes=0, miercoles=0, jueves=0, viernes=0, sabado=0, domingo=0];
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let i = 0;
let promedio;

while(i <= diasHoras.length - 1){
    diasHoras[i] = parseInt(prompt("ingrese las horas que trabajo el dia "+dias[i]+": "));
    i++
}

for(let i = 0; i <= dias.length -1; i++){
    console.log("El dia "+dias[i]+" trabajo "+diasHoras[i]+" horas");
}

let preguntaDia = prompt("Ingresa el dia del cual quieres saber las horas trabajadas(ESC para salir)");

switch(preguntaDia){
    case "Lunes":
    case "lunes":
    case "LUNES":
        alert("Las horas trabajadas el dia lunes fueron de "+diasHoras[0]+"hs");
        break;
    case "Martes":
    case "martes":
    case "MARTES":
        alert("Las horas trabajadas el dia martes fueron de "+diasHoras[1]+"hs");
        break;
    case "Miercoles":
    case "miercoles":
    case "MIERCOLES":
        alert("Las horas trabajadas el dia miercoles fueron de "+diasHoras[2]+"hs");
        break;
    case "Jueves":
    case "jueves":
    case "JUEVES":
        alert("Las horas trabajadas el dia jueves fueron de "+diasHoras[3]+"hs");
        break;
    case "Viernes":
    case "viernes":
    case "VIERNES":
        alert("Las horas trabajadas el dia viernes fueron de "+diasHoras[4]+"hs");
        break;
    case "Sabado":
    case "sabado":
    case "SABADO":
        alert("Las horas trabajadas el dia sabado fueron de "+diasHoras[5]+"hs");
        break;
    case "Domingo":
    case "domingo":
    case "DOMINGO":
        alert("Las horas trabajadas el dia domingo fueron de "+diasHoras[6]+"hs");
        break;
    default:
        alert("Adios! Hasta la proxima");
        break;

}*/

//Funcion de fecha de nacimiento

const nacimientoIf =() => {
    let ingresarNacimiento = prompt("Quieres ingresar tu fecha de nacimento?");

    if(ingresarNacimiento === "si"){
        let diaNacimiento = parseInt(prompt("Ingresa el dia en el que naciste: "));
        let mesNacimiento = prompt("Ingresa el mes en cual naciste: ");
        let anioNacimiento = parseInt(prompt("Ingresa el año en el que naciste(Ej: 1996): "));
        console.log("Tu fecha de nacimento es el "+diaNacimiento+" de "+mesNacimiento+" del año "+anioNacimiento);
    }else{
        console.log("Que tengas un buen dia!");
    }
}

nacimientoIf();


//Funcion de fecha de naciemiento con objeto

function nacimiento(){
    class Nacimiento{
        constructor(dia, mes, anio){
            this.dia = dia;
            this.mes = mes;
            this.anio = anio;
        }
        mostrarFecha(){
            console.log("Naciste el dia "+this.dia+" de "+this.mes+" del año "+this.anio);
        }
    }
    let diaNacimiento = parseInt(prompt("En que dia naciste?"));
    let mesNacimiento = prompt("En que mes naciste?");
    let anioNacimiento = parseInt(prompt("En que año naciste?"));

    const nuevoNacimiento = new Nacimiento (diaNacimiento, mesNacimiento, anioNacimiento);
    nuevoNacimiento.mostrarFecha();
}

nacimiento();

