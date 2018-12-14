$(document).ready(function() {

    $('#search').on('click', function () {
        $('.search_box').addClass('active_search');
    });

    $('.close').on('click', function () {
        $('.search_box').removeClass('active_search');
    });

});