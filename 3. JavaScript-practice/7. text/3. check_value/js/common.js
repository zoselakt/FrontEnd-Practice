$(function(){
    $("button").click(function(){
        let mailNum = $("inputp[name=mail]").val();
        let checkNum = $("input[name=check]").val();
        if(mailNum !== checkNum){
            $("em").text("메일 주소가 동일하지 않습니다.")
        }else{
            $("em").text("메일 주소가 동일합니다.")
        }
    });
});

