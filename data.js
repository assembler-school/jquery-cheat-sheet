// event data to display
export const eventData = [
  "loading document",
  "click",
  "double-click",
  "press a key",
  "mouse move",
  "mouse over",
  "mouse out",
  "loading image",
  "fail to load an image",
  "form submit",
  "show clicked item",
];

export const functionData = [
  "create an element",
  "remove an element",
  "append an element",
  "prepend an element",
  "create and add an element after another element",
  "create and add an element before another element",
  "clone an element within another element",
  "add a class to an HTML item",
  "remove a class of an HTML item",
  "toggle a class of an HTML item",
  "add a disabled attribute to a button",
  "remove the disabled attribute",
  "set a data-src attribute to an img element",
  "remove the data-src attribute",
  "hide an element on click",
  "show an element on click",
  "set a checkbox checked to unchecked",
  "Get all the elements that have a certain class",
  "Get an item by id",
  "Get all the elements that have a certain class and a certain property",
  "Get the options of a selected element that are selected(attribute selected)",
  "Change the href attribute of the first 'a' element",
  "Show an alert with the value of the first 'input'"
];

export const effectTraversingData = [
  "Iterate a collection of elements",
  "Get the parent element of a certain element",
  "Get the collection of children of a certain element",
  "Hide an HTML element on click",
  "Show an HTML element on click",
  "Fade in an HTML element",
  "Fade out an HTML element",
];

export const jsFuncData = [
  'let newParagraph = document.createElement("p");',
  'let myParagraph = document.getElementById("myParagraph");\nmyParagraph.remove();',
  'let newParagraph = document.createElement("p");\n newParagraph.textContent = "New paragraph";\n document.querySelector(".myDiv").append(newParagraph);',
  'let newParagraph = document.createElement("p");\n newParagraph.textContent = "Very good";\n document.querySelector(".myDiv").prepend(newParagraph);',
  `let newParagraph = document.createElement("p");
  newParagraph.textContent = "New paragraph";

  let myDiv = document.querySelector(".myDiv");\nlet subtitle = document.querySelector(".subtitle");

  myDiv.insertAfter(newParagraph, subtitle);`,
  `let newParagraph = document.createElement("p");
  newParagraph.textContent = "New paragraph";

  let myDiv = document.querySelector(".myDiv");
  let subtitle = document.querySelector(".subtitle"); 

  myDiv.insertBefore(newParagraph, subtitle);`,
  'let clonedParagraph = document.querySelector(".content").cloneNode(true);\ndocument.getElementById("myDiv").appendChild(clonedParagraph);',
  'let title = document.getElementById("myTitle");\ntitle.classList.add("titleClass");',
  'let title = document.getElementById("myTitle");\ntitle.classList.remove("titleClass");',
  'let title = document.getElementById("myTitle");\ntitle.classList.toggle("titleClass");',
  'document.querySelector("#myDiv button").setAttribute("disabled", "disabled");',
  'document.querySelector("#myDiv button")\n.removeAttribute("disabled", "disabled");',
  'document.querySelector("#myDiv img")\n.setAttribute("data-src", "images/cat-svgrepo-com.svg");',
  `document.querySelector("#myDiv img")\n.removeAttribute("data-src", "images/cat-svgrepo-com.svg");`,
  'document.querySelector("#myDiv img").style.display = "none";',
  'document.querySelector("#myDiv img").style.display = "block";',
  'document.querySelector("#myDiv input[type=checkbox]").checked = false;',
  'document.querySelectorAll(".city")\n.forEach(element => {element.style.fontWeight = 700;})',
  'document.getElementById("myCity").style.fontWeight = 700;',
  ` document.querySelectorAll(".country")
  .forEach(element => { 
    element.style.display = "block";
    element.style.color = "red",
  })`,
  `let select = document.querySelectorAll("select option");
  select[3].setAttribute("selected", true);`,
  'document.querySelectorAll("a")[0]\n.setAttribute("href", "https://www.google.es/");',
  `alert("Hello," + document.querySelectorAll("input[type=text]")[0].value);`,
];

export const jQueryFuncData = [
  '$("<p/>");',
  '$("<p/>").remove();',
  '$( ".myDiv" ).append( "<p>new paragraph</p>" );',
  '$(".container").prepend("<p>Very good</p>");',
  'let newParagraph = $("<p></p>").text("new paragraph");\n$(".subtitle").after(newParagraph);',
  '$(".sub").before("<p>New!!</p>");',
  '$(".content").clone().appendTo("#myDiv");',
  '$("#myTitle").addClass(".titleClass")',
  '$("#myTitle").removeClass(".titleClass")',
  '$("#myTitle").toggleClass("titleClass");',
  '$("#myDiv button").attr("disabled", true);',
  '$("#myDiv button").attr("disabled", false)',
  `$("#myDiv img").data("src");
  $("#myDiv img").attr("data-src", "images/cat-svgrepo-com.svg");`,
  `$("#myDiv img").removeData("data-src");
  $("#myDiv img").removeAttr("data-src");`,
  '$("#myDiv img").hide();',
  '$("#myDiv img").show();',
  '$("#myDiv input:checkbox").prop("checked", false);',
  '$(".city").css("font-weight", 700);',
  '$("#myCity").css("font-weight", 700);',
  '$(".country:hidden").css("color", "red").show();',
  '$("option").last().prop("selected");',
  '$("a").first().attr("href", "https://www.google.es/");',
  'alert("Hello," + $("input:text").first().val());',
];

export const jsEventData = [
  "js",
  `document.querySelector("#myDiv h2").style.backgroundColor = "yellow";
  document.querySelector("#myDiv h2").innerHTML = "clicked";`,
  `document.querySelector("#myDiv .circle")
  .addEventListener("dblclick", function() {
    document.querySelector("#myDiv .circle").style.backgroundColor = "yellow";
  })`,
  `document.getElementById("target")
  .addEventListener('keypress', function() {
    alert('You pressed a key');   
  });`,
  `document.querySelector("#myDiv .circle")
  .addEventListener("mousemove", function(event){
    if(document.querySelector("#myDiv .circle").offsetWidth <= 500 ) {
        $( this ).css({width: "+=20", height: "+=20"}) 
    } 
});`,
`document.querySelector("#myDiv h1")
.addEventListener("mouseout", function() {
  document.querySelector("#myDiv h1").style.backgroundColor = "pink"
})`
]

export const jQueryEventData = [
  ` $(document).ready(function() {
    $("#loadedDiv h2").css("color", "green").text("Loaded");
});`,
`$("#myDiv h2").css("background-color", "yellow").text("clicked");`,
`$("#myDiv .circle").dblclick(function () {
      $("#myDiv .circle").css("background-color", "yellow");
});`,
`$("#target").keypress(function(event){
  alert('You pressed a key');    
});`,
`$("#myDiv .circle")
.mousemove(function(event){
  if($( this ).width() <= 500 ) {
      $( this ).css({width: "+=20", height: "+=20"}) 
  } 
});`,
` $("#myDiv h1").mouseout(function(event) {
  $(this).css("background-color", "pink");
});`,
]
