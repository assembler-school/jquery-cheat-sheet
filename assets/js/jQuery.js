const codeTextJq = $("#code-to-type");
const demoConsoleContainerJq = $("#demo-console-content");

function jQueryScript(id) {
  let number = id;
  let btn = $("<button>");
  let demoText = $("<p>");
  btn.addClass("demo-btn");
  if (demoConsoleContainerJq.children().length > 0) {
    demoConsoleContainerJq.empty();
  }
  switch (number) {
    case "jq0":
      codeTextJq.text("$('<p>')");
      demoConsoleContainerJq.append(btn);
      btn.html("Create it!");
      btn.on("click", function () {
        demoConsoleContainerJq.append($("<p>A element has been created!</p>"));
      });
      break;
    case "jq1":
      codeTextJq.text(`elementToRemove.remove()`);
      demoConsoleContainerJq.append(btn);
      btn.html("Remove me!");
      btn.on("click", function () {
        btn.remove();
      });
      break;
    case "jq2":
      codeTextJq.text(`parentElement.append(elementToAppend)`);
      demoConsoleContainerJq.append(btn);
      btn.html("Append me!");
      btn.on("click", function () {
        demoConsoleContainerJq.append($("<p>I'm appended</p>"));
      });
      break;
    case "jq3":
      codeTextJq.text(`parentElement.prepend(elementToPrepend)`);
      demoConsoleContainerJq.append(btn);
      btn.html("Prepend me!");
      btn.on("click", function () {
        demoConsoleContainerJq.prepend($("<p>I'm prepended</p>"));
      });
      break;
    case "jq4":
      codeTextJq.text(`parentElement.after(elementToInsertAfter)`);
      demoConsoleContainerJq.append(btn);
      btn.html("Add after me!");
      btn.on("click", function () {
        btn.after($("<p>I'm after the button</p>"));
      });
      break;
    case "jq5":
      codeTextJq.text(`parentElement.before(elementToInsertAfter)`);
      demoConsoleContainerJq.append(btn);
      btn.html("Try this!");
      let oldElem = $("<p>I'm the old element</p>");
      demoConsoleContainerJq.append(oldElem);
      btn.on("click", function () {
        oldElem.before($("<p>I'm the new element</p>"));
      });
      break;
    case "jq6":
      codeTextJq.text(`originalElement.clone()`);
      demoConsoleContainerJq.append(btn);
      btn.html("Clone me!");
      btn.on("click", function () {
        btn.clone().text(`I'm the cloned one`).appendTo(demoConsoleContainerJq);
      });
      break;
    case "jq7":
      codeTextJq.text(`elementToAddClass.addClass('class-name')`);
      demoConsoleContainerJq.append(btn);
      btn.html("Turn me red!");
      btn.on("click", function () {
        btn.addClass("btn-red");
        btn.html(`Now, I've got a class that made me red`);
      });
      break;
    case "jq8":
      codeTextJq.text(`elementToRemoveClass.removeClass('class-name')`);
      demoConsoleContainerJq.append(btn);
      btn.addClass("btn-red");
      btn.html("Get me back to white and green!");
      btn.on("click", function () {
        btn.removeClass("btn-red");
        btn.html(`Thanks!`);
      });
      break;
    case "jq9":
      codeTextJq.text(`btnElement.prop('disabled',true)`);
      demoConsoleContainerJq.append(btn);
      btn.html("Disable me!");
      btn.on("click", function () {
        btn.prop("disabled", true);
      });
      break;
    case "jq10":
      codeTextJq.text(`btnElement.prop('disabled',false)`);
      btn.prop("disabled", true);
      let checkBox = $("<input>")
        .prop("type", "checkbox")
        .attr("id", "checkbox");
      let labelForCheck = $("<label>")
        .css("color", "white")
        .css("margin-left", "15px")
        .text("Check me to enable the button");
      demoConsoleContainerJq.append(checkBox);
      demoConsoleContainerJq.append(labelForCheck);
      demoConsoleContainerJq.append(btn);
      btn.html("I'm disabled");
      checkBox.on("change", function () {
        if (checkbox.checked) {
          btn.prop("disabled", false);
          btn.html("I'm enabled");
        } else {
          btn.prop("disabled", true);
          btn.html("I'm disabled");
        }
      });
      break;
    case "jq11":
      codeTextJq.text(`image.attr('data-src', 'demo-data-src')`);
      btn.css("display", "block").css("margin-righ", "15px");
      demoConsoleContainerJq.append(btn);
      demoText.html("The image has no data-src").css("color", "white");
      demoConsoleContainerJq.append(demoText);
      let image = $("<img>");
      image
        .attr(
          "src",
          "https://i1.wp.com/www.goodigcaptions.com/wp-content/uploads/2020/03/Funny-Cat.jpg?resize=391%2C306&ssl=1"
        )
        .css("width", "350px")
        .css("height", "auto")
        .css("margin-left", "15px");
      demoConsoleContainerJq.append(image);
      btn.html("Set the data-src");
      btn.on("click", function () {
        image.attr("data-src", "demoDataSrc");
        demoText.html(`The image's data-src is now: demoDataSrc`);
      });
      break;
    case "jq12":
      codeTextJq.text(`image.removeAttr('data-src')`);
      btn.css("display", "block").css("margin-right", "15px");
      demoConsoleContainerJq.append(btn);
      demoText.html(`The image's data-src is now: demoDataSrc`);
      demoText.css("color", "white");
      demoConsoleContainerJq.append(demoText);
      let image2 = $("<img>");
      image2.attr(
        "src",
        "https://i1.wp.com/www.goodigcaptions.com/wp-content/uploads/2020/03/Funny-Cat.jpg?resize=391%2C306&ssl=1"
      );
      image2
        .css("width", "350px")
        .css("height", "auto")
        .css("margin-left", "15px");
      image2.attr("data-src", "demoDataSrc");
      demoConsoleContainerJq.append(image2);
      btn.html("Remove the data-src");
      btn.on("click", function () {
        image2.removeAttr("data-src");
        demoText.html(`The image has no data-src`);
      });
      break;
    case "jq13":
      codeTextJq.text(`elementToHide.hide()`);
      demoText.html("Click on the button to hide me!");
      demoConsoleContainerJq.append(btn);
      demoConsoleContainerJq.append(demoText);
      btn.html("Hide the text");
      btn.on("click", function () {
        demoText.hide();
      });
      break;
    case "jq14":
      codeTextJq.text(`elementToShow.show()`);
      demoText.html("Hello!!");
      demoText.hide();
      demoConsoleContainerJq.append(btn);
      demoConsoleContainerJq.append(demoText);
      btn.html("Show the text");
      btn.on("click", function () {
        demoText.show();
      });
      break;
    case "jq15":
      codeTextJq.text(`elementToFadeIn.fadeIn(option)`);
      demoConsoleContainerJq.append(btn);
      let pFor15 = $("<p>Hey!</p>")
        .css("display", "none")
        .appendTo(demoConsoleContainerJq);
      btn.html("Fade the text In");
      btn.on("click", function () {
        pFor15.fadeIn("slow");
      });
      break;
    case "jq16":
      codeTextJq.text(`elementToFadeOut.fadeOut(option)`);
      demoConsoleContainerJq.append(btn);
      let pFor16 = $("<p>Fade me out</p>").appendTo(demoConsoleContainerJq);
      btn.html("Fade the text Out");
      btn.on("click", function () {
        pFor16.fadeOut("slow");
      });
      break;
    case "jq17":
      codeTextJq.text(`listOfElements.each(function () {
        $(this).css('color', 'red)
      })`);
      for (let i = 0; i < 5; i++) {
        let newDiv = $("<div>")
          .addClass("div-for-demo")
          .text(i + 1);
        demoConsoleContainerJq.append(newDiv);
      }
      demoConsoleContainerJq.append(btn);
      btn.html("Change the color of all");
      btn.on("click", function () {
        $(".div-for-demo").each(function () {
          $(this)
            .css("background-color", "red")
            .css("border", "2px solid white")
            .css("color", "white");
        });
      });
      break;
    case "jq18":
      codeTextJq.text(`childElement.parent().css('font-weight', '400')`);
      demoText
        .html(`I'm the parent. Click on the button to change my weight`)
        .css("display", "flex")
        .css("font-weight", "700");
      demoConsoleContainerJq.append(demoText);
      demoText.append(btn);
      btn.html("Change the weight");
      btn.on("click", function () {
        btn.parent().css("fontWeight", "400");
      });
      break;
    case "jq19":
      codeTextJq.text(`parentElement.children().css('font-weight', '700')`);
      for (let i = 0; i < 5; i++) {
        let newDiv = $("<div>");
        newDiv.addClass("div-for-demo");
        newDiv.html(i + 1);
        demoConsoleContainerJq.append(newDiv);
      }
      demoConsoleContainerJq.append(btn);
      btn.html("Change the weight of all");
      btn.on("click", function () {
        demoConsoleContainerJq.children().css("font-weight", "700");
      });
      break;
    case "jq20":
      codeTextJq.text(`$('.common-class').css('fontWeight','700')`);
      for (let i = 0; i < 5; i++) {
        let newDiv = $("<div>");
        newDiv.addClass("div-for-demo");
        newDiv.html(".div-for-demo");
        demoConsoleContainerJq.append(newDiv);
      }
      demoConsoleContainerJq.append(btn);
      btn.html("Change the weight of all");
      btn.on("click", function () {
        $(".div-for-demo").css("fontWeight", "700");
      });
      break;
    case "jq21":
      codeTextJq.text(`$('#id').css('fontWeight','700')`);
      let newDiv = $("<div>")
        .addClass("div-for-demo")
        .attr("id", "id-demo")
        .html("id-demo");
      let newDiv2 = $("<div>").addClass("div-for-demo").html("no id");
      demoConsoleContainerJq.append(newDiv);
      demoConsoleContainerJq.append(newDiv2);
      demoConsoleContainerJq.append(btn);
      btn.html("Change the id's div font weight");
      btn.on("click", function () {
        $("#id-demo").css("fontWeight", "700");
      });
      break;
    case "jq22":
      codeTextJq.text(`$('.common-class:hidden').css('color','red')`);
      for (let i = 0; i < 5; i++) {
        let newDiv = $("<div>");
        newDiv.addClass("div-for-demo");
        if (i === 2 || i === 4) {
          newDiv.css("display", "none");
        }
        newDiv.html("display=block");
        demoConsoleContainerJq.append(newDiv);
      }
      demoConsoleContainerJq.append(btn);
      btn.html("Change the display");
      btn.on("click", function () {
        $(".div-for-demo:hidden").css("color", "red");
      });
      break;
    case "jq23":
      codeTextJq.text(`let textOfTheOptions = '';
      $('select option:selected').each(function() {
        textOfTheOptions += $(this).text() + ' ';
      })
      `);
      let selectEl = $("<select>")
        .addClass("select-styles")
        .attr("multiple", "multiple");
      for (let i = 0; i < 4; i++) {
        let optEl = $("<option>").html("option " + i);
        selectEl.append(optEl);
      }
      let pForSelect = $("<p>");
      pForSelect
        .addClass("no-padding")
        .text("Remember to hold de command or ctrl to get multiple options.");
      demoConsoleContainerJq.append(selectEl);
      demoConsoleContainerJq.append(pForSelect);
      selectEl.on("change", function () {
        let textOfTheOptions = "";
        $("select option:selected").each(function () {
          textOfTheOptions += $(this).text() + " ";
        });
        pForSelect.html("You have selected " + textOfTheOptions);
      });
      break;
    case "jq24":
      codeTextJq.text(`$("a").first().attr("href", newHref)`);
      let links = [
        { name: "Google", link: "https://www.google.es" },
        { name: "Twitter", link: "https://twitter.com/" },
        { name: "YouTube", link: "https://www.youtube.com/" },
      ];
      for (let i = 0; i < 2; i++) {
        let aFor24 = $("<a>")
          .attr("href", links[i].link)
          .attr("target", "_blank")
          .addClass("a-style")
          .text(links[i].name);
        demoConsoleContainerJq.append(aFor24);
      }
      demoConsoleContainerJq.append(btn);
      btn.text("Change Google for Youtube");
      btn.on("click", function () {
        $("a").first().attr("href", links[2].link).text(links[2].name);
      });
      break;
    case "jq25":
      codeTextJq.text(`alert($('input').first().val()`);
      for (let i = 0; i < 2; i++) {
        let inputFor25 = $("<input>")
          .attr("type", "text")
          .attr("placeholder", "Type here")
          .addClass("input-style");
        demoConsoleContainerJq.append(inputFor25);
      }
      demoConsoleContainerJq.append(btn);
      btn.html("Show the text of the input on an alert");
      btn.on("click", function () {
        if ($("input").first().val()) {
          alert($("input").first().val());
        }
      });
      break;
    case "jq26":
      codeTextJq.text(`parentContainer.empty();`);
      for (let i = 0; i < 5; i++) {
        let newDiv = $("<div>")
          .addClass("div-for-demo")
          .text(i + 1);
        demoConsoleContainerJq.append(newDiv);
      }
      demoConsoleContainerJq.append(btn);
      btn.text("Remove us all!");
      btn.on("click", function () {
        demoConsoleContainerJq.empty();
      });
      break;
    case "jq27":
      codeTextJq.text(`$(document).ready(function() {
        elementToAnimate.animate(
          {
          property: value, 
        },
        duration,
        easing,
        complete,
        )
      })`);
      let counterFor27 = 2;
      demoText
        .html(counterFor27)
        .addClass("no-padding")
        .css("position", "absolute")
        .css("font-size", "26px");
      demoConsoleContainerJq.append(demoText);
      demoConsoleContainerJq.append(btn);
      btn.html("If you click me, I'll move after 2 sec");
      btn.css("position", "absolute").css("top", "50px").css("left", "10px");

      btn.on("click", function () {
        let stopIt = setInterval(timer, 1000);
        function timer() {
          if (counterFor27 === 0) {
            clearInterval(stopIt);
          } else {
            counterFor27--;
            demoText.html(counterFor27);
          }
        }
        setTimeout(function () {
          btn.animate(
            {
              top: "80px",
              left: "100px",
            },
            2000
          );
        }, 2000);
      });
      break;
    case "jq28":
      codeTextJq.text(`$(document).ready(function() {})`);
      demoText.html("The document has been loaded");
      demoText.addClass("no-padding");
      demoConsoleContainerJq.append(demoText);
      break;
    case "jq29":
      codeTextJq.text(`elemSelected.on('click', function() {})`);
      demoConsoleContainerJq.append(btn);
      btn.html("Click me!");
      btn.on("click", function () {
        btn.html(`I've been clicked!`);
      });
      break;
    case "jq30":
      codeTextJq.text(`elemSelected.on('dblclick', function() {})`);
      demoConsoleContainerJq.append(btn);
      btn.html("Double click me!");
      btn.on("dblclick", function () {
        btn.html(`I've been double clicked!`);
      });
      break;
    case "jq31":
      codeTextJq.text(`elemSelected.on('keypress', function() {})`);
      demoConsoleContainerJq.append(demoText);
      demoText.html("Press any key!").addClass("no-padding");
      $(document).on("keypress", function (event) {
        demoText.html(`You've pressed the ${event.key} key`);
      });
      break;
    case "jq32":
      codeTextJq.text(`elem.on('mousemove', function() {})`);
      demoConsoleContainerJq.append(demoText);
      demoText.html("Move the mouse here").addClass("no-padding");
      demoConsoleContainerJq.on("mousemove", function () {
        demoText.html("Well done hacker!");
      });
      break;
    case "jq33":
      codeTextJq.text(`inputEl.on('keyup', function() {})`);
      let inputFor33 = $("<input>").attr("type", "text");
      inputFor33.addClass("input-style").attr("placeholder", "Type here");
      demoConsoleContainerJq.append(inputFor33);
      demoText.html("You'll see here what you type on the input");
      demoConsoleContainerJq.append(demoText);
      inputFor33.on("keyup", function () {
        if (!inputFor33.val()) {
          demoText.html("Type something");
        } else {
          demoText.html("You are typing " + inputFor33.val());
        }
      });
      break;
    case "jq34":
      codeTextJq.text(`img.one("load", function () {})`);
      let imgFor34 = $("<img>")
        .css("width", "150px")
        .css("height", "150px")
        .css("border", "2px solid var(--bg)")
        .css("margin", "5px")
        .css("margin-right", "25px")
        .css("float", "left");
      demoConsoleContainerJq.append(btn);
      demoConsoleContainerJq.append(imgFor34);
      btn.css("display", "block");
      btn.html("Press here to load an image");
      demoText.html("The image has been loaded");
      btn.on("click", function () {
        imgFor34.one("load", function () {
          demoConsoleContainerJq.append(demoText);
        });
        imgFor34.attr("src", "http://placekitten.com/150");
      });
      break;
    case "jq35":
      codeTextJq.text(`img.on('error', function() {})`);
      let imgFor35 = $("<img>")
        .css("width", "150px")
        .css("height", "150px")
        .css("border", "2px solid var(--bg)")
        .css("margin", "5px")
        .css("margin-right", "25px")
        .css("float", "left");
      demoConsoleContainerJq.append(btn);
      demoConsoleContainerJq.append(imgFor35);
      btn.css("display", "block");
      btn.html("Press here to load an image");
      demoText.html("The image couldn't load");
      btn.on("click", function () {
        imgFor35.on("error", function () {
          demoConsoleContainerJq.append(demoText);
        });
        imgFor35.attr("src", "http://placekitten.com/sadfsaf");
      });
      break;
    case "jq36":
      codeTextJq.text(`$('form').on('submit', function() {})`);
      let formEl = $("<form>");
      let inputTextFor36 = $("<input>")
        .attr("type", "text")
        .attr("placeholder", "Name");
      inputTextFor36.addClass("input-style");
      let inputAgeFor36 = $("<input>")
        .attr("type", "num")
        .attr("placeholder", "Age");
      inputAgeFor36.addClass("input-style");
      let submitBtnFor36 = $("<input>").attr("type", "submit");
      submitBtnFor36.html("Submit");
      demoConsoleContainerJq.append(formEl);
      formEl.append(inputTextFor36);
      formEl.append(inputAgeFor36);
      formEl.append(submitBtnFor36);
      formEl.on("submit", function (e) {
        e.preventDefault();
        demoText.html(
          `Hello ${inputTextFor36.val()}! You are ${inputAgeFor36.val()} years old.`
        );
        demoConsoleContainerJq.append(demoText);
      });
      break;
    case "jq37":
      codeTextJq.text(`selectElement.on('change', function () {})`);
      let selectElFor37 = $("<select>");
      selectElFor37.addClass("select-styles");
      for (let i = 0; i < 4; i++) {
        let optEl = $("<option>");
        selectElFor37.append(optEl);
        optEl.html("option " + i);
      }
      let pForSelectFor37 = $("<p>");
      pForSelectFor37.addClass("no-padding");
      pForSelectFor37.html("you have not selected any option yet");
      demoConsoleContainerJq.append(selectElFor37);
      demoConsoleContainerJq.append(pForSelectFor37);
      selectElFor37.on("change", function () {
        pForSelectFor37.text(
          "You have selected the " + $("option:selected").val()
        );
      });
      break;
    case "jq38":
      codeTextJq.text(`elem.on('mouseover', function() {})`);
      demoConsoleContainerJq.append(btn);
      btn.html("Move the mouse over me");
      btn.on("mouseenter", function () {
        btn.html(`Mouse is here!`);
        btn
          .css("backgroundColor", "red")
          .css("border", "2px solid white")
          .css("color", "white");
      });
      btn.on("mouseleave", function () {
        btn.html("Move the mouse over me");
        btn.removeAttr("style");
      });
      break;
    case "jq39":
      codeTextJq.text(`checkBox.on('change', function () {})`);
      let checkBoxFor39 = $("<input>")
        .attr("type", "checkbox")
        .css("margin-left", "15px");
      let labelForCheckFor39 = $("<label>").css("color", "white");
      labelForCheckFor39.text("I'm unchecked");
      demoConsoleContainerJq.append(checkBoxFor39);
      demoConsoleContainerJq.append(labelForCheckFor39);
      checkBoxFor39.on("change", function () {
        if (checkBoxFor39.prop("checked")) {
          labelForCheckFor39.text("I'm checked");
        } else {
          labelForCheckFor39.text("I'm unchecked");
        }
      });
      break;
    case "jq40":
      codeTextJq.text(`$('ul').on('click', function (event) {
        $(event.target)
      })`);
      let ulFor40 = $("<ul>")
        .css("color", "white")
        .css("list-style", "disc")
        .css("margin-left", "20px");
      ulFor40.attr("id", "ulFor40");
      for (let i = 0; i < 4; i++) {
        let liFor40 = $("<li>");
        ulFor40.append(liFor40);
        liFor40.html("Item number ") + i;
        liFor40.css("paddingBottom", "10px");
      }
      demoConsoleContainerJq.append(ulFor40);
      $("ul").on("click", function (event) {
        $(event.target)
          .css("background-color", "white")
          .css("color", "var(--bg)");
      });
      break;
    default:
      alert("default case");
  }
}
