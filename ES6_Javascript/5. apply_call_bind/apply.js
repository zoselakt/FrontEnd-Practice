// apply
// apply 예)
o1 = {val1 : 1, val2: 2,val3: 3}
o2 = {v1: 10, v2: 50, v3: 100, v4:25}

function sum1(){
	var _sum =0;
	for (var name in this) { //this
		_sum += this[name];
	}
    return _sum;
}

// call
// call 예)
function bakery (name, price){
    this.name = name;
    this.price = price;
    Product.call(this, name, price)
    this.getProduct = function(){
        alert(`bakery 카테고리에서 구매하신 상품은 ${name}이고 상품의 금액은 ${price} 원 입니다.`)
    }
}

let bake = new bakery("cheese-bread", 7000);
console.log(bake.name);
console.log(bake.price);
console.log(bake.getProduct());

// bind
// bind 예)
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81


// 예제)
	var o = {}
	var p = {}
	function funct(){
		switch(this){
			case o:
				document.write('o<br/>');
				break;
			case p:
				document.write('p<br/>');
				break;
			case window:
				document.write('window<br/>');
				break;
		}
	}
	function update(birthYear, occupation){
		this.birthYear = birthYear;
		this.occupation = occupation;
	}
		funct.apply(o);
	funct.apply(p);
	update.apply(o, [2000, "singer"]);
	console.log(o);
		funct.call(o);
	funct.call(p);
		const user ={
		name: "Mike",
		showName: function(){
			console.log('hello bind');
		},
	};
	user.showName();
	let fn = user.showName;
	let boundFn = fn.bind(user);
	boundFn();