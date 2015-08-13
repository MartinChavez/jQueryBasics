<a name="README"><img src="https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg" width="300px" height="120px" /></a>
jQuery: Basics
================

A project aimed to help the user learn jQuery basic topics. Each unit contains a tutorial with concepts, examples and best practices.

Topics
================
 - Instalation and Setup
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

<h2>jQuery is mainly used for</h2>
<ul>
    <li>Finding elements in an HTML document</li>
    <li>Changing HTML content</li>
    <li>Listening for user interaction and changing behaviour depending on it</li>
    <li>Animating the content on the page</li>
    <li>Sending requests to servers and retrieving new content</li>
</ul>
```
Javascript and DOM
====================
```Javascript
/* Javascript and DOM */

// It is very important to understand that we need to make sure that the DOM has finished
// loading the HTML content before we can reliably use jQuery

// The following code will allow you to run jQuery once the DOM is ready
$(document).ready(function() {

    /*Retrieving an element's text*/

    //You can find any DOM element and it's text using this syntax:

    // text() is a method offered by jQuery
    $("h1").text(); //returns "jQuery Basics"

    //text() allows you to modify the text node
    $("h1").text("jQuery: Basics")

});
```
Modules
====================
```HTML
/* Modules */
/* Provide a way to write encapsulated functionality for the Angular application */
/* Promotes maintainability, testability and readability */
/* The dependencies of the application are defined on Modules*/
/* It is a good practice to split Modules around functionality*/

/* Enclosing Javascript in a Closure is a Good Practice*/
(function () {

  var app = angular/* AngularJS library*/
    /* Application Name*/
    .module('learnAngularApp',
    /* Dependencies*/
    [
      'app-directives',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
```
Filters
====================
```HTML
  <!-- Filters -->
  <!-- You can create filters with a pipe | -->
  <!-- Filters take the result of the first expression and send the output into the second expression -->
  <p>You can create filters with a pipe | </p>

  <p>Currency = {{ 5 | currency }} </p>

  <p>Currency = {{ 0 | currency }} </p>

  <p>Currency = {{ 1 | currency }} </p>
  <br/>

  <!-- Formatting with Filters -->
  <!-- You can specify a filter with the following syntax-->
  <!-- {{ data | filter:options }}-->
  <h1>Formatting with Filters </h1>

  <p>You can specify a filter with the following syntax { { data | filter:options } } </p>

  <p>Date = {{'06242015' | date:'MM/dd/yyyy' }} </p>

  <p>Lowercase = {{'LowerCase' | lowercase }} </p>

  <p>Uppercase = {{'UpperCase' | uppercase }} </p>

  <p>LimitTo = {{'abcdefghijklm' | limitTo:5 }} </p>
```
Expressions
====================
```HTML
<!-- Expressions -->
<!-- Allow you to insert dynamic values into the HTML-->
<div class="row marketing">
  <h4>Numerical Operations</h4>
  <p> 5 + 5 = {{ 5 + 5 }}</p>
  <h4>String Operations</h4>
  <p> {{ "String"}} {{ "Operations Example"}}</p>
</div>
```
Install
====================
```Terminal
npm install
bower install
```

Run and Play
====================
```Terminal
grunt serve
```
<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/AngularRunAndPlay.png" />

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
