$(document).ready(function() {
    
    // Show Character Species section, hide others
    
    $('.choose-species').on('click', function() {
        $('#character-species').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
        window.scrollTo(0, 0);
    });
    
    // Show Character Gender section, hide others
    
    $('.choose-gender').on('click', function() {
        $('#character-gender').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
        window.scrollTo(0, 0);
    });
    
    // Show Character Alignment section, hide others
    
    $('.choose-alignment').on('click', function() {
        $('#character-alignment').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
        window.scrollTo(0, 0);
    });
    
    // Show Character Costume section, hide others
    
    $('.choose-costume').on('click', function() {
        $('#character-costume').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
        window.scrollTo(0, 0);
    });
    
    // Show Character Power section, hide others
    
    $('.choose-power').on('click', function() {
        $('#character-power').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-info').addClass('hide');
        window.scrollTo(0, 0);
    });
    
    // Show results section, hide others
    
    $('.view-selection').on('click', function() {
        $('#character-info').removeClass('hide');
        $('#intro').addClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        window.scrollTo(0, 0);
    });
    
    // Reset all, show intro section, hide others
    
    $('.reset-all').on('click', function() {
        $('#intro').removeClass('hide');
        $('#character-species').addClass('hide');
        $('#character-gender').addClass('hide');
        $('#character-alignment').addClass('hide');
        $('#character-costume').addClass('hide');
        $('#character-power').addClass('hide');
        $('#character-info').addClass('hide');
        window.scrollTo(0, 0);
    });
    
});