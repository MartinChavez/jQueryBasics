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


    /* Mouse Events */
    // Some examples of listeners are: click, dbclick, focusin, focusout and mouseenter

    // mouseenter fires when the mouse is first positioned over the element
    $('.jquery').on('mouseenter','button', function(){
        $(this).closest('.jquery').find('.jqueryFrameworks').slideToggle();
    });

    /* Keyboard Events */
    // Some examples of listeners are: keypress, keydown, keyup
    $('input').on('keyup', function(){
        // Tip: If you add a '+' into a string, it converts it to a number
        // You can use val() to retrieve values from input fields
        var number = +$(this).val();
        $(this).next().text(number*number);
    });

    $('#hide-show').on('click', function(event){

        /* The Event Object */
        // Allows you to manipulate event propagation

        // event.stopPropagation()
        // Doesn't allow the event to move upwards the DOM tree
        event.stopPropagation();

        // event.preventDefault()
        // Prevents the default behaviour of events
        event.preventDefault();

        /* Fade */
        // There are three main jQuery Object methods for this: fadeIn(), fadeOut() and fadeToggle()
        $('#show-hide').fadeToggle();
    });
});