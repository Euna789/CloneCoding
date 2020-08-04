const form=document.querySelector(".js-form"),
input=document.querySelector("input"),
greeting=document.querySelector(".js-greetings");

//local storage-정보를 user computer에 저장
//새로고침해도 남아있음
const USER_LS="CurrentUser", //사용할 user key
SHOWING_CN="showing"; //display:block, 보여주고 싶을때

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    //event가 일어나면 document까지 계속 올라감. event는 다른 곳으로 가고, 새로고침 
    event.preventDefault(); //event의 기본값을 막음(enter를 눌러도 자동으로 사라지지 않음)
    const currentValue=input.value;//입력값 받아오기
    paintGreeting(currentValue);
    saveName(currentValue);//local storage에 입력값 저장
}

function askForName(){//user 없을 경우 부를 함수
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
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