// 익명함수
let number = [1, 2, 3, 4, 5];
 
number.forEach(function(x) {
    console.log(x * 2);
});

// 이름만 넘기기
function whatYourName(name, callback) {
    console.log('name: ', name);
    callback();
}
 
function finishFunc() {
    console.log('finish function');
}
 
whatYourName('miniddo', finishFunc);

//전역변수, 지역변수를 콜백함수의 파라미터로 전달
let fruit = 'apple';	// Global Variable
 
function callbackFunc(callback) {
    let vegetable = 'tomato';	// Local Variable
    callback(vegetable);
}
 
function eat(vegetable) {
    console.log(`fruit: ${fruit} / vegetable: ${vegetable}`);
}
 
callbackFunc(eat);

//this를 사용한 콜백함수
let userData = {
    signUp: '2020-10-06 15:00:00',
    id: 'minidoo',
    name: 'Not Set',
    setName: function(firstName, lastName) {
        this.name = firstName + ' ' + lastName;
    }
}
 
function getUserName(firstName, lastName, callback) {
    callback(firstName, lastName);
}
 
getUserName('PARK', 'MINIDDO', userData.setName);
 
console.log('1: ', userData.name); // Not Set
console.log('2: ', window.name); // PARK MINIDDO

// call() 사용
function getUserName(firstName, lastName, callback, obj) {
    callback.call(obj, firstName, lastName); // - (1)
}
 
getUserName('PARK', 'MINIDDO', userData.setName, userData); //	- (2)
 
console.log(userData.name);

function getUserName(firstName, lastName, callback, obj) {
    callback.apply(obj, [firstName, lastName]); // 인자가 배열
}
//apply()
getUserName('PARK', 'MINIDDO', userData.setName, userData);
 
console.log(userData.name);

// 콜백 속의 콜백
// loadScript('/my/script.js', function(script) {
//     loadScript('/my/script2.js', function(script) {
//       loadScript('/my/script3.js', function(script) {
//         // 세 스크립트 로딩이 끝난 후 실행됨
//       });
//     })
//   });