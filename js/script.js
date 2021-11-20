$(function() {
    
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$(".burger").on("click", function(event) {
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active");
    $(".nav").toggleClass("active--show");
    $("body").toggleClass("lock");
});

$(".nav__link").on("click", function(event) {
    $(".burger").removeClass("active");
    $(".nav").removeClass("active");
    $(".nav").removeClass("active--show");
    $(".burger").removeClass("active");
    $("body").removeClass("lock");
});

$("[data-slider]").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
        breakpoint: 1600,
        settings: {
        dots: true,
        slidesToShow: 2
      }
    },
    {
        breakpoint: 900,
        settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
    }
    },
    ]
    });

$("[data-slider-1]").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
        breakpoint: 800,
        settings: {
        dots: true,
        slidesToShow: 1
    }
    },
    {
        breakpoint: 500,
        settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
        }
        },
    ]
    });

$('a').click(function () {});
$("a").removeAttr("href");

function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('anim-show');
    }
    else {
        change.target.classList.remove('anim-show');
    }
    });
    }
    let options = {
      threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.anim');

    for (let elm of elements) {
      observer.observe(elm);
    }
    });
