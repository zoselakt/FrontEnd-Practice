$(function(){
    $("a").click(function(){
        // console.log($(this));
        $("a").removeClass("on") //기존 모든 요소에 추가된 클래스를 
        $(this).addClass("on")
        $("img").attr("src", this)
        console.log(this);
        return false; // a태그속성(사진파일로 이동)삭제
    });
    // ul요소에 추가 또는 변화되는 속성, 태그 등 document load 이후(DOM 형성이후)의
    // 변화를 체크하여 스크립트에 적용 할 수 있다.
    // ul태그 내부에 자식요소의 첫번쨰 위치에 li > a[href=./img/img04.jpg]{바다} 위 태그 코드를 추가.
    $("ul").on("click", "a", function(){
        $("a").removeClass("on");
        $(this).addClass("on");
        $("img").attr("src", $(this).attr("href"));
        return false;
    })
    $("button").click(function(){

    })
});
