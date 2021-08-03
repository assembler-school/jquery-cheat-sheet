const mainTemplate = `<template id ="main-template">
<div id="wrapper" class="wrapper">
  <header class="header">
    <div class="title"><h1>jQuery CheatSheet</h1></div>
  </header>

  <main>
  <nav class="navigation">
  <ul>
  <div class="nav-btn" data-page="0">Home</div>
  <div class="nav-btn" data-page="1">Click event</div>
  <div class="nav-btn" data-page="2">Double click event</div>
  <div class="nav-btn" data-page="3">Key press event</div>
  <div class="nav-btn" data-page="4">Mouse cursor move event</div>
  <div class="nav-btn" data-page="5">Change value event</div>
  <div class="nav-btn" data-page="6">Event when image is loaded</div>
  <div class="nav-btn" data-page="7">Event when image fails to load</div>
  <div class="nav-btn" data-page="8">Form submit event</div>
  <div class="nav-btn" data-page="9">Changes the option of a select element</div>
  <div class="nav-btn" data-page="10">Position the mouse over an element  </div>
  <div class="nav-btn" data-page="11">Checked or unchecked</div>
  <div class="nav-btn" data-page="12">When a ul list item is clicked, show the item that was clicked</div>
  <div class="nav-btn" data-page="13">Create an HTML element with any text value</div>
  <div class="nav-btn" data-page="14">Remove an HTML element with any text value</div>
  <div class="nav-btn" data-page="15">Append an HTML element with any text value to a parent element</div>
  <div class="nav-btn" data-page="16">Prepend an HTML element with any text value to a parent element</div>
  <div class="nav-btn" data-page="17">Create and add an HTML element with any text value after another element</div>
  <div class="nav-btn" data-page="18">Create and add an HTML element with any text value before another element</div>
  <div class="nav-btn" data-page="19">Clone an HTML element within other element</div>
  <div class="nav-btn" data-page="20">Add a class to an HTML item</div>
  <div class="nav-btn" data-page="21">Remove a class to an HTML item</div>
  <div class="nav-btn" data-page="22">Toggle a class of an HTML item</div>
  <div class="nav-btn" data-page="23">Add a disabled attribute to an HTML button</div>
  <div class="nav-btn" data-page="24">Remove the disabled attribute of an HTML button</div>
  <div class="nav-btn" data-page="25">Set a data-src attribute to a img element</div>
  <div class="nav-btn" data-page="26">Remove the data-src attribute of the img element</div>
  <div class="nav-btn" data-page="27">Hide an HTML element on click (display: none)</div>
  <div class="nav-btn" data-page="28">Show an HTML element on click (display: block)</div>
  <div class="nav-btn" data-page="29">Fade in an HTML element using jQuery</div>
  <div class="nav-btn" data-page="30">Fade out an HTML element using jQuery</div>
  <div class="nav-btn" data-page="31">Iterate a collection of elements and apply a change of style on them</div>
  <div class="nav-btn" data-page="32">Get the parent element of a certain element and change its font weight</div>
  <div class="nav-btn" data-page="33">Get the collection of children of a certain element and change its font weight</div>
  <div class="nav-btn" data-page="34">Get all the elements that have a certain class and change their font weight</div>
  <div class="nav-btn" data-page="35">Get an item by id and change its font weight</div>
  <div class="nav-btn" data-page="36">Get all the elements that have a certain class and the display property of none and change their font color and the display itself so it’s visible.</div>
  <div class="nav-btn" data-page="37">Get the options of a select element that are selected (attribute selected)</div>
  <div class="nav-btn" data-page="38">Change the href attribute of the first a element (You have to create several a> elements)</div>
  <div class="nav-btn" data-page="39">Show an alert with the value of the first input of the page (Create an input element to test this case)</div>
  <div class="nav-btn" data-page="40">Remove all items from a specific selector</div>
  <div class="nav-btn" data-page="41">Animate an item after 2 seconds from the initial page load</div>


  </ul>
  </nav>
    <div id="main-wrapper" class="main-wrapper">
      <div id="common" class="common"><h3>What is jQuery?</h3>
      <p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</p>
      </div>
    
    </div>
  </main>
</div>
</template>`;

const specificTemplate = `<template id ="specific">
    <div class="specific">
      <div id="vanilla" class="vanilla"><p>VANILLA</p></div>
      <div id="jquery" class="jquery"><p>JQUERY</p></div>
    </div>
</template>
    `;
const commonTemplate = `<template class="commonCode" data-page="1">
    <div id="title"><p></p></div>
    </template>`;

export { mainTemplate, specificTemplate, commonTemplate };
