let api_key = "7d04696b43ceb2201efb4ee7276616ee";
//  let inputbtn = document.querySelector("#city-name");
 let SearchBtn= document.querySelector("#search-btn");
 let WeatherData = document.querySelector("#weather-data");

 SearchBtn.addEventListener("click", async ()=>{
    let cityName =document.querySelector("#city-name").value.trim();

    if(cityName === ""){
        WeatherData.innerHTML = `<h1 style = "color: rgb(182, 32, 42); text-align: center;"> Enter a city name </h1>`;
        return;
    }
    try {
        const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`,
    );
    // console.log(res);
    if (!res.ok) {
      WeatherData.innerHTML = `<h3 style="color:red; text-align:center">city Not found</h3>`;
      return;
    }
    let data = await res.json();
    console.log(data);

    WeatherData.innerHTML=`<h2 style ="color: #FFD700">${data.name},${data.sys.country}</h2>
    <h3> 🔆Temperature :<span style= "color : white"> ${data.main.temp} °C</span></h3>
    <h3> <b> 🌪️ Wind Speed </b>: <span style= "color : white">${data.wind.speed} Km/h</span></h3>
    <h3> 🔥Feels like  :<span style= "color : white"> ${data.main.feels_like} °C</span></h3>
   `

    
        
    } catch (error) {
        console.log(error, 'error in fetching data from API ');
        
        
    }

 })

//  let apiKey = "234287c670b3aba119b63172daae1458";
// let inputbtn = document.querySelector("#city-name");
// let searchBtn = document.querySelector("#search-btn");
// let weatherData = document.querySelector("#weather-data");
// console.log(inputbtn);
// console.log(searchBtn);
// console.log(weatherData);

// searchBtn.addEventListener("click", async () => {
//   let cityName = document.querySelector("#city-name").value.trim();

//   if (cityName === "") {
//     weatherData.innerHTML = `<h3 style="color:red; text-align:center">Enter a city name</h3>`;
//     return; // aage fetch na ho
//   }

//   // try-catch block ab click ke andar hi hoga
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
//     );
//     // console.log(res);
//     if (!res.ok) {
//       weatherData.innerHTML = `<h3 style="color:red; text-align:center">city Not found</h3>`;
//       return;
//     }
//     let data = await res.json();
//     console.log(data);

//     weatherData.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
//     <h3>Temperature : ${data.main.temp} °C</h3>
//     <p> <b> Wind Speed </b>:${data.wind.speed}</p>`
//   } catch (error) {
//     console.log(error, "Error in fetching API");
//   }
// });

// search on google open weather api
// search on google open weather api one call

//  try {
//     console.log("A");
//     console.log("B");
//     console.log("C");

//  } catch (error) {

//     console.log(error , "Something went wrong");
    
    
//  }