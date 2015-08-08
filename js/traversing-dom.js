$(document).ready(function () {


    /* Descendant selector */
    // You can select all the elements inside a node

      //Parent  Descendant
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
});