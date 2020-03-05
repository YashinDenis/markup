$(function() {
    $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:15,
    nav:true,
    dots: false,
    navText: ['<img src="img/btn_prev.png">','<img src="img/btn_next.png">'],
    StartPosition: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });
});



