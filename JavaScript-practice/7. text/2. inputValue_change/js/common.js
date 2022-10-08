$(function(){
    let pHtml = $("p").html();
    $("button").click(function(){
        let btnNum = $(this);
        if(btnNum.text() == "확인"){
            let inputVal = $("input").val();
            $("p").text(`${inputVal}로 전송을 원하시면 전송버튼을 누르세요.`);
            btnNum.text("전송");
        }else if(btnNum.text() == "취소"){
            $("p").html(pHtml);
            let btnNumPrev = btnNum.prev();
            if(btnNumPrev.text() == "전송"){
                btnNumPrev.text("확인");
            }
        }else if(btnNum.text() == "전송"){
            $("p").text("전송되었습니다.");
            window.location.href = "http://naver.com"; 
        }
    })
})