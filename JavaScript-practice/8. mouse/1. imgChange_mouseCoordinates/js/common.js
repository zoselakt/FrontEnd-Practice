// 마우스 좌표 이벤트
$(function(){
    $("img").mousemove(function(e){
        $("span").html(`X좌표: ${e.clientX}, Y좌표: ${e.clientY}`);
        $("span").css({"left" : e.clientX, "top" : e.clientY});

        $("span").addClass({"tooltip" : "body"}).append("<body></body>")
    })
})

// 마우스 클릭 이미지 변경
$(function(){
    $("button").click(function(){
        if($("img").attr("alt") == "산이미지1"){
            $("img").attr({"src":"./img/mountain_02.png", "title":"mountain02", "alt":"산이미지2"})
        }else{
            $("img").attr({"src":"./img/mountain_01.png", "title":"mountain01", "alt":"산이미지1"})
        }
    })
})