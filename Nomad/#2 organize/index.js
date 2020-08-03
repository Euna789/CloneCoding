const daysOfWeek=[] //array
const userInfo={
    name:"Euna",
    age:20,
    gender:"male",

    //배열 가능
    favFood:[ //배열 속 object 가능
        {name:"Kimchi", isFatty: false},
        {name:"Cheese burger", isFatty: true}]
}
console.log(userInfo.gender);
userInfo.gender="female"; //object안 변수 변경 가능
console.log(userInfo.gender);

console.log(userInfo.favFood[1].isFatty);