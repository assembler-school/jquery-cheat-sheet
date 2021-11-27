function createEvents() {
  let listArray = [
    "HTML document has been loaded",
    "Clicked",
    "Double clicked",
    "Presses a key",
    "Moves the mouse cursor",
    "When the user changes a value of an text input",
    "When an image is loaded",
    "When an image fails to load",
    "When a form is submitted",
    "When the user changes the option of a select element",
    "When you position the mouse over an element",
    "When a checkbox is checked or unchecked",
    "When a ul list item is clicked, show the item that was clicked"
  ];

  let main = document.createElement("div");
  $(main).addClass("flexiMain");
  body.append(main);

  let list = document.createElement("aside");
  $(list).addClass("funSideBar3");
  $(main).append(list);

  let exampleSide = document.createElement("div");
  $(exampleSide).addClass("exampleSide");
  $(main).append(exampleSide);

  /// just to mark test code

  let container = document.createElement("div");
  $(container).addClass("con");
  $(".exampleSide").append(container);

  let toH3 = document.createElement("h3");
  $(toH3).addClass("Vanilla");
  $(toH3).text("Click an element from the left side list to see examples");
  $(container).append(toH3);

  //for EACH

  listArray.forEach((element) => {
    let z = document.createElement("p");
    $(z).text(element);
    $(list).append(z);
    let r = $(z).text();

    $(z).on({
      click: function (params) {
        displayExampEvents(r);
      },
      mouseenter: function (params) {
        $(this).css("cursor", "pointer");
      },
    });
  });
}

function displayExampEvents(r) {
  console.log(r);
}
