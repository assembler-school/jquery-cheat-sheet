let pageIndexTemplate = `<template id="page-index-temp"
><main id="index-main" class="content__index-main">
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

let pageMainTemplate = `<template id="page-main-temp"><main id="page-main" class="content__page-main">
<video id="page-video" class="page-main__video" src="" autoplay loop>
  Sorry, your browser doesn't support embedded videos.
</video>
<div class="separator-hr"></div>
<section id="text-content" class="page-main__text-content">
  <!--2 column design. Left fot js, right for jquery-->
  <div class="text-content__col text-content__left">
    <div class="col__head-section">
      <img
        class="head-section__js-logo"
        src=""
        alt="js-logo"
        draggable="true"
      />
      <span class="head-section__js-code" id="js-col-code"></span>
    </div>
    <div class="separator-hr"></div>
    <div id="js-code-col-left" class="text-content__col"></div>
  </div>

  <div class="text-content__col text-content__right">
    <div class="col__head-section">
      <img
        class="head-section__jquery-logo"
        src=""
        alt="jquery-logo"
        draggable="true"
      />
      <span
        class="head-section__jquery-code"
        id="js-query-col-code"
      ></span>
    </div>
    <div class="separator-hr"></div>
    <div id="jquery-text-col-right" class="text-content__col"></div>
  </div>
</section>
</main></template>`;

let headerPageTemplate = `<template id="header-page-temp"><header id="page-header" class="content__page-header">
<div class="page-header__autocomplete">
  <img
    class="page-header__autocomplete__side-logo"
    src=""
    alt="js-vanilla-logo"
  />
  <input
    id="autocomplete-field"
    class="page-header__autocomplete__input"
    type="text"
    name="autocomplete-field"
  />
  <!--autocomplete-->
  <button
    id="autocomplete-go-btn"
    class="page-header__autocomplete__button"
  >
    Go
  </button>
  <!--go or submit btn-->
  <img
    class="page-header__autocomplete__side-logo"
    src=""
    alt="jquery-logo"
  />
</div>
<h1 class="page-header__title">
  <img class="page-header__logo" src="" alt="website-logo" />CheatSheet
</h1>
</header></template>`;

let headerHomeTemplate = `<template id="header-home-temp">
<header id="home-header" class="content__home-header">
  <nav id="header-nav" class="home-header__nav">
    <ul>
      <li>Events</li>
      <li>Functions</li>
      <li>Selectors</li>
    </ul>
  </nav>
</header>
</template>`;

let mainHomeTemplate = `<template id="main-home-temp"><main id="home-main" class="content__home-main"><h1 class="home-main__title">
<img class="home-main__logo" src="" alt="website-logo" />CheatSheet
</h1>
<div class="home-main__autocomplete">
<img class="autocomplete__side-logo" src="" alt="js-vanilla-logo" />
<input
  id="autocomplete-field"
  class="autocomplete__input"
  type="text"
  name="autocomplete-field"
/>
<!--autocomplete-->
<button id="autocomplete-go-btn" class="autocomplete__button">
  Go
</button>
<!--go or submit btn-->
<img class="autocomplete__side-logo" src="" alt="jquery-logo" />
</div></main></template>`;

let footerTemplate = `<template id="footer-temp"><footer id="footer" class="content__footer"><nav id="footer-nav" class=footer__nav>
<ul>
  <li>Events</li>
  <li>Functions</li>
  <li>Selectors</li>
</ul>
</nav></footer></template>`;

export {
	headerHomeTemplate,
	headerPageTemplate,
	mainHomeTemplate,
	pageMainTemplate,
	pageIndexTemplate,
	footerTemplate,
};
