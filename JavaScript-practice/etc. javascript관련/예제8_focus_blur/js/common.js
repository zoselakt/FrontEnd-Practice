$(function(){
    $("input").val("입력해주세요").css("color", "#ccc")
    // .focus(function(){ //focus in
    //     $(this).val("").css("color", "#000");
    // })
    .one("focus", function(){ // 인풋버튼 바깥 클릭후 돌아왔을때 입력값 유지
        $(this).val("").css("color", "#000");
    })
    .blur(function(){  //focus out
        if($(this).val() == ""){ //인풋버튼 바깥클릭시 포커스 유지
            $(this).val("입력해주세요").css("color", "#ccc")

            .one("focus", function(){ // 값이 비어있을때 
                $(this).val("").css("color", "#000");
            });
        }
    });
});