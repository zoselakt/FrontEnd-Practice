// async
	async function getName(){
			throw new Error("err...");
	}
	getName().catch((err) => {
		console.log(err);
	})

// await
	function getName(name){
		return new Promise((resolve, reject) =>{
			setTimeout(() => {
				resolve(name);
			}, 1000);
		});
	};

	async function showName(){
		const result = await getName("Mike");
		console.log(result);
	}
	console.log("시작");
	showName();


	const f1 = () => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res("1번 주문 완료");
			}, 1000);
		});
	};

	const f2 = (message) => {
		console.log(message);
		return new Promise((res, rej) => {
			setTimeout(() => {
				res("2번 주문 완료");
			}, 3000);
		});
	};

	const f3 = (message) => {
		console.log(message);
		return new Promise((res, rej) => {
			setTimeout(() => {
				res("3번 주문 완료");
			}, 2000);
		});
	};
