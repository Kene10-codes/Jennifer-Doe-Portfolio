$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:false,
        autoplay: 800,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3

            }
        }
    });
  });
  
 