$(document).ready(function() {
    $('.hs_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next')
    });

    $('.an_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        prevArrow: $('#an_prev'),
        nextArrow: $('#an_next')
    });

    $('.projects_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        prevArrow: $('#ps_prev'),
        nextArrow: $('#ps_next')
    });

    $('.projects_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });

    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        arrows: true,
        fade: true,
        prevArrow: $('#b_prev'),
        nextArrow: $('#b_next')
    });

    $('.banner_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.b-slide-number').text(indexSlide);
        });


    $('.banner_slider').on('afterChange', function() {
        console.log('piu');
        $('.banner_img').addClass('get_bigger');
        $('.banner_text').addClass('get_visible');
    });

    $('.banner_slider').on('beforeChange', function(){
        console.log('uip');
        $('.banner_img').removeClass('get_bigger');
        $('.banner_text').removeClass('get_visible');
    });

    $('.banner_slider').init( function(){
        $('.banner_img').addClass('get_bigger');
        $('.banner_text').addClass('get_visible');
    });


    $('.ac_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        prevArrow: $('#ac_prev'),
        nextArrow: $('#ac_next')
    });

    $('.ac_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.ac-slide-number').text(indexSlide);
        });



    $('.btr_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        prevArrow: $('#btr_prev'),
        nextArrow: $('#btr_next')
    });

    $('.btr_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.btr-slide-number').text(indexSlide);
        });

    });

