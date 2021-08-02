//----------------------------------------------MAIN PAGE----------------------------------------//

let templateIntro = `
<template id="main-screen">
<div id="main-screen">
    <header id="header">
        <nav class="header__nav">
        <a href="#main" id="go-home" class="header__link">Home</a>
        <a href="#cheatList" id="go-list" class="header__link">Cheat List</a>
        </nav>
    </header>
    <main class="main">
        <h1 class="main__title">THE JQUERY HORROR CHEAT SHEET!!</h1>
        <h2 class="main__subtitle">Join the forces of Good and Evil</h2>
        <h2 class="main__subtitle">
        (and learn some JQuery in the meantime)
        </h2>
        <button id="start" class="button button--scary">START</button>
    </main>
</div>
</template>
`;

//----------------------------------------------CONTENT----------------------------------------//

let templateContent = `
<template id="content">
<div id="content">
        <header id="header">
          <button id="previous" class="button button--guide">PREVIOUS</button>
          <nav class="header__nav">
            <a href="#main" id="go-home" class="header__link">Home</a>
            <a href="#cheatList" id="go-list" class="header__link">Cheat List</a>
          </nav>
          <button type="button" id="next" class="button button--guide">
            NEXT
          </button>
        </header>
        <main class="main">
          <section class="main__cheat">
            <article class="cheat cheat--js" id="JS-method">
              <p class="info"></p>
              <button id="show-code" class="button button--code">
                &lt;/&gt;
              </button>
            </article>
            <button
              id="change-code"
              value="Jquery"
              class="button button--change"
            >
              JQuery
            </button>
            <article class="cheat cheat--jq" id="JQ-method">
              <p class="info"></p>
              <button id="show-code" class="button button--code">
                &lt;/&gt;
              </button>
            </article>
          </section>
          <section class="main__view" id="view"></section>
        </main>
      </div>
</template>
`;

//----------------------------------------------CHEAT LIST----------------------------------------//

let templateList = `
<template id="cheat-list">
<div id="cheat-list">
<header id="header">
  <nav class="header__nav">
    <a href="#main" id="go-home" class="header__link">Home</a>
    <a href="#cheatList" id="go-list" class="header__link"
      >Cheat List</a
    >
  </nav>
</header>
<main>
  <ul class="list list--events" id="list1">
    <li data-cheat="0">
      When the HTML document has been loaded and you can manipulate it
      with JavaScript
    </li>
    <li data-cheat="1">When an HTML item has been clicked</li>
    <li data-cheat="2">When an HTML item has been double clicked</li>
    <li data-cheat="3">When the user presses a key on the keyboard</li>
    <li data-cheat="4">When the user moves the mouse cursor</li>
    <li data-cheat="5">
      When the user changes a value of an text input
    </li>
    <li data-cheat="6">When an image is loaded</li>
    <li data-cheat="7">
      When an image fails to load, (if you write an incorrect image url
      the loading of the image will fail)
    </li>
    <li data-cheat="8">When a form is submitted</li>
    <li data-cheat="9">
      When the user changes the option of a select element
    </li>
    <li data-cheat="10">When you position the mouse over an element</li>
    <li data-cheat="11">When a checkbox is checked or unchecked</li>
    <li data-cheat="12">
      When a ul list item is clicked, show the item that was clicked
    </li>
  </ul>
  <ul class="list list--functions" id="list2">
    <li data-cheat="13">Create an HTML element with any text value</li>
    <li data-cheat="14">Remove an HTML element with any text value</li>
    <li data-cheat="15">
      Append an HTML element with any text value to a parent element
    </li>
    <li data-cheat="16">
      Prepend an HTML element with any text value to a parent element
    </li>
    <li data-cheat="17">
      Create and add an HTML element with any text value after another
      element
    </li>
    <li data-cheat="18">
      Create and add an HTML element with any text value before another
      element
    </li>
    <li data-cheat="19">Clone an HTML element within other element</li>
    <li data-cheat="20">Clone an HTML element within other element</li>
    <li data-cheat="21">Remove a class to an HTML item</li>
    <li data-cheat="22">Toggle a class of an HTML item</li>
    <li data-cheat="23">Add a disabled attribute to an HTML button</li>
    <li data-cheat="24">
      Remove the disabled attribute of an HTML button
    </li>
    <li data-cheat="25">Set a data-src attribute to a img element</li>
    <li data-cheat="26">
      Remove the data-src attribute of the img element
    </li>
    <li data-cheat="27">
      Hide an HTML element on click (display: none)
    </li>
    <li data-cheat="28">
      Show an HTML element on click (display: block)
    </li>
    <li data-cheat="29">Fade in an HTML element using jQuery</li>
    <li data-cheat="30">Fade out an HTML element using jQuery</li>
    <li data-cheat="31">
      Iterate a collection of elements and apply a change of style on
      them
    </li>
    <li data-cheat="32">
      Get the parent element of a certain element and change its font
      weight
    </li>
    <li data-cheat="33">
      Get the collection of children of a certain element and change its
      font weight
    </li>
    <li data-cheat="34">
      Get all the elements that have a certain class and change their
      font weight
    </li>
    <li data-cheat="35">
      Get an item by id and change its font weight
    </li>
    <li data-cheat="36">
      Get all the elements that have a certain class and the display
      property of none and change their font color
    </li>
    <li data-cheat="37">
      Get the options of a select element that are selected (attribute
      selected)
    </li>
    <li data-cheat="38">
      Change the href attribute of the first &lt;a&gt; element (You have
      to create several &lt;a&gt; elements)
    </li>
    <li data-cheat="39">
      Show an alert with the value of the first &lt;input&gt; of the
      page (Create an &lt;input&gt; element to test this case)
    </li>
    <li data-cheat="40">Remove all items from a specific selector</li>
    <li data-cheat="41">
      Animate an item after 2 seconds from the initial page load
    </li>
  </ul>
</main>
</div>
</template>`;

export { templateContent, templateIntro, templateList };
