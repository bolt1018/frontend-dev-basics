/*
*배열
*/

// 1. 내장객체(생성자 함수)
console.log("==생성1: 내장객체(생성자 함수)==============");

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 배열을 정의할 때 크기 지정은 별의미가 없다.
// 동적으로 배열은 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
a2[20] = 20;
console.log(a2[0], a2[1], a2.length); // 배열요소에 값을 지정안하면 undefined

// 초기값을 지정할 수 있다.
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3.length);

// 2. 리터럴
console.log("==생성2: 리터럴================");
var a4 = [function(){
    console.log("Hello");
}, 20, "JavaScript", true, {
    name: "마이콜",
    email: "michol@gmail.com"
}];

console.log(a4.length);
for(var i = 0; i < a4.length; i++){
    console.log(a4[i]);
}

a4[0]();

//Array VS Object
console.log("==Array VS Object=======================");
a5 = [];
a5[0] = 0;
a5["1"] = 1;
a5["name"] = "둘리";
console.log(a5["0"], a5[1], a5.length);  // 숫자 "숫자" 로 인덱스를 넣으면 length가 증가한다
for(prop in a5){
    console.log(prop);
}

o5 = {};
o5[0] = 0;
o5["1"] = 1;
o5["name"] = "둘리";
o5.length = 2;
console.log(o5["0"], o5[1], o5.length);// 일반객체는 length가 없다
for(prop in o5){
    console.log(prop);
}
//일반객체에 lenghth 를 추가해서 유사배열로 사용하기도 한다 jqeury 에서 유사배열을 반환하는 경우가 많다

console.log("==========")
a5.forEach(function(e, index) {
    console.log(index + ":" + e);
});

Array.prototype.forEach.call(o5, function(e, index){  //this 를 바꿔서 호출하게해주는 함수 call, apply, bind
    console.log(index + ":" + e);
});