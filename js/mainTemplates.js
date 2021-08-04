const mainTemplate = `<template id ="main-template">
<div id="wrapper" class="wrapper">
  <header class="header">
    <div class="title"><h1>jQuery CheatSheet</h1></div>
  </header>

  <main>
  <nav class="navigation">
  <div class="nav-btn" data-page="0">Home</div>
  <div class="nav-btn" data-page="1">Click event</div>
  <div class="nav-btn" data-page="2">Double click event</div>
  <div class="nav-btn" data-page="3">Key press</div>
  <div class="nav-btn" data-page="4">Cursor move</div>
  <div class="nav-btn" data-page="5">Change value</div>
  <div class="nav-btn" data-page="6">Loaded image</div>
  <div class="nav-btn" data-page="7">Image load fails</div>
  <div class="nav-btn" data-page="8">Form submit</div>
  <div class="nav-btn" data-page="9">Change option</div>
  <div class="nav-btn" data-page="10">Mouse over</div>
  <div class="nav-btn" data-page="11">Checked/unchecked</div>
  <div class="nav-btn" data-page="12">Show clicked li</div>
  <div class="nav-btn" data-page="13">Create text</div>
  <div class="nav-btn" data-page="14">Remove element</div>
  <div class="nav-btn" data-page="15">Append element</div>
  <div class="nav-btn" data-page="16">Prepend element</div>
  <div class="nav-btn" data-page="17">Create after</div>
  <div class="nav-btn" data-page="18">Create before</div>
  <div class="nav-btn" data-page="19">Clone element</div>
  <div class="nav-btn" data-page="20">Add class</div>
  <div class="nav-btn" data-page="21">Remove class</div>
  <div class="nav-btn" data-page="22">Toggle class</div>
  <div class="nav-btn" data-page="23">Add disabled</div>
  <div class="nav-btn" data-page="24">Remove disabled</div>
  <div class="nav-btn" data-page="25">Set data-src img</div>
  <div class="nav-btn" data-page="26">Remove data-src</div>
  <div class="nav-btn" data-page="27">Hide on click</div>
  <div class="nav-btn" data-page="28">Show on click</div>
  <div class="nav-btn" data-page="29">Fade in (jQuery)</div>
  <div class="nav-btn" data-page="30">Fade out (jQuery)</div>
  <div class="nav-btn" data-page="31">Iterate and change style</div>
  <div class="nav-btn" data-page="32">Change parent font weight</div>
  <div class="nav-btn" data-page="33">Change children font weight</div>
  <div class="nav-btn" data-page="34">Change font weight (same class)</div>
  <div class="nav-btn" data-page="35">Change font weight (an id)</div>
  <div class="nav-btn" data-page="36">Change font color and display.</div>
  <div class="nav-btn" data-page="37">Show selected option</div>
  <div class="nav-btn" data-page="38">Change href of first element</div>
  <div class="nav-btn" data-page="39">Alert value of first input</div>
  <div class="nav-btn" data-page="40">Remove all items</div>
  <div class="nav-btn" data-page="41">Animate an item after 2s</div>


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
      <div class ="vanilla-wrapper">
        <div id="vanilla" class="vanilla"><p>VANILLA</p></div>
        <div class="vanilla-code"><p></p></div>
      </div>
      <div class ="jquery-wrapper">
        <div id="jquery" class="jquery"><p>JQUERY</p></div>
        <div class="jquery-code"><p></p></div>
      </div>
    </div>
</template>
    `;
const commonTemplate = `<template class="commonCode">
    <div id="title"><h2></h2></div>
    </template>`;

export { mainTemplate, specificTemplate, commonTemplate };
