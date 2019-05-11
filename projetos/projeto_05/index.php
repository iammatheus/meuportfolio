<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Projeto 05</title>
	<link rel="shortcut icon" type="image-x/png" href="images/icon-rm-veiculos.ico">
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes">
	<meta name="description" content="Site fictício para portfolio">
	<meta name="keywords" content="portfolio,mostruario,site,fictício,projeto">
	<meta name="author" content="Matheus Ferreira Siqueira">
</head>
<body>
	<header style="border-bottom:3px solid #EB2D2D">
		<div class="container">
			<div class="logo">
				<img src="images/sualogo.png" alt="">
			</div><!--logo-->

			<nav class="desktop">
				<ul>
					<li><a href="home">Home</a></li>
					<li><a href="venda">Venda</a></li>
					<li><a href="sobre">Sobre</a></li>
					<li><a goto="contato" href="">Contato</a></li>
				</ul>
			</nav><!--desktop-->
			<nav class="mobile">
				<ul>
					<li><a href="home">Home</a></li>
					<li><a href="venda">Venda</a></li>
					<li><a href="sobre">Sobre</a></li>
					<li><a goto="contato" href="">Contato</a></li>
				</ul>
			</nav><!--mobile-->
			<div class="clear"></div>
		</div><!--container-->
	</header>

<?php
  if(isset($_GET['url'])){
    if(file_exists($_GET['url']).'.html'){
      include($_GET['url'].'.html');
    }else{
      include('erro.html');
    }
  }else{
    include('home.html');
  }
?>

<footer>
  <div class="container">
    <nav>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="venda">Venda</a></li>
        <li><a href="sobre">Sobre</a></li>
        <li><a goto="contato" href="">Contato</a></li>
      </ul>
    </nav>
    <p>&copy; Todos os direitos reservados<br><a href="https://www.meuportfolio.ml">Acessar Portfólio</a></p>
    <div class="clear"></div>
  </div><!--container-->
</footer>

<script src="js/jquery.js"></script>
<script src="js/functions.js"></script>
</body>
</html>
