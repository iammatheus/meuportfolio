$(function(){
  $('.mobile-menu').click(function(){
    $('.mobile-menu ul').slideToggle();
    $('.mobile-menu ul').click(function(e){
      e.stopPropagation();
    });
  })
});
