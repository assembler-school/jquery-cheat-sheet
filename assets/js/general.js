import * as js from "./vanilla.js";
import * as jq from "./jquery.js";

/*
 * Here I get the files based on the
 * section wanted in HTML
 */
loadFile("./assets/examples/mainPage.md");

const links = document.querySelectorAll("li > a");

links.forEach((element) => {
  element.addEventListener("click", function (e) {
    let srcFile;
    if (e.target.classList.contains("ev")) {
      srcFile = "./assets/examples/events/" + e.target.title;
    } else {
      srcFile = "./assets/examples/functions/" + e.target.title;
    }
    loadFile(srcFile, e);
  });
});

function loadFile(src, e) {
  fetch(src)
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
}

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

  if (el.matches('[title="remove.md"]')) {
    js.fnRemove();
    jq.fnRemove();
  }

  if (el.matches('[title="append.md"]')) {
    js.fnAppend();
    jq.fnAppend();
  }

  if (el.matches('[title="prepend.md"]')) {
    js.fnPrepend();
    jq.fnPrepend();
  }

  if (el.matches('[title="after.md"]')) {
    js.fnAfter();
    jq.fnAfter();
  }

  if (el.matches('[title="before.md"]')) {
    js.fnBefore();
    jq.fnBefore();
  }

  if (el.matches('[title="clone.md"]')) {
    js.fnClone();
    jq.fnClone();
  }

  if (el.matches('[title="addClass.md"]')) {
    js.fnAddClass();
    jq.fnAddClass();
  }

  if (el.matches('[title="removeClass.md"]')) {
    js.fnRemoveClass();
    jq.fnRemoveClass();
  }

  if (el.matches('[title="toggleClass.md"]')) {
    js.fnToggleClass();
    jq.fnToggleClass();
  }

  if (el.matches('[title="addAttr.md"]')) {
    js.fnAddAttr();
    jq.fnAddAttr();
  }

  if (el.matches('[title="removeAttr.md"]')) {
    js.fnRemoveAttr();
    jq.fnRemoveAttr();
  }

  if (el.matches('[title="removeDataAttr.md"]')) {
    js.fnToggleDataAttr();
    jq.fnToggleDataAttr();
  }

  if (el.matches('[title="hide.md"]')) {
    js.fnHide();
    jq.fnHide();
  }

  if (el.matches('[title="show.md"]')) {
    js.fnShow();
    jq.fnShow();
  }

  if (el.matches('[title="fadeIn.md"]')) {
    js.fnFadeIn();
    jq.fnFadeIn();
  }

  if (el.matches('[title="fadeOut.md"]')) {
    js.fnFadeOut();
    jq.fnFadeOut();
  }

  if (el.matches('[title="iterator.md"]')) {
    js.fnIterator();
    jq.fnIterator();
  }

  if (el.matches('[title="parent.md"]')) {
    js.fnParent();
    jq.fnParent();
  }

  if (el.matches('[title="children.md"]')) {
    js.fnChildren();
    jq.fnChildren();
  }

  if (el.matches('[title="classSelector.md"]')) {
    js.fnClassSelector();
    jq.fnClassSelector();
  }

  if (el.matches('[title="idSelector.md"]')) {
    js.fnIdSelector();
    jq.fnIdSelector();
  }

  if (el.matches('[title="propSelector.md"]')) {
    js.fnPropSelector();
    jq.fnPropSelector();
  }

  if (el.matches('[title="selectedOption.md"]')) {
    js.fnSelectedOption();
    jq.fnSelectedOption();
  }

  if (el.matches('[title="changeFirst.md"]')) {
    js.fnChangeFirst();
    jq.fnChangeFirst();
  }

  if (el.matches('[title="valueFirst.md"]')) {
    js.fnValueFirst();
    jq.fnValueFirst();
  }

  if (el.matches('[title="removeAll.md"]')) {
    js.fnRemoveAll();
    jq.fnRemoveAll();
  }

  if (el.matches('[title="animate.md"]')) {
    js.fnAnimate();
    jq.fnAnimate();
  }
}
