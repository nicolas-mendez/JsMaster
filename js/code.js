/*class Nacimiento {
    constructor(nombre, dia, mes, anio) {
        this.nombre = nombre;
        this.dia = parseInt(dia);
        this.mes = mes;
        this.anio = parseInt(anio);
    }
    mostrarNacimiento() {
        console.log("Usted nacio el dia " + this.dia + " del mes " + this.mes + " del año " + this.anio);
    }
}

function crearNacimiento() {
    let nombreNacimiento = prompt("Cual es tu nombre?");
    let diaNacimiento = parseInt(prompt("En que dia naciste?"));
    let mesNacimiento = prompt("Cual es el mes en el que naciste?");
    let anioNacimiento = parseInt(prompt("Y en que año naciste?"));
    let cumpleanios = new Nacimiento(nombreNacimiento, diaNacimiento, mesNacimiento, anioNacimiento);
    return cumpleanios;
}
const fechaNacimiento = [];

function sumarNacimiento(cumpleanios, arr) {
    arr.push(cumpleanios);
}
let cantNacimiento = parseInt(prompt("Cuantos nacimientos quieres añadir?"));
while (fechaNacimiento.length < cantNacimiento) {
    sumarNacimiento(crearNacimiento(), fechaNacimiento);
}

console.table(fechaNacimiento);
let pregEliminar = prompt("Quiere eliminar alguna fecha de nacimiento?").toLowerCase();

if (pregEliminar == "si") {
    let nombre = prompt("Ingresa el nombre de la persona que quieras borrar su nacimiento");
    for (const fecha of fechaNacimiento) {
        if (fecha.nombre == nombre) {
            let fechaEliminar = fechaNacimiento.indexOf(fecha);
            delete fechaNacimiento[fechaEliminar];
        }
    }
}else{
    alert("Gracias vuelva pronto!");
}


console.table(fechaNacimiento);*/

const mesNombres = ["Enero","Febero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

let fechaActual = new Date();
let diaActual = fechaActual.getDate();
let mesActual = fechaActual.getMonth();
let anioActual = fechaActual.getFullYear();

let fechas = document.getElementById('fechas');
let mes = document.getElementById('mes');
let anio = document.getElementById('anio');

let prevMesDOM = document.getElementById('prev-mes');
let nextMesDOM = document.getElementById('next-mes');

mes.textContent = mesNombres[mesActual];
anio.textContent = anioActual.toString();

function escribirMes(mes){

}

function diasTotal(mes){

}

function esBisiesto(){
    if((anioActual % 100 !==0) && (anioActual % 4 ===0) || (anioActual % 400 === 0)){
        return true;
    }

    return false;
}

function inicioSemana(){
    let inicio = new Date(anioActual, mesActual, 1);
    return ((inicio.getDay()-1) === -1) ? 6 : inicio.getDay()-1;
}

function prevMes(){

}

function nextMes(){
    
}

function nuevaFecha(){

}