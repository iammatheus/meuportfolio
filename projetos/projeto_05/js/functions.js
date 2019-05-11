$(function(){
  //Pesquisa
  var currentValue = 0;//Valor padrão onde está a nossa barra de progresso.
  var isDrag = false;//Para ver se está pressionando o mouse ou não(arrastado).
  var preco_atual = 0;
  var precoMaximo = 70000;//Preço máximo


  function formatarTotal(preco_array){
    if(preco_array[0] < 1000){
      return preco_array[0]+','+preco_array[1];
    }else if(preco_array[0] < 10000){
      return preco_array[0][0]+'.'+preco_array[0].substr(1,preco_array[0].length)+','+preco_array[1];
    }else{
      return preco_array[0][0]+preco_array[0][1]+'.'+preco_array[0].substr(2,preco_array[0].length)+','+preco_array[1];
    }
  }

  function formatarPreco(preco_atual){
    preco_atual = preco_atual.toFixed(2);//toFixed() dentro dele você informa quantas casas decimais você quer que tenha.
    preco_array = preco_atual.split('.');//Delimitador(antes do ponto e depois do ponto)

    var novo_preco = formatarTotal(preco_array);
    return novo_preco;
  }

  function disableTextSelection(){//Desliga a seleção de texto quando apertarmos no botão da barra.
    $('body').css('-webkit-user-select','none');
    $('body').css('-moz-user-select','none');
    $('body').css('-ms-user-select','none');
    $('body').css('-o-user-select','none');
    $('body').css('user-select','none');
  }

  function enableTextSelection(){//Liga a seleção de texto quando soltarmos o botão da barra.
    $('body').css('-webkit-user-select','auto');
    $('body').css('-moz-user-select','auto');
    $('body').css('-ms-user-select','auto');
    $('body').css('-o-user-select','auto');
    $('body').css('user-select','auto');
  }

  //Quando apertar no botão da barra:
  $('.pointer-barra').mousedown(function(){
    isDrag = true;
  });

  //Quando soltar o botão da barra:
  $(document).mouseup(function(){
    isDrag = false;
    enableTextSelection();
  });

  //Quando arrastar o botão da barra:
  $('.barra-preco').mousemove(function(e){
    if(isDrag){
      disableTextSelection();
      var elBase = $(this);//Elemento base
      var mouseX = e.pageX - elBase.offset().left;//pega a posição do mouse(e.pageX) menos a largura do elemento base.

      if(mouseX < 0){//Se for menor que 0, ele recebe 0.
        mouseX = 0;
      }else if(mouseX > elBase.width()){//Se for maior que o elemento base, ele recebe o elemento base.Ou seja, não será maior que o elemento base.
        mouseX = elBase.width();
      }


      currentValue = (mouseX / elBase.width() * 100)//Para pegar o valor em porcentagem
      $('.barra-fill').css('width',currentValue+'%');//Ao mover o botão da barra receberá essas propriedades preenchendo a base.
      $('.pointer-barra').css('left',(mouseX - 6)+'px');//Pega o botão da barra e move ele conforme o tamanho da base.

      preco_atual = (currentValue/100) * precoMaximo;//100 / 100 = 1 * precoMaximo = 70.000,00.
      preco_atual = formatarPreco(preco_atual);
      $('.preco_pesquisa').html('R$'+preco_atual);//Muda o valor conforme o posicionamento do botão da barra.
    }
  });

 //Slide
  var imgShow = 3; //Quantas imagens irá aparecer
  var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
  var curIndex = 0;//valor atual

  initSlider();
  navigateSlider();
  clickSlider();
  function initSlider(){
    var amt = $('.mini-img-wraper').length * 33.3;
    var elScroll = $('.nav-galeria-wraper');
    var elSingle = ('.mini-img-wraper');
    $(elScroll).css('width',amt+'%');
    $(elSingle).css('width',33.3*(100/amt)+'%');
  }

  function navigateSlider(){
    $('.arrow-right-nav').click(function(){
      if(curIndex < maxIndex){
        curIndex++;
        var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
        $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
      }else{
        //console.log('Fim');
      }
    });

    $('.arrow-left-nav').click(function(){
      if(curIndex > 0){
        curIndex--;
        var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
        $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
      }else{
        //console.log('Fim');
      }
    });
  }

  function clickSlider(){
    $('.mini-img-wraper').click(function(){
      $('.mini-img-wraper').css('background-color','transparent');
      $(this).css('background-color','#ccc');
      var img = $(this).children().css('background-image');
      $('.foto-destaque').css('background-image',img);
    });
    $('.mini-img-wraper').eq(0).click();
  }


  //Clicar e ir para a div Contato
  var directory = '/Front-End/Front-End/Projetos/projeto_052/';
  $('[goto=contato]').click(function(){
    location.href=directory+'?contato';
    return false;
  });

  checkUrl();
  function checkUrl(){
    var url = location.href.split('/');
    var curPage = url[url.length-1].split('?');

    if(curPage[1] != undefined && curPage[1] == 'contato'){
      //$('header nav a').css('color','black');
      //$('footer nav a').css('color','white');
      $('[goto=contato]').css('color','#EB2D2D');
      $('html,body').animate({'scrollTop':$('#contato').offset().top});
    }else{
      $('nav a[href='+curPage[0]+']').css('color','#EB2D2D');
    }
  }

  //Menu mobile
  $('.mobile').click(function(){
    $(this).find('ul').slideToggle();
  });

  //Sistema de navegação dos depoimentos
  var amtDepoimento = $('.depoimentos p').length;
  var curIndex = 0;
  iniciarDepoimentos();
  navegarDepoimentos();

  function iniciarDepoimentos(){
    $('.depoimentos p').hide();
    $('.depoimentos p').eq(0).show();
  }

  function navegarDepoimentos(){
    $('[next]').click(function(){
      curIndex++;
      if(curIndex >= amtDepoimento)
        curIndex = 0;
        $('.depoimentos p').hide();
        $('.depoimentos p').eq(curIndex).show();
    });

    $('[prev]').click(function(){
      curIndex--;
      if(curIndex < 0)
        curIndex = amtDepoimento-1;
        $('.depoimentos p').hide();
        $('.depoimentos p').eq(curIndex).show();
    });
  }

});
