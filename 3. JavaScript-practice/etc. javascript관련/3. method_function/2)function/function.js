//일반 함수
let numFunc = function(){
    console.log("일반표기함수")
};

//선언적 함수
function numbering(){
i = 0;
while(i<10){
    document.write(i);
        i+=1;
    }
}
numbering(); 

function numFunc(){
    console.log("선언적함수")
};

//익명 함수
var a = function(){
    alert("hello");
};

a();

//arrow function(화살표함수)
let arrowFunc = 매개변수 =>{
    console.log("화살표표기함수")
}

//즉시실행함수
(function (){  
    i=0;
    while(i<10){
    document.write(i);
    i+=1;
    }
})
();

(function(){
    console.log("바로실행!")
} ())

//재귀함수
function loop(x) {
    if (x >= 10) 
      return;
    loop(x + 1);
  }
  loop(0);

//중첩함수
function sayHiBye(firstName, lastName) {

    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }