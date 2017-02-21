$(document).ready(function(){
    $(".js--features").waypoint(function(direction) {
        if(direction == "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    }, {
        offset: "60px;"
    });
    $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            });

});

