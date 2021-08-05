//* --------- EVENTS ---------

$("#event1").on("click", () => {
  $("#modaljQuery").html("$(document).ready()");
});

//* --------- 2 ---------

$("#event2").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("click", ()=> {})`);
  $("#modaljQuery").append(
    '<button id="click" class="example-btn">Click!</button>'
  );
  $("#click").on("click", () => {
    $("#click").addClass("btn-clicked");
  });
});

//* --------- 3 ---------

$("#event3").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("dblclick", ()=> {})`);
  $("#modaljQuery").append(
    '<button id="dblclick" class="example-btn">Dbl Click!</button>'
  );
  $("#dblclick").on("dblclick", () => {
    $("#dblclick").addClass("btn-clicked");
  });
});

//* --------- 4 ---------

$("#event4").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("keypress, ()=> {})`);
  $("#modaljQuery").append(
    '<button id="pressKey" class="example-btn">Dbl Click!</button>' //? REVISAR BOTONES > TEXT AREA
  );
  $("#pressKey").on("keypress", () => {
    $("#pressKey").addClass("btn-clicked");
  });
});

//* --------- 5 ---------

$("#event5").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("mousemove", ()=> {})`);
  $("#modaljQuery").append(
    '<button id="mouseMove" class="example-btn">Hover!</button>' //? REVISAR BOTONES > TEXT AREA
  );
  $("#mouseMove").on("mousemove", () => {
    $("#mouseMove").addClass("btn-clicked");
  });
});

//* --------- 6 ---------

$("#event6").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("change" , ()=> {})`);
  $("#modaljQuery").append(
    '<label for="jQuery6">jQuery 6</label><input id="jQuery6" class="example-input"></input>'
  );
  $("#jQuery6").on("change", () => {
    $("#jQuery6").addClass("btn-clicked");
  });
});

//* --------- 7 ---------

$("#event7").on("click", () => {
  $("#modaljQuery").html(`$("selector").load(()=> {})`);

  $("#modaljQuery").append(
    '<img id="jQuery7" src="http://cdn.onlinewebfonts.com/svg/img_391102.png" class="example-img" width="50">'
  );
  $("#jQuery7").on("load", () => {
    $("#jQuery7").attr(
      "src",
      "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png"
    );
  });
});

//* --------- 8 ---------

$("#event8").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("error", ()=> {})`);
  $("#modaljQuery").append(
    '<img id="jQuery8" src="http://cdn.onlinewebfonts.com/svg/img_391102.pn" class="example-img" width="50">'
  );
  $("#jQuery8").on("error", () => {
    $("#jQuery8").attr(
      "src",
      "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png"
    );
  });
});

//* --------- 9 ---------

$("#event9").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("submit", ()=> {})`);
  $("#modaljQuery").append(
    '<form id="jQuery9"><label for="jQuery9">jQuery9</label><input class="example-input" ></input><input class="example-btn" type="submit"></input></form>'
  );
  $("#jQuery9").on("submit", (e) => {
    e.preventDefault();
    $("#jQuery9").append(
      `<img class="example-img" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png" width="50">`
    );
  });
});

//* --------- 10 ---------

