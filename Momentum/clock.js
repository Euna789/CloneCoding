const clockContainer=document.querySelector(".js-clock");
//querySelector는 element의 자식을 탐색
const clockTitle=clockContainer.querySelector("h1");
//js-clock의 자식을 탐색하고 싶음

function getTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours<10 ? `0${hours}`: hours}:${minutes<10 ? `0${minutes}`: minutes}:${seconds<10 ? `0${seconds}`: seconds}`

}

function init(){
    getTime();
    setInterval(getTime,1000);//1초마다 getTime실행
}

init();