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
  <div class="text-content__col text-content__left home-margin--margin-right">
    <div class="col__head-section" draggable="true">
    <h5 class="page-main__js-title">JS</h5>
    <h3 class="col__title">javaScript code</h3>
      <span class="head-section__js-code" id="js-col-code"></span>
    </div>
    <div class="separator-hr"></div>
    <div id="js-code-col-left" class="text-content__col-left"></div>
  </div>

  <div class="text-content__col text-content__right">
    <div class="col__head-section" draggable="true">
    <img
    class="head-section__jquery-logo"
    src="assets/img/jquery-logo.png"
    alt="jquery-logo"
  />
    <h3 class="col__title">jQuery code</h3>
      <span
        class="head-section__jquery-code"
        id="js-query-col-code"
      ></span>
    </div>
    <div class="separator-hr"></div>
    <div id="jquery-text-col-right" class="text-content__col-right"></div>
  </div>
</section>
</main></template>`;

let headerPageTemplate = `<template id="header-page-temp"><header id="page-header" class="content__page-header">
<div class="page-header__autocomplete">
<div class="home-main__js-logo home-margin--margin-right"><div class="home-main__logo-chalk"><h4 class="home-main__js-title">JS</h4></div></div>
<div class="home-main__jquery-logo home-margin--margin-right"><div class="home-main__logo-chalk"><img class="autocomplete__side-logo" src="assets/img/jquery-logo.png" alt="jquery-logo" /></div></div>
<input
  id="autocomplete-field"
  class="autocomplete__input home-margin--margin-right page-header--noHeight"
  type="text"
  name="autocomplete-field"
/>
<!--autocomplete-->
<button id="autocomplete-go-btn" class="autocomplete__button page-header--noHeight home-margin--margin-right page-header__autocomplete__button">
  let´s go!
</button>
<!--go or submit btn-->
<h4 class="page-header__title">cheatSheet</h4>
</div>
</header></template>`;

let headerHomeTemplate = `<template id="header-home-temp">
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

let mainHomeTemplate = `<template id="main-home-temp"><main id="home-main" class="content__home-main"><h1 class="home-main__title">cheatSheet</h1>
<div class="home-main__autocomplete">
<div class="home-main__js-logo home-margin--margin-right"><div class="home-main__logo-chalk"><h4 class="home-main__js-title">JS</h4></div></div>
<div class="home-main__jquery-logo home-margin--margin-right"><div class="home-main__logo-chalk"><img class="autocomplete__side-logo" src="assets/img/jquery-logo.png" alt="jquery-logo" /></div></div>
<input
  id="autocomplete-field"
  class="autocomplete__input home-margin--margin-right"
  type="text"
  name="autocomplete-field"
/>
<!--autocomplete-->
<button id="autocomplete-go-btn" class="autocomplete__button">
  let´s go!
</button>
<!--go or submit btn-->
</div></main></template>`;

let footerTemplate = `<template id="footer-temp"><footer id="footer" class="content__footer"></template>`;

let navTemplate = `<template id="nav-temp"><nav id="footer-nav" class=footer__nav>
<ul class="nav__list">
  <li>events</li>
  <li>functions</li>
  <li>selectors</li>
</ul>
</nav></template>`;

export {
	headerHomeTemplate,
	headerPageTemplate,
	mainHomeTemplate,
	pageMainTemplate,
	pageIndexTemplate,
	footerTemplate,
	navTemplate,
};
