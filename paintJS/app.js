const canvas=document.getElementById("jsCanvas");
const ctx=canvas.getContext("2d");
//canvas라는 html요소를 이용, canvas의 context를 통해 원하는 색 등으로 바꾼다

//css와 별개로 pixel을 다룰 수 있는 element로 만드는 것이므로 
//크기를 지정해줘야함
canvas.width=500;
canvas.height=500;

ctx.strokeStyle="#2c2c2c"; //선 색 초기화
ctx.lineWidth=2.5; //선 굵기 초기화

let painting= false;

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

//마우스 클릭시 그림이 그려짐
function onMouseDown(event){ 
    painting=true;
}


if (canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    
}

