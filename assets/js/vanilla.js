//------------------------------------------------------------------------
// GLOBAL VARIABLES
//------------------------------------------------------------------------

//------------------------------------------------------------------------
// HTML ELEMENTS
//------------------------------------------------------------------------
var eventsTitle = document.getElementsByClassName("eventsTitle");
var eventsCodeDiv = document.querySelector(".eventsCodeDiv");
var eventsOutputDiv = document.querySelector(".eventsOutputDiv");
var jsVanillaEventsCheckbox = document.querySelector(
  "#jsVanillaEventsCheckbox"
);

var functionsTitle = document.getElementsByClassName("functionsTitle");
var functionsCodeDiv = document.querySelector(".functionsCodeDiv");
var functionsOutputDiv = document.querySelector(".functionsOutputDiv");
var jsVanillaFunctionsCheckbox = document.querySelector(
  "#jsVanillaFunctionsCheckbox"
);

var selectorsTitle = document.getElementsByClassName("selectorsTitle");
var selectorsCodeDiv = document.querySelector(".selectorsCodeDiv");
var selectorsOutputDiv = document.querySelector(".selectorsOutputDiv");
var jsVanillaSelectorsCheckbox = document.querySelector(
  "#jsVanillaSelectorsCheckbox"
);

//------------------------------------------------------------------------
// ADD EVENT LISTENERS
//------------------------------------------------------------------------
for (let i = 0; i < eventsTitle.length; i++) {
  eventsTitle[i].addEventListener("click", displayEventsConsoleVanilla);
}
jsVanillaEventsCheckbox.addEventListener("change", displayEventsConsoleVanilla);

for (let i = 0; i < functionsTitle.length; i++) {
  functionsTitle[i].addEventListener("click", displayFunctionsConsoleVanilla);
}
jsVanillaFunctionsCheckbox.addEventListener(
  "change",
  displayFunctionsConsoleVanilla
);

for (let i = 0; i < selectorsTitle.length; i++) {
  selectorsTitle[i].addEventListener("click", displaySelectorsConsoleVanilla);
}
jsVanillaSelectorsCheckbox.addEventListener(
  "change",
  displaySelectorsConsoleVanilla
);

