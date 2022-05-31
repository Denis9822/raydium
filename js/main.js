$('#about-menu .menu').click(function() {
    $('#about-menu .menu').removeClass('active');
    $(this).addClass('active');
    let id = $(this).attr('id');
    $('.img-desc').removeClass('active');
    $('.' + id).addClass('active');
})


function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}
let cpyTemp = $('.contract-text').text();
$('.MuiButtonBase-root').click(function() {
    $('.contract-text').text('Скопировано');
    setInterval(function() {
        $('.contract-text').text(cpyTemp);
    }, 600);
})

$('.menu-icon').click(function() {
    $('.nav-menu').toggleClass('active');
    $(this).children('i').toggleClass('fa-times');
})