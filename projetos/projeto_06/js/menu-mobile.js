$(function(){
  $('nav.mobile i').click(function(){
    var el = $(this).parent().find('ul');
    if (el.is(':visible') == false){
      el.fadeIn();
    }else{
      el.fadeOut();
    }
  })
})
