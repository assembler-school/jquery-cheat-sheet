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
  <div class="nav-btn" data-page="13"></div>
  <div class="nav-btn" data-page="14"></div>
  <div class="nav-btn" data-page="15"></div>
  <div class="nav-btn" data-page="16"></div>

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
      <div id="vanilla" class="vanilla">VANILLA</div>
      <div id="jquery" class="jquery">JQUERY</div>
    </div>
</template>
    `;
const commonTemplate = `<template class="commonCode" data-page="1">
    <div id="title"><p></p></div>
    </template>`;

export { mainTemplate, specificTemplate, commonTemplate };
