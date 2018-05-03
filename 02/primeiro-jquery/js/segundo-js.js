$('#primeira').click(function(){
    $('#segunda').slideToggle();
});

$('li').hover(
    function(){
    $(this).find('.menu2').slideDown();
}, function(){
    $(this).find('.menu2').slideUp();
    }
);