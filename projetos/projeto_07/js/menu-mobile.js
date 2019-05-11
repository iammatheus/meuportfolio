$(function(){

  $('nav.mobile i').click(function(){
    $('nav.mobile ul').slideToggle();
  })

  var nav = $('nav.desktop');
  var mobile = $('nav.mobile');
  $(window).scroll(function(){
    if($(this).scrollTop() > 10){
      nav.addClass("menu-fixo");
      mobile.addClass("mobile-scale");
      nav.css('background','rgba(0,0,0,.5)');

    }else{
      nav.removeClass("menu-fixo");
      mobile.removeClass("mobile-scale");
      nav.css('transition','.2s');
      mobile.css('transition','.2s');
      nav.css('background','none');
    }
  });
})
