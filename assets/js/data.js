export const data = {
	path: "./assets/examples/html",
	examples: [
		{
			id: 1,
			type: "event",
			title: "When the HTML document has been loaded",
			vanillaCode: `
				document.addEventListener("DOMContentLoaded", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-01-vanilla").classList.remove("no-display");</div>
				});
			`,
			jQueryCode: `
				$(function (ev) {
				<div class="code-indentation">$('#ex-01-jquery').removeClass("no-display");</div>
				});
			`,
		},
		{
			id: 2,
			type: "event",
			title: "When an HTML item has been clicked",
			vanillaCode: `
				document.querySelector("#ex-02-vanilla-btn").addEventListener("click", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-02-vanilla-msg").classList.toggle("no-display");</div>
				});`,
			jQueryCode: `
				$("#ex-02-jquery-btn").on("click", function (ev) {
				<div class="code-indentation">$("#ex-02-jquery-msg").toggleClass("no-display");</div>
				});`,
		},
		{
			id: 3,
			type: "event",
			title: "When an HTML item has been double clicked",
			vanillaCode: `
				document.querySelector("#ex-03-vanilla-btn").addEventListener("dblclick", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-03-vanilla-msg").classList.toggle("no-display");</div>
				});`,
			jQueryCode: `
				$("#ex-03-jquery-btn").on("dblclick", function (ev) {
				<div class="code-indentation">$("#ex-03-jquery-msg").toggleClass("no-display");</div>
				});`,
		},
		{
			id: 4,
			type: "event",
			title: "When the user presses a key on the keyboard",
			vanillaCode: `
				document.addEventListener("keydown", function (ev) {
				<div class="code-indentation">if (ev.key === "f") document.querySelector("#ex-04-vanilla-msg").classList.toggle("no-display");</div>
				});
			`,
			jQueryCode: `
				$(document).on("keydown", function (ev) {
				<div class="code-indentation">if (ev.key === "f") $("#ex-04-jquery-msg").toggleClass("no-display");</div>
				});
			`,
		},
		{
			id: 5,
			type: "event",
			title: "When the user moves the mouse cursor",
			vanillaCode: `
				document.addEventListener("mousemove", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-05-vanilla-msg").textContent = \`Mouse is at position (\${ev.x}, \${ev.y})\`;</div>
				});
			`,
			jQueryCode: `
				$(document).on("mousemove", function (ev) {
				<div class="code-indentation">$("#ex-05-jquery-msg").text(\`Mouse is at position (\${ev.pageX}, \${ev.pageY})\`);</div>
				});
			`,
		},
		{
			id: 6,
			type: "event",
			title: "When the user changes a value of an text input",
			vanillaCode: `
				document.querySelector("#ex-06-vanilla-input").addEventListener("input", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-06-vanilla-msg").textContent = ev.target.value;</div>
				});
			`,
			jQueryCode: `
				$("#ex-06-jquery-input").on("input", function (ev) {
				<div class="code-indentation">
					const target = $(ev.target);<br />
					$("#ex-06-jquery-msg").text(target.val());
				</div>
				});
			`,
		},
		{
			id: 7,
			type: "event",
			title: "When an image is loaded",
			vanillaCode: `
				document.querySelector("#ex-07-vanilla-img").addEventListener("load", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-07-vanilla-msg").classList.remove("no-display");</div>
				});
			`,
			jQueryCode: `
				$("#ex-07-jquery-img").on("load", function (ev) {
				<div class="code-indentation">$("#ex-07-jquery-msg").removeClass("no-display");</div>
				});
			`,
		},
		{
			id: 8,
			type: "event",
			title: "When an image fails to load",
			vanillaCode: `
				document.querySelector("#ex-08-vanilla-img").addEventListener("error", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-08-vanilla-msg").classList.remove("no-display");</div>
				});
			`,
			jQueryCode: `
				$("#ex-08-jquery-img").on("error", function (ev) {
				<div class="code-indentation">$("#ex-08-jquery-msg").removeClass("no-display");</div>
				});
			`,
		},
		{
			id: 9,
			type: "event",
			title: "When a form is submitted",
			vanillaCode: `
			document.querySelector("#ex-09-vanilla-form").addEventListener("submit", function (ev) {
			<div class="code-indentation">
				ev.preventDefault();<br />
				document.querySelector("#ex-09-vanilla-msg").textContent = \`Submitted value: \${this.something.value}\`;
			</div>
			});
		`,
			jQueryCode: `
				$("#ex-09-jquery-form").on("submit", function (ev) {
				<div class="code-indentation">
					ev.preventDefault();<br />
					const field = $(ev.target.someting);<br />
					$("#ex-09-jquery-msg").text(\`Submitted value: \${field.value}\`);
				</div>
				});
			`,
		},
		{
			id: 10,
			type: "event",
			title: "When the user changes the option of a select element",
			vanillaCode: `
				document.querySelector("#ex-10-vanilla-select").addEventListener("change", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-10-vanilla-msg").textContent = \`Selected value: \${ev.target.value}\`;</div>
				});
			`,
			jQueryCode: `
				$("#ex-10-jquery-select").on("change", function (ev) {
				<div class="code-indentation">
					const target = $(ev.target);<br />
					$("#ex-10-jquery-msg").text(\`Selected value: \${target.val()}\`);
				</div>
				});
			`,
		},
		{
			id: 11,
			type: "event",
			title: "When you position the mouse over an element",
			vanillaCode: `
				document.querySelector("#ex-11-vanilla-btn").addEventListener("mouseover", function (ev) {
				<div class="code-indentation">document.querySelector("#ex-11-vanilla-msg").classList.toggle("no-display");</div>
				});
			`,
			jQueryCode: `
				$("#ex-11-jquery-btn").on("mouseover", function (ev) {
				<div class="code-indentation">$("#ex-11-jquery-msg").toggleClass("no-display");</div>
				});
			`,
		},
		{
			id: 12,
			type: "event",
			title: "When a checkbox is checked or unchecked",
			vanillaCode: `
				document.querySelector("#ex-12-vanilla-chk").addEventListener("change", function (ev) {
				<div class="code-indentation">
					const msg = document.querySelector("#ex-12-vanilla-msg");<br />
					if (ev.target.checked) {
					<div class="code-indentation">msg.classList.remove("no-display");</div>
					} else {
					<div class="code-indentation">msg.classList.add("no-display");</div>
					}
				</div>
				});			
			`,
			jQueryCode: `
				$("#ex-12-jquery-chk").on("change", function (ev) {
				<div class="code-indentation">
					const msg = $("#ex-12-jquery-msg");<br />
					if (ev.target.checked) {
					<div class="code-indentation">msg.removeClass("no-display");</div>
					} else {
					<div class="code-indentation">msg.addClass("no-display");</div>
					}
				</div>
				});
			`,
		},
		{
			id: 13,
			type: "event",
			title: "When a ul list item is clicked, show the item that was clicked",
			vanillaCode: `
			document.querySelector("#ex-13-vanilla-list").addEventListener("click", function (ev) {
			<div class="code-indentation">if (ev.target.matches("li")) document.querySelector("#ex-13-vanilla-msg").textContent = \`Clicked item: \${ev.target.textContent}\`;</div>
			});
			
			`,
			jQueryCode: `
				$("#ex-13-jquery-list").on("click", function (ev) {
				<div class="code-indentation">
					const target = $(ev.target);<br />
					if (target.is("li")) $("#ex-13-jquery-msg").text(\`Clicked item: \${target.text()}\`);
				</div>
				});
			`,
		},
		{
			id: 14,
			type: "manipulation",
			title: "Create an HTML element with any text value",
			vanillaCode: `
				document.querySelector("#ex-14-vanilla-btn").addEventListener("click", function (ev) {
				<div class="code-indentation">
					if (document.querySelector("#ex-14-vanilla-msg")) return;<br />
					<br />
					const element = document.createElement("p");<br />
					<br />
					element.classList.add("bg-02", "text-align-center", "text-white", "p-3", "br-2", "bs-black-03");<br />
					element.textContent = "This block has been created with Vanilla JS.";<br />
					element.id = "ex-14-vanilla-msg";<br />
					<br />
					this.insertAdjacentElement("afterend", element);<br />
				</div>
				});
			`,
			jQueryCode: `
			$("#ex-14-jquery-btn").on("click", function (ev) {
			<div class="code-indentation">
				if ($("#ex-14-jquery-msg").length) return;<br />
				<br />
				const element = $("&lt;p&gt;");<br />
				<br />
				element.addClass("bg-02 text-align-center text-white p-3 br-2 bs-black-03");<br />
				element.text("This block has been created with jQuery.");<br />
				element.prop("id", "ex-14-jquery-msg");<br />
				<br />
				element.insertAfter($(this));<br />
			</div>
			});			
			`,
		},
		{
			id: 15,
			type: "manipulation",
			title: "Remove an HTML element with any text value",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 16,
			type: "manipulation",
			title: "Append an HTML element with any text value to a parent element",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 17,
			type: "manipulation",
			title: "Prepend an HTML element with any text value to a parent element",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 18,
			type: "manipulation",
			title: "Create and add an HTML element with any text value after another element",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 19,
			type: "manipulation",
			title: "Create and add an HTML element with any text value before another element",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 20,
			type: "manipulation",
			title: "Clone an HTML element within other element",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 21,
			type: "manipulation",
			title: "Add a class to an HTML item",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 22,
			type: "manipulation",
			title: "Remove a class to an HTML item",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 23,
			type: "manipulation",
			title: "Toggle a class of an HTML item",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 24,
			type: "manipulation",
			title: "Add a disabled attribute to an HTML button",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 25,
			type: "manipulation",
			title: "Remove the disabled attribute of an HTML button",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 26,
			type: "manipulation",
			title: "Set a data-src attribute to a img element",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 27,
			type: "manipulation",
			title: "Remove the data-src attribute of the img element",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 28,
			type: "manipulation",
			title: "Hide an HTML element on click (display: none)",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 29,
			type: "manipulation",
			title: "Show an HTML element on click (display: block)",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 30,
			type: "manipulation",
			title: "Fade in an HTML element using jQuery",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 31,
			type: "manipulation",
			title: "Fade out an HTML element using jQuery",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 32,
			type: "manipulation",
			title: "Iterate a collection of elements and apply a change of style on them",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 33,
			type: "manipulation",
			title: "Get the parent element of a certain element and change its font weight",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 34,
			type: "manipulation",
			title: "Get the collection of children of a certain element and change its font weight",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 35,
			type: "manipulation",
			title: "Get all the elements that have a certain class and change their font weight",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 36,
			type: "manipulation",
			title: "Get an item by id and change its font weight",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 37,
			type: "manipulation",
			title: "Get all the elements that have a certain class and the display property of none and change their font color",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 38,
			type: "manipulation",
			title: "Get the options of a select element that are selected (attribute selected)",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 39,
			type: "manipulation",
			title: "Change the href attribute of the first <a> element (You have to create several <a> elements)",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 40,
			type: "manipulation",
			title: "Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 41,
			type: "manipulation",
			title: "Remove all items from a specific selector",
			vanillaCode: ``,
			jQueryCode: ``,
		},
		{
			id: 42,
			type: "manipulation",
			title: "Animate an item after 2 seconds from the initial page load",
			vanillaCode: ``,
			jQueryCode: ``,
		},
	],
};
