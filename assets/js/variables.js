'use strict';

const arrayEvents = [
  {
    id: "event-01",
    title: "When the <b>HTML document has been loaded</b> and you can manipulate it with vanilla",
    vanilla: "<code>var htmlLoaded = false;</code><code>document.addEventListener('DOMContentLoaded', () => {</code><code class='pl-2'>htmlLoaded = true;</code><code>}</code>",
    jquery: "<code>var htmlLoaded = false;</code><code>$(document).ready(function () {</code><code class='pl-2'>htmlLoaded = true;</code><code>});</code>",
    code: "<button>Try it</button><p>Has the HTML document been loaded?</p><p class='result color-green'></p>"
  },
  {
    id: "event-02",
    title: "When an HTML item has been <b>clicked</b>",
    vanilla: "<code>var button = document.querySelector('button');</code><code>button.addEventListener('click', () => {</code><code class='pl-2'>button.innerText = button.innerText + ' clicked!'</code>});",
    jquery: "<code>$('button').text('Button clicked!');</code>",
    code: "<button>Try it</button>"
  },
  {
    id: "event-03",
    title: "When an HTML item has been <b>double clicked</b>",
    vanilla: "<code>var button = document.querySelector('button');</code><code>button.addEventListener('dblclick', () => {</code><code class='pl-2'>button.innerText = button.innerText + ' Double clicked!'</code>});",
    jquery: "<code>$('button').text('Button double clicked!');</code>",
    code: "<button>Try it</button>"
  },
  {
    id: "event-04",
    title: "When the user <b>presses a key</b> on the keyboard",
    vanilla: "<code>document.addEventListener('keydown', (e) => {</code><code class='pl-2'>$paragraph.innerText = e.key;</code><code>});</code>",
    jquery: "",
    code: "<button>Try it</button><p></p>"
  },
  {
    id: "event-05",
    title: "When the user <b>moves the mouse cursor</b>",
    vanilla: "<code>var $p = document.querySelector('.event-05');</code><code>document.addEventListener('mousemove', (e) => {</code><code class='pl-2'>$p.innerText = 'pageX: ' + e.pageX + ' - pageY: ' + e.pageY;</code><code>});</code>",
    jquery: "<code>var $p = $('.event-05');</code><code>document.addEventListener('mousemove', (e) => {</code><code class='pl-2'>$p.text('pageX: ' + e.pageX + ' - pageY: ' + e.pageY);</code><code>});</code>",
    code: "<button>Try it</button><p></p>"
  },
  {
    id: "event-06",
    title: "When the user <b>changes a value</b> of an text input",
    vanilla: "<code>var $input = document.querySelector('input');</code><code>var $p = document.querySelector('.event-06');</code><code>$p.innerText = $input.value;</code>",
    jquery: "",
    code: "<input type='text' placeholder='Write here' name='' /><p>Change me!</p>"
  },
  {
    id: "event-07",
    title: "When an <b>image is loaded</b>",
    vanilla: "<code>var imgLoaded = false;</code><code>document.querySelector('img').addEventListener('load', () => {</code><code class='pl-2'>imgLoaded = true;</code><code>});</code>",
    jquery: "",
    code: "<button>Try it</button><img src='https://placekitten.com/100/100' alt='Kitten' /><p></p>"
  },
  {
    id: "event-08",
    title: "When an <b>image fails to load</b>, (if you write an incorrect image url the loading of the image will fail)",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><img src='' /><p class='color-red'></p>"
  },
  {
    id: "event-09",
    title: " When a <b>form is submitted</b>",
    vanilla: "",
    jquery: "",
    code: "<form><input type='text' /><input type='submit'></form><p></p>"
  },
  {
    id: "event-10",
    title: "When the user <b>changes the option of a select element</b>",
    vanilla: "",
    jquery: "",
    code: "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><p></p>"
  },
  {
    id: "event-11",
    title: "When you <b>position the mouse over an element</b>",
    vanilla: "",
    jquery: "",
    code: "<button>Mouse is out!</button>"
  },
  {
    id: "event-12",
    title: "When a checkbox is <b>checked or unchecked",
    vanilla: "",
    jquery: "",
    code: "<div class='d-flex align-items-center justify-content-center'><input type='checkbox'><label>Unchecked</label></div>"
  },
  {
    id: "event-13",
    title: "When a ul list item is clicked, show the item that was clicked",
    vanilla: "",
    jquery: "",
    code: "<ol><li>Marcel</li><li>Sergi</li><li>Gonzalo</li><li>Haroon</li></ol><p></p>"
  }
]

