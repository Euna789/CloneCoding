document.title="#4 Document";
//document도 object임. html document는 javascript가 된다
let title=document.getElementById("title");
title.innerHTML="Hi! From JS"
//html의 "This works"를 JS로 바꿈
title.style.color="red";
//자바스크립트로 html을 조정 가능
//console.dir(title);

title=document.querySelector("#title");
//document의 자식들 중에서 #id를 찾는다
title.style.color="white";

//DOM: Document Object Module
