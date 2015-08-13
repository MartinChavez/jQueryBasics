<a name="README"><img src="https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg" width="300px" height="120px" /></a>
jQuery: Basics
================

A project aimed to help the user learn the basic topics of jQuery. Each unit contains a tutorial with concepts, examples and best practices.

Topics
================
 - Installation and Setup
 - Javascript and DOM
 - DOM Manipulation
 - DOM Interaction
 - DOM Events
 - Mouse Events
 - Keyboard Events
 - The Event Object
 - Filter Selectors
 - Descendant Selectors
 - Traversing DOM
 - Class Manipulation
 - HTML5 Data Attributes
 - Styling
 - Reusability
 - Animations
 - Best Practices
 
Suggested prerequisites
====================
<a name="learnJavascript">[<img src="https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67" width="50px" height="50px" />](https://github.com/MartinChavez/Javascript)</a>
<a name="README">[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png" width="50px" height="50px" />](https://github.com/MartinChavez/HTML-CSS)</a>

Installation
====================
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Basics</title>
    <!-- In order to use jQuery, you need to load it with a script tag -->
    <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="js/basics.js"></script>
</head>
<body>
<h1>jQuery Basics</h1>

<h2>jQuery is mainly used for: </h2>
<ul>
    <li>Finding elements in an HTML document</li>
    <li>Changing HTML content</li>
    <li>Listening for user interaction and changing behaviour depending on the input</li>
    <li>Animating the content on the page</li>
    <li>Sending requests to servers and retrieving new content</li>
</ul>
```
Javascript and DOM
====================
```Javascript
/* Javascript and DOM */

// It is very important to make sure that the DOM has finished
// loading the HTML content before we can reliably use jQuery

// The following code will allow you to run jQuery once the DOM is ready
$(document).ready(function() {

    /* Retrieving an element's text */

    //You can find any DOM element and it's text using this syntax:
    // text() is a method offered by jQuery
    $("h1").text(); //returns "jQuery Basics"

    //text() allows you to modify the text node
    $("h1").text("jQuery: Basics")

});
```
Changing multiple elements at once 
====================
```Javascript
$(document).ready(function () {

    /* Changing multiple elements at once */

    // It is possible to find all elements of the same type and modify their text
    $("li"); //returns a jQuery object of all <li>
    $("li").text("jQuery"); // This changes all elements at once

    /* Selectors: ID*/
    // You can use the id selector "#"
    $("#js-frameworks").text("jQuery selected by Id")

    /* Selectors: class*/
    // You can use the class selector "."
    $(".js-frameworks").text("jQuery selected by class")
});
```

Traversing DOM
====================
```Javascript
$(document).ready(function () {

    /* Descendant selector */
    // You can select all the elements inside a node

    // Parent  Descendant
    $("#js-frameworks li").text("jQuery");

    // The descendant selector finds all the children (and their children) of the given condition

    /* Child selector */
    // It is used to only select the direct descendants
    $("#js-frameworks  > li").text("jQuery: Direct descendants");

    /* Selecting multiple items */
    // You can use a comma to select several nodes at once
    $("#angular-two, .angular").text("jQuery: Multiple selector");

    /* Pseudo selectors */
    // You can use CSS pseudo classes to achieve this
    $("#js-frameworks li:first").text("jQuery: First element");
    $("#js-frameworks li:last").text("jQuery: Last element");
    // Index starts at 0
    $("#js-frameworks li:odd").text("jQuery: Odd elements");


    /* Traversing */
    // It is faster to find elements in the DOM using this method

    // The first part is called 'selection'
    // The second part is called 'traversal'
    $("#js-frameworks-traversing").find("li").text("jQuery: traversing");

    /* Filtering by traversing */
    // You can use jQuery methods to achieve this
    $("#js-frameworks-traversing").find("li").first().text("First");
    $("#js-frameworks-traversing").find("li").last().text("Last");

    /* Walking the DOM */

    // You can use method chaining the manipulate specific DOM elements
    // These methods are: next(),prev(),parent() and children()
    $("#js-frameworks-traversing").find("li").first().next().text("Second");
    $("#js-frameworks-traversing").find("li").first().next().prev().text("First");
    $("#js-frameworks-traversing").find("li").parent();
    // Children() is more specific than Find() since it only finds the direct children nodes
    $("#js-frameworks-traversing").children("li");
});

```

DOM Manipulation
====================
```Javascript
$(document).ready(function () {

    /* DOM Manipulation */
    // Appending HTML to the DOM

    var paragraph = $("<p>This paragraph was generated by jQuery</p>");

    // The following are the main methods to manipulate the DOM via jQuery:

    // before() adds the node just before the selector
    $(".html-generated").before(paragraph);

    // after() adds the node just after the selector
    $(".html-generated").after(paragraph.clone());

    // prepend() adds the node to the top of the selector
    var jquery = $("<li>jQuery-generated</li>");
    $("ul").prepend(jquery);

    // append() adds the node to the bottom of the selector
    $("ul").append(jquery.clone());

    // remove() removes the element from the DOM
    $("ul").children().last().prev().remove();

    // closest() finds the closest element (going up) that fits the selector
    $("ul").closest('.frameworks').append(jquery.clone());

    /* Interaction */

    // the .ready() method receives an event handler function as an argument
    // You can pass in a function that will be executed once the event gets triggered

    // The syntax is the following :
                 //event   event handler
    $('input').on('click', function(){
        // This is executed when the button is clicked
        $("ul").append(jquery.clone());
    });

    // It is a good practice to use event-delegation
    // It allows to only target certain elements that are inside a given selector
    $('div').on('click','input', function(){
        $("ul").append("<input type='button' value='button'/>");
    });

    // 'this' keyword allows to act on the item that triggered the event
    $('#removed-button').on('click', function(){
        // You need to convert 'this' to a jQuery Object
        $(this).remove();
    });

    /* data Tag */
    // It is an HTML5 attribute that you can use to provide more information to the elements of your page

    //This jQuery Object method retrieves the data information
    var data = $(".data").data("value");
    $(".data").text(data);

    //This jQuery Object method sets the data information
    $(".data").data("value" , "jQuery set this paragraph");


    /* Reusing jQuery Objects */
    // It is a good practice to reuse selectors, it may be significantly faster
    // Note: During this tutorial we will not enforce this practice for the sake of clarity

    $(".html-generated").before(paragraph);
    $(".html-generated").after(paragraph.clone());

    // can be refactored into
    var htmlGenerated = $(".html-generated");
    htmlGenerated.before(paragraph);
    htmlGenerated.after(paragraph.clone());


    /* Filter selector */

    // filter() finds elements and adds granularity to the query
    // Filter is generally preferred (performance improvements and readability) over CSS selectors
    $(".america").filter(".south").hide();
    $(".america").filter(".south").show();

    /* Class manipulation */
    // jQuery allows to add and remove classes with addClass() and removeClass()
    $(".america").filter(".north").addClass('strong');
    $(".america").filter(".north").removeClass('strong');

});
```

DOM Events
====================
```Javascript
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
```
Styling and Animations
====================
```Javascript
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
```

Run and Play
====================
```Terminal
Open the .html and .js files and start interacting!
```
<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/jqueryBasics.png" />

Questions ?
====================
If you have any questions, please feel free to ask me:
[Martin Chavez Aguilar](mailto:martin.chavez@live.com)

Contributors
====================
* [Martin Chavez Aguilar](http://martinchavezaguilar.com/) - Wrote the project

References
====================
* [Code School](https://www.codeschool.com/)
