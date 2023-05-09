//get form and input

const formHeader = document.querySelector('.form');
const formInput = document.querySelector('.form__input'); 

const queryParam = {
	'url': 'https://api.openweathermap.org/data/2.5',
	'appid': '67cd883c28492ceba7000f8ccf0ab480'
}
//get city name

let valueCity;

formHeader.addEventListener('submit', function (event) {
	event.preventDefault();
	valueCity = formInput.value.trim();
	console.log(valueCity);
	formInput.value = '';

	// api request
	fetch(`${queryParam.url}/weather?q=${valueCity}&units=metric&appid=${queryParam.appid}`)
	.then(function (response) {
		return response.json()
	})
	.then(function (data) {
		console.log(data);
		document.querySelector('.temp__temperature').textContent = Math.round(data.main.temp);
		document.querySelector('.main__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
		document.querySelector('.place__city').textContent = data.name;
		document.querySelector('.place__country').textContent = data.sys.country;
		document.querySelector('.properties__temp').textContent = Math.round(data.main.feels_like);
		let windDirection = data.wind.deg;
		if (windDirection >= 22.5 && windDirection < 67.5) {
			windDirection = 'north-east';
		}
		if (windDirection >= 67.5 && windDirection < 112.5) {
			windDirection = 'east';
		}
		if (windDirection >= 112.5 && windDirection < 157.5) {
			windDirection = 'south-east';
		}
		if (windDirection >= 157.5 && windDirection < 202.5) {
			windDirection = 'south';
		}
		if (windDirection >= 202.5 && windDirection < 247.5) {
			windDirection = 'south-west';
		}
		if (windDirection >= 247.5 && windDirection < 292.5) {
			windDirection = 'west';
		}
		if (windDirection >= 292.5 && windDirection < 337.5) {
			windDirection = 'north-west';
		}
		if (windDirection >= 337.5 || windDirection < 22.5) {
			windDirection = 'north';
		}
		document.querySelector('.properties__wind-direction').textContent = windDirection;
		document.querySelector('.properties__wind-speed').textContent = Math.round(data.wind.speed);
		document.querySelector('.properties__humidity-value').textContent = data.main.humidity;
		document.querySelector('.properties__pressure-value').textContent = data.main.pressure;
		document.querySelector('.temp__condition').textContent = data.weather[0].description;
	})
	.catch(function () {

	});
});













