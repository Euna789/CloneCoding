const title=document.querySelector("#title");

const CLICKED_CLASS="clicked";
//clicked class를 만듦으로서 클릭시 색을 변경함

function handleClick(){
    /*
    const hasClass=title.classList.contains(CLICKED_CLASS);
    if (!hasClass){ //currentClass!==CLICKED_CLASS대신 처리하는 방법
        //title.className=CLICKED_CLASS; //class를 바꿔버리기 때문에 이전 class정보를 잃어버린다.
        title.classList.add(CLICKED_CLASS);
    }
    else {
        //title.className=""; //clicked면 아닌걸로 바꿈
        title.classList.remove(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS);
   //toggle은 ()안 class가 있는지를 check, 있으면 remove 없으면add
}

function init(){
    title.addEventListener("click",handleClick);
}
init();