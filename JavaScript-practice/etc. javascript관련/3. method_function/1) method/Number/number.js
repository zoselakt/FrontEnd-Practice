//Number.parseFloat()
console.log(Number.parseFloat("12.34"))
console.log(Number.parseFloat("12문자열"))
console.log(Number.parseFloat("12 34 56"))

//Number.parseInt()
console.log(Number.parseInt("12.34"))
console.log(Number.parseInt("12문자열"))
console.log(Number.parseInt("12 34 56"))

//Number.isNaN()
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(0 / 0))

//Number.isFinite()
console.log(Number.isFinite(0))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(NaN))

//Number.prototype 메소드

//Number.prototype.toExponential()
   var num = 12.3456;
   console.log(num.toExponential())
   console.log(num.toExponential(2))

//Number.prototype.toFixed()
   var num = 3.14159265; 
   console.log(num.toFixed())
   console.log(num.toFixed(2))

//Number.prototype.toPrecision()
   var num = 3.14159265; 
   console.log(num.toPrecision())
   console.log(num.toPrecision(2))

//Number.prototype.toString()
   var num = 255; 
   console.log(num.toString())
   console.log((255).toString())
   console.log((100).toString(16))

//Number.prototype.valueOf()
   var numObj = new Number(123); 
   typeof numObj; 
   var num = numObj.valueOf();
   num; 
   typeof num;