const arrayFunctions = [
  {
    id: "function-01",
    title: "<b>Create</b> an HTML element with any text value",
    vanilla: "<p>var btn = document.createElement('Button');</p>",
    jquery: "<p>var btn = $('&lt;button&gt;Button&lt;/button&gt;');</p>",
    code: "<button>Try it</button>"
  },
  {
    id: "function-02",
    title: "<b>Remove</b> an HTML element with any text value",
    vanilla: "<p>div.parentNode.removeChild(div);</p><p>div.removeChild(div.lastChild);</p><p>div.remove();</p>",
    jquery: "<p>$('div').remove();</p>",
    code: "<button>Try it</button><p class='color-red'>Hit the button to remove me</p>"
  },
  {
    id: "function-03",
    title: "<b>Append</b> an HTML element with any text value to a parent element",
    vanilla: "<p>div.appendChild(p);</p>",
    jquery: "<p>$('div').append('<p>Hello World appended!</p>');</p>",
    code: "<button>Try it</button>"
  },
  {
    id: "function-04",
    title: "<b>Prepend</b> an HTML element with any text value to a parent element",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button>"
  },
  {
    id: "function-05",
    title: "<b>Create and add</b> an HTML element with any text value after another element",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><p>Create and add after me!</p>"
  },
  {
    id: "function-06",
    title: "<b>Create and add</b> an HTML element with any text value before another element",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><p>Create and add before me!</p>"
  },
  {
    id: "function-07",
    title: "<b>Clone</b> an HTML element within other element",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><p>Clone me!</p>"
  },
  {
    id: "function-08",
    title: "<b>Add a class</b> to an HTML item",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><p>Add a class to change my color</p>"
  },
  {
    id: "function-09",
    title: "<b>Remove a class</b> to an HTML item",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><p class='color-red'>Remove the class to change my color</p>"
  },
  {
    id: "function-10",
    title: "<b>Toggle a class</b> of an HTML item",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><p class='color-red'>Toggle the class to change my color</p>"
  },
  {
    id: "function-11",
    title: "<b>Add a disabled attribute</b> to an HTML button",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><button>Button to disable</button>"
  },
  {
    id: "function-12",
    title: "<b>Remove the disabled attribute</b> of an HTML button",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><button disabled>Button to enable</button>"
  },
  {
    id: "function-13",
    title: "<b>Set a data-src attribute</b> to a img element",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><img src='https://placekitten.com/100/100' alt='Kitten' />"
  },
  {
    id: "function-14",
    title: "<b>Remove the data-src attribute</b> of the img element",
    vanilla: "",
    jquery: "",
    code: "<button>Try it</button><img src='https://placekitten.com/100/100' data-src='img-function-14' alt='Kitten' />"
  },
  {
    id: "function-15",
    title: "<b>Hide an HTML</b> element on click (display: none)",
    vanilla: "<code>document.querySelector('p').style.display = 'none';</code>",
    jquery: "<code>$('p').css('display', 'none');</code>",
    code: "<button>Try it</button><p>Paragraph to be hidden</p>"
  },
  {
    id: "function-16",
    title: "<b>Show an HTML</b> element on click (display: block)",
    vanilla: "<code>document.querySelector('p').style.display = 'block';</code>",
    jquery: "<code>$('p').css('display', 'block');</code>",
    code: "<button>Try it</button><p style='display: none;'>Paragraph appeared</p>"
  },
  {
    id: "function-17",
    title: "<b>Fade in</b> an HTML element using jQuery",
    jquery: "<p>$('div:hidden').first().fadeIn('slow');</p>",
    code: "<button>Try it</button><img src='https://placekitten.com/100/100' alt='Kitten' hidden />"
  },
  {
    id: "function-18",
    title: "<b>Fade out</b> an HTML element using jQuery",
    jquery: "<p>$('div:hidden').first().fadeOut('slow');</p>",
    code: "<button>Try it</button><img src='https://placekitten.com/100/100' alt='Kitten' />"
  },
  {
    id: "function-19",
    title: "<b>Animate an item</b> after 2 seconds from the initial page load",
    vanilla: "<code>document.addEventListener('DOMContentLoaded', () => {</code><code class='pl-2'>setTimeout(() => {</code><code class='pl-4'>switchStyles();</code><code class='pl-2'>}, 2000);</code><code>});</code>",
    jquery: "<code>$(document).ready(function () {</code><code class='pl-2'>setTimeout(() => {</code><code class='pl-4'>switchStyles();</code><code class='pl-2'>}, 2000);</code><code>});</code>",
    code: "<button>Try it</button>"
  }
]

