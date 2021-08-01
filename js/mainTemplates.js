const mainTemplate = `<template id ="main-template">
<div id="wrapper" class="wrapper">
  <header class="header">
    <div class="title"><h1>jQuery CheatSheet</h1></div>
  </header>

  <main>
  <nav class="navigation">
  <ul>
  <div class="nav-btn" data-page="0">Home</div>
  <div class="nav-btn" data-page="1">HTML Manipulate</div>
  <div class="nav-btn" data-page="2">Click event</div>

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
    <div id="specific" class="specific">
      <div id="vanilla" class="vanilla">VAN</div>
      <div id="jquery" class="jquery">JQU</div>
    </div>
</template>
    `;

export { mainTemplate, specificTemplate };
