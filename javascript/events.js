// ESCONDE E MOSTRA AS DIVS
$(document).ready(function() {
    $(".content").hide(); // Esconde todos os parágrafos
    $(".nav").on("click", function(e) {
        e.preventDefault(); // Evita que o link recarregue a página
        var targetDiv = $(this).attr("id"); // Índice do link clicado
        $(".content").hide(); // Esconde todos os parágrafos
        switch(targetDiv) {
            case "nav_comeceaqui":
                $("#content_comeceaqui").show();
                $("#content_comeceaqui p").css("display", "block");
                break;
            case "nav_blog":
                $("#content_blog").show();
                $("#content_blog p").css("display", "block");
                break;
            case "nav_materiais":
                $("#content_materiais").show();
                $("#content_materiais p").css("display", "block");
                break;
            case "nav_sobre":
                $("#content_sobre").show();
                $("#content_sobre p").css("display", "block");
                break;
        }
        $(".nav").removeClass("active"); // Remove a classe "active" de todos os links
        $(this).addClass("active"); // Adiciona a classe "active" ao link clicado
        var allElements = document.querySelectorAll(".nav"); //"cata" todos os menus
        for (var i = 0; i < allElements.length; i++) { 
            allElements[i].style.backgroundColor = "";
            allElements[i].style.color = "rgb(81, 81, 81)";
        } //remove a cor de fundo de todos os elementos com a classe "nav" antes de definir a cor de fundo do elemento ativo, ao clicar em outro elemento, o ultimo retorna visualmente a estilização
        var activeElement = document.querySelector(".nav.active");
        activeElement.style.backgroundColor = "#ffbd1f"; //altera a cor de fundo do elemento ativo
        activeElement.style.color = "white"; //altera a cor do texto do elemento ativo
    });

    $(window).on("resize", function() {
        var stars = `<span style="--i:${star}"></span>\n`;
        var star = 1;
        for(var i = 0; i <= window.innerWidth; i+=3){
            star = Math.floor(Math.random() * 20);
            stars.append(`<span style="--i:${star}"></span>\n`);
        }
        $("div.stars").html(stars);
    });
});