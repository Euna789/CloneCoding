const form=document.querySelector(".js-form"),
input=document.querySelector("input"),
greeting=document.querySelector(".js-greetings");

//local storage-정보를 user computer에 저장
//새로고침해도 남아있음
const USER_LS="Euna", //사용할 user key
SHOWING_CN="showing"; //display:block, 보여주고 싶을때

function askForName(){//user 없을 경우 부를 함수
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text){//user있을 경우 부를 함수
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS)
    if (currentUser===null){
        //she is not
        askForName();
    }else{ //local storage에 "Euna"가 있을 때
        //she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();