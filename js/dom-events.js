$(document).ready(function () {

    /* DOM Events */

    // slideDown() - will show an element with an effect
    // slideUp() - will hide an element with an effect
    // slideToggle() - will show and hide an element with an effect
    $('.jquery').on('click','button', function(){
        $(this).closest('.jquery').find('.jqueryFrameworks').slideDown();
    });

    // Tip: You can know how many instances did the jquery selector found with the 'length' property
    $('p').text($('p').length);
});