//filter, forEach 기능 기억하기

const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput=toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos';

function filterFn(toDo){
    return toDo.id===1
}

let toDos=[];
let newId=1;

function deleteToDo(event){
    //어떤 삭제버튼이 눌렸는지 부모의 id를 알아야함
    //console.dir(event.target)으로 찾아보자
    //console.log(event.target.parentNode.id);
    //삭제기능찾기- delete child element ndm
    const btn=event.target; //눌린 X버튼
    const li=btn.parentNode; //누른 삭제버튼이 포함된 list
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){ 
        //filter:함수가 return하는 값들을 array에서 골라냄
        return toDo.id!==parseInt(li.id); //li.id를 int로 변환
    })
    toDos=cleanToDos; //삭제한 toDos 외 남은것들이 담긴 배열로 toDos를 대체함
    saveToDos(); //local storage에 저장
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //javascript는 string으로 저장하길 원함
    //JSON.stringify는 object를 string으로 바꿔줌
}

function paintToDo(text){
    //todo list와 버튼을 추가함
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText=text;
    li.id=newId;
    
    li.appendChild(span); //list에 span과 delBtn을 추가
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    //create toDo object
    const toDoObj={
        text: text,
        id: newId 
    }
    newId=newId+1;
    toDos.push(toDoObj);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    saveToDos();
    toDoInput.value=""; //submit후에는 칸을 비워준다
}

function loadToDos(){ //local storage에 저장된 todos를 불러온다
    //저장된 모든 ToDos에 대해 paint를 해줘야함
    const loadToDos=localStorage.getItem(TODOS_LS);
    if (loadToDos!==null){
        const parsedToDos=JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();