const arraySelectors = [
  {
    id: "selector-01",
    title: "<b>Iterate a collection of elements</b> and apply a change of style on them",
    vanilla: "<code>var $paragraphs = document.querySelectorAll('.selector-01');</code><code>for(let i=0; i<$paragraphs.length; i++) {</code><code class='pl-2'>$paragraphs[i].innerText = $paragraphs[i].innerText + ' iterated!';</code><code class='pl-2'>$paragraphs[i].classList.add('color-red');</code ><code>}</code >",
    jquery: "<code>let $paragraphs = $(e.target).parent().children('p');</code><code>$paragraphs.each((index, element) => {</code><code class='pl-2'>$(element)</code><code class='pl-4'>.text($(element).text() + ' iterated!')</code><code class='pl-4'>.addClass('color-red');</code ><code>});</code>",
    code: "<button>Try it</button><p>Element</p><p>Element</p><p>Element</p>"
  },
  {
    id: "selector-02",
    title: "<b>Get the parent</b> element of a certain element and change its font weight",
    vanilla: "document.querySelector('div').parentNode;",
    jquery: "$('div').parent().css('fontWeight', 'bold');",
    code: "<button>Try it</button><p>Change my parent weight</p>"
  },
  {
    id: "selector-03",
    title: "<b>Get the collection of children</b> of a certain element and change its font weight",
    vanilla: "<code>document.querySelector('.selector-03').childNodes;</code>",
    jquery: "<code>$('.selector-03').css('font-weight', 'bold');</code>",
    code: "<button>Try it</button><div><p>Change our parent weight</p><p>Change our parent weight</p><p>Change our parent weight</p></div>"
  },
  {
    id: "selector-04",
    title: "<b>Get all the elements that have a certain class</b> and change their font weight",
    vanilla: "<code>var elements = document.getElementsByClassName('selector-04');</code><code>for (let i = 0; i < $elements.length; i++) {</code><code class='pl-2'>$elements[i].style.fontWeight = 'bold';</code><code>}</code>",
    jquery: "<code>$('.selector-04').css('fontWeight', 'bold');</code>",
    code: "<button>Try it</button><p class= 'selector-04-example'>Child 1</p><p class='selector-04-example'>Child 2</p><p class='selector-04-example'>Child 3</p>"
  },
  {
    id: "selector-05",
    title: "<b>Get an item by id</b> and change its font weight",
    vanilla: "<code>var selector = document.getElementById('selector-05');</code><code>selector.style.fontWeight = 'bold';</code>",
    jquery: "<code>$('#selector-05').css('fontWeight', 'bold');</code>",
    code: "<button>Try it</button><p id='selector-05-example'>Child 1</p>"
  },
  {
    id: "selector-06",
    title: "<b>Get all the elements</b> that have a certain class and the display property of none and change their font color and the display itself so it’s visible.",
    vanilla: "<code>var $selectors = document.querySelectorAll('.selector-06');</code><code>$selectors.forEach((element) => {</code><code class='pl-2'>if(element.style.display == 'none') {</code><code class='pl-4'>element.style.display = 'block';</code><code class='pl-4'>element.style.color = '#DB4437';</code><code class='pl-2'>}</code><code>});</code>",
    jquery: "<code>$('.selector-06:hidden').css({</code><code class='pl-2'>display: 'block',</code><code class='pl-2'>color: '#DB4437'</code><code>});</code>",
    code: "<button>Try it</button><p class= 'selector-06-example' style='display: none;'>Child 1</p><p class='selector-06-example'>Child 2</p><p>Child 3</p>"
  },
  {
    id: "selector-07",
    title: "<b>Get the options of a select element that are selected</b> (attribute selected)",
    vanilla: "<code>document.querySelector('select').value;</code>",
    jquery: "<code>$('select').val();</code>",
    code: "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select><p></p>"
  },
  {
    id: "selector-08",
    title: "<b>Change the href attribute</b> of the first &lta&gt element (You have to create several &lta&gt elements)",
    vanilla: "<code>var $anchors = document.getElementsByTagName('a');</code><code>$anchors[0].href = 'https://blank.html';</code>",
    jquery: "<code>var $anchors = $('a')[0].href = 'https://blank.html';</code>",
    code: "<button>Try it</button><a href='https://www.w3schools.com'>W3Schools</a><a href='https://www.stackoverflow.com'>StackOverflow</a><a href='https://www.jquery.com'>jQuery.com</a>"
  },
  {
    id: "selector-09",
    title: "<b>Show an alert with the value of the first &ltinput&gt of the page</b>",
    vanilla: "<code>var $inputValue = document.querySelectorAll('input')[0].value;</code><code>alert($inputValue);</code>",
    jquery: "<code>let $inputValue = document.querySelectorAll('input')[0].value;</code><code>alert($inputValue);</code>",
    code: "<button>Try it</button><input type='text' placeholder='Write here!'>"
  },
  {
    id: "selector-10",
    title: "<b>Remove all items</b> from a specific selector",
    vanilla: "<code>let $elements = document.querySelectorAll('.selector-10');</code><code>for (let i = 0; i < $elements.length; i++) {</code><code class='pl-2'>$elements[i].remove();</code><code>}</code>",
    jquery: "<code>let $elements = $('.selector-10');</code><code>$elements.each((index, element) => {</code><code class='pl-2'>element.remove();</code><code>})</code>",
    code: "<button>Try it</button><p class='selector-04-example'>Child 1</p><p class='selector-04-example'>Child 2</p><p class='selector-04-example'>Child 3</p>"
  }
]