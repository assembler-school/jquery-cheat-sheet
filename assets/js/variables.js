/**
 * Global Variables
 */
let listObjectsJS = [
  {
    id: "6",
    title: "Html loaded",
    type: "events",
    code: `document.addEventListener('DOMContentLoaded', function () { <br>
      // do something here ...<br>
    }, false);`,

    link: " https://www.w3schools.com/jsref/event_onload.asp",
  },
  {
    id: `1`,
    title: `clicked`,
    type: `events`,
    code: `object.onclick = function(){myScript};`,
    link: ` https://www.w3schools.com/jsref/event_onclick.asp `,
  },
  {
    id: `2`,
    title: ` double clicked`,
    type: `events`,
    code: `object.ondblclick = function(){myScript};`,
    link: `https://www.w3schools.com/jsref/event_ondblclick.asp`,
  },
  {
    id: `3`,
    title: `presses a key`,
    type: `events`,
    code: `object.onkeypress = function(){myScript};`,
    link: `https://www.w3schools.com/jsref/event_onkeypress.asp`,
  },
  {
    id: `4`,
    title: `moves the mouse`,
    type: `events`,
    code: `object.onmousemove = function(){myScript};`,
    link: `https://www.w3schools.com/jsref/event_onmousemove.asp`,
  },
  {
    id: `5`,
    title: `changes a value`,
    type: `events`,
    code: `object.onchange = function(){myScript};`,
    link: `https://www.w3schools.com/jsref/event_onchange.asp`,
  },
  {
    id: `0`,
    title: `image loaded`,
    type: `events`,
    code: `object.addEventListener("load", myScript);`,
    link: `https://www.w3schools.com/JSREF/event_onload.asp`,
  },
  {
    id: `7`,
    title: `image fails`,
    type: `events`,
    code: `object.onerror = function(){myScript};`,
    link: `https://www.w3schools.com/jsref/event_onerror.asp`,
  },
  {
    id: `8`,
    title: `form submitted`,
    type: `events`,
    code: `object.onsubmit = function(){myScript};`,
    link: `https://www.w3schools.com/jsref/event_onsubmit.asp`,
  },
  {
    id: `9`,
    title: `select changes`,
    type: `events`,
    code: `document.getElementById('mySelect').value = 'banana';`,
    link: `https://www.w3schools.com/jsref/event_onchange.asp`,
  },
  {
    id: `11`,
    title: `mouse over`,
    type: `events`,
    code: `object.addEventListener('mouseover', myScript);`,
    link: `https://www.w3schools.com/jsref/event_onmouseover.asp`,
  },
  {
    id: `10`,
    title: `checked`,
    type: `events`,
    code: ` document.getElementById('myCheck').checked = true;
    }`,
    link: `https://www.w3schools.com/jsref/prop_checkbox_checked.asp`,
  },
  {
    id: `12`,
    title: `unchecked`,
    type: `events`,
    code: ` document.getElementById('myCheck').checked = false;
    }`,
    link: `https://www.w3schools.com/jsref/prop_checkbox_checked.asp`,
  },
  {
    id: `13`,
    title: `focus`,
    type: `events`,
    code: `object.onfocus = function(){myScript};`,
    link: `https://www.w3schools.com/jsref/event_onfocus.asp`,
  },
  {
    id: `14`,
    title: `Create`,
    type: `functions`,
    code: `document.createElement(nodename);`,
    link: `https://www.w3schools.com/jsref/met_document_createelement.asp`,
  },
  {
    id: `17`,
    title: `remove`,
    type: `functions`,
    code: `node.remove();`,
    link: `https://www.w3schools.com/jsref/met_element_remove.asp`,
  },
  {
    id: `16`,
    title: `append`,
    type: `functions`,
    code: `node.appendChild(node);`,
    link: `https://www.w3schools.com/jsref/met_node_appendchild.asp`,
  },
  {
    id: `19`,
    title: `prepend`,
    type: `functions`,
    code: `div.prepend('Some text', p);
    `,
    link: `https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend`,
  },
  {
    id: `20`,
    title: `create and add`,
    type: `functions`,
    code: `let d = document.createElement('div'); <br>
         d.classList.add('classname').innerHTML('text') <br>
            .appendTo(document.getElementById(“idName”)
        `,
    link: `https://api.jquery.com/remove/`,
  },
  {
    id: `21`,
    title: ` add after`,
    type: `functions`,
    code: `p.after('Text');
    `,
    link: `https://developer.mozilla.org/en-US/docs/Web/API/Element/after`,
  },
  {
    id: `22`,
    title: "add before",
    type: `functions`,
    code: ` p.before('Text');
    `,
    link: `https://developer.mozilla.org/en-US/docs/Web/API/Element/before`,
  },
  {
    id: `23`,
    title: `clone`,
    type: `functions`,
    code: `var itm = document.getElementById('myList2').lastChild;<br>
    
      var cln = itm.cloneNode(true);<br>
    
      document.getElementById('myList1').appendChild(cln);<br>
    
    `,
    link: `https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode`,
  },
  {
    id: `24`,
    title: `add a class`,
    type: `functions`,
    code: `document.getElementById(“idName”).classList.add(“className”)`,
    link: `https://developer.mozilla.org/es/docs/Web/API/Element/classList`,
  },
  {
    id: `25`,
    title: `remove a class`,
    type: `functions`,
    code: `document.getElementById(“idName”).classList.remove(“className”)`,
    link: `https://developer.mozilla.org/es/docs/Web/API/Element/classList`,
  },
  {
    id: `26`,
    title: `toggle a class`,
    type: `functions`,
    code: ` document.getElementById(“idName”).classList.toggle(“className”)`,
    link: `https://developer.mozilla.org/es/docs/Web/API/Element/classList`,
  },
  {
    id: `27`,
    title: `add disabled`,
    type: `functions`,
    code: `document.getElementById('mySelect').disabled = true;`,
    link: `https://www.w3schools.com/jsref/prop_select_disabled.asp`,
  },
  {
    id: `28`,
    title: `remove disabled`,
    type: `functions`,
    code: `document.getElementById('mySelect').disabled = false;`,
    link: `https://www.w3schools.com/jsref/prop_select_disabled.asp`,
  },
  {
    id: `30`,
    title: `set data-key`,
    type: `functions`,
    code: `document.getElementById('mySelect')<br>
    .setAttribute(“src”,”src/img/lpm.jpg”)`,
    link: `https://www.w3schools.com/jsref/met_element_setattribute.asp`,
  },
  {
    id: `31`,
    title: `remove data-key`,
    type: `functions`,
    code: `document.getElementById('mySelect')<br>
    .removeAttribute(“src”,”src/img/lpm.jpg”);`,
    link: `https://www.w3schools.com/jsref/met_element_removeattribute.asp`,
  },
  {
    id: `32`,
    title: `hide`,
    type: `functions`,
    code: `document.getElementById('mySelect')<br>
    .style.display=”none”;
    `,
    link: `https://www.w3schools.com/jsref/prop_style_display.asp`,
  },
  {
    id: `33`,
    title: `show`,
    type: `functions`,
    code: `document.getElementById('mySelect')<br>
    .style.display=”block”;`,
    link: "https://www.w3schools.com/jsref/prop_style_display.asp",
  },
  {
    id: `34`,
    title: `fade in`,
    type: `functions`,
    code: `document.getElementById('mySelect')<br>
    .style.visibility=”visible”;`,
    link: `https://www.w3schools.com/jsref/prop_style_visibility.asp`,
  },
  {
    id: `35`,
    title: `fade out`,
    type: `functions`,
    code: `document.getElementById('mySelect')<br>
    .style.visibility=”hidden”;`,
    link: `https://www.w3schools.com/jsref/prop_style_visibility.asp`,
  },
  {
    id: `36`,
    title: `iterate elements`,
    type: `selectors`,
    code: `const numbers = [45, 4, 9, 16, 25];<br>
    numbers.forEach(myFunction);`,
    link: `https://www.w3schools.com/js/js_array_iteration.asp`,
  },
  {
    id: `37`,
    title: `parent`,
    type: `selectors`,
    code: `document.getElementById('myLI').parentElement.id`,
    link: `https://www.w3schools.com/jsref/prop_node_parentelement.asp`,
  },
  {
    id: `38`,
    title: `children`,
    type: `selectors`,
    code: `document.getElementById('myLI').children`,
    link: `https://www.w3schools.com/jsref/prop_node_childnodes.asp`,
  },

  {
    id: `39`,
    title: `select by className`,
    type: `selectors`,
    code: `document.getElementsByClassName(“classname”);`,
    link: `https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp`,
  },
  {
    id: `40`,
    title: `select by id`,
    type: `selectors`,
    code: `document.getElementById(“nameID”);`,
    link: `https://www.w3schools.com/jsref/met_document_getelementbyid.asp`,
  },
  {
    id: `41`,
    title: `select all
    `,
    type: `selectors`,
    code: `document.querySelectorAll(“.selector//#selector”);`,
    link: `https://www.w3schools.com/jsref/met_document_queryselectorall.asp`,
  },
  {
    id: `42`,
    title: `attributes selected`,
    type: `selectors`,
    code: `document.getElementById(“nameID”).options;`,
    link: `w3schools.com/jsref/coll_select_options.asp`,
  },
  {
    id: `44`,
    title: `change href`,
    type: `selectors`,
    code: `document.getElementById(“nameID”).href = ”www.URL.net”;`,
    link: `https://www.w3schools.com/jsref/prop_anchor_href.asp`,
  },
  {
    id: `43`,
    title: `alert`,
    type: `selectors`,
    code: `alert(document.querySelector(“input”))`,
    link: `https://www.w3schools.com/jsref/met_win_alert.asp`,
  },
  {
    id: `45`,
    title: `remove all `,
    type: `selectors`,
    code: `document.getElementById(“nameID”).innerHTML=’’`,
    link: `https://www.w3schools.com/jsref/prop_html_innerhtml.asp`,
  },
  {
    id: `46`,
    title: `animate`,
    type: `selectors`,
    code: `setInterval(function(){ <br>
     setTimeout(function(){ this.style.color=”red” }, 1500); <br>
    
    this.style.color=”blue”; }, 3000); <br>
    
    `,
    link: "https://www.w3schools.com/jsref/met_win_settimeout.asp",
  },
];
localStorage.setItem("objectsJS", JSON.stringify(listObjectsJS));

