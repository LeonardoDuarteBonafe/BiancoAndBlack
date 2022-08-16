window.addEventListener("DOMContentLoaded", function () {

    var language = {
        eng: {
            index: {
                header_e_footer: {
                    materiais: "Materials",
                    bianco: "Bianco & Black",
                    contato: "Contact",
                },
                carousel_top: {
                    banner1: "SUPER WHITE",
                    banner2: "CRISTALLO LIGHT",
                    banner3: "",
                },
                informacao: "For amazing projects",
                slider_materiais: {
                    title: "OUR MATERIALS",
                    info: "VARIOUS SURFACES, MANY POSSIBILITIES",
                },
                produtos: {
                    produto1: "SPARKLING WHITE",
                    produto2: "DALLAS WHITE",
                    produto3: "VALENTINO WHITE",
                    produto4: "CALACATTA",
                    produto5: "CRISTALLO",
                    produto6: "CRISTALLO LIGHT",
                    produto7: "GRANITE UBATUBA GREEN",
                    produto8: "MARBLE ARABESQUE",
                    produto9: "MATARAZZO",
                    produto10: "SAINT GABRIEL",
                    produto11: "SUNSET",
                },
                carousel_bottom: {
                    inspiracoes: "INSPIRATIONS",  
                },
                empresa: {
                    title: "THE BIANCO & BLACK",
                    info: "BIANCO & BLACK IS IN THE ORNAMENTAL ROCKS SEGMENT, SINCE 2010, BRINGING THE BEST OF NATURE TO YOU. VALUING QUALITY AT EACH STAGE OF THE MARBLE AND GRANITE PRODUCTION PROCESS, BEING A REFERENCE IN THE MARKET, WITH A STRUCTURE PREPARED TO MEET THE DEMAND OF THE INTERNAL AND EXTERNAL MARKET WITH EXCELLENCE IN IMPROVEMENT. STANDING OUT FOR ITS ORIGINALITY AND ITS STRICT SELECTION PROCESS, GUARANTEING HIGH STANDARD OF QUALITY OF ITS PRODUCTS. <br> HISTORY IS BUILT EVERY DAY, TOGETHER WITH YOU THAT MAKE THAT HISTORY HAPPEN.",
                },
                form: {
                    fale_conosco: "Contact Us",
                    info: "Get in touch by filling out the form or by phone or email.",
                    seu_nome: "Your name (required)",
                    seu_email: "Your email (required)",
                    assunto: "Subject",
                    sua_mensagem: "Your message",
                    enviar: "Sent",
                },
                footer: {
                    inicio: "Home",
                    empresa: "Company",
                },
            },
            produtos: {
                //nome das galerias
            },
        },
    };

    var pageLanguage = localStorage.getItem("language");
    if(pageLanguage == "eng"){
        //header
        $('.nav-list').children("li").eq(0).children("a").text(language.eng.index.header_e_footer.materiais);
        $('.nav-list').children("li").eq(1).children("a").text(language.eng.index.header_e_footer.bianco);
        $('.nav-list').children("li").eq(2).children("a").text(language.eng.index.header_e_footer.contato);

        //carousel-top
        $('.carousel-top .carousel-inner').children("div").eq(0).children("p").text(language.eng.index.carousel_top.banner1);
        $('.carousel-top .carousel-inner').children("div").eq(1).children("p").text(language.eng.index.carousel_top.banner2);
        $('.carousel-top .carousel-inner').children("div").eq(2).children("p").text(language.eng.index.carousel_top.banner3);

        //informacao
        $('.informacao h2').text(language.eng.index.informacao);

        //slider materiais
        $('.materiais .info h1').text(language.eng.index.slider_materiais.title);
        $('.materiais .info p').text(language.eng.index.slider_materiais.info);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(0).children("p").text(language.eng.index.produtos.produto1);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(1).children("p").text(language.eng.index.produtos.produto2);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(2).children("p").text(language.eng.index.produtos.produto3);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(3).children("p").text(language.eng.index.produtos.produto4);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(4).children("p").text(language.eng.index.produtos.produto5);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(5).children("p").text(language.eng.index.produtos.produto6);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(6).children("p").text(language.eng.index.produtos.produto7);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(7).children("p").text(language.eng.index.produtos.produto8);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(8).children("p").text(language.eng.index.produtos.produto9);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(9).children("p").text(language.eng.index.produtos.produto10);
        $('.materiais .swiper-container .swiper-wrapper').children("div").eq(10).children("p").text(language.eng.index.produtos.produto11);

        //carousel bottom
        $('.carousel-bottom .item p').text(language.eng.index.carousel_bottom.inspiracoes);

        //empresa
        $('.empresa .info h1').text(language.eng.index.empresa.title);
        $('.empresa .info p').html(language.eng.index.empresa.info);

        //form
        $('.contato .info h1').text(language.eng.index.form.fale_conosco);
        $('.contato .info').children("p").eq(1).text(language.eng.index.form.info);
        $('.contato .form').children("div").eq(0).children("p").text(language.eng.index.form.seu_nome);
        $('.contato .form').children("div").eq(1).children("p").text(language.eng.index.form.seu_email);
        $('.contato .form').children("div").eq(2).children("p").text(language.eng.index.form.assunto);
        $('.contato .form').children("div").eq(3).children("p").text(language.eng.index.form.sua_mensagem);
        $('.contato .form button').text(language.eng.index.form.enviar);

        //footer
        $('footer .info').children("a").eq(0).text(language.eng.index.footer.inicio);
        $('footer .info').children("a").eq(1).text(language.eng.index.header_e_footer.materiais);
        $('footer .info').children("a").eq(2).text(language.eng.index.header_e_footer.bianco);
        $('footer .info').children("a").eq(3).text(language.eng.index.header_e_footer.contato);
        $('footer .endereco h4').text(language.eng.index.footer.empresa);

        //page product
        //materiais
        $('.page-product .materiais').children("div").eq(0).children("div").children("p").text(language.eng.index.produtos.produto1);
        $('.page-product .materiais').children("div").eq(0).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto1);
        $('.page-product .materiais').children("div").eq(1).children("div").children("p").text(language.eng.index.produtos.produto2);
        $('.page-product .materiais').children("div").eq(1).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto2);
        $('.page-product .materiais').children("div").eq(2).children("div").children("p").text(language.eng.index.produtos.produto3);
        $('.page-product .materiais').children("div").eq(2).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto3);
        $('.page-product .materiais').children("div").eq(3).children("div").children("p").text(language.eng.index.produtos.produto4);
        $('.page-product .materiais').children("div").eq(3).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto4);
        $('.page-product .materiais').children("div").eq(4).children("div").children("p").text(language.eng.index.produtos.produto5);
        $('.page-product .materiais').children("div").eq(4).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto5);
        $('.page-product .materiais').children("div").eq(5).children("div").children("p").text(language.eng.index.produtos.produto6);
        $('.page-product .materiais').children("div").eq(5).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto6);
        $('.page-product .materiais').children("div").eq(6).children("div").children("p").text(language.eng.index.produtos.produto7);
        $('.page-product .materiais').children("div").eq(6).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto7);
        $('.page-product .materiais').children("div").eq(7).children("div").children("p").text(language.eng.index.produtos.produto8);
        $('.page-product .materiais').children("div").eq(7).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto8);
        $('.page-product .materiais').children("div").eq(8).children("div").children("p").text(language.eng.index.produtos.produto9);
        $('.page-product .materiais').children("div").eq(8).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto9);
        $('.page-product .materiais').children("div").eq(9).children("div").children("p").text(language.eng.index.produtos.produto10);
        $('.page-product .materiais').children("div").eq(9).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto10);
        $('.page-product .materiais').children("div").eq(10).children("div").children("p").text(language.eng.index.produtos.produto11);
        $('.page-product .materiais').children("div").eq(10).children("div").children("a").eq(0).attr('data-title', language.eng.index.produtos.produto11);

    }

    $('.language').click(function(){
        localStorage.setItem("language", $(this).attr('id'));
        setTimeout(function () {
            location.reload(true);
        }, 150)
    });

    var urlFacebook = "https://pt-br.facebook.com/";
    var urlInstagram = "https://www.instagram.com/biancoblack__/";
    var urlWhatsapp = "https://api.whatsapp.com/send?phone=5528999560856&text=Ol%C3%A1,%20tenho%20interesse%20no(s)%20seu(s)%20produto(s)!";
    var urlLinkedin = "https://br.linkedin.com/";

    $(function(){
        if($('body').is('.index-page')){
            localStorage.setItem("clickedMaterial", "false");
        }
    });


    class MobileNavbar{
        constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";

            this.handleClick = this.handleClick.bind(this);
        }

        animateLinks(){
            this.navLinks.forEach((link, index) => {
                link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`);
            });
        }

        handleClick(){
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animateLinks();
        }

        addClickEvent(){
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        init(){
            if(this.mobileMenu){
                this.addClickEvent();
            }
        }
    }

    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );

    mobileNavbar.init();

    var gallery_swiper = new Swiper(".gallery-swiper", {
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.gallery-banner img').click(function(){
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "produtos.php";
    });

    $('.empresa .imagens .pequenas img').click(function(){
        var imageGrandeId = $('.empresa .imagens .grande img').attr('id');
        $('.empresa .imagens .grande img').attr('id', $(this).attr('id'));
        $('.empresa .imagens .grande img').attr('src', 'Images/Index/Empresa/imagem' + $(this).attr('id') + ".webp");

        $(this).attr('id', imageGrandeId);
        $(this).attr('src', 'Images/Index/Empresa/imagem' + imageGrandeId + ".webp");
    });

    $('.send-form').click(function(){
        getFormInfos();
    });

    function getFormInfos(){
        var emailMessage = "";

        var name = document.querySelector('#nome').value;
        var email = document.querySelector('#email').value;
        var phone = document.querySelector('#assunto').value;
        var message = document.querySelector('#mensagem').value;

        emailMessage += "Name: " + name + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Phone: " + phone + ". <br>";
        emailMessage += "Message: " + message + ". <br>";
        if(name === "" || email === ""){
            document.getElementsByName('nome')[0].placeholder='Por favor, coloque seu NOME!';
            document.getElementsByName('email')[0].placeholder='Por favor, coloque seu EMAIL!';
        }
        else{
            sendEmail(name, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'ldbmaildealer@gmail.com',
            Password: "jzkocqnlqfdoeuhr",
            To: `leo_nardo136@hotmail.com`,
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} has interest in your product`,
            Body: `${message}`,
        }).then(function(message){
            var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){
                alert("Your email was sent successfully");
            }
            else{
                alert("Seu email foi enviado com sucesso");
            }
            window.location.reload(false); 
        }); 
    } 

    $('.facebook').click(function(){
        window.open(urlFacebook, '_blank').focus();
    })

    $('.instagram').click(function(){
        window.open(urlInstagram, '_blank').focus();
    })

    $('.whatsapp').click(function(){
        window.open(urlWhatsapp, '_blank').focus();
    })

    $('.linkedin').click(function(){
        window.open(urlLinkedin, '_blank').focus();
    })

    //page-product{

    $(function(){
        if($('body').is('.product-page')){
            var nameMaterial = localStorage.getItem("nameMaterial");
            var clickedMaterial = localStorage.getItem("clickedMaterial");
            if(clickedMaterial == "true"){
                jQuery(function(){
                    jQuery('#' + nameMaterial).click();
                    localStorage.setItem("clickedMaterial", "false");
                });
            }
        }
    });
});