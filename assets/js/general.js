import * as js from "./vanilla.js";
import * as jq from "./jquery.js";
/*
 * Here I get the files based on the
 * section wanted in HTML
 */

const links = document.querySelectorAll("li > a");

links.forEach((element) => {
  element.addEventListener("click", function (e) {
    let srcFile;
    if (e.target.classList.contains("ev")) {
      srcFile = "./assets/examples/events/" + e.target.title;
    } else {
      srcFile = "./assets/examples/functions/" + e.target.title;
    }

    fetch(srcFile)
      .then((res) => (res.ok ? res.text() : Promise.reject(res)))
      .then((text) => {
        // console.log(text);
        document.querySelector(
          ".markdown"
        ).innerHTML = new showdown.Converter().makeHtml(text);
        hljs.highlightAll();
        addListeners(e);
      })
      .catch((err) => {
        console.error(err);
        // let message = err.statusText || "Error";
      });
  });
});

/*
 * Here I declare global listeners
 */
function addListeners(e) {
  const el = e.target;

  /*
   * SECTION OF EVENTS
   */
  if (el.matches('[title="documentLoaded.md"]')) {
  }

  if (el.matches('[title="click.md"]')) {
    js.fnClick();
    jq.fnClick();
  }

  if (el.matches('[title="dblClick.md"]')) {
    js.fnDblClick();
    jq.fnDblClick();
  }

  if (el.matches('[title="pressKey.md"]')) {
    js.fnPressKey();
    jq.fnPressKey();
  }

  if (el.matches('[title="mouseMove.md"]')) {
    js.fnMouseMove();
    jq.fnMouseMove();
  }

  if (el.matches('[title="onChange.md"]')) {
    js.fnOnChange();
    jq.fnOnChange();
  }

  if (el.matches('[title="imgLoad.md"]')) {
    js.fnOnImgLoaded();
    jq.fnOnImgLoaded();
  }

  if (el.matches('[title="imgFailLoad.md"]')) {
    js.fnOnImgFailed();
    jq.fnOnImgFailed();
  }

  if (el.matches('[title="formSubmit.md"]')) {
    js.fnFormSubmit();
    jq.fnFormSubmit();
  }

  if (el.matches('[title="change.md"]')) {
    js.fnChangeSelect();
    jq.fnChangeSelect();
  }

  if (el.matches('[title="mouseOver.md"]')) {
    js.fnMouseOver();
    jq.fnMouseOver();
  }

  if (el.matches('[title="checked.md"]')) {
    js.fnChecked();
    jq.fnChecked();
  }

  if (el.matches('[title="eventTarget.md"]')) {
    js.fnEventTarget();
    jq.fnEventTarget();
  }

  /*
   * SECTION OF FUNCTIONS & SELECTORS
   */
  if (el.matches('[title="create.md"]')) {
    js.fnCreate();
    jq.fnCreate();
  }
}
