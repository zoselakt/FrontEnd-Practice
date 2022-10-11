	function Ultra(){}
	Ultra.prototype.UltraProp = true;

	function Super(){}
	Super.prototype = new Ultra(); // 울트라상속

	function Sub(){}
	Sub.prototype = Super(); //수퍼상속

	var o = new Sub();
	console.log(o.UltraProp);
	// 객체o에서 ultraProp를 찾는다 없다면 sub에서 찾는다.
	// 없으면 super에서 찾는다. 없다면 ultra에서 찾는다.
	// 아무값이 없다면 콘솔로그는 ultra1의 true값을 출력한다.
    
	function Ultra1(){}
	Ultra1.prototype.UltraProp = true;  

	function Super1(){}
	var t = new Ultra();
	Super1.prototype = t;

	function Sub1(){}
	var s = new Super1();
	Sub1.prototype = s;

	var o1 = new Sub1();
	console.log(o1.UltraProp);