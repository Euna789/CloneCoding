function sayHello(name,age){
    console.log(`(1) Hello! ${name}, you are ${age} years old.`);
    //``를 이용하면 변수를 ${var}로 쉽게 사용할 수 있다.
    console.log("(2) Hello!",name+", you are", age,"years old.");
}
sayHello("Euna",20);

//return
function returnHello(name,age){
    return `(3) Hello! ${name}, you are ${age} years old.`;
}
const greetEuna=returnHello("Euna",17);
console.log(greetEuna);

const calculator={
    plus: function(a,b){
        return a+b;
    }
}
const plus=calculator.plus(5,5)
console.log(plus)