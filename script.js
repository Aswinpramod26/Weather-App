      const apikey="911d355e014cb1677cdcbeabec033d48";
      const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

      const searchBox= document.querySelector(".search input");
      const searchBtn= document.querySelector(".search button");
      const weathericon= document.querySelector(".weather-icon");

      async function checkweather(city)
      {
        
        const response= await fetch(apiUrl + city +`&appid=${apikey}`);
        var data= await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
        
        if(data.weather[0].main== "Clouds")
        {
          weathericon.src= "clouds.png";
        }
        else if(data.weather[0].main== "Clear")
        {
          weathericon.src= "clear.png";
        }
        else if(data.weather[0].main== "Rain")
        {
          weathericon.src= "rain.png";
        }
        else if(data.weather[0].main== "Mist")
        {
          weathericon.src="mist.png";
        }
        else if(data.weather[0].main== "Snow")
        {
          weathericon.src=" snow.png";
        }
        else if(data.weather[0].main== "Drizzle")
        {
          weathericon.src= "drizzle.png";
        }

      }
      
        searchBtn.addEventListener("click", ()=>{ checkweather(searchBox.value);})

     
      