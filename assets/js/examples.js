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
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//3
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

	//4
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

	//5
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
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//15
	createExample(
		"Add a class to an HTML item",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
	);

	//16
	createExample(
		"Remove a class to an HTML item",
		"functions",
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
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
		``,
		``,
		"",
		"",
		`<code></code>`,
		`<code></code>`
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
