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

    $('#burger-sub').on('click', function () {
        $('body').addClass('menu_opened');
        $('.menu_box').addClass('active_box');
    });

    $('.close').on('click', function () {
        $('body').removeClass('menu_opened');
        $('.menu_box').removeClass('active_box');
    });

});