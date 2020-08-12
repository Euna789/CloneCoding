const canvas=document.getElementById("jsCanvas");
const ctx=canvas.getContext("2d");
//canvas라는 html요소를 이용, canvas의 context를 통해 원하는 색 등으로 바꾼다

const colors=document.getElementsByClassName("jsColor");
const range=document.getElementById("jsRange");
const mode=document.getElementById("jsMode");

const INITIAL_COLOR="#2c2c2c";
const CANVAS_SIZE=500;

//css와 별개로 pixel을 다룰 수 있는 element로 만드는 것이므로 
//크기를 지정해줘야함
canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;

ctx.strokeStyle=INITIAL_COLOR; //선 색 초기화
ctx.lineWidth=2.5; //선 굵기 초기화
ctx.fillStyle=INITIAL_COLOR;

let painting= false;
let filling=false;

function stopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}

//마우스 움직임 감지, 그림을 그리는 역할
function onMouseMove(event){
    //client - window전체에서 마우스의 위치
    //offset - canvas 내에서 마우스의 위치 *이걸 사용
    const x=event.offsetX;
    const y=event.offsetY;

    if (!painting){ //클릭 전
        ctx.beginPath(); //Path의 시작점을 계속 변화시킴
        ctx.moveTo(x,y);
    } else{ //클릭하고 움직일때, path가 더이상 만들어지지 않음
        ctx.lineTo(x,y); 
        ctx.stroke();
        //start point, end point가 정해지고 선이 그어지는 게 아니라
        //클릭하고 마우스를 움직이는 순간마다 발생함
    }
}

function handleColorClick(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
    //override, strokeStyle을 target에 해당하는 색으로 바꿈
}

function handleRangeChange(event){
    const size=event.target.value;
    ctx.lineWidth=size;
    //ctx.lineWidth를 override
}

function handleModeClick(){ //don't care about event
    if (filling===true){
        filling=false;
        mode.innerText="Fill";
    }
    else{
        filling=true;
        mode.innerText="Paint";
    }
    
}

function handleCanvasClick(){
    if (filling){
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}

if (canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
    
}

Array.from(colors).forEach(color=> //파라미터
    color.addEventListener("click",handleColorClick)
    );
//Array.from은 object로부터 array를 만든다

if(range){
    range.addEventListener("input",handleRangeChange);
    //range 리스너는 input에 반응
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}