$(function(){
  $('.menu-mobile').click(function(){
    $('.menu-mobile > ul').slideToggle();
    $('.menu-mobile > ul').click(function(e){
      e.stopPropagation();
    })
  })
});
