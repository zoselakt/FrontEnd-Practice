$(function(){  
    // attr(...) 지정한 속성값을 가져온다.
    // attr을 사용하여 id 또는 class명을 지정할 수 있다.
    let attrNum = document.querySelector("#wrap-id").getAttribute('class');
    let num = $("#wrap-id").attr('class');
    let wrapIn = $(".wrap-inner").attr('id');
    
    console.log(attrNum)
    console.log(num)
    console.log(wrapIn)

    // attr(... , ...) 지정한 id 또는 class으로 변경한다.
    $("p").attr("class", "p_class")
    $("span").attr("class", "span_class")
    $("input").attr("placeholder", "연습하자")

    // removeAttr(...) 지정한 속성을 제거한다.
    $("span").removeAttr("class")

    //prop: 지정한 선택자의 속성값을 가져오거나 속성값을 추가한다.
    // $("").prop("") : 속성값을 가져온다.
    // $("").prop("", "") : 속성값을 변경한다.
    let boxNum = $(".flex-box .count");
    boxNum.each(function(){
        $(this).prop('Counter', 0).animate({Counter: $(this).text()}, {
        duration: 4000,
        easing: "swing",
        step: function(t){
            $(this).text(Math.ceil(t));
        },
        complete: function(){
            console.log("완료");
        }
        });
    });
})

/*
    attr과 prop의 차이는 
    attr: HTML의 속성(attribute)을 다룸

    prop:  JavaScript의 프로퍼티(property)를 다룸
*/