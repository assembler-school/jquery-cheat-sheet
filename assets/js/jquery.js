//------------------------------------------------------------------------
// GLOBAL VARIABLES
//------------------------------------------------------------------------
var idEventGlobal;
var idFunctionGlobal;
var idSelectorGlobal;
var eventsContentjQuery = [
  {
    code: `$("#eventOutputButton").click(function () {
        $("#eventOutputP").html("Button clicked");
      });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
        if ($("input#jQueryEventsCheckBox").is(":checked")) {
                $("input#jqueryEventsCheckbox").prop("checked", false);
        }else{
                $("input#jqueryEventsCheckbox").prop("checked", true);
        }
    });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
];

var functionsContentjQuery = [
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
                if ($("input#jQueryEventsCheckBox").is(":checked")) {
                        $("input#jqueryEventsCheckbox").prop("checked", false);
                }else{
                        $("input#jqueryEventsCheckbox").prop("checked", true);
                }
            });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
                if ($("input#jQueryEventsCheckBox").is(":checked")) {
                        $("input#jqueryEventsCheckbox").prop("checked", false);
                }else{
                        $("input#jqueryEventsCheckbox").prop("checked", true);
                }
            });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
                if ($("input#jQueryEventsCheckBox").is(":checked")) {
                        $("input#jqueryEventsCheckbox").prop("checked", false);
                }else{
                        $("input#jqueryEventsCheckbox").prop("checked", true);
                }
            });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
                if ($("input#jQueryEventsCheckBox").is(":checked")) {
                        $("input#jqueryEventsCheckbox").prop("checked", false);
                }else{
                        $("input#jqueryEventsCheckbox").prop("checked", true);
                }
            });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
                if ($("input#jQueryEventsCheckBox").is(":checked")) {
                        $("input#jqueryEventsCheckbox").prop("checked", false);
                }else{
                        $("input#jqueryEventsCheckbox").prop("checked", true);
                }
            });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
                if ($("input#jQueryEventsCheckBox").is(":checked")) {
                        $("input#jqueryEventsCheckbox").prop("checked", false);
                }else{
                        $("input#jqueryEventsCheckbox").prop("checked", true);
                }
            });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
];

var selectorsContentjQuery = [
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
  {
    code: `$("input#jQueryEventsCheckBox").change(function () {
              if ($("input#jQueryEventsCheckBox").is(":checked")) {
                      $("input#jqueryEventsCheckbox").prop("checked", false);
              }else{
                      $("input#jqueryEventsCheckbox").prop("checked", true);
              }
          });`,
    output: "<h1>My jQuery Cheatsheet</h1>",
  },
];

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
      default:
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
            $("#eventOutputButton").off("click", clickfunction);
          });
        });
        break;
      default:
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
    $(".selectorsCodeDiv").html(selectorsContentjQuery[idSelector - 1].code);
    $(".selectorsOutputDiv").html(
      selectorsContentjQuery[idSelector - 1].output
    );
  }
}

function resetEventsConsole() {
  $("#eventOutputP").hide();
  $("#eventOutputButton").hide();
}

function resetFuntionsConsole() {
  $("#functionOutputP").hide();
  $("#functionOutputButton").hide();
}
