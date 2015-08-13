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