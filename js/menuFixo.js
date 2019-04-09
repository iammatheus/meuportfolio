$(function(){
  var nav = $('.menu');
  $(window).scroll(function(){
    if($(this).scrollTop() > 20){
      nav.addClass("menu-fixo");
    }else{
      nav.removeClass("menu-fixo");
      nav.css('transition','.8s');
    }
  });
});
