// 1. 배열반복문
var arr = ['a', 'b', 'c'];
for(var i=0; i<arr.length; i++ ){
    console.log(arr[i]);
}

// 2. 반복문 / for in
var grades = {'egoing':10, 'zoselakt':9, 'youtube':8};
for(key in grades) {
    console.log("<br/>");
    console.log("<li>" + "key: " +key+ "value: " +grades[key]+ "</li>");
}

//객체타입 출력
for (let items in obj){
     console.log("for in구문으로 index출력하기: "+items);
     console.log("for in구문으로 value출력하기: "+obj[items]);
}
// 일반 객체타입은 iterable하지 않기 때문에 for of를 사용할 수 없다.
for(let items of array){
     console.log("for of구문으로 출력하기: "+items);
}

// 3. 반복문 / for of
let days = ["mon", "tue", "wed"];
for(let day of days) {
    console.log(day + "\t");
}
// 객체타입 출력 Object.entries 사용
for(let [key, val] of Object.entries(obj)){
    console.log("for of 구문으로 출력하기: key:"+ key + " val: "+ val)
}

// 4. forEach
let travel = ["제주도", "강원도", "거제도", "서울", "가평", "포항"];
let count = 0;
let once = 1;

travel.forEach(element => {
    for (var i=count; i<travel.length; i++){
            console.log(travel[i]);
        }
});
