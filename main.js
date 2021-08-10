window.addEventListener("DOMContentLoaded", function () {

    var urlFacebook = "https://pt-br.facebook.com/";
    var urlInstagram = "https://www.instagram.com/";
    var urlWhatsapp = "https://web.whatsapp.com/";
    var urlLinkedin = "https://br.linkedin.com/";
    
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

    /*function menuToggle(){
    }*/

    var gallery_swiper = new Swiper(".gallery-swiper", {
        /*effect: "coverflow",*/
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        /*coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 00,
            modifier: 0,
            slideShadows: false,
        },*//*
        loop: true,*/
        /*
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },*/
    });

    $(".gallery-swiper").mouseenter(function() {
        gallery_swiper.autoplay.stop();
        console.log('slider stopped');
    });

    $(".gallery-swiper").mouseleave(function() {
        gallery_swiper.autoplay.start();
        console.log('slider started again');
    });
    
    $('.gallery-banner img').click(function(){
        console.log("clicado: " + $(this).attr('id'));
        
        window.location.href = "result.html";
    });
    
    $('.empresa .imagens .pequenas img').click(function(){
        console.log("clicado: " + $(this).attr('id'));
        var imageGrandeId = $('.empresa .imagens .grande img').attr('id');
        $('.empresa .imagens .grande img').attr('id', $(this).attr('id'));
        $('.empresa .imagens .grande img').attr('src', 'Images/Empresa/imagem' + $(this).attr('id') + ".png");
        
        $(this).attr('id', imageGrandeId);
        $(this).attr('src', 'Images/Empresa/imagem' + imageGrandeId + ".png");
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
            //To: `${email}`,
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
});