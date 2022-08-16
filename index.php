<!doctype html>
<html lang="en">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="style.css" rel="stylesheet">
    <script type="text/javascript" src="main.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" >

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <link rel="icon" href="Images/Index/Site-Icon/site-icon.webp">
    <title>Bianco e Black</title>

    <body class="index-page">

        <?php 
        include 'php/header.html';
        ?>

        <div id="carousel-top" class="carousel slide carousel-top" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel-top" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-top" data-slide-to="1"></li>
                <li data-target="#carousel-top" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="Images/Index/Carousel-Top/banner1.webp">
                    <p>SUPER WHITE</p>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="Images/Index/Carousel-Top/banner2.webp">
                    <p>CRISTALLO LIGHT</p>
                </div>
                <div class="carousel-item outubro-rosa">
                    <img class="d-block w-100" src="Images/Index/Carousel-Top/banner3.webp">
                    <p></p>
                </div>
            </div>
        </div>

        <div class="informacao">
            <h2>Para projetos incríveis</h2>
        </div>

        <!--materiais-->
        <div class="materiais" id="materiais">
            <img src="Images/Index/Swiper/fundo.webp" class="background">
            <div class="info">
                <h1>NOSSOS MATERIAIS</h1>
                <p>VÁRIAS SUPERFÍCIES, INÚMERAS POSSIBILIDADES</p>
            </div>
            <div class="swiper-container gallery-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide gallery-banner" id="1">
                        <img src="Images/Index/Swiper/branco-cintilante.webp" id="01">
                        <p>Branco Cintilante</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="2">
                        <img src="Images/Index/Swiper/branco-dallas.webp" id="02">
                        <p>Branco Dallas</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="3">
                        <img src="Images/Index/Swiper/branco-valentino.webp" id="03">
                        <p>Branco Valentino</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="4">
                        <img src="Images/Index/Swiper/calacatta.webp" id="04">
                        <p>Calacatta</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="5">
                        <img src="Images/Index/Swiper/cristallo.webp" id="05">
                        <p>Cristallo</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="6">
                        <img src="Images/Index/Swiper/cristallo-light.webp" id="06">
                        <p>Cristallo Light</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="7">
                        <img src="Images/Index/Swiper/granito-verde-ubatuba.webp" id="07">
                        <p>Granito Verde Ubatuda</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="8">
                        <img src="Images/Index/Swiper/marmore-arabescato.webp" id="08">
                        <p>Mármore Arabescato</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="9">
                        <img src="Images/Index/Swiper/matarazzo.webp" id="09">
                        <p>Matarazzo</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="10">
                        <img src="Images/Index/Swiper/sao-gabriel.webp" id="10">
                        <p>Sao Gabriel</p>
                    </div>
                    <div class="swiper-slide gallery-banner" id="11">
                        <img src="Images/Index/Swiper/sunset.webp" id="11">
                        <p>Sunset</p>
                    </div>
                </div>
                
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>

            </div>
        </div>

        <div class="carousel-bottom">
            <div class="item">
                <img src="Images/Index/Carousel-Bottom/banner1.webp">
                <p class="info">INSPIRAÇÕES</p>
                <p class="produto">MATARAZZO</p>
            </div>
        </div>

        <div class="empresa" id="empresa">
            <img src="Images/Index/Empresa/fundo.webp" class="fundo">
            <div class="imagens">
                <div class="grande">
                    <img src="Images/Index/Empresa/imagem1.webp" id="1">
                </div>
                <div class="pequenas">
                    <img src="Images/Index/Empresa/imagem2.webp" id="2">
                    <img src="Images/Index/Empresa/imagem3.webp" id="3">
                    <img src="Images/Index/Empresa/imagem4.webp" id="4">
                </div>
            </div>
            <div class="info">
                <h1>A BIANCO E BLACK</h1>
                <p>
                    A Bianco e Black está no segmento de rochas ornamentais, desde 2010, trazendo o melhor da natureza até você. Valorizando a qualidade em cada etapa do processo da produção de mármore e granito, sendo referencia no mercado, com uma estrutura preparada para atender a demanda do mercado interno e externo com excelência no beneficiamento.  Destacando-se por sua originalidade e por seu rigoroso processo de seleção, garantindo alto padrão de qualidade de seus produtos.<br> 
                    A história é construída a cada dia, junto a você que faz essa história acontecer. 

                </p>
            </div>
        </div>

        <?php 
        include 'php/form.html';
        include 'php/maps.html';
        include 'php/footer.html';
        ?>
    </body>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
</html>