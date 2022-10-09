// 원형
let users = ['Mike', 'Tom', 'jane'];
let [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);

console.log("<br/>");

// split사용
let str = "Mike-Tom-jane";
let [user4, user5, user6] = str.split('-');

console.log(user4);
console.log(user5);
console.log(user6);
console.log("<br/>");

//객체 구조 분해 
let user = {name: 'Mike', age: 30};
let {name, age} = user;

let {name:userName, age:userAge} = user; 
console.log(userName);
console.log(userAge);
console.log("<br/>");

// 쉼표 사용
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title);

//.entries()
let admin = {
    name: "John",
    age: 30
};

for (let [key, value] of Object.entries(admin)) {
    console.log(`${key}:${value}`); 
}
console.log("<br/>");

// Map()
let administ = new Map();
administ.set("name", "John");
administ.set("age", "30");

for (let [key, value] of administ) {
    console.log(`${key}:${value}`); // name:John, then age:30
}
console.log("<br/>");

// '…'로 나머지 요소 가져오기
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// `rest`는 배열입니다.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2