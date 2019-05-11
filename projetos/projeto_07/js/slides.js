$(function(){
  $('.slider-coffee .center .slide-wraper').slick({
    centerMode: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint: 580,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });

  $('.slider-customers-wraper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

});
