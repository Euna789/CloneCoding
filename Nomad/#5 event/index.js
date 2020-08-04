const title=document.querySelector("#title");

//css가하는걸 없애고 옮겨옴
//BUT js가 css를 처리하는 것은 좋은 방법이 아님
const BASE_COLOR="rgb(52, 73, 94)";
const OTHER_COLOR="#7f8c8d";

function handleClick(){
    const currentColor=title.style.color;
    if (currentColor===BASE_COLOR){
        console.log("base");
        title.style.color=OTHER_COLOR;
    } else{
        console.log("other");
        title.style.color=BASE_COLOR;
    }
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("mouseenter",handleClick);
}
//mouseenter, online offline등 이벤트 감지
init();

//offline event
function handleOffline(){
    console.log("It's offline.");
}
window.addEventListener("offline",handleOffline);

function handleResize(event){
    //console.log(event);
}

window.addEventListener("resize",handleResize);
//handleResize()로 적지 않도록 주의!
//모든 이벤트를 기다릴 수 없음. 우리가 다룰 이벤트를 적는다.

//prompt
const age=prompt("how old are you?");
if (age>18){
    //console.log('you can drink')
} else{
    //console.log("you can't");
}