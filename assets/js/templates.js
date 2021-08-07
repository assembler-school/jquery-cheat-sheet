const html = String.raw
//String.raw: Returns a string created from a raw template string
//need html const for seeing html in js method

let pageIndexTemplate = html`<template id="page-index-temp"></template>
<main id="index-main" class="content__index-main">
  <section class="index-main__2-col-left">
    <h1 class="2-col-left__title"></h1>
    <video class="2-col-left__video" src="" autoplay loop>
      Sorry, your browser doesn't support embedded videos.
    </video>
  </section>
  <section class="index-main__2-col-right">
    <video class="2-col-right__video" src="" autoplay loop>
      Sorry, your browser doesn't support embedded videos.
    </video>
    <h1 class="2-col-right__title"></h1>
  </section>
</main>
</template>`;

let video = html`<video id="page-video" class="page-main__video" src="" autoplay loop>
  Sorry, your browser doesn't support embedded videos.
</video>`;

let pageMainTemplate = html`<template id="page-main-temp">
  <main id="page-main" class="content__page-main">
    <h2 id="page-main-type-title" class="page-main__title"></h2>
    <h3 id="page-main-example-title" class="page-main__title page-main__title--sub"></h3>
    <div class="separator-hr"></div>
    <section id="text-content" class="page-main__text-content">
      <!--2 column design. Left fot js, right for jquery-->
      <div id="js-col" class="text-content__col home-margin--margin-right">
        <div id="js-code" class="col__head-section text-content__left" draggable="true">
          <h5 class="page-main__js-title">JS</h5>
          <h3 class="col__title">javaScript code</h3>
          <span class="head-section__js-code" id="js-col-code"></span>
        </div>
        <div class="separator-hr"></div>
        <div id="js-text-col-left" class="text-content__col-left"></div>
      </div>
      <div id="jquery-col" class="text-content__col">
        <div id="jquery-code" class="col__head-section text-content__right" draggable="true">
          <img class="head-section__jquery-logo" src="assets/img/jquery-logo.png" alt="jquery-logo" />
          <h3 class="col__title">jQuery code</h3>
          <span class="head-section__jquery-code" id="js-query-col-code"></span>
        </div>
        <div class="separator-hr"></div>
        <div id="jquery-text-col-right" class="text-content__col-right"></div>
      </div>
    </section>
    <div class="separator-hr"></div>
    <section id="code-examples" class="page-main__code-examples">
      <div id="js-example" class="code-examples__js home-margin--margin-right"></div>
      <div id="jquery-example" class="code-examples__jquery"></div>
    </section>
  </main>
</template>`;

let headerPageTemplate = html`<template id="header-page-temp">
  <header id="page-header" class="content__page-header">
    <div class="page-header__autocomplete">
      <div class="home-main__js-logo home-margin--margin-right">
        <div class="home-main__logo-chalk">
          <h4 class="home-main__js-title">JS</h4>
        </div>
      </div>
      <div class="home-main__jquery-logo home-margin--margin-right">
        <div class="home-main__logo-chalk"><img class="autocomplete__side-logo" src="assets/img/jquery-logo.png"
            alt="jquery-logo" /></div>
      </div>
      <input list="examples" id="autocomplete-field"
        class="autocomplete__input home-margin--margin-right page-header--noHeight" type="text"
        name="autocomplete-field" />
      <datalist id="examples">
        <option value="event-HTML document loaded">
        <option value="event-HTML item has been clicked">
        <option value="event-HTML item has been double clicked">
        <option value="event-user presses a key on the keyboard">
        <option value="event-user moves the mouse cursor">
        <option value="event-user changes a value of an text input">
        <option value="event-image is loaded">
        <option value="event-image fails to load">
        <option value="event-form is submitted">
        <option value="event-user changes the option of a select element">
        <option value="event-position the mouse over an element">
        <option value="event-checkbox is checked or unchecked">
        <option value="event-ul list item is clicked, show the item that was clicked">
        <option value="function-Animate an item after 2 seconds from the initial page load">
        <option value="function-Add a class to an HTML item">
        <option value="function-Remove a class to an HTML item">
        <option value="function-Toggle a class of an HTML item">
        <option value="function-Add a disabled attribute to an HTML button">
        <option value="function-Remove the disabled attribute of an HTML button">
        <option value="function-Set a data-src attribute to a img element">
        <option value="function-Remove the data-src attribute of the img element">
        <option value="function-Hide an HTML element on click (display: none)">
        <option value="function-Show an HTML element on click (display: block)">
        <option value="function-Fade in an HTML element using jQuery">
        <option value="function-Fade out an HTML element using jQuery">
        <option value="selector-Create an HTML element with any text value">
        <option value="selector-Remove an HTML element with any text value">
        <option value="selector-Append an HTML element with any text value to a parent element">
        <option value="selector-Prepend an HTML element with any text value to a parent element">
        <option value="selector-Create and add an HTML element with any text value after another element">
        <option value="selector-Create and add an HTML element with any text value before another element">
        <option value="selector-Clone an HTML element within other element">
        <option value="selector-Iterate a collection of elements and apply a change of style on them">
        <option value="selector-Get the parent element of a certain element and change its font weight">
        <option value="selector-Get the collection of children of a certain element and change its font weight">
        <option value="selector-Get all the elements that have a certain class and change their font weight">
        <option value="selector-Get an item by id and change its font weight">
        <option
          value="selector-Get all the elements that have a certain class and the display property of none and change their font color and the display itself so it’s visible.">
        <option value="selector-Get the options of a select element that are selected (attribute selected)">
        <option value="selector-Change the href attribute of the first <a> element">
        <option value="selector-Show an alert with the value of the first <input> of the page">
        <option value="selector-Remove all items from a specific selector">
      </datalist>
      <!--autocomplete-->
      <button id="autocomplete-go-btn"
        class="autocomplete__button page-header--noHeight home-margin--margin-right page-header__autocomplete__button">
        let´s go!
      </button>
      <!--go or submit btn-->
      <h4 id="page-header-logo" class="page-header__title">cheatSheet</h4>
    </div>
  </header>
</template>`;

