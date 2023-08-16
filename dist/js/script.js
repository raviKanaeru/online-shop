$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    });
  
    const hamburger = $('#hamburger');
    const navMenu = $('#nav-menu');
    
    hamburger.on('click', function() {
        hamburger.toggleClass('hamburger-active');
        navMenu.toggleClass('hidden');
    });
    
    $(window).on('click', function(e) {
        if (!hamburger.is(e.target) && !navMenu.is(e.target)) {
            hamburger.removeClass('hamburger-active');
            navMenu.addClass('hidden');
        }
    });
  
  });

