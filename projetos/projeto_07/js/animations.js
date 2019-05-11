$(function(){
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
  var $target = $('.anime-logo,.anime-li1,.anime-li2,.anime-li3,.anime-li4,.anime-btngrab,.anime-original,.anime-house,.anime-h2,.anime-slide-coffee1,.anime-slide-coffee2,.anime-customers'),
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
})
