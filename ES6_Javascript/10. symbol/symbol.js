/**
 * 자바스크립트는 6개의 원시타입과 1개의 객체타입을 가지고 있다.
원시타입 (Number, String, Boolean, null, undefined, Symbol)
객체타입 (Object)

심볼 : 변경 불가능한 원시타입의 값이며 다른 값과 중복되지 않는 고유한 값.
- 클래스나 객체 형식(object type)의 내부에서만 접근할 수 있도록 전용(private) 객체 속성의 키(key)로 사용됩니다.

- 객체의 프로퍼티 키를 고유하게 설정함으로써 충돌을 방지하기 위해 사용된다.
- new를 붙이지 않는다. / 유일한 식별자를 만든다.
- 고유한 상수값을 만드는데 사용할 수 있다. / 유일성 보장
- 심볼 형식으로 된 키는 자바스크립트의 다양한 내장(built-in) 객체 안에 존재한다.
- 전역 심볼 테이블(global symbol table)에 접근할 수 있는 정적 메서드와 공용으로(commonly) 
사용되는 객체를 가리키는 특정 심볼의 주소를 값으로 가지는 정적 속성을 가집니다.

구조
변수타입 변수명 = Symbol('symbol') 
호출
console.log(변수명)
 */

Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ Symbol(), Symbol() ]