$(document).ready(function() {
    'use strict';

    var banner = '.subscribe .banner';

    $('#to-subscribe').click(function(){
        scrollTo(subscribeHeight(), function(){
          $('#subscribe-form input').focus();
        });
    });

    $('.scroll-down').click(function(){
      scrollTo($('.how-it-works:eq(0)').offset().top);
    });

    function scrollTo(height, cb) {
        $('html, body').animate({scrollTop: height}, 400, 'swing', cb);
    }

    function subscribeHeight () {
        return $(banner).offset().top - ($(window).height() - $(banner).outerHeight()) / 2;
    }
});
