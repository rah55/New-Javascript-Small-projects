let btn = document.querySelector("button");



const apiKey="a841d62727c19b5dde5cc94a68b170ff";

let apiLink= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiLink + city +`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    console.log(data.weather[0].main);
    
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.floor(data.main.temp) +"°celcius";
    document.querySelector(".humid").innerHTML=data.main.humidity +"%";
    document.querySelector(".winds").innerHTML=data.wind.speed +"km/hr";

    if(data.weather[0].main=="Clouds"){
        document.querySelector(".middle img").setAttribute("src","cloud.png");
        
    }
    else if(data.weather[0].main=="Haze"){
        document.querySelector(".middle img").setAttribute("src","haze.png");
        
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector(".middle img").setAttribute("src","mist.png");
       
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector(".middle img").setAttribute("src","rain.png");
        
    }
    else if(data.weather[0].main=="Clear"){document.querySelector(".middle img").setAttribute("src","sunny.png");
    }
    
       
    
   
    

}

btn.addEventListener("click",function(){
    
    let val =document.querySelector("input");
    let city =val.value;
    checkWeather(city);
    document.getElementById("search").value = "";
    

})




