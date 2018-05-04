$(document).ready(function (){

    $('#perfil').hover(
        function(){
            $(this).find('.menu2').slideDown();
    },  function() {
            $(this).find('.menu2').slideUp();
        }
    );
    
    $('#mostrarP').click(function(){
        $('#invisivel').slideToggle();
    });

    function validar () {
        if ($('#nome').val().length > 1 &&
            $('#idade').val().length > 0) {
                $('#enviar').removeAttr('disabled');
            }
    };

    $('#nome, #idade').keyup(validar);

    $('a').click(function (){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    $('button[href="#top"]').click(function(){
        $('html, body').animate({
            scrollTop: 0}, "slow");
    });

    $('#clock').countdown('2018/10/10', function (event) {
        $(this).html(
            event.strftime('%D dias %H horas %Mmin e %Ss')
        );
    });

});

