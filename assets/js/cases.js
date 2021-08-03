// From this array I need to extract all the information that is used both in the cheat-list and in the content templates

const cases = [
  {
    dataCheat: 0,
    content:
      "When the HTML document has been loaded and you can manipulate it with JavaScript",
    saga: "forces-of-good",
    js: "The <b>onload</b> event occurs when an object has been loaded. <b>onload</b> is most often used within the body element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).",
    jq: "The <b>load</b> event is sent to an element when it and all sub-elements have been completely loaded. This event can be sent to any element associated with a URL: images, scripts, frames, iframes, and the window object.",
    hint: "Five seconds since the page loades and these citizens will become terrible zombies",
    jsFunction: "",
    jqFunction: "",
  },
  {
    dataCheat: 1,
    content: "When an HTML item has been clicked",
    saga: "forces-of-good",
    js: "The <b>addEventListener()<b> method attaches an event handler to the specified element. The first parameter is the type of the event. The second parameter is the function we want to call when the event occurs.",
    jq: "The <b>.on()</b> method attaches event handlers to the currently selected set of elements in the jQuery object. Any event names can be used for the events argument. jQuery will pass through the browser's standard JavaScript event types, calling the handler function when the browser generates events due to user actions such as <b>click</b>.",
  },
  {
    dataCheat: 2,
    content: "When an HTML item has been double clicked",
    saga: "forces-of-good",
    js: "The <b>ondblclick</b> attribute fires on a mouse double-click on the element.",
    jq: "The <b>dblclick</b> event is sent to an element when the element is double-clicked. Any HTML element can receive this event.",
  },
  {
    dataCheat: 3,
    content: "When the user presses a key on the keyboard",
    saga: "forces-of-good",
    js: "The <b>keydown</b> event is fired when a key is pressed. Unlike the keypress event, the keydown event is fired for all keys, regardless of whether they produce a character value.",
    jq: "The <b>keydown</b> event is sent to an element when the user presses a key on the keyboard. If the key is kept pressed, the event is sent every time the operating system repeats the key. It can be attached to any element, but the event is only sent to the element that has the focus.",
  },
  {
    dataCheat: 4,
    content: "When the user moves the mouse cursor",
    saga: "forces-of-good",
    js: "The <b>mousemove</b> event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.",
    jq: "The <b><mousemove</b> event is sent to an element when the mouse pointer moves inside the element. Any HTML element can receive this event.",
  },
  {
    dataCheat: 5,
    content: "When the user changes a value of an text input",
    saga: "forces-of-good",
    js: "The <b>oninput</b> event occurs when an element gets user input. This event occurs when the value of an input or textarea element is changed.",
    jq: "The <b>change</b> event is sent to an element when its value changes. This event is limited to input elements, textarea boxes and select elements. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.",
  },
  {
    dataCheat: 6,
    content: "When an image is loaded",
    saga: "forces-of-good",
    js: "The <b>onload</b> event occurs when an object has been loaded. <b>onload</b> is most often used within the body element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).",
    jq: "The <b>load</b> event is sent to an element when it and all sub-elements have been completely loaded. This event can be sent to any element associated with a URL: images, scripts, frames, iframes, and the window object.",
  },
  {
    dataCheat: 7,
    content:
      "When an image fails to load, (if you write an incorrect image url the loading of the image will fail)",
    saga: "forces-of-evil",
    js: "The <b>onerror</b> event is triggered if an error occurs while loading an external file (e.g. a document or an image).",
    jq: "The <b>error</b> event is sent to elements, such as images, that are referenced by a document and loaded by the browser. It is called if the element was not loaded correctly.",
  },
  {
    dataCheat: 8,
    content: "When a form is submitted",
    saga: "forces-of-evil",
    js: "",
    jq: "",
  },
  {
    dataCheat: 9,
    content: "When the user changes the option of a select element",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 10,
    content: "When you position the mouse over an element",
    saga: "forces-of-good",
  },
  {
    dataCheat: 11,
    content: "When a checkbox is checked or unchecked",
    saga: "forces-of-good",
  },
  {
    dataCheat: 12,
    content: "When a ul list item is clicked, show the item that was clicked",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 13,
    content: "Create an HTML element with any text value",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 14,
    content: "Remove an HTML element with any text value",
    saga: "forces-of-good",
  },
  {
    dataCheat: 15,
    content: "Append an HTML element with any text value to a parent element",
    saga: "forces-of-good",
  },
  {
    dataCheat: 16,
    content: "Prepend an HTML element with any text value to a parent element",
    saga: "forces-of-good",
  },
  {
    dataCheat: 17,
    content:
      "Create and add an HTML element with any text value after another element",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 18,
    content:
      "Create and add an HTML element with any text value before another element",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 19,
    content: "Clone an HTML element within other element",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 20,
    content: "Remove a class to an HTML item",
    saga: "forces-of-good",
  },
  {
    dataCheat: 21,
    content: "Toggle a class of an HTML item",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 22,
    content: "Add a disabled attribute to an HTML button",
    saga: "forces-of-good",
  },
  {
    dataCheat: 23,
    content: "Remove the disabled attribute of an HTML button",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 24,
    content: "Set a data-src attribute to a img element",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 25,
    content: "Remove the data-src attribute of the img element",
    saga: "forces-of-good",
  },
  {
    dataCheat: 26,
    content: "Hide an HTML element on click (display: none)",
    saga: "forces-of-good",
  },
  {
    dataCheat: 27,
    content: "Show an HTML element on click (display: block)",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 28,
    content: "Fade in an HTML element using jQuery",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 29,
    content: "Fade out an HTML element using jQuery",
    saga: "forces-of-good",
  },
  {
    dataCheat: 30,
    content:
      "Iterate a collection of elements and apply a change of style on them",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 31,
    content:
      "Get the parent element of a certain element and change its font weight",
    saga: "forces-of-good", //!Determinate
  },
  {
    dataCheat: 32,
    content:
      "Get the collection of children of a certain element and change its font weight",
    saga: "forces-of-good", //!Determinate
  },
  {
    dataCheat: 33,
    content:
      "Get all the elements that have a certain class and change their font weight",
    saga: "forces-of-good",
  },
  {
    dataCheat: 34,
    content: "Get an item by id and change its font weight",
    saga: "forces-of-good",
  },
  {
    dataCheat: 35,
    content:
      "Get all the elements that have a certain class and the display property of none and change their font color",
    saga: "forces-of-good", //?Ask Manu
  },
  {
    dataCheat: 36,
    content:
      "Get the options of a select element that are selected (attribute selected)",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 37,
    content:
      "Change the href attribute of the first &lt;a&gt; element (You have to create several &lt;a&gt; elements)",
    saga: "forces-of-evil",
  },
  {
    dataCheat: 38,
    content:
      "Show an alert with the value of the first &lt;input&gt; of the page (Create an &lt;input&gt; element to test this case)",
    saga: "forces-of-good",
  },
  {
    dataCheat: 39,
    content: "Remove all items from a specific selector",
    saga: "forces-of-good",
    js: "1 . Set the node innerHTML as empty-string(“”). 2. Second way is to <b>remove firstChild of the parent node</b> until the node has a children ",
    // var node = document.getElementById('parent');
    // node.innerHTML = "";
    // var node= document.getElementById("parent");
    // while (node.firstChild) {
    // node.removeChild(myNode.firstChild);}

    jq: "The <b>.empty()<b> method removes not only child (and other descendant) elements, but also any text within the set of matched elements. This is because, according to the DOM specification, any string of text within an element is considered a child node of that element.",
  },
  {
    dataCheat: 39,
    content: "Animate an item after 2 seconds from the initial page load",
    saga: "forces-of-evil",
    js: "There is the experimental method <b>.animate()</b>. However, as most browsers do not support it, a class must be attached to the element to modify it through CSS",
    jq: "The <b>.animate()</b> method allows us to create animation effects on any numeric CSS property. The only required parameter is a plain object of CSS properties.",
  },
];

export { cases };
