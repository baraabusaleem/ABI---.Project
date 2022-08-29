

  var ApIkey="7b9728041639dc3242f7e7fa6281f269";
//   window.addEventListener('load',() => {});

//   var city;
//   if(navigator.geolocation){



//   }

var ApIkey="7b9728041639dc3242f7e7fa6281f269";

// fetch
//  `https://api.openweathermap.org/data/2.5/weather?q=Amman&appid=7b9728041639dc3242f7e7fa6281f269&units=metric`


//  .then(reaponse=> reaponse.json())
//  .then((data =>{  
//  console.log(data);


//  }
// ))




//     document.querySelectorweather-side;
//     const { temp } = weather-temp;
//     const place = data.name;
//     const { description, icon } = data.weather[0];
//     const { sunrise, sunset } = data.sys;


//     main: {temp: 34.05, feels_like; 32.11, temp_min; 34.05, temp_max; 35.75, pressure; 1008, humidity; 21}

// humidity: 21

// temp: 34.05
// temp_max: 35.75
// temp_min: 34.05
// name: "Amman"


// weather: [{id: 800, main: "Clear", description: "clear sky", icon: "01d"}]
// wind: {speed: 4.12, deg; 250}
//   });
  



// const d = new Date();

// const humidity=document.querySelector('.humidity .value');
// const wind=document.querySelector('.wind .value');
// const geoLocation=document.querySelector('.geo-location');
// const weatherDesc=document.querySelector('.weather-desc');
// const weatherTemp=document.querySelector('.weather-temp');
// const country =document.querySelector('#country')

// API key //
var ApIkey="7b9728041639dc3242f7e7fa6281f269";

document.getElementById("country").addEventListener('change',function(){
               //  fetch Api//
               var city=document.querySelector("#country").value;
fetch(
  https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b9728041639dc3242f7e7fa6281f269&units=metric
)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);


   const d = new Date();

document.querySelector('.wind .value').textContent=(data.wind.speed)
document.querySelector('.humidity .value').textContent=(data.main.humidity+"%");
document.querySelector('.pressure .value').textContent=(data.main.pressure+"%") ;
document.querySelector('.weather-temp').textContent=(data.main.temp.toFixed(0)+"°C");
document.querySelector('.location').textContent=city
document.querySelector('.date-container .date-dayname').textContent=d.toLocaleString("en-us", { weekday: "long" });
document.querySelector('.date-container .date-day').textContent=d.toLocaleDateString();
document.querySelector('.weather-desc').textContent=data.weather[0].main 

})})