$(function(){
  $('a,.btn-contrate').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html,body').animate({
      'scrollTop':offSetTop
    });
  });

  $(window).scroll(function(){
    var windowOffY = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.sessao').each(function(){
      var elOffY = $(this).offset().top;
      if(elOffY+200 < (windowOffY + windowHeight) && elOffY+200+$(this).height() > windowOffY){
        $('a').css('border-bottom','0');
        var target = $(this).attr('target');
        $('.'+target).css('border-bottom','1px solid #f13f55');
        return;
      }
    });
  });

  //ANIMAR AO SCROLL

  debounce = function(func, wait, immediate){
    var timeout;
    return function(){
      var context = this, args = arguments;
      var later = function(){
        timeout = null;
        if(!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if(callNow) func.aplly(context, args);
    };
  };

  (function(){
  var $target = $('.anime,.anime2,.anime3'),
      animationClass = 'anime-start',
      offset = $(window).height() * 3/4;

  function animeScroll(){
    var documentTop = $(document).scrollTop();

    $target.each(function(){
      var itemTop = $(this).offset().top;
      if(documentTop > itemTop - offset){
        $(this).addClass(animationClass);
      }else{
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(debounce(function(){
    animeScroll();
  },50));
}());

});
