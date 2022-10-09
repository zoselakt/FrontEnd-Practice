/*
change: 해당하는 요소의 value에 변화가 생길 경우 이를 감지하여 등록된 callback함수를 호출하며
주로 input,textarea,select 태그에 동작한다.
*/
$(function(){
    $("select").change(function(){
        let thisVal = $(this).val();
        let hasVal = $("select").hasClass("select1");
        if(hasVal){
            $(location).attr("href", thisVal)
        }else{
            $(this).next().find("input").val(thisVal);
        }
    });


/*
on : 
ul요소에 추가 또는 변화되는 속성, 태그 등 document load 이후(DOM 형성이후)의
변화를 체크하여 스크립트에 적용 할 수 있다.
on() 메소드를 사용하면 하나의 이벤트 핸들러에 여러 개의 이벤트를 동시에 바인딩할 수 있다.
*/

    $(".inputTest").on("keydown", function(event){
        $("h1").text("input test: " + event.key);
    });

});

/*
off : 더 이상 사용하지 않는 이벤트와의 바인딩(binding)을 제거한다.

$(".inputText").on("click", function() {
  $("h1").off("click").text("버튼 클릭 불가능");
});
*/

/**
 one : 바인딩(binding)된 이벤트 핸들러가 한번만 실행되고 나서는, 더는 실행되지 않는다.

$(".inputText").one("click", function() {
  $("h1").append("이제 클릭이 되지 않습니다.<br>");
});
 */