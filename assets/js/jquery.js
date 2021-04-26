//------------------------------------------------------------------------
// GLOBAL VARIABLES
//------------------------------------------------------------------------
var idEventGlobal;
var idFunctionGlobal;
var idSelectorGlobal;

//------------------------------------------------------------------------
// ADD EVENT LISTENERS
//------------------------------------------------------------------------
$(".eventsTitle").each(function () {
  $(this).on("click", displayEventsConsolejQuery);
});
$("input#jqueryEventsCheckbox").change(displayEventsConsolejQuery);

$(".functionsTitle").each(function () {
  $(this).click(displayFunctionsConsolejQuery);
});
$("input#jqueryFunctionsCheckbox").change(displayFunctionsConsolejQuery);

$(".selectorsTitle").each(function () {
  $(this).click(displaySelectorsConsolejQuery);
});
$("input#jquerySelectorsCheckbox").change(displaySelectorsConsolejQuery);

//------------------------------------------------------------------------
// GENERAL FUNCTIONS FOR PAGE
//------------------------------------------------------------------------
$("input#jsVanillaEventsCheckBox").change(function () {
  if ($("input#jsVanillaEventsCheckBox").is(":checked")) {
    $("input#jqueryEventsCheckbox").prop("checked", false);
  } else {
    $("input#jqueryEventsCheckbox").prop("checked", true);
  }
});
$("input#jqueryEventsCheckbox").change(function () {
  if ($("input#jqueryEventsCheckbox").is(":checked")) {
    $("input#jsVanillaEventsCheckBox").prop("checked", false);
  } else {
    $("input#jsVanillaEventsCheckBox").prop("checked", true);
  }
});
$("input#jsVanillaFunctionsCheckbox").change(function () {
  if ($("input#jsVanillaFunctionsCheckbox").is(":checked")) {
    $("input#jqueryFunctionsCheckbox").prop("checked", false);
  } else {
    $("input#jqueryFunctionsCheckbox").prop("checked", true);
  }
});
$("input#jqueryFunctionsCheckbox").change(function () {
  if ($("input#jqueryFunctionsCheckbox").is(":checked")) {
    $("input#jsVanillaFunctionsCheckbox").prop("checked", false);
  } else {
    $("input#jsVanillaFunctionsCheckbox").prop("checked", true);
  }
});
$("input#jsVanillaSelectorsCheckbox").change(function () {
  if ($("input#jsVanillaSelectorsCheckbox").is(":checked")) {
    $("input#jquerySelectorsCheckbox").prop("checked", false);
  } else {
    $("input#jquerySelectorsCheckbox").prop("checked", true);
  }
});
$("input#jquerySelectorsCheckbox").change(function () {
  if ($("input#jquerySelectorsCheckbox").is(":checked")) {
    $("input#jsVanillaSelectorsCheckbox").prop("checked", false);
  } else {
    $("input#jsVanillaSelectorsCheckbox").prop("checked", true);
  }
});

//------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------

