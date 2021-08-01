export const data = {
	examples: [
		{
			id: 1,
			type: "event",
			title: "When the HTML document has been loaded",
			src: "./assets/examples/html/example-01.html",
			vanillaCode: `
				document.addEventListener("DOMContentLoaded", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-01-vanilla").textContent = "This content has been loaded with Vanilla JS.";</div>
				});
			`,
			jQueryCode: `
				$(function (ev) {
				<div class="code-indentation">$('#ex-01-jquery').text('This content has been loaded with jQuery.');</div>
				});
			`,
		},
		{
			id: 2,
			type: "event",
			title: "When an HTML item has been clicked",
		},
		{
			id: 3,
			type: "event",
			title: "When an HTML item has been double clicked",
		},
		{
			id: 4,
			type: "event",
			title: "When the user presses a key on the keyboard",
		},
		{
			id: 5,
			type: "event",
			title: "When the user moves the mouse cursor",
		},
		{
			id: 6,
			type: "event",
			title: "When the user changes a value of an text input",
		},
		{
			id: 7,
			type: "event",
			title: "When an image is loaded",
		},
		{
			id: 8,
			type: "event",
			title: "When an image fails to load",
		},
		{
			id: 9,
			type: "event",
			title: "When a form is submitted",
		},
		{
			id: 10,
			type: "event",
			title: "When the user changes the option of a select element",
		},
		{
			id: 11,
			type: "event",
			title: "When you position the mouse over an element",
		},
		{
			id: 12,
			type: "event",
			title: "When a checkbox is checked or unchecked",
		},
		{
			id: 13,
			type: "event",
			title: "When a ul list item is clicked, show the item that was clicked",
		},
		{
			id: 14,
			type: "manipulation",
			title: "Create an HTML element with any text value",
		},
		{
			id: 15,
			type: "manipulation",
			title: "Remove an HTML element with any text value",
		},
		{
			id: 16,
			type: "manipulation",
			title: "Append an HTML element with any text value to a parent element",
		},
		{
			id: 17,
			type: "manipulation",
			title: "Prepend an HTML element with any text value to a parent element",
		},
		{
			id: 18,
			type: "manipulation",
			title: "Create and add an HTML element with any text value after another element",
		},
		{
			id: 19,
			type: "manipulation",
			title: "Create and add an HTML element with any text value before another element",
		},
		{
			id: 20,
			type: "manipulation",
			title: "Clone an HTML element within other element",
		},
		{
			id: 21,
			type: "manipulation",
			title: "Add a class to an HTML item",
		},
		{
			id: 22,
			type: "manipulation",
			title: "Remove a class to an HTML item",
		},
		{
			id: 23,
			type: "manipulation",
			title: "Toggle a class of an HTML item",
		},
		{
			id: 24,
			type: "manipulation",
			title: "Add a disabled attribute to an HTML button",
		},
		{
			id: 25,
			type: "manipulation",
			title: "Remove the disabled attribute of an HTML button",
		},
		{
			id: 26,
			type: "manipulation",
			title: "Set a data-src attribute to a img element",
		},
		{
			id: 27,
			type: "manipulation",
			title: "Remove the data-src attribute of the img element",
		},
		{
			id: 28,
			type: "manipulation",
			title: "Hide an HTML element on click (display: none)",
		},
		{
			id: 29,
			type: "manipulation",
			title: "Show an HTML element on click (display: block)",
		},
		{
			id: 30,
			type: "manipulation",
			title: "Fade in an HTML element using jQuery",
		},
		{
			id: 31,
			type: "manipulation",
			title: "Fade out an HTML element using jQuery",
		},
		{
			id: 32,
			type: "manipulation",
			title: "Iterate a collection of elements and apply a change of style on them",
		},
		{
			id: 33,
			type: "manipulation",
			title: "Get the parent element of a certain element and change its font weight",
		},
		{
			id: 34,
			type: "manipulation",
			title: "Get the collection of children of a certain element and change its font weight",
		},
		{
			id: 35,
			type: "manipulation",
			title: "Get all the elements that have a certain class and change their font weight",
		},
		{
			id: 36,
			type: "manipulation",
			title: "Get an item by id and change its font weight",
		},
		{
			id: 37,
			type: "manipulation",
			title: "Get all the elements that have a certain class and the display property of none and change their font color",
		},
		{
			id: 38,
			type: "manipulation",
			title: "Get the options of a select element that are selected (attribute selected)",
		},
		{
			id: 39,
			type: "manipulation",
			title: "Change the href attribute of the first <a> element (You have to create several <a> elements)",
		},
		{
			id: 40,
			type: "manipulation",
			title: "Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)",
		},
		{
			id: 41,
			type: "manipulation",
			title: "Remove all items from a specific selector",
		},
		{
			id: 42,
			type: "manipulation",
			title: "Animate an item after 2 seconds from the initial page load",
		},
	],
};
