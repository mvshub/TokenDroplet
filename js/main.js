window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: false,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });

    $('#baas-m-menu').click(function () {
        var menu = $(".baas-menu");
        if (menu.hasClass('active')) {
            menu.removeClass('active')
        } else {
            menu.addClass('active')
        }
    })
    $('.baas-footer-m-url-title').click(function () {
        var icon = $(this).children('.baas-footer-m-url-icon');
        var l = $(this).next('.baas-footer-m-url-list');
        var ol = $(this).next('.baas-footer-m-url-list-other');
        if (l.hasClass('active')) {
            l.removeClass('active')
            icon.removeClass('active')
        } else {
            l.addClass('active')
            icon.addClass('active')
        }
        if (ol.hasClass('active')) {
            ol.removeClass('active')
            icon.removeClass('active')
        } else {
            ol.addClass('active')
            icon.addClass('active')
        }
    })



}