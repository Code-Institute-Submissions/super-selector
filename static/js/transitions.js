// Show/hide sections based on button clicks

$(document).ready(function() {
    $('.choose-species').on('click', function() {
        $('#character-species').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
    });    
    $('.choose-gender').on('click', function() {
        $('#character-gender').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
    });
    $('.choose-alignment').on('click', function() {
        $('#character-alignment').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
    });
    $('.choose-costume').on('click', function() {
        $('#character-costume').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
    });
    $('.choose-power').on('click', function() {
        $('#character-power').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-info').addClass('hide');
    });
    $('.view-selection').on('click', function() {
        $('#character-info').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
    });
});