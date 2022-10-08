/*
$().animate : 애니메이션 효과를 부여한다.
메소드 원형: $(선택자).animate(스타일 [,지속시간] [,시간당속도함수] [,콜백 함수]);

$("").animate(첫번쨰 인자, 두번쨰 인자, 세번쨰 인자, 네번째 인자)
        //첫번쨰 인자: 변화된 값
        //두번째 인자: 경과(지속)시간 / string or number
        //세번쨰 인자: 변화곡선(timmingfunction) string
        //네번째 인자: function(){}

*/
//css다중적용
//$(".box").animate({left: "250px", opacity: "0.5", height: "500px", width: "500px"});

$(function(){
    $("button").click(function(){
        $(".box:animated").stop();
        $(".box").animate({left: "+=10px", top: "+=10px"})

        let elem = $(".box");
        elem.animate({height: "300px", opacity: "0.4"}, 'slow');
        elem.animate({width: "300px", opacity: "0.8"}, 'slow');
        elem.animate({height: "400px", opacity: "0.4"}, 'slow');
        elem.animate({width: "400px", opacity: "0.8"}, 'slow');
    })
})