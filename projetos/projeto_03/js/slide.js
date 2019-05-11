/*SLIDE DA EQUIPE*/

$(function(){
  var delay = 3000;
  var curIndex = 0;
  var amt;
  initSlider();
  autoPlay();

  function initSlider(){
    amt = $('.sobre-autor').length;
    var sizeContainer = 100 * amt;
    var sizeBoxSingle = 100 / amt;
    $('.sobre-autor').css('width',sizeBoxSingle+'%');
    $('.scroll-wraper').css('width',sizeContainer+'%');

    for(var i = 0; i < amt; i++){
      if (i == 0){
        $('.slider-balls').append('<span style="background-color:rgba(170,170,170)"></span>')
      }else{
        $('.slider-balls').append('<span></span>')
      }
    }
  }

  function autoPlay(){
    setInterval(function(){
      curIndex++;
      if(curIndex == amt)
        curIndex = 0;
        goToSlider(curIndex);
    },delay)
  }

  function goToSlider(curIndex){
    var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
    $('.slider-balls span').css('background-color','rgb(200,200,200)');
    $('.slider-balls span').eq(curIndex).css('background-color','rgb(170,170,170)');

    $('.scrollEquipe').animate({'scrollLeft':offSetX+'px'});
  }


});
