import { initialSetLocalStorage, createExample } from "./functions.js";

function setWebSiteContent() {
	let events = [];
	initialSetLocalStorage("events", events);

	let functions = [];
	initialSetLocalStorage("functions", functions);

	let selectors = [];
	initialSetLocalStorage("selectors", selectors);

	let codeToCopy = "";
	initialSetLocalStorage("code", codeToCopy);

	let draggableOption = "";
	initialSetLocalStorage("codeOption", draggableOption);

	//1
	createExample(
		"HTML document loaded",
		"events",
		`document.addEventListener("DOMContentLoaded", function(){})`,
		`$(document).ready(function() {/*same as: $(function() { alert("hi 1");*/});`,
		"The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. The original target for this event is the Document that has loaded. You can listen for this event on the Window interface to handle it in the capture or bubbling phases",
		"The .ready() method offers a way to run JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate. This will often be a good time to perform tasks that are needed before the user views or interacts with the page, for example to add event handlers and initialize plugins. When multiple functions are added via successive calls to this method, they run when the DOM is ready in the order in which they are added. As of jQuery 3.0, jQuery ensures that an exception occuring in one handler does not prevent subsequently added handlers from executing",
		`<code>window.addEventListener(' DOMContentLoaded', (event) =&gt;{" "}{console.log("DOM fully loaded and parsed")})</code>`,
		`<code>function() {$("p").text("The DOM is now loaded and can be manipulated.")}</code>`
	);

	//2
	createExample(
		"HTML item has been clicked",
		"events",
		`document.querySelector('button').addEventListener('click', function(){});`,
		`$("#dataTable tbody tr" ).on( "click", function() {onsole.log( $( this ).text());});`,
		"An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element. If the button is pressed on one element and the pointer is moved outside the element before the button is released, the event is fired on the most specific ancestor element that contained both elements. Click fires after both the mousedown and mouseup events have fired, in that order.",
		"Any event names can be used for the events argument. jQuery will pass through the browser's standard JavaScript event types, calling the handler function when the browser generates events due to user actions such as click. In addition, the .trigger() method can trigger both standard browser event names and custom event names to call attached handlers. Event names should only contain alphanumerics, underscore, and colon characters.",
		`<code>const button = document.querySelector('button'); button.addEventListener('click', function(){});</code>`,
		`<code>$( "p" ).on( "click", function() {alert( $( this ).text() );});</code>`
	);

	//3
	createExample(
		"HTML item has been double clicked",
		"events",
		`document.querySelector('aside');.addEventListener('dblclick', function (e) {});`,
		`$( "#target" ).dblclick(function() {});`,
		"The dblclick event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time. Dblclick fires after two click events (and by extension, after two pairs of mousedown and mouseup events).",
		`This method is a shortcut for .on( "dblclick", handler ) in the first two variations, and .trigger( "dblclick" ) in the third. The dblclick event is sent to an element when the element is double-clicked. Any HTML element can receive this event.`,
		`<code>const card = document.querySelector('aside'); card.addEventListener('dblclick', function (e) { card.classList.toggle('large');});</code>`,
		`<code>$("#target").dblclick(function() {alert( "Handler for .dblclick() called." );});</code>`
	);

	//4
	createExample(
		"user presses a key on the keyboard",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//5
	createExample(
		"user moves the mouse cursor",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//6
	createExample(
		"user changes a value of an text input",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//7
	createExample(
		"image is loaded",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//8
	createExample(
		"image fails to load",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//9
	createExample(
		"form is submitted",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//10
	createExample(
		"user changes the option of a select element",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//11
	createExample(
		"position the mouse over an element",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//12
	createExample(
		"checkbox is checked or unchecked",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//13
	createExample(
		"ul list item is clicked, show the item that was clicked",
		"events",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//14
	createExample(
		"Animate an item after 2 seconds from the initial page load",
		"functions",
		`var timeoutID = setTimeout(code[, 2000]);`,
		`$("p").animate({left: 50,opacity: 1}, 2000 );`,
		"The setTimeout() method of the WindowOrWorkerGlobalScope mixin sets a timer which executes a function or specified piece of code once the timer expires.",
		"Perform a custom animation of a set of CSS properties. The .animate() method allows us to create animation effects on any numeric CSS property. The only required parameter is a plain object of CSS properties. This object is similar to the one that can be sent to the .css() method, except that the range of properties is more restrictive.",
		`<code>var cntSt = 0, cntSi = 0; function doStuffwTimeout(){ ​setTimeout(function(){if(cntSt<300){ntSt++$('#box').css('left', cntSt); doStuffwTimeout();}},2000);</code>`,
		`<code>$( "#clickme" ).click(function() { $( "#book" ).animate({ width: [ "toggle", "swing" ], height: [ "toggle", "swing" ], opacity: "toggle"}, 2000, "linear", function() {$( this ).after( "<div>Animation complete.</div>" );});});</code>`
	);

	//15
	createExample(
		"Add a class to an HTML item",
		"functions",
		`span.classList.add("d", "e", "f");`,
		`$("p").addClass( "myClass yourClass");`,
		"The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list. Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className. The add() method of the DOMTokenList interface adds the given token to the list.",
		"Adds the specified class(es) to each element in the set of matched elements. It's important to note that this method does not replace a class. It simply adds the class, appending it to any which may already be assigned to the elements.",
		`<code>let span = document.querySelector("span");let classes = span.classList;classes.add("d");span.textContent = classes;</code>`,
		`<code>$( "div" ).addClass(function( index, currentClass ) {var addedClass; if ( currentClass === "red" ) { ​addedClass = "green"; $( "p" ).text( "There is one green div" );}return addedClass;})</code>`
	);

	//16
	createExample(
		"Remove a class to an HTML item",
		"functions",
		`span.classList.remove("d", "e", "f")`,
		`$("p").removeClass( "myClass");`,
		"The remove() method of the DOMTokenList interface removes the specified tokens from the list.",
		"Remove a single class, multiple classes, or all classes from each element in the set of matched elements.",
		`<code>let span2 = document.getElementById("a") let classes2 = span2.classList;classes2.remove("c", "b");</code>`,
		`<code> $( "li" ).last().removeClass(function() {return $( this ).prev().attr( "class" );});</code>`
	);

	//17
	createExample(
		"Toggle a class of an HTML item",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//18
	createExample(
		"Add a disabled attribute to an HTML button",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//19
	createExample(
		"Remove the disabled attribute of an HTML button",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//20
	createExample(
		"Set a data-src attribute to a img element",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//21
	createExample(
		"Remove the data-src attribute of the img element",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//22
	createExample(
		"Hide an HTML element on click (display: none)",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//23
	createExample(
		"Show an HTML element on click (display: block)",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//24
	createExample(
		"Fade in an HTML element using jQuery",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//25
	createExample(
		"Fade out an HTML element using jQuery",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//26
	createExample(
		"Create an HTML element with any text value",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//27
	createExample(
		"Remove an HTML element with any text value",
		"selectors",
		`document.getElementById("my-div").remove();`,
		`$( ".hello" ).remove();`,
		"The Element.remove() method removes the element from the tree it belongs to. The remove() method is not scoped into the with statement.",
		"Remove the set of matched elements from the DOM. Use .remove() when you want to remove the element itself, as well as everything inside it. In addition to the elements themselves, all bound events and jQuery data associated with the elements are removed",
		`<code>var el = document.getElementById('div-02'); el.remove(); // Removes the div with the 'div-02' id</code>`,
		`<code>$( "button" ).click(function() {$( "p" ).remove();});</code>`
	);

	//28
	createExample(
		"Append an HTML element with any text value to a parent element",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//29
	createExample(
		"Prepend an HTML element with any text value to a parent element",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//30
	createExample(
		"Create and add an HTML element with any text value after another element",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//31
	createExample(
		"Create and add an HTML element with any text value before another element",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//32
	createExample(
		"Clone an HTML element within other element",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//33
	createExample(
		"Iterate a collection of elements and apply a change of style on them",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//34
	createExample(
		"Get the parent element of a certain element and change its font weight",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//35
	createExample(
		"Get the collection of children of a certain element and change its font weight",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//36
	createExample(
		"",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//37
	createExample(
		"Get an item by id and change its font weight",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//38
	createExample(
		"Get all the elements that have a certain class and the display property of none and change their font color and the display itself so it’s visible.",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//39
	createExample(
		"Get the options of a select element that are selected (attribute selected)",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//40
	createExample(
		"Change the href attribute of the first <a> element (You have to create several <a> elements)",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//41
	createExample(
		"Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//42
	createExample(
		"Remove all items from a specific selector",
		"selectors",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);
}

export { setWebSiteContent };
