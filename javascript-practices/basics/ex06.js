/*
자바스크립트 객체1 : object 타입

1. 자바스크립트 객체는 object 타입과 function 타입 두 가지가 있다
2. 보통, function 타입 객체는 '함수'라 부른다.
3. 따라서, 자바스크립트에서 우리가 흔히 객체라 부르는 것은 object 타입의 객체라 할 수 있다.
*/

// 생성방법1 
// 생성자 함수를 사용하는 방법
// Object, Number, String, RegExp, Array - 내장 생성자 함수
// 그리고 사용자 정의 생성자 함수
var o1 = new Object();
o1.name = '둘리';
o1.age = 10;
o1.another = new Object();
o1.another.name = '마이콜';
o1.another.age = 30;

console.log(o1);

var MyObject = function(name) {
    this.name = name;
}

var o = new MyObject('둘리');
console.log(o.name);


// 생성방법2 
// {} 리터럴을 사용하는 방법
var o2 = {};
o2.name = '둘리';
o2.age = 10;
o2.another = new Object();
o2.another.name = '마이콜';
o2.another.age = 30;

console.log(o2);

// 생성방법3
// (J)ava(S)cript (O)bject (N)otation
var o3 = {
    name: '둘리',
    age: 10,
    another: {
        name: '마이콜',
        age: 30
    }
}

console.log(o3);

//XmlHttpRequest 호스트(브라우져) 객체를 사용해서 통신(AJAX)에서 데이터 교환의 포맷으로 JSON을 사용한다.
var response = '{name: "둘리", age:10, email:"dooly@gmail.com"}';

var userVo = eval("(" +  response + ")"); //eval string to code

console.log(userVo, typeof(userVo));