function displayEventsConsolejQuery() {
  let idEvent = $(this).attr("id");
  if (idEvent === "jqueryEventsCheckbox") {
    idEvent = idEventGlobal;
  } else {
    idEventGlobal = idEvent;
  }
  idEvent = idEvent.match(/\d/g);
  idEvent = parseInt(idEvent.join(""));
  if ($("input#jqueryEventsCheckbox").is(":checked")) {
    switch (idEvent) {
      case 1:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(
          `$(document).ready(function(){
        $("#eventOutputP").html("Page loaded");
        $("#eventOutputP").show();
});`
        );
        /*Coding applied*/
        resetEventsConsole();
        $("#eventOutputP").html("Page loaded");
        $("#eventOutputP").show();
        break;
      case 2:
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(
          `$("#eventOutputButton").on("click", function () {
        $("#eventOutputP").html("Button clicked");
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
          `$("#eventOutputButton").on("dblclick", function () {
        $("#eventOutputP").html("Button double clicked");
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
            $("#eventOutputP").html("Space bar pressed");
            $("#eventOutputP").show();
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
        /*Coding for visualization*/
        $(".eventsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetEventsConsole();
        break;
    }
  }
}

function displayFunctionsConsolejQuery() {
  let idFunction = $(this).attr("id");
  if (idFunction === "jqueryFunctionsCheckbox") {
    idFunction = idFunctionGlobal;
  } else {
    idFunctionGlobal = idFunction;
  }
  idFunction = idFunction.match(/\d/g);
  idFunction = parseInt(idFunction.join(""));
  if ($("input#jqueryFunctionsCheckbox").is(":checked")) {
    switch (idFunction) {
      case 1:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function createHtmlElement() {
        let myNewP = $("p");
        myNewP.html("Element created");
        $("#functionsOutputContent").append(myNewP);
}
$("#functionOutputButton").on("click", createHtmlElement);`
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
            // $("#functionOutputButton").off();
          });
        });
        break;
      case 2:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function removeHtmlElement() {
        $("#functionOutputP").remove();
}
$("#functionOutputButton").on("click", removeHtmlElement);`
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
            // $("#functionOutputButton").off();
          });
        });
        break;
      case 3:
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(
          `function appendElement() {
        let myNewP = $("p");
        myNewP.html("Element appended");
        $("#functionsOutputContent").append(myNewP);
}
$("#functionOutputButton").on("click", appendElement);`
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
        let myNewP = $("p");
        myNewP.html("Element prepended");
        $("#functionsOutputContent").prepend(myNewP);
}
$("#functionOutputButton").on("click", prependElement);`
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
            let myNewP = $("p");
            myNewP.html("Element inserted after");
            myNewP.insertAfter($("#functionOutputButton"))
}
$("#functionOutputButton").on("click", insertAfterElement);`
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
              let myNewP = $("p");
              myNewP.html("Element inserted before");
              myNewP.insertBefore($("#functionOutputButton"))
  }
  $("#functionOutputButton").on("click", insertBeforeElement);`
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
          $("#functionsOutputP").clone().insertBefore($("#functionOutputButton"));
}
$("#functionOutputButton").on("click", cloneElement);`
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
          $("#functionOutputP").addClass("redColorClass");
}
$("#selectorOutputButton").on("click", addClassToElement);`
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
          `function addClassToElement() {
            $("#functionOutputP").removeClass("redColorClass");
}
$("#selectorOutputButton").on("click", removeClassToElement);`
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
        /*Coding for visualization*/
        $(".functionsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetFuntionsConsole();
        break;
    }
  }
}

function displaySelectorsConsolejQuery() {
  let idSelector = $(this).attr("id");
  if (idSelector === "jquerySelectorsCheckbox") {
    idSelector = idSelectorGlobal;
  } else {
    idSelectorGlobal = idSelector;
  }
  idSelector = idSelector.match(/\d/g);
  idSelector = parseInt(idSelector.join(""));
  if ($("input#jquerySelectorsCheckbox").is(":checked")) {
    switch (idSelector) {
      case 1:
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(
          `function createHtmlElement() {
        mySpan = $('#selectorSpan');
        parentElemen = mySpan.parent();
        parentElement.css("font-weight", "bold");
}
$("#selectorOutputButton").on("click", getParentElement);`
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
          `function getChildrenCollection() {
        $("#selectorUl").children().css("font-weight", "bold");
}
$("#selectorOutputButton").on("click", getChildrenCollection);`
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
          `function getChildrenCollection() {
        $(".selectorLi").css("font-weight", "bold");
}
$("#selectorOutputButton").on("click", getElementsByClass);`
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
          `function getElementByIdjQuery() {
          $(".selectorOutputP").css("font-weight", "bold");
}
$("#selectorOutputButton").on("click", getElementByIdjQuery);`
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
            $(".selectorLi").css("color", "red");
    }
    $("#selectorOutputButton").on("click", getElementsByClassColor);`
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
        /*Coding for visualization*/
        $(".selectorsCodeDiv").html(`function not avaiable`);
        /*Coding applied*/
        resetSelectorsConsole();
        break;
    }
  }
}

function resetEventsConsole() {
  $("#eventOutputP").hide();
  $("#eventOutputButton").hide();
  $("#eventOutputButton").html("Click here");
}

function resetFuntionsConsole() {
  $("#functionOutputP").hide();
  $("#functionOutputButton").hide();
  $("#functionSecondOutputP").hide();
  $("#functionThirdOutputP").hide();
  $("#functionOutputP").removeClass("redColorClass");
}

function resetSelectorsConsole() {
  $("#selectorOutputP").hide();
  $("#selectorSpan").hide();
  $("#selectorOutputButton").hide();
  $("#selectorSecondOutputP").hide();
  $("#selectorUl").hide();
  $(".selectorLi").css("font-weight", "normal");
  $(".selectorOutputP").css("font-weight", "normal");
  $(".selectorLi").css("color", "#358873");
}

//------------------------------------------------------------------------
// CALLING FUNCTIONS
//------------------------------------------------------------------------
resetEventsConsole();
resetFuntionsConsole();
resetSelectorsConsole();
