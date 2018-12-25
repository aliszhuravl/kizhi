
$( window ).scroll(function() {
    if ( $(window).scrollTop() > 200) {
        $(".btn_menu").addClass("btn_show");
    }
    if ( $(window).scrollTop() < 200) {
        $(".btn_menu").removeClass("btn_show");
    }
});