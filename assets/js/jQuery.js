const JQUERYCONTENTCONTAINER = $("#codecontainer");
const JQUERYRESULTCONTAINER = $("#resultcontainer");

function jQueryItems(id) {
    let block = id;
    let btn = $("<button></button>");
    let myTextContent = $("<p></p>");
    btn.addClass("demo-btn");
    if (JQUERYRESULTCONTAINER.children().length > 0) {
        JQUERYRESULTCONTAINER.empty();
    }
    switch (block) {
        case "jq0":
            JQUERYCONTENTCONTAINER.text("$('<p></p>')");
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Create it!");
            btn.on("click", function() {
                JQUERYRESULTCONTAINER.append(
                    $("<p>`A (p) element has been created!`</p>")
                );
            });
            break;
        case "jq1":
            JQUERYCONTENTCONTAINER.text(`elementToRemove.remove()`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Remove me!");
            btn.on("click", function() {
                btn.remove();
            });
            break;
        case "jq2":
            JQUERYCONTENTCONTAINER.text(`parentElement.append(elementToAppend)`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Click to append me!");
            btn.on("click", function() {
                JQUERYRESULTCONTAINER.append($("<p>I am appended</p>"));
            });
            break;
        case "jq3":
            JQUERYCONTENTCONTAINER.text(`parentElement.prepend(elementToPrepend)`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Prepend me!");
            btn.on("click", function() {
                JQUERYRESULTCONTAINER.prepend($("<p>I'm prepended</p>"));
            });
            break;
        case "jq4":
            JQUERYCONTENTCONTAINER.text(`parentElement.after(afterElement)`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Add element after");
            btn.on("click", function() {
                btn.after($("<p>This text is inserted after the button</p>"));
            });
            break;
        case "jq5":
            JQUERYCONTENTCONTAINER.text(`parentElement.before(elementToInsert)`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Try this!");
            let prevElement = $("<p>I'm the previous element</p>");
            JQUERYRESULTCONTAINER.append(prevElement);
            btn.on("click", function() {
                prevElement.before($("<p>I'm the new element</p>"));
            });
            break;
        case "jq6":
            JQUERYCONTENTCONTAINER.text(`originalElement.clone()`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Clone me! 🐑");
            btn.on("click", function() {
                btn
                    .clone()
                    .text(`I'm the cloned Dolly 🐑`)
                    .appendTo(JQUERYRESULTCONTAINER);
            });
            break;
        case "jq7":
            JQUERYCONTENTCONTAINER.text(`elementToAddClass.addClass('class-name')`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Turn me black!");
            btn.on("click", function() {
                btn.addClass("section__resultbutton");
                btn.html(`Now, I've got a class that made me black`);
            });
            break;
        case "jq8":
            JQUERYCONTENTCONTAINER.text(`element.toogleClass('class-name')`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Toggle me!");
            btn.on("click", function() {
                btn.toggleClass("section__resultbutton");
                btn.html(`Check me toggling`);
            });
            break;
        case "js9":
            JQUERYCONTENTCONTAINER.text(`element.removeClass('class-name')`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.addClass("function__box--blue");
            btn.html = "I don´t like it blue!";
            btn.on("click", function() {
                btn.removeClass("function__box--blue");
                btn.html(`Awesome. Thank you!`);
            });
            break;
        case "jq10":
            JQUERYCONTENTCONTAINER.text(`btnElement.prop('disabled',true)`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Disable me!");
            btn.on("click", function() {
                btn.prop("disabled", true);
            });
            break;
        case "jq11":
            JQUERYCONTENTCONTAINER.text(`btnElement.prop('disabled',false)`);
            btn.prop("disabled", true);
            let checkBox = $("<input>")
                .prop("type", "checkbox")
                .attr("id", "checkbox");
            let labelForCheck = $("<label>")
                .css("color", "white")
                .css("margin-left", "15px")
                .text("Check me to enable the button");
            JQUERYRESULTCONTAINER.append(checkBox);
            JQUERYRESULTCONTAINER.append(labelForCheck);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("I'm disabled");
            checkBox.on("change", function() {
                if (checkbox.checked) {
                    btn.prop("disabled", false);
                    btn.html("I'm enabled");
                } else {
                    btn.prop("disabled", true);
                    btn.html("I'm disabled");
                }
            });
            break;
        case "jq12":
            JQUERYCONTENTCONTAINER.text(`image.attr('data-src', 'demo-data-src')`);
            btn.css("display", "block").css("margin-righ", "15px");
            JQUERYRESULTCONTAINER.append(btn);
            myTextContent.html("The image has no data-src").css("color", "white");
            JQUERYRESULTCONTAINER.append(myTextContent);
            let image = $("<img>");
            image
                .attr(
                    "src",
                    "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-29.png"
                )
                .css("width", "75px")
                .css("height", "75px")
                .css("margin-left", "2rem");
            JQUERYRESULTCONTAINER.append(image);
            btn.html("Set the data-src");
            btn.on("click", function() {
                image.attr("data-src", "AmongUsIsCool");
                myTextContent.html(`The image's data-src is now: amongUsIsCool`);
            });
            break;
        case "jq13":
            JQUERYCONTENTCONTAINER.text(`image.removeAttr('data-src')`);
            btn.css("display", "block").css("margin-right", "15px");
            JQUERYRESULTCONTAINER.append(btn);
            myTextContent.html(`The image's data-src is now: AmongUsIsCool`);
            myTextContent.css("color", "white");
            JQUERYRESULTCONTAINER.append(myTextContent);
            let myImage = $("<img>");
            myImage.attr(
                "src",
                "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-29.png"
            );
            myImage
                .css("width", "75px")
                .css("height", "75")
                .css("margin-left", "2rem");
            myImage.attr("data-src", "AmongUsIsCool");
            JQUERYRESULTCONTAINER.append(myImage);
            btn.html("Remove the data-src");
            btn.on("click", function() {
                myImage.removeAttr("data-src");
                myTextContent.html(`The image has no data-src`);
            });
            break;
        case "jq14":
            JQUERYCONTENTCONTAINER.text(`elementToHide.hide()`);
            myTextContent.html("Click on the button to hide me!");
            JQUERYRESULTCONTAINER.append(btn);
            JQUERYRESULTCONTAINER.append(myTextContent);
            btn.html("Hide the text");
            btn.on("click", function() {
                myTextContent.hide();
            });
            break;
        case "jq15":
            JQUERYCONTENTCONTAINER.text(`elementToShow.show()`);
            myTextContent.html("Hello World!!");
            myTextContent.hide();
            JQUERYRESULTCONTAINER.append(btn);
            JQUERYRESULTCONTAINER.append(myTextContent);
            btn.html("Show the text");
            btn.on("click", function() {
                myTextContent.show();
            });
            break;
        case "jq16":
            JQUERYCONTENTCONTAINER.text(`elementToFadeIn.fadeIn(option)`);
            JQUERYRESULTCONTAINER.append(btn);
            let inAnimation = $("<p>Hello World!!</p>")
                .css("display", "none")
                .appendTo(JQUERYRESULTCONTAINER);
            btn.html("Fade the text In");
            btn.on("click", function() {
                inAnimation.fadeIn("slow");
            });
            break;
        case "jq17":
            JQUERYCONTENTCONTAINER.text(`elementToFadeOut.fadeOut(option)`);
            JQUERYRESULTCONTAINER.append(btn);
            let outAnimation = $("<p>The World is cruel!!</p>").appendTo(
                JQUERYRESULTCONTAINER
            );
            btn.html("Fade the text Out");
            btn.on("click", function() {
                outAnimation.fadeOut("slow");
            });
            break;
        case "jq18":
            JQUERYCONTENTCONTAINER.text(`listOfElements.each(function () {
            $(this).css('color', 'red)
          })`);
            for (let i = 0; i < 3; i++) {
                let newDiv = $("<div>")
                    .addClass("div-for-demo")
                    .text(i + 1);
                JQUERYRESULTCONTAINER.append(newDiv);
            }
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Change the elements´ color");
            btn.on("click", function() {
                $(".div-for-demo").each(function() {
                    $(this)
                        .css("background-color", "black")
                        .css("border", "1px solid white")
                        .css("color", "white");
                });
            });
            break;
        case "jq19":
            JQUERYCONTENTCONTAINER.text(
                `childElement.parent().css('font-weight', '400')`
            );
            myTextContent
                .html(`I'm the parent. Click on the button to change my weight`)
                .css("display", "flex")
                .css("font-weight", "1200");
            JQUERYRESULTCONTAINER.append(myTextContent);
            myTextContent.append(btn);
            btn.html("Change the weight");
            btn.on("click", function() {
                btn.parent().css("fontWeight", "400");
            });
            break;
        case "jq20":
            JQUERYCONTENTCONTAINER.text(`$('.this-class').css('fontWeight','700')`);
            for (let i = 0; i < 3; i++) {
                let newDiv = $("<div>");
                newDiv.addClass("div-for-demo");
                newDiv.html("Today is a wonderful day");
                JQUERYRESULTCONTAINER.append(newDiv);
            }
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Change the weight of all");
            btn.on("click", function() {
                $(".div-for-demo").css("fontWeight", "700");
            });
            break;
        case "jq21":
            JQUERYCONTENTCONTAINER.text(`$('#id').css('fontWeight','700')`);
            let thisDiv = $("<div>")
                .addClass("div-for-demo")
                .attr("id", "id-demo")
                .html("id-demo");
            let thisDiv2 = $("<div>").addClass("div-for-demo").html("no id");
            JQUERYRESULTCONTAINER.append(thisDiv);
            JQUERYRESULTCONTAINER.append(thisDiv2);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Change the id's div font weight");
            btn.on("click", function() {
                $("#id-demo").css("fontWeight", "700");
            });
            break;
        case "jq22":
            JQUERYCONTENTCONTAINER.text(
                `$('.common-class:hidden').css('color','red')`
            );
            for (let i = 0; i < 4; i++) {
                let thisDiv = $("<div>");
                thisDiv.addClass("div-for-demo");
                if (i === 2 || i === 4) {
                    thisDiv.css("display", "none");
                }
                thisDiv.html("display=block");
                JQUERYRESULTCONTAINER.append(thisDiv);
            }
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Change the display");
            btn.on("click", function() {
                $(".div-for-demo:hidden").css("color", "red");
            });
            break;
        case "jq23":
            JQUERYCONTENTCONTAINER.text(`let textOfTheOptions = '';
      $('select option:selected').each(function() {
        textOfTheOptions += $(this).text() + ' ';
      })
      `);
            let thisForm = $("<select>")
                .addClass("select-styles")
                .attr("multiple", "multiple");
            for (let i = 0; i < 4; i++) {
                let selectedElement = $("<option>").html("option " + i);
                thisForm.append(selectedElement);
            }
            let pSelected = $("<p>");
            pSelected
                .addClass("no-padding")
                .text("Remember to hold de command or ctrl to get multiple options.");
            JQUERYRESULTCONTAINER.append(thisForm);
            JQUERYRESULTCONTAINER.append(pSelected);
            thisForm.on("change", function() {
                let textOfTheOptions = "";
                $("select option:selected").each(function() {
                    textOfTheOptions += $(this).text() + " ";
                });
                pSelected.html("You have selected " + textOfTheOptions);
            });
            break;
        case "jq24":
            JQUERYCONTENTCONTAINER.text(`$("a").first().attr("href", newHref)`);
            let links = [
                { name: "Mamma Mia", link: "https://www.mammamia.com" },
                { name: "Among Us", link: "https://amongus.com/" },
            ];
            for (let i = 0; i < 2; i++) {
                let changeAttr = $("<a>")
                    .attr("href", links[i].link)
                    .attr("target", "_blank")
                    .addClass("section__resultbutton")
                    .text(links[i].name);
                JQUERYRESULTCONTAINER.append(changeAttr);
            }
            JQUERYRESULTCONTAINER.append(btn);
            btn.text("Change Mamma Mia for Among Us");
            btn.on("click", function() {
                $("a").first().attr("href", links[0].link).text(links[1].name);
            });
            break;
        case "jq25":
            JQUERYCONTENTCONTAINER.text(`alert($('input').first().val()`);
            for (let i = 0; i < 2; i++) {
                let firstInput = $("<input>")
                    .attr("type", "text")
                    .attr("placeholder", "Type here")
                    .addClass("input-style");
                JQUERYRESULTCONTAINER.append(firstInput);
            }
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Show the text of the input on an alert");
            btn.on("click", function() {
                if ($("input").first().val()) {
                    alert($("input").first().val());
                }
            });
            break;
        case "jq26":
            JQUERYCONTENTCONTAINER.text(`parentContainer.empty();`);
            for (let i = 0; i < 5; i++) {
                let newDiv = $("<div>")
                    .addClass("div-for-demo")
                    .text(i + 1);
                JQUERYRESULTCONTAINER.append(newDiv);
            }
            JQUERYRESULTCONTAINER.append(btn);
            btn.text("Remove us all!");
            btn.on("click", function() {
                JQUERYRESULTCONTAINER.empty();
            });
            break;

            // Here starts the events list

        case "jq27":
            JQUERYCONTENTCONTAINER.text(`$(document).ready(function() {
        elementToAnimate.animate(
          {
          property: value, 
        },
        duration,
        easing,
        complete,
        )
      })`);
            let animation = 2;
            myTextContent
                .html(animation)
                .addClass("no-padding")
                .css("position", "absolute")
                .css("font-size", "26px");
            JQUERYRESULTCONTAINER.append(myTextContent);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("If you click me, I'll move after 2 sec");
            btn.css("position", "absolute").css("top", "150px").css("left", "800px");

            btn.on("click", function() {
                let stopIt = setInterval(timer, 1000);

                function timer() {
                    if (animation === 0) {
                        clearInterval(stopIt);
                    } else {
                        animation--;
                        myTextContent.html(animation);
                    }
                }
                setTimeout(function() {
                    btn.animate({
                            top: "80px",
                            left: "100px",
                        },
                        2000
                    );
                }, 2000);
            });
            break;
        case "jq28":
            JQUERYCONTENTCONTAINER.text(`$(function () {});`);
            myTextContent.html("The document has been loaded");
            myTextContent.addClass("no-padding");
            JQUERYRESULTCONTAINER.append(myTextContent);
            break;
        case "jq29":
            JQUERYCONTENTCONTAINER.text(`elemSelected.on('click', function() {})`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Click me!");
            btn.on("click", function() {
                btn.html(`I've been clicked!`);
            });
            break;
        case "jq30":
            JQUERYCONTENTCONTAINER.text(`elemSelected.on('dblclick', function() {})`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Double click me!");
            btn.on("dblclick", function() {
                btn.html(`I've been double clicked!`);
            });
            break;
        case "jq31":
            JQUERYCONTENTCONTAINER.text(`elemSelected.on('keypress', function() {})`);
            JQUERYRESULTCONTAINER.append(myTextContent);
            myTextContent.html("Press any key!").addClass("no-padding");
            $(document).on("keypress", function(event) {
                myTextContent.html(`You've pressed the ${event.key} key`);
            });
            break;
        case "jq32":
            JQUERYCONTENTCONTAINER.text(`elem.on('mousemove', function() {})`);
            JQUERYRESULTCONTAINER.append(myTextContent);
            myTextContent.html("Move the mouse here").addClass("no-padding");
            JQUERYRESULTCONTAINER.on("mousemove", function() {
                myTextContent.html("Congrats!");
            });
            break;
        case "jq33":
            JQUERYCONTENTCONTAINER.text(`inputEl.on('keyup', function() {})`);
            let inputValue = $("<input>").attr("type", "text");
            inputValue.addClass("input-style").attr("placeholder", "Type here");
            JQUERYRESULTCONTAINER.append(inputValue);
            myTextContent.html("You'll see here what you type on the input");
            JQUERYRESULTCONTAINER.append(myTextContent);
            inputValue.on("keyup", function() {
                if (!inputValue.val()) {
                    myTextContent.html("Type something");
                } else {
                    myTextContent.html("You are typing " + inputValue.val());
                }
            });
            break;
        case "jq34":
            JQUERYCONTENTCONTAINER.text(`img.one("load", function () {})`);
            let loadedImage = $("<img>")
                .css("width", "150px")
                .css("height", "150px")
                .css("border", "2px solid var(--bg)")
                .css("margin", "5px")
                .css("margin-right", "25px")
                .css("float", "left");
            JQUERYRESULTCONTAINER.append(btn);
            JQUERYRESULTCONTAINER.append(loadedImage);
            btn.css("display", "block");
            btn.html("Press here to load an image");
            myTextContent.html("The image has been loaded");
            btn.on("click", function() {
                loadedImage.one("load", function() {
                    JQUERYRESULTCONTAINER.append(myTextContent);
                });
                loadedImage.attr(
                    "src",
                    "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-29.png"
                );
            });
            break;
        case "jq35":
            JQUERYCONTENTCONTAINER.text(`img.on('error', function() {})`);
            let errorImage = $("<img>")
                .css("width", "150px")
                .css("height", "150px")
                .css("border", "2px solid black")
                .css("margin", "5px")
                .css("margin-right", "25px")
                .css("float", "left");
            JQUERYRESULTCONTAINER.append(btn);
            JQUERYRESULTCONTAINER.append(errorImage);
            btn.css("display", "block");
            btn.html("Press here to load an image");
            myTextContent.html("The image couldn't load");
            btn.on("click", function() {
                errorImage.on("error", function() {
                    JQUERYRESULTCONTAINER.append(myTextContent);
                });
                errorImage.attr(
                    "src",
                    "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among"
                );
            });
            break;
        case "jq36":
            JQUERYCONTENTCONTAINER.text(`$('form').on('submit', function() {})`);
            let formEl = $("<form>");
            let inputForm = $("<input>")
                .attr("type", "text")
                .attr("placeholder", "Name");
            inputForm.addClass("input-style");
            let inputAge = $("<input>")
                .attr("type", "num")
                .attr("placeholder", "Age");
            inputAge.addClass("input-style");
            let submitBtnFor36 = $("<input>").attr("type", "submit");
            submitBtnFor36.html("Submit");
            JQUERYRESULTCONTAINER.append(formEl);
            formEl.append(inputForm);
            formEl.append(inputAge);
            formEl.append(submitBtnFor36);
            formEl.on("submit", function(e) {
                e.preventDefault();
                myTextContent.html(
                    `Hello ${inputForm.val()}! You are ${inputAge.val()} years old.`
                );
                JQUERYRESULTCONTAINER.append(myTextContent);
            });
            break;
        case "jq37":
            JQUERYCONTENTCONTAINER.text(`selectElement.on('change', function () {})`);
            let selected = $("<select>");
            selected.addClass("select-styles");
            for (let i = 0; i < 4; i++) {
                let optEl = $("<option>");
                selected.append(optEl);
                optEl.html("option " + i);
            }
            let selectedOptions = $("<p>");
            selectedOptions.addClass("no-padding");
            selectedOptions.html("you have not selected any option yet");
            JQUERYRESULTCONTAINER.append(selected);
            JQUERYRESULTCONTAINER.append(selectedOptions);
            selected.on("change", function() {
                selectedOptions.text(
                    "You have selected the " + $("option:selected").val()
                );
            });
            break;
        case "jq38":
            JQUERYCONTENTCONTAINER.text(`elem.on('mouseover', function() {})`);
            JQUERYRESULTCONTAINER.append(btn);
            btn.html("Move the mouse over me");
            btn.on("mouseenter", function() {
                btn.html(`You hovered me!`);
                btn
                    .css("backgroundColor", "black")
                    .css("border", "2px solid white")
                    .css("color", "white");
            });
            btn.on("mouseleave", function() {
                btn.html("Move the mouse over me, pleeease");
                btn.removeAttr("style");
            });
            break;
        case "jq39":
            JQUERYCONTENTCONTAINER.text(`checkBox.on('change', function () {})`);
            let checkbox = $("<input>")
                .attr("type", "checkbox")
                .css("margin-left", "15px");
            let checkBoxLabel = $("<label>").css("color", "white");
            checkBoxLabel.text("I'm unchecked");
            JQUERYRESULTCONTAINER.append(checkbox);
            JQUERYRESULTCONTAINER.append(checkBoxLabel);
            checkbox.on("change", function() {
                if (checkbox.prop("checked")) {
                    checkBoxLabel.text("I'm checked");
                } else {
                    checkBoxLabel.text("I'm unchecked");
                }
            });
            break;
        case "jq40":
            JQUERYCONTENTCONTAINER.text(`$('ul').on('click', function (event) {
        $(event.target)
      })`);
            let ulList = $("<ul>")
                .css("color", "white")
                .css("list-style", "disc")
                .css("margin-left", "20px");
            ulList.attr("id", "ulList");
            for (let i = 0; i < 4; i++) {
                let liList = $("<li>");
                ulList.append(liList);
                liList.html("Item number ") + i;
                liList.css("paddingBottom", "10px");
            }
            JQUERYRESULTCONTAINER.append(ulList);
            $("ul").on("click", function(event) {
                $(event.target).css("background-color", "white").css("color", "black");
            });
            break;
        default:
            alert("default case");
    }
}