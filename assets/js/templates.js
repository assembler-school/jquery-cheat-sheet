let indexTemplate = "";

let headerPageTemplate = `<header id="page-header">
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
</header>`;

let headerHomeTemplate = `<header id="home-header"><nav id="header-nav" class="home-header__nav">
<ul>
  <li>Events</li>
  <li>Functions</li>
  <li>Selectors</li>
</ul>
</nav></header>`;

let mainTemplate = `<main id="home-main"><h1 class="home-main__title">
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
</div></main>`;

let footerTemplate = `<footer id="footer" class="footer"><nav id="footer-nav" class=footer__nav>
<ul>
  <li>Events</li>
  <li>Functions</li>
  <li>Selectors</li>
</ul>
</nav></footer>`;
