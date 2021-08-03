//?-------------------------------------------------EVENTS-------------------------------------------------------------------------//

let ready = `<template id="ready">
      <h2>
        When the HTML document has been loaded and you can manipulate it with
        JavaScript and jQuery
      </h2>
      <h3>jQuery</h3>
      <code>
        $(document).ready(() => { console.log('Document is ready!'); });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.addEventListener("load", () => { console.log("Document is
        ready!"); });
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://www.techiediaries.com/javascript/document-ready-vs-window-onload-vs-window-load/"
      >https://www.techiediaries.com/javascript/document-ready-vs-window-onload-vs-window-load/</a></li>
      <li><a href="https://www.youtube.com/watch?v=OFKDCJIgxUk">https://www.youtube.com/watch?v=OFKDCJIgxUk</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let click = `<template id="ready">
      <h2>
        When an HTML item has been clicked
      </h2>
      <h3>jQuery</h3>
      <code>
        $("html-item-selector").on("click", (event) => {});
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector("html-item-selector").addEventListener("click", (event) => {});
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://www.w3schools.com/jsref/event_onclick.asp"
      >https://www.w3schools.com/jsref/event_onclick.asp</a></li>
      <li><a href="https://learn.jquery.com/events/event-basics/">https://learn.jquery.com/events/event-basics/</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let dbClick = `<template id="ready">
      <h2>
        When an HTML item has been double clicked
      </h2>
      <h3>jQuery</h3>
      <code>
        $("html-item-selector").on("dblclick", (event) => {});
      </code>

      <h3>Vanilla</h3>
      <code>
         document.querySelector("html-item-selector").addEventListener("dblclick", (event) => {});
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://www.w3schools.com/jsref/event_ondblclick.asp"
      >https://www.w3schools.com/jsref/event_ondblclick.asp</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let keyPress = `<template id="ready">
      <h2>
        When the user presses a key on the keyboard
      </h2>
      <h3>jQuery</h3>
      <code>
        $(document).keydown((event) => {})
      </code>

      <h3>Vanilla</h3>
      <code>
         document.addEventListener(“keydown”, (event) => {})
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/keydown/"
      >https://api.jquery.com/keydown/</a></li>
      <li><a
        href="https://www.youtube.com/watch?v=vSKJGDcDUww"
      >https://www.youtube.com/watch?v=vSKJGDcDUww</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let mouseEvent = `<template id="ready">
      <h2>
        When the user moves the mouse cursor
      </h2>
      <h3>jQuery</h3>
      <code>
        $(document). mousemove((event) => {})
      </code>

      <h3>Vanilla</h3>
      <code>
        document.addEventListener(“mousemove”, (event) => {})
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://www.educba.com/javascript-mousemove/"
      >https://www.educba.com/javascript-mousemove/</a></li>
      <li><a
        href="https://www.bitdegree.org/learn/jquery-mousemove"
      >https://www.bitdegree.org/learn/jquery-mousemove</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let changeInput = `<template id="ready">
      <h2>
        When the user changes a value of an text input
      </h2>
      <h3>jQuery</h3>
      <code>
         $(“input”).change((event) => {})
      </code>

      <h3>Vanilla</h3>
      <code>
        document.getElementByTagName(“input”).addEventListener(“change”, () => {});
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://www.educba.com/jquery-change/"
      >https://www.educba.com/jquery-change/</a></li>
      <li><a
        href="https://www.javatpoint.com/javascript-change-event"
      >https://www.javatpoint.com/javascript-change-event</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let loadImg = `<template id="ready">
      <h2>
        When an image is loaded
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“img”).on(“load”, () =>{});
      </code>

      <h3>Vanilla</h3>
      <code>
        document.getElementByTagName(“img”).onload = () => {});
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://idiallo.com/javascript/img-detect-loaded"
      >https://idiallo.com/javascript/img-detect-loaded</a></li>
      <li><a
        href="https://api.jquery.com/load-event/"
      >https://api.jquery.com/load-event/</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let errorImg = `<template id="ready">
      <h2>
        When an image fails to load, (if you write an incorrect image url the loading of the image will fail)
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“img”).on(“error”, () =>{
                console.log(“Image failed to load”);
            });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.getElementByTagName(“img”).onerror = () => {
            console.log("Image failed to load")
        });
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://idiallo.com/javascript/img-detect-loaded"
      >https://idiallo.com/javascript/img-detect-loaded</a></li>
      <li><a
        href="https://api.jquery.com/error/"
      >https://api.jquery.com/error/</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let submitted = `<template id="ready">
      <h2>
        When a form is submitted
      </h2>
      <h3>jQuery</h3>
      <code>
         $(“form”).submit(() => {});
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“form”).addEventListener(“submit”, () => {});

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event"
      >https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event</a></li>
      <li><a
        href="https://api.jquery.com/submit/"
      >https://api.jquery.com/submit/</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let optionChange = `<template id="ready">
      <h2>
        When the user changes the option of a select element
      </h2>
      <h3>jQuery</h3>
      <code>
         $(“select”).change((event) => {})
      </code>

      <h3>Vanilla</h3>
      <code>
        document.getElementByTagName(“select”).addEventListener(“change”, () => {});

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://www.educba.com/jquery-change/"
      >https://www.educba.com/jquery-change/</a></li>
      <li><a
        href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event"
      >https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let mouseOver = `<template id="ready">
      <h2>
        When you position the mouse over an element
      </h2>
      <h3>jQuery</h3>
      <code>
         $(“element”). mouseover(() => {})
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“#element”).addEventListener(“mouseover”, () => {})

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave"
      >https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave</a></li>
      <li><a
        href="https://api.jquery.com/mouseover/"
      >https://api.jquery.com/mouseover/</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let changeCheck = `<template id="ready">
      <h2>
        When a checkbox is checked or unchecked
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“.checkbox”).change((event) => {})
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector (“.checkbox”).addEventListener(“change”, () => {});

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://stackoverflow.com/questions/9180087/how-to-handle-change-of-checkbox-using-jquery"
      >https://stackoverflow.com/questions/9180087/how-to-handle-change-of-checkbox-using-jquery</a></li>
      <li><a
        href="https://dirask.com/posts/JavaScript-onchange-event-for-input-checkbox-element-example-Z1Axqj"
      >https://dirask.com/posts/JavaScript-onchange-event-for-input-checkbox-element-example-Z1Axqj</a></li>
      <div class="vanilla">

      </div>
    </template `;

let clickedElement = `<template id="ready">
      <h2>
        When a ul list item is clicked, show the item that was clicked
      </h2>
      <h3>jQuery</h3>
      <code>
        let lis = $(“li”)
        lis.each( (index, li) => {
            $(this).on(“click”,() => {
                console.log( “I am” +  $(this).html() + “the clicked element” )
                })
            });
      </code>

      <h3>Vanilla</h3>
      <code>
        var lis = document.querySelectorAll(“li”)
        lis.forEach(li =>{
            li.addEventListener(“click”, (event) => {
                console.log( “I am” +  this.textContent + “the clicked element” )
                })
            });

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href=https://api.jquery.com/parent/20listener%20to%20it.</a></li>
      <li><a
        href="https://api.jquery.com/each/#each-function"
      >https://api.jquery.com/each/#each-function</a></li>
      <div class="vanilla">

      </div>
    </template>`;

//!----------------------------------------------------------FUNCTIONS---------------------------------------------------------------//
let createHtml = `<template id="ready">
      <h2>
        When a ul list item is clicked, show the item that was clicked

        JavaScript
      </h2>
      <h3>jQuery</h3>
      <code>
        let lis = $(“li”)
        lis.each( (index, li) => {
            $(this).on(“click”,() => {
                console.log( “I am” +  $(this).html() + “the clicked element” )
                })
            });
      </code>

      <h3>Vanilla</h3>
      <code>
        var lis = document.querySelectorAll(“li”)
        lis.forEach(li =>{
            li.addEventListener(“click”, (event) => {
                console.log( “I am” +  this.textContent + “the clicked element” )
                })
            });

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href=https://api.jquery.com/parent/20listener%20to%20it.</a></li>
      <li><a
        href="https://api.jquery.com/each/#each-function"
      >https://api.jquery.com/each/#each-function</a></li>
      <div class="vanilla">

      </div>
    </template>`;

let removeHtml = ``;
let appendC = ``;
let prepend = ``;
let insertAfter = ``;
let insertBefore = ``;
let cloning = ``;
let addClass = ``;
let removeClass = ``;
let toggleClass = ``;
let addDisabled = ``;
let removeDisabled = ``;
let setDataAttr = ``;
let removeDataAttr = ``;
let hideEle = ``;
let showEle = ``;
let fadeInOut = ``;
let animaTe = ``;

//?----------------------------------------------------------SELECTORS------------------------------------------------------------------//
let eachCss = `<template id="ready">
      <h2>
        Iterate a collection of elements and apply a change of style on them
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“li”).each( (i, item) =>{
        $(this).css(“color”, “red”);
        })
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“.btn”).addEventListener(“click”, () =>{
            let arr = document.querySelectorAll (“li”)
            arr.forEach(item =>{
            arr[item].style.color = “red”
                })
        });

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/each/#each-function"
      >https://api.jquery.com/each/#each-function</a></li>
      <li><a
        href="https://careerkarma.com/blog/javascript-foreach-loop/#:~:text=%20JavaScript%20forEach%20Loops%20Made%20Easy%20%201,callback%20function.%20This%20is%20a%20function...%20More%20"
      >https://careerkarma.com/blog/javascript-foreach-loop/#:~:text=%20JavaScript%20forEach%20Loops%20Made%20Easy%20%201,callback%20function.%20This%20is%20a%20function...%20More%20</a></li>
      <div class="vanilla">

      </div>
    </template>`;
let PaRent = `<template id="ready">
      <h2>
        Get the parent element of a certain element and change its font weight
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“btn”).on(“click”, () =>{
        $(“li”).parent().css({font-weight:”bold”})
        });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“.btn”).addEventListener(“click”, () =>{
            let children = document.querySelector (“li”)
        });
        let parent = children.parentNode
        parent.style. fontWeight = “bold”;

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/parent/"
      >https://api.jquery.com/parent/</a></li>
      <li><a
        href="https://www.javascripttutorial.net/dom/traversing/get-the-parent-of-an-element/#:~:text=To%20get%20the%20parent%20of%20an%20element%2C%20you,const%20parent%20%3D%20current.parentNode%3B%20Code%20language%3A%20JavaScript%20%28javascript%29"
      >https://www.javascripttutorial.net/dom/traversing/get-the-parent-of-an-element/#:~:text=To%20get%20the%20parent%20of%20an%20element%2C%20you,const%20parent%20%3D%20current.parentNode%3B%20Code%20language%3A%20JavaScript%20%28javascript%29</a></li>
      <div class="vanilla">
      

      </div>
    </template>`;
let chiLd = `<template id="ready">
      <h2>
        Get the collection of children of a certain element and change its font weight
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“btn”).on(“click”, () =>{
        $(“ul”).children().css({font-weight:”light”})
        });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“.btn”).addEventListener(“click”, () =>{
            let parent = document.querySelector (“ul”)
        let offspring = parent.childNodes
        offspring.forEach( (i =>{
                offspring[i].style.fontWeight = “light”;
            })
        });

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/children/#children-selector"
      >https://api.jquery.com/children/#children-selector</a></li>
      <li><a
        href="https://www.c-sharpcorner.com/UploadFile/54472d/how-to-retrieve-child-elements-using-javascript/"
      >https://www.c-sharpcorner.com/UploadFile/54472d/how-to-retrieve-child-elements-using-javascript/</a></li>
      <div class="vanilla">
      

      </div>
    </template>`;
let getByKlass = `<template id="ready">
      <h2>
        Get all the elements that have a certain class and change their font weight
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“btn”).on(“click”, () =>{
        $(“outer”).css({font-weight:”bolder”})
        });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“.btn”).addEventListener(“click”, () =>{
            let allDivs = document.querySelectorAll (“div”)
        allDivs.forEach( i =>{
            allDivs[i].style.fontWeight =”bolder”;
            })
        });

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/prepend/#prepend-function-function"
      >https://api.jquery.com/prepend/#prepend-function-function</a></li>
      <li><a
        href="https://stackoverflow.com/questions/9427311/how-to-get-all-elements-by-class-name"
      >https://stackoverflow.com/questions/9427311/how-to-get-all-elements-by-class-name</a></li>
      <div class="vanilla">
      

      </div>
    </template>`;
let getByYd = `<template id="ready">
      <h2>
        Get an item by id and change its font weight
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“btn”).on(“click”, () =>{
        $(“#id1”).css({font-weight:”bolder”})
        });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“.btn”).addEventListener(“click”, () =>{
            document.querySelector (“#id1”).style.fontWeight =”bolder”
        });

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/prepend/#prepend-function-function"
      >https://api.jquery.com/prepend/#prepend-function-function</a></li>
      <li><a
        href="https://stackoverflow.com/questions/9427311/how-to-get-all-elements-by-class-name"
      >https://stackoverflow.com/questions/9427311/how-to-get-all-elements-by-class-name</a></li>
      <div class="vanilla">
      

      </div>
    </template>`;

let allKlass = `<template id="ready">
      <h2>
       Get all the elements that have a certain class and the display property of none and change their font color
      </h2>
      <h3>jQuery</h3>
      <code>
       $(“btn”).on(“click”, () =>{
        $(“div”).css({display:”none”, “font-color”:”red”})
        });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“.btn”).addEventListener(“click”, () =>{
            let divArr = document.querySelectorAll (“div”)
            divArr.forEach(i => {
        divArr[i].style.display = “none”;
        divArr[i].style.fontColor = ”red”
            });
        });
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/prepend/#prepend-function-function"
      >https://api.jquery.com/prepend/#prepend-function-function</a></li>
      <li><a
        href="https://stackoverflow.com/questions/9427311/how-to-get-all-elements-by-class-name"
      >https://stackoverflow.com/questions/9427311/how-to-get-all-elements-by-class-name</a></li>
      <div class="vanilla">
      </div>
    </template>`;

let attrSelect = `<template id="ready">
      <h2>
        Get the options of a select element that are selected (attribute selected)
      </h2>
      <h3>jQuery</h3>
      <code>
        $(“select”).on(“change”, () =>{
            let options = “”
        $(“select option:selected”).each((index)=>{
        options += $(this).text() + “ “;
        })
        $(“div”).html() = "This are your selected ${"options"}"
        });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelector(“select”).addEventListener(“change”, () =>{
            let arrSelected = document.querySelector (“select”).selectedOptions;
            let options = “”
            arrSelected.forEach(i => {
        options += arrSelected[i].textContent + “ ”;
        })
            document.querySelector(“div”).textContent = "This are your selected ${"options"}"
        });
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/selected-selector/#selected1"
      >https://api.jquery.com/selected-selector/#selected1</a></li>
      <li><a
        href="https://usefulangle.com/post/83/html-select-common-operations-with-javascript"
      >https://usefulangle.com/post/83/html-select-common-operations-with-javascript</a></li>
      <div class="vanilla">
      </div>
    </template>`;
let primaSelect = `<template id="ready">
      <h2>
        Change the href attribute of the first <a> element (You have to create several <a> elements)
     </h2>
      <h3>jQuery</h3>
      <code>
        let div = $(“div”)
        $(“.btn-create”).on(“click”, () =>{
        $(“<a href = “/default”></a>”).appendTo(div)
        });
        $(“.btn-modify”) .on(“click”, () =>{
            div.chidren().first().attr(“href”, “/other”)	
        }
      </code>

      <h3>Vanilla</h3>
      <code>
        let div = document.querySelector (“div”);
        document.querySelector(“.btn-create”).addEventListener(“click”, () =>{
            var links = document.createElement(“a”);
            links.setAttribute(“href”, “/default”);
            div.appendChild(links)
        });
        $(“.btn-modify”) .addEventListener(“click”, () =>{
            let links = document.querySelectorAll(“a”);
            links[0]. setAttribute(“href”, “/other”);
        }
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/first/#first"
      >https://api.jquery.com/first/#first</a></li>
      <li><a
        href="https://www.javatpoint.com/javascript-setattribute#:~:text=JavaScript%20setAttribute%20%28%29%20The%20setAttribute%20%28%29%20method%20is,%28%29%20method%20to%20update%20the%20existing%20attribute%27s%20value.
">https://www.javatpoint.com/javascript-setattribute#:~:text=JavaScript%20setAttribute%20%28%29%20The%20setAttribute%20%28%29%20method%20is,%28%29%20method%20to%20update%20the%20existing%20attribute%27s%20value</a></li>
      <div class="vanilla">
      </div>
    </template>`;
let inputValue = `<template id="ready">
      <h2>
        Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
     </h2>
      <h3>jQuery</h3>
      <code>
        let div = $(“div”)
        $(“.btn-create”).on(“click”, () =>{
            If(div.length <= 1){
        $(“<input type = ‘button’ value = ‘alert’></a>”).appendTo(div)
        }
        });
        $(“input”) .on(“click”, () =>{
            alert(“Thunder!”);	
        }
      </code>

      <h3>Vanilla</h3>
      <code>
        let div = document.querySelector (“div”);
        document.querySelector(“.btn-create”).addEventListener(“click”, () =>{
            var input = document.createElement(“input”);
            if(div.length <= 1){
        input.setAttribute(“type”, “button”);
                input.setAttribute(“type”, “button”);
                input.setAttribute(“value”, “alert”);
                div.appendChild(input)
                {
        });
        $(“input”).addEventListener(“click”, () =>{
            alert(“Thunder!”);
        }
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://api.jquery.com/first/#first"
      >https://api.jquery.com/first/#first</a></li>
      <li><a
        href="https://www.javatpoint.com/javascript-setattribute#:~:text=JavaScript%20setAttribute%20%28%29%20The%20setAttribute%20%28%29%20method%20is,%28%29%20method%20to%20update%20the%20existing%20attribute%27s%20value.
">https://www.javatpoint.com/javascript-setattribute#:~:text=JavaScript%20setAttribute%20%28%29%20The%20setAttribute%20%28%29%20method%20is,%28%29%20method%20to%20update%20the%20existing%20attribute%27s%20value</a></li>
      <div class="vanilla">
      </div>
    </template>`;
let removeAllSe = `<template id="ready">
      <h2>
        Remove all items from a specific selector     </h2>
      <h3>jQuery</h3>
      <code>
        $(“.selectors”).remove();
      </code>

      <h3>Vanilla</h3>
      <code>
        document.querySelectorAll(“selectors”).forEach( i => {i.remove()});

      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom"
      >https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom</a></li>
      
      <div class="vanilla">
      </div>
    </template>`;