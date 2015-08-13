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