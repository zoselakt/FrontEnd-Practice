// 예1
function outter(){
	var title = 'coding everybody'; 
	return function inner(){ 
		//alert(title); 
    }
	inner(); // 함수 실행되면 접근할 수 없다.
}
var inner = outter(); // 밖에서 사용하게끔 변수에 담는다.
inner();
console.log(inner);

// 예2
function outFunc(){ // 파라미터없는 함수 / 여기서 실행해도 매개변수가 없기때문에 아무런 실행이 되지 않는다.
    let outerText = "outer-text";
    function innerFunc(a){ // a의 파라미터 던지기 함수
        let innerText = `innerText`;
        console.log(`${outerText}, ${a}`);
    }
    return innerFunc; // a 파라미터 던지기 / 종료된 함수를 외부로 던져서 외부에서 받을수 있다.
}
let closureFunc = new outFunc(); // outFunc을 객체화 하여 함수 밖에서 함수 값을 사용하게끔 변수에 담는다.
closureFunc('클로저 함수 호출'); // return으로 받은값

// 예3
function outFunc1(x){
    const y = 5;
    function innerFunc2(z){
        return x + y + z;
    }
    return innerFunc2;
}
let makeAdder10 = new outFunc(10); // 생성자로 인스턴스생성
console.log(makeAdder10(2));

//내부함수를 리턴하지 않을때 데이터타입은 객체 / 리턴할때 데이터타입은 함수
let closureFunct = new outFunc1(10);