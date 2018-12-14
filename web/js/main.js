(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.nav__link');

})(jQuery);
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-to-block' );

})(jQuery);
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

    });
$(document).ready(function() {

    $('#burger').on('click', function () {
            $('body').addClass('menu_opened');
            $('.menu_box').addClass('active_box');
    });

    $('.close').on('click', function () {
        $('body').removeClass('menu_opened');
        $('.menu_box').removeClass('active_box');
    });

});
$(document).ready(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion__item_open');

        // collapse other accordions
        if (!e.data.multiple) {
            $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
        };
    };

    var accordion = new Accordion($('.accordion'), false);

});
$('.dropdown').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dropdown').not(this),
        $dropdownText = $dropdown.find('.dropdown__text'),
        $dropdownList = $dropdown.find('.dropdown__list'),
        $dropdownListItems = $dropdown.find('.dropdown__item');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').slideUp(250);

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdown.removeClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideUp(250);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideDown(250);
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $dropdownListItems.click(function(e) {
        e.stopPropagation();
        $dropdownText.text($(this).text());
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
        if($(this).hasClass('tabs__btn')){
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        }
        if($(this).hasClass('recall_li')) {
            $('.recall_li').each (function() {
                if ($(this).data('id') === 'ans') {
                    $(this).click (function() {$('#modal-answer').modal();});
                }
                if ($(this).data('id') === 'req') {
                    $(this).click (function() {$('#modal-request').modal();});
                }
                if ($(this).data('id') === 'demo') {
                    $(this).click (function() {$('#modal-demo').modal();});
                }
                if ($(this).data('id') === 'rec') {
                    $(this).click (function() {$('#modal-recall').modal();});
                }
                if ($(this).data('id') === 'err') {
                    $(this).click (function() {$('#modal-error').modal();});
                }
                if ($(this).data('id') === 'sale') {
                    $(this).click (function() {$('#modal-sale').modal();});
                }
            });
        }
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });
});
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [62.08, 35.21],
            zoom: 13
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Метка',
                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),

        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([55.8, 37.6], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '1',
            balloonContent: 'Балун',
            hintContent: 'Стандартный значок метки'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        }),

        myPlacemark2 = new ymaps.Placemark([62.08, 35.21], {
            // Свойства.
            hintContent: 'Остров Кижи'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/map.png',
            // Размеры метки.
            iconImageSize: [50, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

    //myMap.controls.add('smallZoomControl');
    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myGeoObject);
}
(function($) {

    //$('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        });
  //  });
})(jQuery);
$(document).ready(function() {
    $(".fancybox").fancybox();
});

// Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

// Fires when the player's state changes.
function onPlayerStateChange(event) {
    // Go to the next video after the current one is finished playing
    if (event.data === 0) {
        $.fancybox.next();
    }
}


// The API will call this function when the page has finished downloading the JavaScript for the player API
function onYouTubePlayerAPIReady() {

    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox-video")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });
    });

}
$(document).ready(function() {

    $('#search').on('click', function () {
        $('.search_box').addClass('active_search');
    });

    $('.close').on('click', function () {
        $('.search_box').removeClass('active_search');
    });

});