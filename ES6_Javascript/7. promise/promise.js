    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("err..."));
        }, 1000);
    });

    console.log("시작");
    pr.then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("끝")
    })

// 프로미스 체이닝
// - 프로미스 후속처리 메서드인 then, catch, finally를 호출하여 콜백지옥 대신 프로미스 체이닝으로 처리할수 있다.

// 예)
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

		console.log("시작");
		f1()
		.then((res) => f2(res))
		.then((res) => f3(res))
		.then((res) => console.log(res))
		.catch(console.log)
		.finally(() => {
			console.log("끝");
		})

		// promise.all : 하나라도 누락되면 페이지 출력불가
		console.time('x');
		Promise.all([f1(), f2(), f3()]).then((res) => {
			document.write(res);
			console.timeEnd('x');
		});

		// promise.race : 
		console.time('x');
		Promise.race([f1(), f2(), f3()]).then((res) => {
			document.write(res);
			console.timeEnd('x');
		});