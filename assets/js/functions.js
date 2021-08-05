'use strict';

var $toggleInput = document.getElementById("toggle__input");
$toggleInput.addEventListener("click", switchStyles);

/**
 * Toggle styles when we press the switch button
 */
function switchStyles() {
  const $html = document.querySelector("html");
  const $toggle = document.getElementById("toggle");

  $toggle.classList.toggle("enabled");
  $html.classList.toggle("dark-mode");
}

/**
 * Render the section
 *
 * @param {Array} array
 * @param {String} nav
 */
const renderSection = (array, nav) => {

  let $elements = document.getElementById('article');

  $elements.innerHTML += `<h2 class="article__title border-bottom">${nav}</h2>`

  array.forEach(element => {

    $elements.innerHTML += `
      <section class="section">
        <h3 id="${element.id}" class="section__title">
          ${element.title}
        </h3>

        <div class="code" id="code-${element.id}">
          <div class="exercise" id="vanilla-${element.id}">
            <p class="exercise__title">Javascript</p>
            <div class="exercise__try border">
              ${element.code}
            </div>
            <div class="exercise__code">
              ${element.vanilla}
            </div>
          </div>

          <div class="exercise" id="jquery-${element.id}">
            <p class="exercise__title">jQuery</p>
            <div class="exercise__try border">
              ${element.code}
            </div>
            <div class="exercise__code">
              ${element.jquery}
            </div>
          </div>
        </div>
      </section>
    `;
  });
}

/**
 * Render nav list
 *
 * @param {Array} array
 * @param {String} nav
 */
const renderNav = (array, nav) => {

  let $elements = document.getElementById(`accordion`);

  $elements.innerHTML += `
    <div class="accordion__tab">
      <input type="checkbox" class="accordion__input" id="check-${nav}">
      <label class="accordion__label" for="check-${nav}">${nav}</label>
      <div class="accordion__content">
        <nav class="nav">
          <ul class="nav__list" id="nav-list-${nav}"></ul>
        </nav>
      </div>
    </div>
  `;

  renderNavItem(array, nav)
}

/**
 * Render nav item
 *
 * @param {Array} array
 * @param {String} nav
 */
const renderNavItem = (array, nav) => {

  let $elements = document.getElementById(`nav-list-${nav}`);

  array.forEach(element => {

    $elements.innerHTML += `
      <li class="nav__item">
        <a href="#${element.id}" class="nav__anchor">
          ${element.title}
        </a>
      </li>
    `;
  });

}