$("#event10").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("change" , ()=> {})`);
  $("#modaljQuery").append(
    `<label for="rapper">Elige un rapero</label><select id="rapper" class="example-input" name="rappers"><option value="Tupac">Tupac</option><option value="Snoop Dog">Snoop Dog</option></select>`
  );
  $("#rapper").on("change", () => {
    $("#modaljQuery").append(`<h1>¡Que nooooo primo!</h1>`);
  });
});

//* --------- 11 ---------

$("#event11").on("click", () => {
  $("#modaljQuery").html(`$("selector").on("mouseover" , ()=> {})`);
  $("#modaljQuery").append(
    '<button id="jQuery11" class="example-btn">Hover!</button>'
  );
  $("#jQuery11").on("mouseover", () => {
    $("#jQuery11").addClass("btn-clicked");
  });
});

//* --------- 12 ---------

$("#event12").on("click", () => {
  $("#modaljQuery").html(`$("selector").prop("checked" , ()=> {})`);
  $("#modaljQuery").append(
    `<label for="checkbox2"><input type="checkbox" id="checkbox2" ></input> Checkbox 2</label>`
  );
  $("#checkbox2").on("change", () => {
    if ($("#checkbox2").is(":checked")) {
      $("#modaljQuery").append(
        '<button id="jQuery12" class="example-btn">Check!</button>'
      );
    } else if ($("#checkbox2").attr("checked", false)) {
      $("#jQuery12").remove();
    }
  });
});

//* --------- 13 ---------

$("#event13").on("click", () => {
  $("#modaljQuery").html(`$("ul li").on("click", this.show());`);
});

//* --------- FUNCTIONS & SELECTORS ----------

$("#function1").on("click", () => {
  $("#modaljQuery").html(`$("selector").add("element")`);
  $("#modaljQuery").append(
    '<button id="f1"class="example-btn">Create Text</button>'
  );
  $("#f1").on("click", () => {
    $("#modaljQuery").append(`<p class="column-flex">Any Text Value<p>`);
  });
});
$("#function2").on("click", () => {
  $("#modaljQuery").html(`$("selector").empty();`);
  $("#modaljQuery").append("<button>Larry</button>");
});
$("#function3").on("click", () => {
  $("#modaljQuery").html(`$("selector").append("element")`);
});
$("#function4").on("click", () => {
  $("#modaljQuery").html(`$("selector").prepend("element");`);
});
$("#function5").on("click", () => {
  $("#modaljQuery").html(`$("selector").add("element");<br/>
  $( "selector" ).append( "element" )`);
});
$("#function6").on("click", () => {
  $("#modaljQuery").html(`$("selector").add("element"); <br/>
  $("selector").prepend("element")`);
});
$("#function7").on("click", () => {
  $("#modaljQuery").html(`$("selector").clone().appendTo(“referenceElement”)`);
});
$("#function8").on("click", () => {
  $("#modaljQuery").html(`$("selector").addClass( "className" )`);
});
$("#function9").on("click", () => {
  $("#modaljQuery").html(`$("selector").removeClass( "className" )`);
});
$("#function10").on("click", () => {
  $("#modaljQuery").html(`$("selector").toggleClass( "className" )`);
});
$("#function11").on("click", () => {
  $("#modaljQuery").html(`$("#btn").attr("disabled", true);`);
});
$("#function12").on("click", () => {
  $("#modaljQuery").html(`
  $('#btn').attr("disabled", false);	<br>
  or<br>
  $('#btn').removeAttr("disabled");`);
});
$("#function13").on("click", () => {
  $("#modaljQuery").html(` $("#img").attr("data-src", "new_url")`);
});
$("#function14").on("click", () => {
  $("#modaljQuery").html(`$("selector").removeAttr( "data-src" )`);
});
$("#function15").on("click", () => {
  $("#modaljQuery").html(`$("selector").hide();`);
});
$("#function16").on("click", () => {
  $("#modaljQuery").html(`$("selector").show();`);
});
$("#function17").on("click", () => {
  $("#modaljQuery").html(`$("selector").fadeIn(speed,easing,callback)`);
});
$("#function18").on("click", () => {
  $("#modaljQuery").html(`$("selector").fadeOut(speed,easing,callback)`);
});
$("#function19").on("click", () => {
  $("#modaljQuery").html(
    `$("selector").each(function( index ) {$(this).css("property", "value")});`
  );
});
$("#function20").on("click", () => {
  $("#modaljQuery").html(
    `$("selector").parent().css( "font-weight", "bold" );`
  );
});
$("#function21").on("click", () => {
  $("#modaljQuery").html(`$(“ul”).children().css({font-weight:”light”});`);
});
$("#function22").on("click", () => {
  $("#modaljQuery").html(`$(“.className”).css({font-weight:”bolder”})`);
});
$("#function23").on("click", () => {
  $("#modaljQuery").html(`$(“#idName”).css({font-weight:”bolder”})`);
});
$("#function24").on("click", () => {
  $("#modaljQuery").html(
    `¿¿¿¿¿¿¿¿¿$(“.className”).css({display:”none”, “font-color”:”red”})???????????'`
  );
});
$("#function25").on("click", () => {
  $("#modaljQuery").html(`$( "selector" ).add( "element" )`);
});
$("#function26").on("click", () => {
  $("#modaljQuery").html(`$( "selector" ).add( "element" )`);
});
$("#function27").on("click", () => {
  $("#modaljQuery").html(`$( "selector" ).add( "element" )`);
});
$("#function28").on("click", () => {
  $("#modaljQuery").html(`$( "selector" ).add( "element" )`);
});
$("#function29").on("click", () => {
  $("#modaljQuery").html(`$( "selector" ).add( "element" )`);
});
