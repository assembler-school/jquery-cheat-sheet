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
            <article class="cheat cheat--js cheat--selected" id="JS-method">
              <p class="info" id="js-info"></p>
              <button id="show-code" class="button button--code">
                &lt;/&gt;
              </button>
            </article>
            <button
              id="change-code"
              value="JQuery"
              class="button button--change"
            >
              JQuery
            </button>
            <article class="cheat cheat--jq" id="JQ-method">
              <p class="info" id="jq-info"></p>
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
  <section class="section--flex" id="section-lists">
  <ul class="list list--good" id="list-good">
  <h2>👼🏻✨Join the forces of good✨🦄</h2>
  </ul>
  <ul class="list list--evil" id="list-evil">
  <h2>👹🔥Join the forces of evil🔥🦇</h2>
  </ul>
  </section>
</main>
</div>
</template>`;

export { templateContent, templateIntro, templateList };
