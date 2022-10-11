	function* fn(){
		console.log(1);
		yield 1;
		console.log(2);
		yield 2;
		console.log(3);
		console.log(4);
		yield 3;
		return "finish";
	}

	const a = fn();
	document.write(a);

	// 여러가지
	function* fn1(){
		let index = 0;
		while(true){
			yield index++;
		}
	}
	const aa = fn1();
	console.log(fn1);

	function* gen1(){
	yield "o";
		yield "n";
		yield "e";
	}

	function* gen2(){
		yield "two";
		yield* gen1();
		yield "!";
	}
	console.log(gen1);
	console.log(gen2);