$('div').html('teste');
$('p').addClass('selected');
$('button').attr('style', 'background-color: green');
$('div').attr('style', 'background-color: yellow');
$('a').attr('href', 'http://revistapolen.com');

$('#botao1').click(function(){
    alert('conseguiu?');
});

$('#pe').mouseenter(function(){
    $('#pe').html('Tchau');
});

$('.botao').click(function(){
    $(this).html('clicado');
});

$('input').focus(function(){
    $(this).css("background-color", "#87d18b");
});

$('input').focus(function(){
    $(this).css('border', '2px dotted #ffff00');
});

$('#hide').click(function(){
    $('#conteudo').hide();
});

$('#show').click(function(){
    $('#conteudo').show();
});

$('#ambos').click(function(){
    $('p').slideToggle();
});