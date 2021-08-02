// From this array I need to extract all the information that is used both in the cheat-list and in the content templates

const cases = [
  {
    dataCheat: 0,
    content:
      "When the HTML document has been loaded and you can manipulate it with JavaScript",
  },
  {
    dataCheat: 1,
    content: "When an HTML item has been clicked",
  },
  {
    dataCheat: 2,
    content: "When an HTML item has been double clicked",
  },
  {
    dataCheat: 3,
    content: "When the user presses a key on the keyboard",
  },
  {
    dataCheat: 4,
    content: "When the user moves the mouse cursor",
  },
  {
    dataCheat: 5,
    content: "When the user changes a value of an text input",
  },
  {
    dataCheat: 6,
    content: "When an image is loaded",
  },
  {
    dataCheat: 7,
    content:
      "When an image fails to load, (if you write an incorrect image url the loading of the image will fail)",
  },
  {
    dataCheat: 8,
    content: "When a form is submitted",
  },
  {
    dataCheat: 9,
    content: "When the user changes the option of a select element",
  },
  {
    dataCheat: 10,
    content: "When you position the mouse over an element",
  },
  {
    dataCheat: 11,
    content: "When a checkbox is checked or unchecked",
  },
  {
    dataCheat: 12,
    content: "When a ul list item is clicked, show the item that was clicked",
  },
  {
    dataCheat: 13,
    content: "Create an HTML element with any text value",
  },
  {
    dataCheat: 14,
    content: "Remove an HTML element with any text value",
  },
  {
    dataCheat: 15,
    content: "Append an HTML element with any text value to a parent element",
  },
  {
    dataCheat: 16,
    content: "Prepend an HTML element with any text value to a parent element",
  },
  {
    dataCheat: 17,
    content:
      "Create and add an HTML element with any text value after another element",
  },
  {
    dataCheat: 18,
    content:
      "Create and add an HTML element with any text value before another element",
  },
  {
    dataCheat: 19,
    content: "Clone an HTML element within other element",
  },
  {
    dataCheat: 20,
    content: "Remove a class to an HTML item",
  },
  {
    dataCheat: 21,
    content: "Toggle a class of an HTML item",
  },
  {
    dataCheat: 22,
    content: "Add a disabled attribute to an HTML button",
  },
  {
    dataCheat: 23,
    content: "Remove the disabled attribute of an HTML button",
  },
  {
    dataCheat: 24,
    content: "Set a data-src attribute to a img element",
  },
  {
    dataCheat: 25,
    content: "Remove the data-src attribute of the img element",
  },
  {
    dataCheat: 26,
    content: "Hide an HTML element on click (display: none)",
  },
  {
    dataCheat: 27,
    content: "Show an HTML element on click (display: block)",
  },
  {
    dataCheat: 28,
    content: "Fade in an HTML element using jQuery",
  },
  {
    dataCheat: 29,
    content: "Fade out an HTML element using jQuery",
  },
  {
    dataCheat: 30,
    content:
      "Iterate a collection of elements and apply a change of style on them",
  },
  {
    dataCheat: 31,
    content:
      "Get the parent element of a certain element and change its font weight",
  },
  {
    dataCheat: 32,
    content:
      "Get the collection of children of a certain element and change its font weight",
  },
  {
    dataCheat: 33,
    content:
      "Get all the elements that have a certain class and change their font weight",
  },
  {
    dataCheat: 34,
    content: "Get an item by id and change its font weight",
  },
  {
    dataCheat: 35,
    content:
      "Get all the elements that have a certain class and the display property of none and change their font color",
  },
  {
    dataCheat: 36,
    content:
      "Get the options of a select element that are selected (attribute selected)",
  },
  {
    dataCheat: 37,
    content:
      "Change the href attribute of the first &lt;a&gt; element (You have to create several &lt;a&gt; elements)",
  },
  {
    dataCheat: 38,
    content:
      "Show an alert with the value of the first &lt;input&gt; of the page (Create an &lt;input&gt; element to test this case)",
  },
  {
    dataCheat: 39,
    content: "Remove all items from a specific selector",
  },
  {
    dataCheat: 39,
    content: "Animate an item after 2 seconds from the initial page load",
  },
];

export { cases };
