/*
    Created by Gianinna Caceres 
    Gianinna Caceres Website
    2015
*/
$(document).ready(function() {
    var screenWidth = $(document).width();
    $('[data-toggle="tooltip"]').tooltip();

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.hash);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 800);
        }
    });

    $(window).load(function() {
        $(".preloader").fadeOut("slow");

    });

    $(window).scroll(function() {
        var navbarHeight = $('.navbar').height();
        var bannerHeight = $('#banner').height();
        var bannerEnds = bannerHeight - navbarHeight;
        var ratio = (navbarHeight / bannerHeight);
        var y = ($(window).scrollTop() * ratio);
        var smallPadding = navbarHeight - y;
        if ($(window).scrollTop() > bannerEnds) {
            $('.navbar').css('backgroundColor', '#8e44ad');
            $('.small-logo').css('display', 'block');
            $('.navbar').css({
                "box-shadow": " 0 12px 15px 0 rgba(0, 0, 0, 0.24"
            });

        } else {
            $('.small-logo').css('display', 'none');
            $('.navbar').css('backgroundColor', 'transparent');
            $('.navbar').css({
                "box-shadow": "none"
            });

        }
        if ($(this).scrollTop() > bannerEnds) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.goTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.navbar-collapse').on('show.bs.collapse', function() {
       $('.navbar-header').css('backgroundColor', '#8e44ad');
    });
    $('.navbar-collapse').on('hidden.bs.collapse', function() {
               $('.navbar-header').css('backgroundColor', 'transparent');

    });


    // $('#sendFormBtn').on('click', function(event) {
    //     event.preventDefault();
    //     var response = '';
    //     var name = $('#name').val();
    //     var email = $('#email').val();
    //     var message = $('#message').val();

    //     if (!name || !email || !message)
    //         response = 'Please enter your name, email and message';


    //     // $('#response').text(response).fadeIn();
    //     // setTimeout(function() {
    //     //     $('#response').text('').fadeOut();
    //     // }, 3000);
    // });

});