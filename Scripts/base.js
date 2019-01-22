$(function(){
    $(window).resize(function(){
       location.reload();
    });

    $(window).on("scroll",function(){
        var wt=$(window).scrollTop();
       if(wt>=300){
            $(".contain2>div>span:nth-child(2)").css({ animation:" top_shift .6s .6s ease forwards"});
            $(".contain2>div>span:nth-child(1)").css({ animation:" opacity .6s .6s ease forwards"});
            $(".contain2>div>span:nth-child(3)").css({ animation:" opacity .6s .6s ease forwards"});
        }
        if(wt>=600){
            $(".contain3>div>span:nth-child(2)").css({ animation:" top_shift .6s .6s ease forwards"});
            $(".contain3>div>span:nth-child(1)").css({ animation:" opacity .6s .6s ease forwards"});
            $(".contain3>div>span:nth-child(3)").css({ animation:" opacity .6s .6s ease forwards"});
        }
        if(wt>=900){
            $(".contain4>div>span:nth-child(2)").css({ animation:" top_shift .6s .6s ease forwards"});
            $(".contain4>div>span:nth-child(1)").css({ animation:" opacity .6s .6s ease forwards"});
            $(".contain4>div>span:nth-child(3)").css({ animation:" opacity .6s .6s ease forwards"});
        }


    })
})