$(document).ready(function () {
    $('.header-filter__btn').click(function () {
        $('.header').toggleClass('header-active');
        $('.panel').toggleClass('panel-mobile');
        $('.personal').toggleClass('personal-active');
    })

    $('.mail-link').click(function (e) {
        e.preventDefault();
        $('.header-notifi').fadeToggle(300);
    })

    $('.panel-settings').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle(300)
    })

    $('.panel-invest').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('panel-invest__active');
        $('.panel-invest__menu').slideToggle(300)
    })

    $('.tarif-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $(function () {
        $(window).bind("resize", function () {
            if ($(this).width() < 991) {
                $('.header').addClass('header-active');
                $('.panel').addClass('panel-mobile');
                $('.personal').addClass('personal-active');
            } else {
                $('.header').removeClass('header-active');
                $('.panel').removeClass('panel-mobile');
                $('.personal').removeClass('personal-active');
            }
        }).resize();
    });

    $('.burger').click(function () {
        $(this).toggleClass('burger-active');
        $('.panel').toggleClass('panel-open');
    })
});

var burgerBtn = document.querySelector('.burger'),
    mobileMenu = document.querySelector('.panel');

// Tabs
const tabTriggers = document.querySelectorAll('.personal-tab'),
    tabs = document.querySelectorAll('.profile-tab-content');

const showTab = (index = 0) => {
    tabTriggers.forEach(trigger => trigger.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    try {
        tabTriggers[index].classList.add('active');
        tabs[index].classList.add('active');
    } catch (e) {}
}

function h3active(thiss) {
    for (var i = 0; i < thiss.parentNode.childNodes.length; i++) {
        thiss.parentNode.childNodes[i].classList.remove("h3__active")
    }
    thiss.classList.add("h3__active")
}
showTab();
tabTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', e => {
        e.preventDefault();
        showTab(index);
    });
});