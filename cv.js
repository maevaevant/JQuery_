$(document).ready(function() {
    $('h1').click(function() {
        $('p').text('Bonjour!');
        $('#color').css('color', 'red');

    });
});
$("#id_d_un_div");
$("#formation").hide();

function cacher() {
    $("#formation").hide();
}

function afficher() {
    $("#formation").toggle();
}