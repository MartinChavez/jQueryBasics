$(document).ready(function () {

    /* Styling */
    // You can set and retrieve the css of a given element with the following methods :
    // css(<attr>,<value>), css(<attr>) and css(<value>)

    $('li').on('click', function(){

        $(this).css('background-color',"#252B30");

        /* Best Practice*/
        // When you need to add several styles to the same element, you can send a Javascript object with
        // all the styles
        $(this).css({
            'background-color':'#252B30',
            'color':'white'
        });


        /* Showing and Hiding elements */
        // This method is easier to use than changing the style properties of the elements

        // show() will change the style of the element to display: block
        // hide() will change the style of the element to display: none
        $('p').hide();
    });

    /* Best Practice */
    // In general, you would want to leave all the css on the css files and add and remove classes
    // You can use toggleClass(), addClass() hasClass() and removeClass()
    $('li').first().addClass('colorful');

    // hasClass() is very helpful when defining behavior that depends on the UI state
    if($('li').hasClass('colorful')){
        $('li').first().addClass('colorless');
    }


    /* Animations */
    // You can add movement to elements by using the animate(<object>) method
    $('img').on('click', function(){
        $(this).animate({'height':'400px'});

        // You can specify the speed of the animation by passing a second argument to animate()
        // It accepts 'fast' which would be 200ms
        // It accepts 'slow' which would be 600ms
        $(this).animate({'height':'200px'}, 'fast');
        $(this).animate({'height':'400px'}, 'slow');
    });

});