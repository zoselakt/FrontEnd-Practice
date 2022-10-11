//기본배열
var member = ['egoing ', 'zoselakt ', 'youtube'];

		
//다중배열
let array = [["가","나,","다"],"서울",["a", "b", "c", "d"]];

//함수사용 배열
	function get_members(){
		return['egoing ', 'zoselakt ', 'youtube'];
	}
	
//for문 사용 배열
	var a = ['egoing ', 'coding ', 'zoselakt ', 'javascript ', 'JSP']
	for(var i=0; i<a.length; i++){
		console.log(a[i]);
	}
	console.log("<br/>");

//배열의 확장
	var arr = new Array('seoul', 'new york', 'tokyo', 'deagu', 'osaka');
	function getRandomValueFromArray(arr){
		var index = Math.floor(arr.length*Math.random());
		return arr[index];
	}
	console.log(getRandomValueFromArray(arr));

//배열의 확장2
	Array.prototype.random = function(){
		var index = Math.floor(this.length*Math.random());
		return this[index];
	}
	var arr1 = new Array('pusan', 'paris', 'washington DC', 'newdeli', 'otawa');
	console.log(arr1.random());