//------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------
function displayEventsConsoleVanilla() {
  idEvent = this.id;
  if (idEvent === "jsVanillaEventsCheckbox") {
    idEvent = idEventGlobal;
  } else {
    idEventGlobal = idEvent;
  }
  idEvent = idEvent.match(/\d/g);
  idEvent = parseInt(idEvent.join(""));
  if (jsVanillaEventsCheckbox.checked === true) {
    switch (idEvent) {
      case 1:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(
          `(function() {
        document.querySelector('#eventOutputP').innerHTML("Page loaded");
        document.querySelector('#eventOutputP').style.display = "inline";
})();`
        );
        /*Coding applied*/
        resetEventsConsole();
        $("#eventOutputP").html("Page loaded");
        $("#eventOutputP").show();
        break;
      case 2:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(
          `document.querySelector("#eventOutputButton").addEventListener("click", 
function () {
        document.querySelector("#eventOutputP")
        .innerHTML = "Button clicked";
});`
        );
        /*Coding applied*/
        resetEventsConsole();
        $("#eventOutputButton").show();
        function clickfunction() {
          $("#eventOutputP").html("Button clicked");
          $("#eventOutputP").show();
        }
        $("#eventOutputButton").on("click", clickfunction);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#eventOutputButton").off("click", clickfunction);
          });
        });
        break;
      case 3:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(
          `document.querySelector("#eventOutputButton").addEventListener("dblclick", 
function () {
        document.querySelector("#eventOutputP")
        .innerHTML = "Button double clicked";
});`
        );
        /*Coding applied*/
        resetEventsConsole();
        $("#eventOutputButton").show();
        function dblclickfunction() {
          $("#eventOutputP").html("Button double clicked");
          $("#eventOutputP").show();
        }
        $("#eventOutputButton").on("dblclick", dblclickfunction);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#eventOutputButton").off("dblclick", dblclickfunction);
          });
        });
        break;
      case 4:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(
          `document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
          document.querySelector("#eventOutputP").innerHTML("Space bar pressed");
          document.querySelector("#eventOutputP").style.display = "block";
        }
};`
        );
        /*Coding applied*/
        resetEventsConsole();
        $("#eventOutputButton").html("Press space bar");
        $("#eventOutputButton").show();
        document.body.onkeyup = function (e) {
          if (e.keyCode == 32) {
            $("#eventOutputP").html("Space bar pressed");
            $("#eventOutputP").show();
          }
        };
        /*Disabling keyboard function*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            document.body.onkeyup = function (e) {
              if (e.keyCode == 32) {
                return false;
              }
            };
          });
        });
        break;
      case 5:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 6:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 7:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 8:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 9:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 10:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 11:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 12:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      case 13:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
      default:
        break;
    }
  }
}

function displayFunctionsConsoleVanilla() {
  idFunction = this.id;
  if (idFunction === "jsVanillaFunctionsCheckbox") {
    idFunction = idFunctionGlobal;
  } else {
    idFunctionGlobal = idFunction;
  }
  idFunction = idFunction.match(/\d/g);
  idFunction = parseInt(idFunction.join(""));
  if (jsVanillaFunctionsCheckbox.checked === true) {
    switch (idFunction) {
      case 1:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function createHtmlElement() {
        let myNewP = document.createElement("p");
        myNewP.innerHTML("Element created");
        document.querySelector("#functionsOutputContent").appendChild(myNewP);
}
document.querySelector('#functionOutputButton')
.addEventListener("click", createHtmlElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function createHtmlElement() {
          $("#functionOutputP").html("Element created");
          $("#functionOutputP").show();
        }
        $("#functionOutputButton").show();
        $("#functionOutputButton").on("click", createHtmlElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", createHtmlElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 2:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function removeHtmlElement() {
        document.querySelector("#eventOutputButton").remove();
}
document.querySelector('#functionOutputButton')
.addEventListener("click", removeHtmlElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function removeHtmlElement() {
          $("#functionOutputP").hide();
        }
        $("#functionOutputButton").show();
        $("#functionOutputP").html("Element to remove");
        $("#functionOutputP").show();
        $("#functionOutputButton").on("click", removeHtmlElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", removeHtmlElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 3:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function appendElement() {
        let myNewP = document.createElement("p");
        myNewP.innerHTML("Element appended");
        document.querySelector("#functionsOutputContent").appendChild(myNewP);
}
document.querySelector('#functionOutputButton')
.addEventListener("click", appendElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function appendElement() {
          $("#functionSecondOutputP").html("Element appended");
          $("#functionSecondOutputP").show();
        }
        $("#functionOutputButton").show();
        $("#functionOutputButton").on("click", appendElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", appendElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 4:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function prependElement() {
        let myNewP = document.createElement("p");
        myNewP.innerHTML("Element prepended");
        document.querySelector("#functionsOutputContent").prepend(myNewP);
}
document.querySelector('#functionOutputButton')
.addEventListener("click", prependElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function prependElement() {
          $("#functionOutputP").html("Element prepended");
          $("#functionOutputP").show();
        }
        $("#functionOutputButton").show();
        $("#functionOutputButton").on("click", prependElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", prependElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 5:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function insertAfterElement() {
          let myNewP = document.createElement("p");
          myNewP.innerHTML("Element inserted after");
          document.querySelector("#functionsOutputContent").
          insertAfter(myNewP, document.querySelector("#functionOutputButton"));
}
document.querySelector('#functionOutputButton')
.addEventListener("click", insertAfterElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function insertAfterElement() {
          $("#functionSecondOutputP").html("Element inserted after");
          $("#functionSecondOutputP").show();
        }
        $("#functionOutputButton").show();
        $("#functionOutputButton").on("click", insertAfterElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", insertAfterElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 6:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function insertBeforeElement() {
            let myNewP = document.createElement("p");
            myNewP.innerHTML("Element inserted before");
            document.querySelector("#functionsOutputContent").
            insertBefore(myNewP, document.querySelector("#functionOutputButton"));
  }
  document.querySelector('#functionOutputButton')
  .addEventListener("click", insertBeforeElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function insertBeforeElement() {
          $("#functionOutputP").html("Element inserted before");
          $("#functionOutputP").show();
        }
        $("#functionOutputButton").show();
        $("#functionOutputButton").on("click", insertBeforeElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", insertBeforeElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 7:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function cloneElement() {
          let pCloned = document.querySelector("#functionsOutputP").
          cloneNode(true);
          insertAfter(pCloned, document.querySelector("#functionsOutputP"));
}
document.querySelector('#functionOutputButton')
.addEventListener("click", cloneElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function cloneElement() {
          $("#functionThirdOutputP").html("Element cloned");
          $("#functionThirdOutputP").show();
        }
        $("#functionOutputButton").show();
        $("#functionOutputP").html("Element to be cloned");
        $("#functionOutputP").show();
        $("#functionOutputButton").on("click", cloneElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", cloneElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 8:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function addClassToElement() {
        document.querySelector("#functionsOutputP").
        classList.add("redColorClass");
}
document.querySelector('#functionOutputButton')
.addEventListener("click", addClassToElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function addClassToElement() {
          $("#functionOutputP").addClass("redColorClass");
        }
        $("#functionOutputButton").show();
        $("#functionOutputP").html("Element to add class");
        $("#functionOutputP").show();
        $("#functionOutputButton").on("click", addClassToElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", addClassToElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 9:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function removeClassToElement() {
          document.querySelector("#functionsOutputP").
          classList.remove("redColorClass");
}
document.querySelector('#functionOutputButton')
.addEventListener("click", removeClassToElement);`
        );
        /*Coding applied*/
        resetFuntionsConsole();
        function removeClassToElement() {
          $("#functionOutputP").removeClass("redColorClass");
        }
        $("#functionOutputButton").show();
        $("#functionOutputP").addClass("redColorClass");
        $("#functionOutputP").html("Element to remove class");
        $("#functionOutputP").show();
        $("#functionOutputButton").on("click", removeClassToElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#functionOutputButton").off("click", removeClassToElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 10:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 11:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 12:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 13:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 14:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 15:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 16:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 17:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 18:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      case 19:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
      default:
        break;
    }
  }
}

