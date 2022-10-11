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