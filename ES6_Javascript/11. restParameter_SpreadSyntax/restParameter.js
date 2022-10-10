//나머지 변수(rest Parameter)
function showName(name){
		console.log(name);
	}
	showName(); // undefined / 비워놔도 에러는 아님
	showName('Mike'); //Mike / 정상구문
	showName('Mike', 'Tom');

	function User(name, age, gender, ...skills){//... ~~ 나머지 변수
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.skills = skills;
	}
	const user1 = new User("Mike", 30, "m", "html", "css");
	const user2 = new User("Tom", 20, "m", "java", "node");
	const user3 = new User("egoing", 40, "w", "jsp", "doker");
	console.log(user1);
	console.log(user2);
	console.log(user3);

// 전개구문(Spread syntax)
	let use = {name:"Mike"};
	let info = {age:30};
	let fe = ["JS", "React"];
	let lang = ["korean", "English"];

	use = {
		...use,
		...info,
		skills: [...fe, ...lang],
	};
	console.log(use);

//배열 병합
var arr1 = [1,2,3]; 
var arr2 = [4,5,6]; 

var arr = [...arr1, ...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ] 

//배열복사
var arr1 = ['철수','영희']; 
var arr2 = [...arr1]; 

arr2.push('바둑이'); 

console.log(arr2); // [ "철수", "영희", "바둑이" ]
console.log(arr1); // [ "철수", "영희" ]