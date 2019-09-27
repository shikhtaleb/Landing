$(window).scroll(function(){
    if($(this).scrollTop()>=100){
        $("#navBar").addClass("noTransparent");
     }
    else{
        $("#navBar").removeClass("noTransparent");
     }
});

$(document).ready(function () {

    $('.timer').countTo();
    $('#commentForm').validate();

    $('a.scroll').on('click', function (event) {
        
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function (){});
    });

});

/*
┌──────────────────────────────────────────┐
│         Coding by M. Shikh Taleb         │
│            www.shikhtaleb.net            │
└──────────────────────────────────────────┘
*/