function displaySelectorsConsoleVanilla() {
  idSelector = this.id;
  if (idSelector === "jsVanillaSelectorsCheckbox") {
    idSelector = idSelectorGlobal;
  } else {
    idSelectorGlobal = idSelector;
  }
  idSelector = idSelector.match(/\d/g);
  idSelector = parseInt(idSelector.join(""));
  if (jsVanillaSelectorsCheckbox.checked === true) {
    switch (idSelector) {
      case 1:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(
          `function createHtmlElement() {
        mySpan = document.querySelector('#selectorSpan');
        parentElemen = mySpan.parentElemen;
        parentElement.style.fontWeight = "bold";
}
document.querySelector('#functionOutputButton')
.addEventListener("click", getParentElement);`
        );
        /*Coding applied*/
        resetSelectorsConsole();
        function getParentElement() {
          $("#selectorOutputP").html("p is span element parent");
          $("#selectorOutputP").css("font-weight", "bold");
          $("#selectorOutputP").show();
        }
        $("#selectorOutputButton").show();
        $("#selectorOutputButton").on("click", getParentElement);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#selectorOutputButton").off("click", getParentElement);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 2:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(
          `function createHtmlElement() {
        childrenList = document.querySelector('#selectorUl');
        for (let i = 0; i < childrenList.length; i++) {
                childrenList[i].style.fontWeight = "bold";
        }
}
document.querySelector('#functionOutputButton')
.addEventListener("click", getChildrenCollection);`
        );
        /*Coding applied*/
        resetSelectorsConsole();
        function getChildrenCollection() {
          $("#selectorUl").children().css("font-weight", "bold");
        }
        $("#selectorOutputButton").show();
        $("#selectorUl").show();
        $("#selectorOutputButton").on("click", getChildrenCollection);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#selectorOutputButton").off("click", getChildrenCollection);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 3:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(
          `function getElementsByClass() {
        classList = document.getElementByClassName('selectorLi');
        for (let i = 0; i < classList.length; i++) {
                classList[i].style.fontWeight = "bold";
        }
}
document.querySelector('#functionOutputButton')
.addEventListener("click", getElementsByClass);`
        );
        /*Coding applied*/
        resetSelectorsConsole();
        function getElementsByClass() {
          $(".selectorLi").css("font-weight", "bold");
        }
        $("#selectorOutputButton").show();
        $("#selectorUl").show();
        $("#selectorOutputButton").on("click", getElementsByClass);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#selectorOutputButton").off("click", getElementsByClass);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 4:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(
          `function getElementByIdJS() {
        document.querySelector('#selectorOutputP').
        style.fontWeight = "bold";
}
document.querySelector('#functionOutputButton')
.addEventListener("click", getElementByIdJS);`
        );
        /*Coding applied*/
        resetSelectorsConsole();
        function getElementByIdjQuery() {
          $(".selectorOutputP").css("font-weight", "bold");
        }
        $("#selectorOutputButton").show();
        $("#selectorOutputP").html("Click to change font-weight");
        $("#selectorOutputP").show();
        $("#selectorOutputButton").on("click", getElementByIdjQuery);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#selectorOutputButton").off("click", getElementByIdjQuery);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 5:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(
          `function getElementsByClassColor() {
          classList = document.getElementByClassName('selectorLi');
          for (let i = 0; i < classList.length; i++) {
                  classList[i].style.color = "red";
          }
  }
  document.querySelector('#functionOutputButton')
  .addEventListener("click", getElementsByClassColor);`
        );
        /*Coding applied*/
        resetSelectorsConsole();
        function getElementsByClassColor() {
          $(".selectorLi").css("color", "red");
        }
        $("#selectorOutputButton").show();
        $("#selectorUl").show();
        $("#selectorOutputButton").on("click", getElementsByClassColor);
        /*Disabling all eventlistener*/
        $(".functionTitle").each(function () {
          $(this).click(function () {
            $("#selectorOutputButton").off("click", getElementsByClassColor);
            //     $("#functionOutputButton").off();
          });
        });
        break;
      case 6:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetSelectorsConsole();
        break;
      case 7:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetSelectorsConsole();
        break;
      case 8:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetSelectorsConsole();
        break;
      case 9:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetSelectorsConsole();
        break;
      case 10:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetSelectorsConsole();
        break;
      default:
        break;
    }
  }
}
