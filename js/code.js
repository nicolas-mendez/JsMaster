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
/*
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

const abrirModulo = document.querySelector('.abrir');
const modulo = document.querySelector('.modulo');
const cerrarModulo = document.querySelector('.modulo__cerrar');

mes.textContent = mesNombres[mesActual];
anio.textContent = anioActual.toString();

abrirModulo.addEventListener('click', (e)=>{
    e.preventDefault();
    modulo.classList.add('modulo--show');
});

cerrarModulo.addEventListener('click', (e)=>{
    e.preventDefault();
    modulo.classList.remove('modulo--show');
});

prevMesDOM.addEventListener('click', ()=>prevMes());
nextMesDOM.addEventListener('click', ()=>nextMes());


escribirMes(mesActual);

function escribirMes(mes){

    for(let i = inicioSemana(); i>0; i--){
        fechas.innerHTML += `<button class="calendario__dia calendario__item calendario__dias-pasado">${diasTotal(mesActual-1)-(i-1)}</button>`;
    }

    for(let i = 1; i<=diasTotal(mes); i++){
        if(i === diaActual){
            fechas.innerHTML += `<button class="calendario__dia calendario__item calendario__hoy">${i}</button>`;
        }else{
            fechas.innerHTML += `<button class="calendario__dia calendario__item">${i}</button>`;
        }
        
    }
}

function diasTotal(mes){
    if(mes === -1){
        mes = 11;
    }
    if((mes == 0) || (mes == 2) || (mes == 4) || (mes == 6) || (mes == 7) || (mes == 9) || (mes == 11)){
        return 31;
    }else if((mes == 3) || (mes == 5) || (mes == 8) || (mes == 10)){
        return 30;
    }else{
        return esBisiesto() ? 29:28;
    }
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
    if(mesActual !==0){
        mesActual--;
    }else{
        mesActual = 11;
        anioActual--;
    }

    nuevaFecha();
}

function nextMes(){
    if(mesActual !==11){
        mesActual++;
    }else{
        mesActual = 0;
        anioActual++;
    }

    nuevaFecha();
}

function nuevaFecha(){
    fechaActual.setFullYear(anioActual,mesActual,diaActual);
    mes.textContent = mesNombres[mesActual];
    anio.textContent = anioActual,toString();
    fechas.textContent = '';
    escribirMes(mesActual);
}*/

let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

function cargar() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayMonth = new Date(year, month, 1);
    //cantidad de dias del mes
    const daysMonth = new Date(year, month + 1, 0).getDate();
    // fecha en string
    const dateString = firstDayMonth.toLocaleDateString('es-ar', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const completeDays = weekdays.indexOf(dateString.split(', ')[0]);
    //mostrar mes y año
    document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('es-ar', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    //completa la cantidad de dias
    for (let i = -1; i <= completeDays + daysMonth; i++) {
        const dayPlace = document.createElement('div');
        dayPlace.classList.add('day');

        if (i > completeDays) {
            dayPlace.innerText = i - completeDays;

            dayPlace.addEventListener('click', () => console.log('click'));

            if (i - completeDays === day && nav === 0) {
                dayPlace.id = 'currentDay';
              }

        } else {
            dayPlace.classList.add('fill');
        }

        calendar.appendChild(dayPlace);
    }
}

//botones de anterior y siguiente mes
function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        cargar();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        cargar();
    });
}

initButtons();
cargar();