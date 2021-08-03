function jqueryClickEvent() {
  $("#jquery").on("click", () => {
    $("#jquery").text("CLICKED JQUERY");
  });
}

function jqueryDoubleClick() {
  $("#jquery").on("dblclick", () => {
    $("#jquery").text("DOUBLE CLICKED JQUERY");
  });
}

function jqueryKeyPressEvent() {
  $("#jquery").text("JQUERY KEY PRESSED");
}

function jqueryCursorOverEvent() {
  $("#jquery").on("mousemove", () => {
    $("#jquery").css("border", "2px solid red");
  });
}

function jqueryChangeValue() {
  let count = 0;
  $("#jquery").append("<input type='text'>");
  $("#jquery input").on("change", () => {
    count++;
    $("#jquery > p").text("Changed " + count + " times");
  });
}

function jqueryImageLoad() {
  $("#jquery").append(
    "<img src='https://www.imghoteles.com/wp-content/uploads/sites/1709/nggallery/desktop-pics/fott1.jpg'>"
  );
  $("#jquery img").on("load", () => {
    $("#jquery > p").text("JQUERY IMG LOADED");
  });
}

function jqueryImageFails() {
  $("#jquery").append("<img src=''>");
  $("#jquery img").on("error", () => {
    $("#jquery > p").text("JQUERY IMG FAILS TO LOAD");
  });
}

function jquerySubmitEvent() {
  $("#jquery").append(`<form>
  <input type="text">
  <input type="submit">
  </form>`);
  $("#jquery form").on("submit", (e) => {
    e.preventDefault();
    $("#jquery input[type='text']").val("SUBMITTED FORM JQUERY");
  });
}

function jqueryChangeOption() {
  $("#jquery").append(
    `<select>
    <option>JQUERY</option>
    <option>jquery</option>
    </select>`
  );
  $("#jquery select").on("change", () => {
    $("#jquery > p").text("JQUERY SELECTOR HAS CHANGED");
  });
}

function jqueryMousePosition() {
  $("#jquery").on("mouseover", () => {
    $("#jquery").css("border", "2px solid red");
  });
}

function jqueryChecked() {
  $("#jquery").append(`<input type= "checkbox">`);

  $("#jquery [type='checkbox']").on("change", () => {
    if ($("#jquery [type='checkbox']").prop("checked")) {
      $("#jquery > p").text("CHECKED");
    } else {
      $("#jquery > p").text("UNCHECKED");
    }
  });
}

function jqueryLiClicked() {
  $("#jquery").append(
    `<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    </ul>`
  );
  $("li").on("click", (e) => {
    $("#jquery p").text(e.target.textContent);
  });
}

function jqueryCreateHTML() {}

function jqueryRemove() {}

function jqueryAppend() {}

function jqueryPrepend() {}

function jqueryCreateAfter() {}

function jqueryCreateBefore() {}

function jqueryClone() {}

function jqueryAddClass() {}

function jqueryRemoveClass() {}

function jqueryToggle() {}

function jqueryAddDisabled() {}

function jqueryRemoveDisabled() {}

function jqueryDataSrc() {}

function jqueryRemoveSrc() {}

function jqueryHide() {}

function jqueryShow() {}

function jqueryFadeIn() {}

function jqueryFadeOut() {}

function jqueryIterateElements() {}

function jqueryGetParent() {}

function jqueryGetChildren() {}

function jqueryClassElements() {}

function jqueryItemId() {}

function jqueryDisplayElements() {}

function jqueryGetOptions() {}

function jqueryChangeHref() {}

function jqueryInputAlert() {}

function jqueryRemoveItems() {}

function jqueryAnimate() {}

export {
  jqueryClickEvent,
  jqueryDoubleClick,
  jqueryKeyPressEvent,
  jqueryCursorOverEvent,
  jqueryChangeValue,
  jqueryImageLoad,
  jqueryImageFails,
  jquerySubmitEvent,
  jqueryChangeOption,
  jqueryMousePosition,
  jqueryChecked,
  jqueryLiClicked,
  jqueryCreateHTML,
  jqueryRemove,
  jqueryAppend,
  jqueryPrepend,
  jqueryCreateAfter,
  jqueryCreateBefore,
  jqueryClone,
  jqueryAddClass,
  jqueryRemoveClass,
  jqueryToggle,
  jqueryAddDisabled,
  jqueryRemoveDisabled,
  jqueryDataSrc,
  jqueryRemoveSrc,
  jqueryHide,
  jqueryShow,
  jqueryFadeIn,
  jqueryFadeOut,
  jqueryIterateElements,
  jqueryGetParent,
  jqueryGetChildren,
  jqueryClassElements,
  jqueryItemId,
  jqueryDisplayElements,
  jqueryGetOptions,
  jqueryChangeHref,
  jqueryInputAlert,
  jqueryRemoveItems,
  jqueryAnimate,
};
