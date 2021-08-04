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

function jqueryCreateHTML() {
  $("#jquery p").text("JQUERY CLICK ME");
  $("#jquery").on("click", () => {
    $("#jquery").append("<p>CREATED ELEMENT</p>");
    $("#jquery p").first().remove();
  });
}

function jqueryRemove() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery > p").on("click", () => {
    $("#jquery > p").remove();
  });
}

function jqueryAppend() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").on("click", () => {
    if ($("#jquery p").length == 1) {
      $("#jquery").append("<p>APPENDED ELEMENT TO DIV</p>");
    }
  });
}

function jqueryPrepend() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").on("click", () => {
    if ($("#jquery p").length == 1) {
      $("#jquery").prepend("<p>PREPENDED ELEMENT TO DIV</p>");
    }
  });
}

function jqueryCreateAfter() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").on("click", () => {
    if ($("#jquery p").length == 1) {
      $("#jquery p").after("<p>ADDED ELEMENT AFTER P</p>");
    }
  });
}

function jqueryCreateBefore() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").on("click", () => {
    if ($("#jquery p").length == 1) {
      $("#jquery p").before("<p>ADDED ELEMENT BEFORE P</p>");
    }
  });
}

function jqueryClone() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").on("click", () => {
    if ($("#jquery p").length == 1) {
      $("#jquery > p").clone().appendTo("#jquery");
    }
  });
}

function jqueryAddClass() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").on("click", () => {
    $("#jquery p").addClass("new-class");
  });
}

function jqueryRemoveClass() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").addClass("new-class");
  $("#jquery p").on("click", () => {
    $("#jquery p").removeClass("new-class");
  });
}

function jqueryToggle() {
  $("#jquery > p").text("JQUERY CLICK ME");
  $("#jquery p").on("click", () => {
    $("#jquery p").toggleClass("new-class");
  });
}

function jqueryAddDisabled() {
  $("#jquery").append("<button>CLICK TO DISABLE</button>");
  $("#jquery button").on("click", () => {
    $("#jquery button").prop("disabled", true);
  });
}

function jqueryRemoveDisabled() {
  $("#jquery p").text("CLICK TO ENABLE");
  $("#jquery").append("<button disabled>BUTTON</button>");
  $("#jquery p").on("click", () => {
    $("#jquery button").prop("disabled", false);
  });
}

function jqueryDataSrc() {
  $("#jquery").append("<img>");

  $("#jquery p").text("CLICK TO SET DATA-SRC");

  $("#jquery p").on("click", () => {
    $("#jquery img").attr("data-src", "new-data");
  });
}

function jqueryRemoveSrc() {
  $("#jquery").append("<img>");
  $("#jquery img").attr("data-src", "new-data");

  $("#jquery p").text("CLICK TO SET DATA-SRC");

  $("#jquery p").on("click", () => {
    $("#jquery img").removeAttr("data-src");
  });
}

function jqueryHide() {
  $("#jquery p").on("click", () => {
    $("#jquery p").hide();
  });
}

function jqueryShow() {
  $("#jquery p").text("CLICK TO SHOW");
  $("#jquery").append("<p id='visible'>VISIBLE</p>");
  $("#visible").hide();

  document.querySelector("#jquery > p").addEventListener("click", () => {
    $("#visible").show();
  });
}

function jqueryFadeIn() {
  $("#jquery p").text("CLICK TO FADE IN");
  $("#jquery").append("<p id='fade'>FADED</p>");
  $("#fade").hide();

  document.querySelector("#jquery > p").addEventListener("click", () => {
    $("#fade").fadeIn();
  });
}

function jqueryFadeOut() {
  $("#jquery p").text("CLICK TO FADE OUT");
  $("#jquery").append("<p id='fade'>FADED</p>");

  document.querySelector("#jquery > p").addEventListener("click", () => {
    $("#fade").fadeOut();
  });
}

function jqueryIterateElements() {
  $("#jquery").append("<h3>NEW</h3><h3>NEW</h3>");
  $("#jquery h3").text("ITERATED").css("color", "teal");
}

function jqueryGetParent() {
  console.log($("#jquery p").parent());
}

function jqueryGetChildren() {
  console.log($("#jquery").children());
}

function jqueryClassElements() {
  document;
  $("#jquery").append(
    "<p class='jquery-class'>NEW</p><p class='jquery-class'>NEW</p>"
  );

  $("#jquery .jquery-class").css("font-weight", "700");
}

function jqueryItemId() {
  $("#jquery").append("<p id='jquery-p'>NEW</p>");
  $("#jquery-p").css("font-weight", "700");
}

function jqueryDisplayElements() {
  $("#jquery p").text("CLICK TO SHOW");
  $("#jquery").append(
    "<p class='jquery-class'>VISIBLE</p><p class='jquery-class'>VISIBLE</p>"
  );
  $(".jquery-class").hide();

  $("#jquery > p").on("click", () => {
    $(".jquery-class").show().css("color", "teal");
  });
}

function jqueryGetOptions() {
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