let listObjectsJQ = [
  {
    id: "0",
    title: "image loaded ",
    type: "events",
    code: `$('img").load(function(){<br>
      alert("Image loaded.");<br>
    });<br>
      `,
    link: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick",
  },
  {
    id: "1",
    title: "click",
    type: "events",
    code: `$("p").click(function(){ <br>
      alert("The paragraph was clicked.");<br> 
    });
      `,
    link: "https://www.w3schools.com/jquery/event_click.asp",
  },
  {
    id: "2",
    title: "double clicked",
    type: "events",
    code: `$(selector).dblclick(function)
      `,
    link: "https://www.w3schools.com/jquery/event_dblclick.asp",
  },
  {
    id: "3",
    title: "pressed a key",
    type: "events",
    code: `$(selector).dblclick(function)
      `,
    link: "https://www.w3schools.com/jquery/event_dblclick.asp",
  },
  {
    id: "4",
    title: "mouse moves",
    type: "events",
    code: `$(selector).mousemove(function)
      `,
    link: "https://www.w3schools.com/jquery/event_mousemove.asp",
  },
  {
    id: "5",
    title: "change",
    type: "events",
    code: `$(selector).change(function)  
      `,
    link: "https://www.javatpoint.com/jquery-change",
  },
  {
    id: "6",
    title: "Html loaded",
    type: "events",
    code: `$( document ).ready(function() { <br>
      //insert code here!<br>
    });<br>
      `,
    link: "https://api.jquery.com/ready/",
  },
  {
    id: "7",
    title: "image fails",
    type: "events",
    code: `$( "img" ).error(function() { <br>
      $( this ).attr( "src", "replacement.png" );<br>
    }) .attr( "src", "missing.png" ); 
      `,
    link: "https://api.jquery.com/error/",
  },
  {
    id: "8",
    title: "submit",
    type: "events",
    code: `$(selector).submit(function) 
      `,
    link: "https://www.w3schools.com/jquery/event_submit.asp",
  },
  {
    id: "9",
    title: "select changes",
    type: "events",
    code: `$( "#target" ).select(function() {<br>
      alert( "Handler for .select() called." );<br>
    });
      `,
    link: "https://api.jquery.com/select/",
  },
  {
    id: "10",
    title: "checked",
    type: "events",
    code: `$("checkbox").is(":checked")
      `,
    link: "https://www.codegrepper.com/code-examples/javascript/checkbox+checked+event+jquery",
  },
  {
    id: "11",
    title: "mouse over",
    type: "events",
    code: `$(selector).mouseover(function) 
      `,
    link: "https://www.w3schools.com/jquery/event_mouseover.asp",
  },
  {
    id: "12",
    title: "unchecked",
    type: "events",
    code: `$('input[type=checkbox]:not(:checked)')
      `,
    link: "https://javarevisited.blogspot.com/2020/04/how-to-find-all-unchecked-checkboxes-using-jQuery.html#axzz72d41z1Z0",
  },
  {
    id: "13",
    title: "focus",
    type: "events",
    code: `$( "#target" ).focus(function() { <br>
      alert( "Handler for .focus() called." ); <br>
    });<br>
    `,
    link: "https://api.jquery.com/focus/",
  },
  {
    id: "14",
    title: "create",
    type: "functions",
    code: `d = document.createElement('div'); <br>
    $(d).addClass("classname").html("text")
    `,
    link: "https://www.w3schools.com/jquery/jquery_dom_add.asp",
  },
  {
    id: "15",
    title: "select changes",
    type: "events",
    code: `$( "#target" ).select(function() {<br>
    alert( "Handler for .select() called." );<br>
  });
    `,
    link: "https://api.jquery.com/select/",
  },
  {
    id: "16",
    title: "append",
    type: "functions",
    code: `$("p").append("Some appended text.");
    `,
    link: "https://www.w3schools.com/jquery/jquery_dom_add.asp",
  },
  {
    id: "17",
    title: "remove",
    type: "functions",
    code: `$( "div" ).remove( ".hello" );
    `,
    link: "https://api.jquery.com/remove/",
  },
  {
    id: "18",
    title: "create",
    type: "functions",
    code: `d = document.createElement('div'); <br>
    $(d).addClass("classname").html("text")
    `,
    link: "https://www.w3schools.com/jquery/jquery_dom_add.asp",
  },
  {
    id: "19",
    title: "preppend",
    type: "functions",
    code: `$(element).prepend("<b>Prepended text</b>")
    `,
    link: "https://www.w3schools.com/jquery/html_prepend.asp",
  },
  {
    id: "20",
    title: "create and add",
    type: "functions",
    code: `d = document.createElement('div'); <br>
      $(d).addClass("classname").html("text") <br>
        .appendTo($("#myDiv"))
    `,
    link: "https://api.jquery.com/remove/",
  },
  {
    id: "21",
    title: "add after",
    type: "functions",
    code: `$("img").after("Some text after");
    `,
    link: "https://www.w3schools.com/jquery/jquery_dom_add.asp",
  },
  {
    id: "22",
    title: "add before",
    type: "functions",
    code: `$("img").before("Some text before");
    `,
    link: "https://www.w3schools.com/jquery/jquery_dom_add.asp",
  },
  {
    id: "23",
    title: "clone",
    type: "functions",
    code: `$("p").clone().appendTo("body");
    `,
    link: "https://www.w3schools.com/jquery/html_clone.asp",
  },
  {
    id: "24",
    title: "add class",
    type: "functions",
    code: `$("p:first").addClass("intro");
    `,
    link: "https://www.w3schools.com/jquery/html_addclass.asp",
  },
  {
    id: "25",
    title: "remove class",
    type: "functions",
    code: ` $("p").removeClass("intro");
    `,
    link: "https://www.w3schools.com/jquery/html_removeclass.asp",
  },
  {
    id: "26",
    title: "toggle class",
    type: "functions",
    code: `$("p").toggleClass("main");
    `,
    link: "https://www.w3schools.com/jquery/html_toggleclass.asp",
  },
  {
    id: "27",
    title: "add disabled",
    type: "functions",
    code: `$("input").prop('disabled', true);
    `,
    link: "https://api.jquery.com/prop/",
  },
  {
    id: "28",
    title: "remove disabled",
    type: "functions",
    code: `("input").prop('disabled', false);
    `,
    link: "https://api.jquery.com/prop/",
  },

  {
    id: "30",
    title: "set data-key",
    type: "functions",
    code: `$( "img" ).data( "src","/src/img/wtf.gif" );
    `,
    link: "https://api.jquery.com/data/",
  },
  {
    id: "31",
    title: "remove data-key",
    type: "functions",
    code: `$( "div" ).removeData( "key" ).removeAttr( "data-key" );
    `,
    link: "https://api.jquery.com/removeAttr/",
  },
  {
    id: "32",
    title: "hide",
    type: "functions",
    code: `$(selector).hide(speed,callback);
    `,
    link: "https://www.w3schools.com/jquery/jquery_hide_show.asp",
  },
  {
    id: "33",
    title: "show",
    type: "functions",
    code: `$(selector).show(speed,callback);
    `,
    link: "https://www.w3schools.com/jquery/jquery_hide_show.asp",
  },
  {
    id: "34",
    title: "fade in",
    type: "functions",
    code: `$(selector).fadeIn(speed,callback);
    `,
    link: "https://www.w3schools.com/jquery/eff_fadein.asp",
  },
  {
    id: "35",
    title: "fade out",
    type: "functions",
    code: `$(selector).fadeOut(speed,callback);
    `,
    link: "https://www.w3schools.com/jquery/eff_fadeout.asp",
  },
  {
    id: "36",
    title: "iterate elements",
    type: "selectors",
    code: `$("li").each(function(){ <br>
         alert($(this).text()) <br>
       });<br>
    `,
    link: "https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_misc_each",
  },
  {
    id: "37",
    title: "parent",
    type: "selectors",
    code: `$(selector).parent(filter)
  `,
    link: "https://www.w3schools.com/jquery/traversing_parent.asp",
  },
  {
    id: "38",
    title: "children",
    type: "selectors",
    code: `$(selector).children(filter)
    `,
    link: "https://www.w3schools.com/jquery/traversing_children.asp",
  },
  {
    id: "39",
    title: "select by className",
    type: "selectors",
    code: `$(.className) 
  `,
    link: "https://api.jquery.com/class-selector/",
  },
  {
    id: "40",
    title: "select by id",
    type: "selectors",
    code: `$(#idName) 
  `,
    link: "https://api.jquery.com/id-selector/",
  },
  {
    id: "41",
    title: "select all",
    type: "selectors",
    code: `$(.className) 
  `,
    link: "https://api.jquery.com/class-selector/",
  },
  {
    id: "42",
    title: "attributes selected",
    type: "selectors",
    code: `$('#element').prop('selected', true);
  `,
    link: "https://api.jquery.com/prop/",
  },
  {
    id: "43",
    title: "show an alert",
    type: "functions",
    code: `alert($(input).val());
  `,
    link: "https://api.jquery.com/val/",
  },
  {
    id: "44",
    title: "change href",
    type: "functions",
    code: `$("link").attr("href", "www.newUrl.com");
  `,
    link: "https://www.tutorialrepublic.com/faq/how-to-change-href-attribute-of-a-hyperlink-using-jquery.php",
  },
  {
    id: "45",
    title: "remove all",
    type: "functions",
    code: `$("li").empty();
  `,
    link: "https://api.jquery.com/prop/",
  },
  {
    id: "46",
    title: "animate",
    type: "functions",
    code: `$(selector).animate({params},speed,callback);
  `,
    link: "https://www.w3schools.com/jquery/jquery_animate.asp",
  },
];
localStorage.setItem("objectsJQ", JSON.stringify(listObjectsJQ));

/* let listExamples = [
  {
    id: "1",
    text: `<h1>The onclick Event</h1>

    <p>The onclick event is used to trigger a function when an element is clicked on.</p>
    
    <p>Click the button to trigger a function that will output "Hello World" in a p element with id="demo".</p>
    
    <button onclick="myFunction()">Click me</button>
    
    <p id="demo"></p>`,

    popUpText: "se ha efectuado example 1 con exito",
  },
];
localStorage.setItem("examples", JSON.stringify(listExamples)); */

let dragged;
