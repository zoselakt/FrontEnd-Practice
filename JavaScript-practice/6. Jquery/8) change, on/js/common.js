/*
change: 해당하는 요소의 value에 변화가 생길 경우 
이를 감지하여 등록된 callback함수를 호출하며
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
});

// ul요소에 추가 또는 변화되는 속성, 태그 등 document load 이후(DOM 형성이후)의
// 변화를 체크하여 스크립트에 적용 할 수 있다.