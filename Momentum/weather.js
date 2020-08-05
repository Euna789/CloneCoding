const weather=document.querySelector(".js-weather")

const API_KEY="47ccbbeebeac2ab45211b3a3c8972968";
const COORDS="coords"; //local storage에 좌표 저장 key값

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
    `).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature=json.main.temp;
        const place=json.name;
        weather.innerText=`${temperature}ºC @ ${place}`;
    })
    //then:데이터가 완전히 들어온 다음 호출하는 역할
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    //getCurrentPosition함수로 값을 얻는데 성공하면 실행할 함수
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    //getCurrentPosition함수로 값을 얻는데 실패했을 경우
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if (loadedCoords ===null){
        askForCoords();
    } else{
        const parsedCoords=JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();