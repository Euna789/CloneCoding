const body=document.querySelector("body");

const IMG_NUMBER=3;

function paintImage(imgNum){
    const image=new Image();
    image.src=`images/${imgNum+1}.jpg`;
    //image.addEventListener("loadend",handleImgLoad); API로 가져올때는 필요
    image.classList.add("bgImage");    
    body.appendChild(image);
}

function genRandom(){
    const number=Math.floor(Math.random()*IMG_NUMBER);//0,1,2중 랜덤 숫자를 얻음
    return number;
}

function init(){
    const randomNumber=genRandom();
    paintImage(randomNumber);
}

init();