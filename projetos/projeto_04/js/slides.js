$(function(){
  $('.mosaico .container .mosaico-wraper').slick({
    centerMode: false,
    slidesToShow:6,
    arrows:false,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          centerMode:true,
          slidesToShow:3
        }
      },
      {
        breakpoint:580,
        settings:{
          centerMode:true,
          slidesToShow:2
        }
      }
    ]
  });

  $('.tratamentos .container').slick({
    centerMode:false,
    slidesToShow:3,
    arrows: false,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:2,
          dots: true
        }
      },
      {
        breakpoint:580,
        settings:{
          slidesToShow:1,
          dots: true
        }
      }
    ]
  });

  $('.depoimentos .container').slick({
    centerMode:false,
    slidesToShow:1,
    dots:true,
    arrows: false
  });

});
