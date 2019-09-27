// scroll
$(window).scroll(function(){
    
    if($(this).scrollTop()>=0.1) {
        $('#navBar').addClass('noTransparent');
    }

    else {
        $('#navBar').removeClass('noTransparent');
    }

});

$(document).ready(function(){

    // Scroll
    $('a.scroll').on('click', function(event){
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function(){});
    });

    // Skills
    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill: '#0575E6'
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });

    // Validate
    $('#commentForm').validate();
      
});


/*
┌──────────────────────────────────────────┐
│         Coding by M. Shikh Taleb         │
│            www.shikhtaleb.com            │
└──────────────────────────────────────────┘
*/