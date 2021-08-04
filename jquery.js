//!---------------------------------JQUERY EVENTS----------------------------------------
//When the HTML document has been loaded and you can manipulate it
let jquerye1 = `<pre>$(document).ready(function(){})</pre><a class="link" target="_blank" href="https://api.jquery.com/ready/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

//When an HTML item has been clicked
let jquerye2 = `<pre>$('#jquery').on("click", function(){$('#jquery').css("background-color", "#0865a6")})</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
function jquerye2e() {$('#jquery').on("click", function(){$('#jquery').css("background-color", "#0865a6")})}

//When an HTML item has been double clicked
let jquerye3 = `<pre>$(element).on( "dblclick", function(){})</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
function jquerye3e() {$('#jquery').on("dblclick", function(){$('#jquery').css("background-color", "#0865a6")})}

//User presses a key on the keyboard
let jquerye4 = `<pre>$(element).on( "keydown", function(){})</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
function jquerye4e() {$('#jquery').on("keydown", function(){$('#jquery').css("background-color", "#0865a6")})}

//User moves the mouse cursor
let jquerye5 = `<pre>$(element).on( "mousemove", function(){})</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
function jquerye5e() {$('#jquery').on("mousemove", function(){$('#jquery').css("background-color", "#0865a6")})}

//User changes a value of an text input
let jquerye6 = `<pre>$(element).on( "change", function(){})</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
function jquerye6e() {$('#jquery').on("change", function(){$('#jquery').css("background-color", "#0865a6")})}

//An image is loaded
let jquerye7 = `<pre>$('#example').on("load", alert("Hello by Jquery"))</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
function jquerye7e() {$('#example').on("load", alert("Hello by Jquery"))}

//let vanilla = document.getElementById('example'); vanilla.addEventListener("error", alert("Img error by Vanilla"))
let jquerye8 = `<pre>$('#example').on("error", alert("Img error by Jquery")))</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
function jquerye8e() {$('#example').on("error", alert("Img error by Jquery"))}

//Form is submitted
let jquerye9 = `<pre>$(element).on( "submit", function(){})</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

//User changes the option of a select
let jquerye10 = `<pre>$(element).on( "change", function(){})</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

//Position the mouse over an element
let jquerye11 = `<pre>$(element).on( "mouseover", function(){} )</pre><a class="link" target="_blank" href="https://api.jquery.com/on/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

//A checkbox is checked or unchecked
let jquerye12 = `<pre>$("input[type=checkbox]").prop(":checked"))</pre><a class="link" target="_blank" href="https://api.jquery.com/val/#val"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

//A ul list item is clicked, show the item that was clicked
let jquerye13 = `<pre>$("ul li").on( "click", function(){$(this).show()})</pre><a class="link" target="_blank" href="https://api.jquery.com/ready/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;


//JQUERY FUNCTIONS

let jqueryf1 = `<pre>$("&lt;tag&gt;&lt;/tag&gt;").text(textContent)</pre><a class="link" target="_blank" href="https://api.jquery.com/text/#text"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf2 = `<pre>$(element).remove()</pre><a class="link" target="_blank" href="https://api.jquery.com/remove/#remove-selector"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf3 = `<pre>$(parent).append($(child))</pre><a class="link" target="_blank" href="https://api.jquery.com/append/#append-content-content"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf4 = `<pre>$(parent).prepend($(child))</pre><a class="link" target="_blank" href="https://api.jquery.com/prepend/#prepend-content-content"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf5 = `<pre>$(referenceElement).after($("&lt;tag&gt;&lt;/tag&gt;").text(textContent))</pre><a class="link" target="_blank" href="https://api.jquery.com/after/#after-content-content"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf6 = `<pre>$(referenceElement).before($("&lt;tag&gt;&lt;/tag&gt;").text(textContent))</pre><a class="link" target="_blank" href="https://api.jquery.com/before/#before-content-content"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf7 = `<pre>$(element).clone()</pre><a class="link" target="_blank" href="https://api.jquery.com/clone/#clone-withDataAndEvents"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf8 = `<pre>$(element).addClass(className)</pre><a class="link" target="_blank" href="https://api.jquery.com/addClass/#addClass-className"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf9 = `<pre>$(element).removeClass(className)</pre><a class="link" target="_blank" href="https://api.jquery.com/removeClass/#removeClass-className"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf10 = `<pre>$(element).toggleClass(className)</pre><a class="link" target="_blank" href="https://api.jquery.com/toggleClass/#toggleClass-className"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf11 = `<pre>$(element).attr("disabled", "true")</pre><a class="link" target="_blank" href="https://api.jquery.com/attr/#attr-attributeName"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf12 = `<pre>$(element).removeAttr()</pre><a class="link" target="_blank" href="https://api.jquery.com/removeAttr/#removeAttr-attributeName"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf13 = `<pre>$(element).data("data-src", value )</pre><a class="link" target="_blank" href="https://api.jquery.com/data/#data-key-value"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jqueryf14 = `<pre>$(element).removeData("data-src"),removeAttr("data-src")</pre><a class="link" target="_blank" href="https://api.jquery.com/removeData/#removeData-name"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

//JQUERY SELECTORS

let jquerys1 = `<pre>$(element).hide()</pre><a class="link" target="_blank" href="https://api.jquery.com/hide/#hide"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys2 = `<pre>$(element)).show()</pre><a class="link" target="_blank" href="https://api.jquery.com/show/#show"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys3 = `<pre>$(element)).fadeIn()</pre><a class="link" target="_blank" href="https://api.jquery.com/fadeIn/#fadeIn-duration-complete"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys4 = `<pre>$(element)).fadeIn()</pre><a class="link" target="_blank" href="https://api.jquery.com/fadeOut/#fadeOut-duration-complete"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys5 = `<pre>$(element)).each().css()</pre><a class="link" target="_blank" href="https://api.jquery.com/each/#each-function"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys6 = `<pre>$(element).parent().css("font-weight", "bold")</pre><a class="link" target="_blank" href="https://api.jquery.com/parent/#parent-selector"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys7 = `<pre>$("element")).find().css("font-weight", "bold")</pre><a class="link" target="_blank" href="https://api.jquery.com/find/#find-selector"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys8 = `<pre>$(".className")).css("font-weight", "bold")</pre><a class="link" target="_blank" href="https://api.jquery.com/class-selector/"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys9 = `<pre>$("#id")).css("font-weight", "bold")</pre><a class="link" target="_blank" href="https://api.jquery.com/id-selector/" alt="logo-JS"></a>`;

let jquerys10 = `<pre>$(".class:hidden").css("color", "red")</pre><a class="link" target="_blank" href="https://api.jquery.com/hidden-selector/#hidden1"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys11 = `<pre>$(element).filter(": selected")</pre><a class="link" target="_blank" href="https://api.jquery.com/selected-selector/#"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys12 = `<pre>$("a").first().attr("href", value")</pre><a class="link" target="_blank" href="https://api.jquery.com/first/#first"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys13 = `<pre>$(alert($("input").first().val()))</pre><a class="link" target="_blank" href="https://api.jquery.com/first/#first"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys14 = `<pre>$(element)).remove()</pre><a class="link" target="_blank" href="https://api.jquery.com/remove/#remove-selector"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;

let jquerys15 = `<pre>$(element).animate( {properties}, 2000)</pre><a class="link" target="_blank" href="https://api.jquery.com/animate/#animate-properties-duration-easing-complete"><br><img class="logo" src="/assets/jQuery-logo.png" alt="logo-JS"></a>`;
