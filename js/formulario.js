//Função para abrir o formulário.
$(function(){
  abrirJanela();
  function abrirJanela(){
    $('#btnContato').click(function(){
      $('.formulario').fadeIn();
      $('.cabecalho-contato').css('display','none');
      $('#btnContato').fadeOut();
    });
  }
});
