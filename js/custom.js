/*==============
    SERVICES
===============*/

$(function () {
    new WOW().init();
});


/*==============
    WORK
===============*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image', // it will open all images
        gallery: {
            enabled: true // each and every image will be open as a gallery view.
        },
    });
});


/*==============
    TEAM
===============*/

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/*==============
    TESTIMONIAL
===============*/

$(function () {
    $("#clients-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/*==============
    COUNTER
===============*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


/*==============
    CLIENTS
===============*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
