
$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .logo_area',
    closedSymbol: '+',
    openedSymbol: '-',
    allowParentLinks:"true",
});

/* On Scroll Js */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var header= document.getElementById("header")
    header.classList.add('active');
  } else {
    var header= document.getElementById("header")
    header.classList.remove('active');
  }
}
/* On Scroll Js */



var owl = $('#banner-slider');
owl.owlCarousel({
     loop: false,
     dots: true,
     nav:false,     
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
             margin: 0,
         },
         1000:{
             items: 1
         }
     }
 });



var owl = $('.product-slider');
owl.owlCarousel({
     loop: false,
     dots: true,
     nav:false,     
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
             dots: false
         },
         600:{
             items: 1,
             margin: 0,
             dots: false
         },
         1000:{
             items: 2
         },
         1366:{
             items: 3
         }
     }
 });



var owl = $('#testimonial-slider');
owl.owlCarousel({
     loop: true,
     dots: false,
     nav:true,
     navText: [
         ("<img src='images/ar1.png' />"),
         ("<img src='images/ar2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
             dots: false
         },
         600:{
             items: 2,
             margin: 0,
             dots: false
         },
         1000:{
             items: 3
         },
         1366:{
            items: 4
         },
        2500:{
            items: 5
        }
     }
 });

 var owl = $('#brand-slider');
owl.owlCarousel({
     loop: true,
     dots: false,
     nav:false,
     navText: [
         ("<img src='images/ar1.png' />"),
         ("<img src='images/ar2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 2
         },
         600:{
             items: 3
         },
         1000:{
             items: 4
         },
         1366:{
             items: 5
         }
     }
 });


/*Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: [
        { id: "prev", position: "center" },
        { id: "counter", position: "center" },
        { id: "next", position: "center" },
        "zoom",
        "slideshow",
        "fullscreen",
        "download",
        "thumbs",
        "close",
      ],
    },
  });*/



