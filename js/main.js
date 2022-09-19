$('.open-popup').click(function (e) {
    e.preventDefault();
    $('.popup').fadeIn(600);
});

$('.popup__close').click(function (e) {
    e.preventDefault();
    $('.popup').fadeOut(600);
})
$('.item__first').click(function (e) {
    e.preventDefault();
    $(".item__first").removeClass("active");
    $(this).addClass("active");

})
$('.item__second').click(function (e) {
    e.preventDefault();
    $(".item__second").removeClass("active");
    $(this).addClass("active");

})
$('.item__third').click(function (e) {
    e.preventDefault();
    $(".item__third").removeClass("active");
    $(this).addClass("active");

})
$('.item__fourth').click(function (e) {
    e.preventDefault();
    $(".item__fourth").removeClass("active");
    $(this).addClass("active");

})
$('.audit__button').click(function (e) {
    e.preventDefault();
    $(".price__quiz-link").removeClass("active");


})
$('.letters__content-link').click(function (e) {
    e.preventDefault();
    $(".letters__content-item").removeClass("item-active");


})
$('.letters__content-item').click(function (e) {
    e.preventDefault();
    $(".letters__content-item").removeClass("item-active");
    $(this).addClass("item-active");

})
$(document).ready(function () {
    $('.answers__content-title').click(function (event) {
        $(this).toggleClass('acc-active').next().slideToggle(300);
    });
});
$(".header__nav-list a, .footer__logo, .footer__nav a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
        top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
})
setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0)
$('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
})



