$(document).ready(function() {

    var imgItems = $('.slider li').length;
    var imgPos = 1;

    //Agregando paginación
    for(i = 1; i <= imgItems; i ++){
        $('.pagination').append('<span class="fa fa-circle"></span>');
    }

    $('.slider li').hide(); //Ocultar todos los slider
    $('.slider li:first').show(); //Mostramos el primer slide
    $('.pagination span:first').css({'color':'orange'}); //Dar estilos al primer item de la paginación

    //Ejecutar todas las funciones
   $('.pagination span').click(pagination);
   $('.arrowRight span').click(nextSlider);
   $('.arrowLeft span').click(prevSlider);

    //funciones

    function pagination(){

        var paginationPos = $(this).index() + 1;

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostrar slide selecionado
        //Estilos a la paginación
        $('.pagination span').css({'color':'#00bda9'});
        $(this).css({'color':'orange'});
   }

    function nextSlider(){

        if (imgPos >= imgItems) {
            imgPos = 1;
        }else{
            imgPos++;
        }

        $('.pagination span').css({'color':'#00bda9'});
        $('.pagination span:nth-child('+ imgPos +')').css({'color':'orange'});

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }

    function prevSlider(){

      if (imgPos <= 1) {
          imgPos = imgItems;
      }else{
          imgPos--;
        }

        $('.pagination span').css({'color':'#00bda9'});
        $('.pagination span:nth-child('+ imgPos +')').css({'color':'orange'});
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
      }


});
