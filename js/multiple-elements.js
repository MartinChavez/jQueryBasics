$(document).ready(function () {

    /* Changing multiple elements at once */

    //You need to find all of them and modify their text

    $("li"); //returns a jQuery object of all <li>

    $("li").text("jQuery"); // This changes all elements at once

    /* Selectors: ID*/
    // You can use the id selector "#"
    $("#js-frameworks").text("jQuery selected by Id")

    /* Selectors: class*/
    // You can use the class selector "."
    $(".js-frameworks").text("jQuery selected by class")

});