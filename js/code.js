class Nacimiento {
    constructor(nombre,dia,mes,anio){
        this.nombre = nombre;
        this.dia = parseInt(dia);
        this.mes = mes;
        this.anio = parseInt(anio);
    }
    mostrarNacimiento(){
        console.log("Usted nacio el dia "+this.dia+" del mes "+this.mes+" del año "+this.anio);
    }
}

function crearNacimiento(){
    let nombreNacimiento = prompt("Cual es tu nombre?");
    let diaNacimiento = parseInt(prompt("En que dia naciste?"));
    let mesNacimiento = prompt("Cual es el mes en el que naciste?");
    let anioNacimiento = parseInt(prompt("Y en que año naciste?"));
    let cumpleanios = new Nacimiento(nombreNacimiento,diaNacimiento,mesNacimiento,anioNacimiento);
    return cumpleanios;
}
const fechaNacimiento =[];

function sumarNacimiento(cumpleanios,arr){
    arr.push(cumpleanios);
}
let cantNacimiento = parseInt(prompt("Cuantos nacimientos quieres añadir?"));
while(fechaNacimiento.length <cantNacimiento){
    sumarNacimiento(crearNacimiento(),fechaNacimiento);
}

console.table(fechaNacimiento);