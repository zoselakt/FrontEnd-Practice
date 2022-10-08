$(function(){
    //each : 매개변수로 받은 배열을 관리하고자 할때 사용된다.
    // - function : 반복문 마다 실행될 익명함수
    // - index : 반복문이 몇 바뀌째인지 알수 있는 인덱스 / 생략가능
    // - element(this) : 셀렉트되는 엘리먼트를 나태낸다. this로 바꾸어 사용할 수 있다.
    $(".list li").each(function(index, item){
        $(item).addClass('li_' + index);
    })

    //prev : 이전에 위치한 형제요소 선택
    $(".list .li_1").prev().css({"border":"2px solid red"})

    //next : 다음에 위치한 형제요소 선택
    $(".list .li_1").next().css({"border":"2px solid blue"})
})