let headerHomeTemplate = html`<template id="header-home-temp">
  <header id="home-header" class="content__home-header">
    <nav id="header-nav" class="home-header__nav">
      <ul class="nav__list">
        <li>events</li>
        <li>functions</li>
        <li>selectors</li>
      </ul>
    </nav>
  </header>
</template>`;

let mainHomeTemplate = html`<template id="main-home-temp">
  <main id="home-main" class="content__home-main">
    <h1 class="home-main__title">cheatSheet</h1>
    <div class="home-main__autocomplete">
      <div class="home-main__js-logo home-margin--margin-right">
        <div class="home-main__logo-chalk">
          <h4 class="home-main__js-title">JS</h4>
        </div>
      </div>
      <div class="home-main__jquery-logo home-margin--margin-right">
        <div class="home-main__logo-chalk"><img class="autocomplete__side-logo" src="assets/img/jquery-logo.png"
            alt="jquery-logo" /></div>
      </div>
      <input list="examples" id="autocomplete-field" class="autocomplete__input home-margin--margin-right" type="text"
        name="autocomplete-field" />
      <datalist id="examples">
        <option value="event-HTML document loaded">
        <option value="event-HTML item has been clicked">
        <option value="event-HTML item has been double clicked">
        <option value="event-user presses a key on the keyboard">
        <option value="event-user moves the mouse cursor">
        <option value="event-user changes a value of an text input">
        <option value="event-image is loaded">
        <option value="event-image fails to load">
        <option value="event-form is submitted">
        <option value="event-user changes the option of a select element">
        <option value="event-position the mouse over an element">
        <option value="event-checkbox is checked or unchecked">
        <option value="event-ul list item is clicked, show the item that was clicked">
        <option value="function-Animate an item after 2 seconds from the initial page load">
        <option value="function-Add a class to an HTML item">
        <option value="function-Remove a class to an HTML item">
        <option value="function-Toggle a class of an HTML item">
        <option value="function-Add a disabled attribute to an HTML button">
        <option value="function-Remove the disabled attribute of an HTML button">
        <option value="function-Set a data-src attribute to a img element">
        <option value="function-Remove the data-src attribute of the img element">
        <option value="function-Hide an HTML element on click (display: none)">
        <option value="function-Show an HTML element on click (display: block)">
        <option value="function-Fade in an HTML element using jQuery">
        <option value="function-Fade out an HTML element using jQuery">
        <option value="selector-Create an HTML element with any text value">
        <option value="selector-Remove an HTML element with any text value">
        <option value="selector-Append an HTML element with any text value to a parent element">
        <option value="selector-Prepend an HTML element with any text value to a parent element">
        <option value="selector-Create and add an HTML element with any text value after another element">
        <option value="selector-Create and add an HTML element with any text value before another element">
        <option value="selector-Clone an HTML element within other element">
        <option value="selector-Iterate a collection of elements and apply a change of style on them">
        <option value="selector-Get the parent element of a certain element and change its font weight">
        <option value="selector-Get the collection of children of a certain element and change its font weight">
        <option value="selector-Get all the elements that have a certain class and change their font weight">
        <option value="selector-Get an item by id and change its font weight">
        <option
          value="selector-Get all the elements that have a certain class and the display property of none and change their font color and the display itself so it’s visible.">
        <option value="selector-Get the options of a select element that are selected (attribute selected)">
        <option value="selector-Change the href attribute of the first <a> element">
        <option value="selector-Show an alert with the value of the first <input> of the page">
        <option value="selector-Remove all items from a specific selector">
        <option value="selector-Remove all items from a specific selector">
      </datalist>
      <!--autocomplete-->
      <button id="autocomplete-go-btn" class="autocomplete__button">
        let´s go!
      </button>
      <!--go or submit btn-->
    </div>
  </main>
</template>`;

let footerTemplate = html`<template id="footer-temp">
  <footer id="footer" class="content__footer">
</template>`;

let navTemplate = html`<template id="nav-temp">
  <nav id="footer-nav" class=footer__nav>
    <ul class="nav__list">
      <li>events</li>
      <li>functions</li>
      <li>selectors</li>
    </ul>
  </nav>
</template>`;

export {
  headerHomeTemplate,
  headerPageTemplate,
  mainHomeTemplate,
  pageMainTemplate,
  pageIndexTemplate,
  footerTemplate,
  navTemplate,
};