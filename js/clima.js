//Variable de lognitud
let longi;

//Variable de latitud
let latit;

//Variable de temperatura, que se llenara luego con la api
let temperatura = document.querySelector(".temp")

//Variable summary
let summary = document.querySelector(".summary")

//Variable location
let locat = document.querySelector(".location")

const kelvin = 273.15

let iconoAnimado =document.getElementById('iconos')


window.addEventListener("load",()=>{


if(navigator.geolocation){
//si navegador que se esta utilizando tiene una locacion

navigator.geolocation.getCurrentPosition((position) =>{
//metodo para obtener la posicion actual
// esto es para definir las variables de logitud y latitud


        console.log(position);
        longi = position.coords.longitude;
        latit = position.coords.latitude;


//declarar constante que sera la id de la api

const key ="b537d829d22a2c3241a5d68fbba65be6";

const url_api = `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&` + `lon=${longi}&appid=${key}`;



//para hacer peticiones
fetch(url_api).then((response)=>{

    return response.json();
})
.then((data)=>{

console.log("esta es la data:");
console.log(data);

//esto para reemplazar las variables que vienen del html
temperatura.textContent = Math.floor(data.main.temp - kelvin) +"°C";

summary.textContent = data.weather[0].description;
locat.textContent =data.name + "," +data.sys.country;

});
});
}});