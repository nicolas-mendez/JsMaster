let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const apiKey = '02aada2a50bd4beb6abbdddb148cfd2b';

//seteando datos del clima

const fetchData = position => {
  const {
    latitude,
    longitude
  } = position.coords;
  fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
}

const setWeatherData = data => {
  console.log(data);
  const weatherData = {
    location: data.name,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    wind: Number(data.wind.speed.toFixed(1)),
    temperature: Number(data.main.temp.toFixed(1)),
    date: getToday(),
  }

  Object.keys(weatherData).forEach(key => {
    document.getElementById(key).textContent = weatherData[key];
  });

  cleanUp();
}

//clean para esperar la carga de datos

const cleanUp = () => {
  let weatherContainer = document.getElementById('weatherContainer');
  let loader = document.getElementById('loader');

  loader.style.display = 'none';
  weatherContainer.style.display = 'flex';

}

//fecha actual

const getToday = () => {
  let date = new Date();
  return `${date.getDate()}/${ ( '0' + (date.getMonth() +1)).slice(-2) }/${date.getFullYear()}`
}

//solicitando ubicacion

const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
}

//abrir modales

function openModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

// funcion del carga del calendario 

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText =
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  //contador de dias mensuales

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }
}

//cerrar modales

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

//guardar eventos

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(events),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((response) => response.json())
      .then((data) =>
        Toastify({
          text: "Guardaste un Evento!",
          duration: 3000,
          gravity: 'top',
          position: 'right',
          className: 'tostada',
          style: {
            background: 'linear-gradient(to right, #999999, #333333)'
          }
        }).showToast()
      )
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify(events),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((response) => response.json())
    .then((data) =>
      Toastify({
        text: "Borraste un Evento!",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        className: 'tostada',
        style: {
          background: 'linear-gradient(to right, #999999, #333333)'
        }
      }).showToast()
    )
}

//Botenes next y back

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}


initButtons();
load();
