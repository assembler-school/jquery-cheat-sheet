/* Events functions*/

export function HTMLLoaded(){
    let textCode =
`document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("element-id").style.display = "none";
    document.getElementById("button-id").addEventListener("click", function (){
        document.getElementById("element-id").style.display = "block";
    });
});`;

    let HTML = `<div id='element-id'>Element Text</div>
    <button id='button-id'>Show Element</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("element-id").style.display = "none";
    document.getElementById("button-id").addEventListener("click", function (){
        document.getElementById("element-id").style.display = "block";
    });
}

export function Click(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("element-id").style.color = "red";
});`;

    let HTML = `<div id='element-id'>Element Text Style</div>
    <button id='button-id'>Change Color</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("element-id").style.color = "red";
    });
}

export function DoubleClick(){
    let textCode =
`document.getElementById("button-id").addEventListener("dblclick", function () {
    document.getElementById("element-id").style.color = "red";
});`;

    let HTML = `<div id='element-id'>Element Text Style</div>
    <button id='button-id'>Change Color - Double Click</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("dblclick", function () {
        document.getElementById("element-id").style.color = "red";
    });
}

export function KeyPressed(){
    let textCode =
`let counter = 0;
document.getElementById("input-id").addEventListener("keypress", function () {
    counter++;
    document.getElementById("element-id").innerText = "Times keyboard pressed: " + counter;
});`;

    let HTML = `<div>Start to write in the input field</div>
    <input id='input-id' type'text'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let counter = 0;
    document.getElementById("input-id").addEventListener("keypress", function () {
        counter++;
        document.getElementById("element-id").innerText = "Times keyboard pressed: " + counter;
    });
}

export function MouseMoved(){
    let textCode =
`document.getElementById("element1-id").addEventListener("mousemove", function (event) {
    document.getElementById("element2-id").innerText = "Cursor position: (" + event.pageX + ", " + event.pageY + ")";
});`;

    let HTML = `<div>Move the cursor over the following element:</div>
    <div id='element1-id' style='width:150px; height:150px; background-color:blue'></div>
    <div id='element2-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("element1-id").addEventListener("mousemove", function (event) {
        document.getElementById("element2-id").innerText = "Cursor position: (" + event.pageX + ", " + event.pageY + ")";
    });
}

export function TextChanged(){
    let textCode =
`document.getElementById("input-id").addEventListener("input", function () {
    document.getElementById("element-id").innerText = document.getElementById("input-id").value;
});`;

    let HTML = `<div>Start to write in the input field</div>
    <input id='input-id' type'text'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("input-id").addEventListener("input", function () {
        document.getElementById("element-id").innerText = document.getElementById("input-id").value;
    });
}

export function ImgLoaded(){
    let textCode =
`document.getElementById("img-id").addEventListener("load", function () {
    document.getElementById("element-id").innerText = "Image correctly loaded";
});`;

    let HTML = `<div>URL: http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif</div>
    <img id='img-id' src='http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("img-id").addEventListener("load", function () {
        document.getElementById("element-id").innerText = "Image correctly loaded";
    });
}

export function ImgFailed(){
    let textCode =
`document.getElementById("img-id").addEventListener("error", function () {
    document.getElementById("element-id").innerText = "Image not correctly loaded";
});`;

    let HTML = `<div>URL: xxxx.gif</div>
    <img id='img-id' src='xxxx.gif'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("img-id").addEventListener("error", function () {
        document.getElementById("element-id").innerText = "Image not correctly loaded";
    });
}

export function FormSubmitted(){
    let textCode =
`document.getElementById("form-id").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("element-id").innerText = "Formulary submitted";
});`;

    let HTML = `<div>Fill the following formulary:</div>
    <form id='form-id'>
        <div>Name</div>
        <input id='input-id' type'text' required>
        <button id='button-id' type='submit'>Submit formulary</button>
    </form>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("form-id").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("element-id").innerText = "Formulary submitted";
    });
}

export function OptionSelectChanged(){
    let textCode =
`document.getElementById("select-id").addEventListener("change", function () {
    document.getElementById("element-id").innerText = "Option number " + document.getElementById("select-id").value + " is selected";
});`;
    
    let HTML = `<div>Change the value of the following select element:</div>
    <select name="select-name" id="select-id">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("select-id").addEventListener("change", function () {
        document.getElementById("element-id").innerText = "Option number " + document.getElementById("select-id").value + " is selected";
    });
}

export function MouseOver(){
    let textCode =
`document.getElementById("element-id").addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
});`;
    
    let HTML = `<div>Position the mouse over the following element to change the color:</div>
    <div id='element-id' style='width:150px; height:150px; background-color:blue'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("element-id").addEventListener("mouseover", function () {
        this.style.backgroundColor = "red";
    });
}

export function CheckboxChanged(){
    let textCode =
`document.getElementById("input-id").addEventListener("click", function () {
    if(this.checked) {
        $("#element-id").text("Checkbox is checked");
    }
    else{
        $("#element-id").text("Checkbox is not checked");
    }
});`;
    
    let HTML = `<div>Check and uncheck the following checkbox:</div>
    <input id='input-id' type='checkbox'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("input-id").addEventListener("click", function () {
        if(this.checked) {
            $("#element-id").text("Checkbox is checked");
        }
        else{
            $("#element-id").text("Checkbox is not checked");
        }
    });
}

export function UlListItemClicked(){
    let textCode =
`document.querySelectorAll("li").forEach(element => {
    element.addEventListener("click", function () {
        document.getElementById("element-id").innerText = this.innerText + " was clicked.";
    });
});`;
    
    let HTML = `<div>Click on any item to show it:</div>
    <ul>
        <li>First element</li>
        <li>Second element</li>
        <li>Third element</li>
        <li>Fourth element</li>
    </ul>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.querySelectorAll("li").forEach(element => {
        element.addEventListener("click", function () {
            document.getElementById("element-id").innerText = this.innerText + " was clicked.";
        });
    });
}

/* Functions functions*/

export function CreateElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let newElement = document.createElement("div");
    newElement.innerText = "I'm a new element";
    document.getElementById("wrapper-id").appendChild(newElement);
});`;
    
    let HTML = `<div id='wrapper-id'>
        <div>Press the button to create a div element after it.</div>
        <button id='button-id'>Create element</button>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let newElement = document.createElement("div");
        newElement.innerText = "I'm a new element";
        document.getElementById("wrapper-id").appendChild(newElement);
    });
}

export function RemoveElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let itemToRemove = document.getElementById("to-be-removed");
    itemToRemove.parentElement.removeChild(itemToRemove);
});`;
    
    let HTML = `<div>Press the button to remove the element.</div>
    <button id='button-id'>Remove element</button>
    <div id='to-be-removed'>Element to be removed</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let itemToRemove = document.getElementById("to-be-removed");
        itemToRemove.parentElement.removeChild(itemToRemove);
    });
}

export function AppendElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let newElement = document.createElement("div");
    newElement.innerText = "I'm a new element";
    document.getElementById("wrapper-id").appendChild(newElement);
});`;
    
    let HTML = `<div id='wrapper-id'>
        <div>Press the button to append a div element as a child of container.</div>
        <button id='button-id'>Create element</button>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let newElement = document.createElement("div");
        newElement.innerText = "I'm a new element";
        document.getElementById("wrapper-id").appendChild(newElement);
    });
}

export function PrependElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let newElement = document.createElement("div");
    newElement.innerText = "I'm a new element";
    document.getElementById("wrapper-id").prepend(newElement);
});`;
    
    let HTML = `<div id='wrapper-id'>
        <div>Press the button to prepend a div element as a child of container.</div>
        <button id='button-id'>Create element</button>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let newElement = document.createElement("div");
        newElement.innerText = "I'm a new element";
        document.getElementById("wrapper-id").prepend(newElement);
    });
}

export function CreateAfterElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let newElement = document.createElement("div");
    newElement.innerText = "I'm a new element";
    document.getElementById("element-id").after(newElement);
});`;
    
    let HTML = `<div>Press the button to append a div element after.</div>
    <button id='button-id'>Create element</button>
    <div id='element-id'>--- After me.</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let newElement = document.createElement("div");
        newElement.innerText = "I'm a new element";
        document.getElementById("element-id").after(newElement);
    });
}

export function CreateBeforeElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let newElement = document.createElement("div");
    newElement.innerText = "I'm a new element";
    document.getElementById("element-id").before(newElement);
});`;
    
    let HTML = `<div>Press the button to append a div element before.</div>
    <button id='button-id'>Create element</button>
    <div id='element-id'>--- Before me.</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let newElement = document.createElement("div");
        newElement.innerText = "I'm a new element";
        document.getElementById("element-id").before(newElement);
    });
}

export function CloneElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let newElement = document.getElementById("element-id").cloneNode(true);
    document.getElementById("element-id").after(newElement);
});`;
    
    let HTML = `<div>Press the button to clone a div element.</div>
    <button id='button-id'>Clone element</button>
    <div id='element-id'>Clone me</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let newElement = document.getElementById("element-id").cloneNode(true);
        document.getElementById("element-id").after(newElement);
    });
}

export function AddClass(){
    let textCode =
`let classValue = document.getElementById("title-id").getAttribute("class");
document.getElementById("element-id").innerText = "The class is: " + classValue;
document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("title-id").setAttribute("class", "title-class");
    classValue = document.getElementById("title-id").getAttribute("class");
    document.getElementById("element-id").innerText = "The class is: " + classValue;
});`;
    
    let HTML = `<div id='title-id'>Press the button to add a class in me.</div>
    <button id='button-id'>Add class</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let classValue = document.getElementById("title-id").getAttribute("class");
    document.getElementById("element-id").innerText = "The class is: " + classValue;
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("title-id").setAttribute("class", "title-class");
        classValue = document.getElementById("title-id").getAttribute("class");
        document.getElementById("element-id").innerText = "The class is: " + classValue;
    });
}

export function RemoveClass(){
    let textCode =
`let classValue = document.getElementById("title-id").getAttribute("class");
document.getElementById("element-id").innerText = "The class is: " + classValue;
document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("title-id").removeAttribute("class");
    classValue = document.getElementById("title-id").getAttribute("class");
    document.getElementById("element-id").innerText = "The class is: " + classValue;
});`;
    
    let HTML = `<div id='title-id' class='title-class'>Press the button to remove a class in me.</div>
    <button id='button-id'>Remove class</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let classValue = document.getElementById("title-id").getAttribute("class");
    document.getElementById("element-id").innerText = "The class is: " + classValue;
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("title-id").removeAttribute("class");
        classValue = document.getElementById("title-id").getAttribute("class");
        document.getElementById("element-id").innerText = "The class is: " + classValue;
    });
}

export function ToggleClass(){
    let textCode =
`let classValue = document.getElementById("title-id").getAttribute("class");
document.getElementById("element-id").innerText = "The class is: " + classValue;
document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("title-id").classList.toggle("title-class-2");
    classValue = document.getElementById("title-id").getAttribute("class");
    document.getElementById("element-id").innerText = "The class is: " + classValue;
});`;
    
    let HTML = `<div id='title-id' class='title-class-1'>Press the button to toggle a class in me.</div>
    <button id='button-id'>Toggle class</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let classValue = document.getElementById("title-id").getAttribute("class");
    document.getElementById("element-id").innerText = "The class is: " + classValue;
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("title-id").classList.toggle("title-class-2");
        classValue = document.getElementById("title-id").getAttribute("class");
        document.getElementById("element-id").innerText = "The class is: " + classValue;
    });
}

export function AddDisabled(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    this.setAttribute("disabled", true);
});`;
    
    let HTML = `<div>Press the button to make disabled.</div>
    <button id='button-id'>Make disabled</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        this.setAttribute("disabled", true);
    });
}

export function RemoveDisabled(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    this.removeAttribute("disabled");
});`;
    
    let HTML = `<div>Press the button to remove the disabled.</div>
    <button id='button1-id'>Remove disabled</button>
    <button id='button2-id' disabled>Button disabled</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button1-id").addEventListener("click", function () {
        document.getElementById("button2-id").removeAttribute("disabled");
    });
}

export function SetDataSrc(){
    let textCode =
`let dataValue = document.getElementById("title-id").getAttribute("data-src");
document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("title-id").setAttribute("data-src", "value-of-data");
    dataValue = document.getElementById("title-id").getAttribute("data-src");
    document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
});`;
    
    let HTML = `<div id='title-id'>Press the button to set the data-src in me.</div>
    <button id='button-id'>Set data-src</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let dataValue = document.getElementById("title-id").getAttribute("data-src");
    document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("title-id").setAttribute("data-src", "value-of-data");
        dataValue = document.getElementById("title-id").getAttribute("data-src");
        document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
    });
}

export function RemoveDataSrc(){
    let textCode =
`let dataValue = document.getElementById("title-id").getAttribute("data-src");
document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("title-id").removeAttribute("data-src");
    dataValue = document.getElementById("title-id").getAttribute("data-src");
    document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
});`;
    
    let HTML = `<div id='title-id' data-src='value-of-data'>Press the button to remove the data-src in me.</div>
    <button id='button-id'>Remove data-src</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let dataValue = document.getElementById("title-id").getAttribute("data-src");
    document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("title-id").removeAttribute("data-src");
        dataValue = document.getElementById("title-id").getAttribute("data-src");
        document.getElementById("element-id").innerText = "The data-src is: " + dataValue;
    });
}

export function HideElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    this.style.display = "none";
});`;
    
    let HTML = `<div>Press the button to hide it.</div>
    <button id='button-id'>Hide button</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        this.style.display = "none";
    });
}

export function ShowElement(){
    let textCode =
`document.getElementById("element-id").style.display = "none";
document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("element-id").style.display = "block";
});`;

    let HTML = `<div>Press the button to show the element hidden</div>
    <div id='element-id'>Element hidden</div>
    <button id='button-id'>Show Element</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("element-id").style.display = "none";
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("element-id").style.display = "block";
    });
}

export function FadeInElement(){
    let textCode =
`No code.`;

    let HTML = `Only directly implemented for jQuery.
    Click in the jQuery option to see the example.`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);
}

export function FadeOutElement(){
    let textCode =
`No code.`;

    let HTML = `Only directly implemented for jQuery.
    Click in the jQuery option to see the example.`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);
}

export function IterateCollection(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let collectionElements =  document.getElementsByClassName("collection");
    for (let i = 0; i < collectionElements.length; i++) {
        collectionElements[i].style.color = "red";
    }
});`;
    
    let HTML = `<div>Press the button to change the font color</div>
    <button id='button-id'>Iterate elements</button>
    <div class='collection'>First element</div>
    <div class='collection'>Second element</div>
    <div class='collection'>Third element</div>
    <div class='collection'>Fourth element</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let collectionElements =  document.getElementsByClassName("collection");
        for (let i = 0; i < collectionElements.length; i++) {
            collectionElements[i].style.color = "red";
        }
    });
}

export function ChangeHref(){
    let textCode =
`let attrHrefA1 = document.getElementById("a1").getAttribute("href");
let attrHrefA2 = document.getElementById("a2").getAttribute("href");
let attrHrefA3 = document.getElementById("a3").getAttribute("href");

document.getElementById("element-a1-id").innerText = "href-a1 is " + attrHrefA1;
document.getElementById("element-a2-id").innerText = "href-a2 is " + attrHrefA2;
document.getElementById("element-a3-id").innerText = "href-a3 is " + attrHrefA3;

document.getElementById("button-id").addEventListener("click", function () {

    document.querySelectorAll("a[href]")[0].setAttribute("href", "href-changed.com");

    attrHrefA1 = document.getElementById("a1").getAttribute("href");
    attrHrefA2 = document.getElementById("a2").getAttribute("href");
    attrHrefA3 = document.getElementById("a3").getAttribute("href");

    document.getElementById("element-a1-id").innerText = "href-a1 is " + attrHrefA1;
    document.getElementById("element-a2-id").innerText = "href-a2 is " + attrHrefA2;
    document.getElementById("element-a3-id").innerText = "href-a3 is " + attrHrefA3;
});`;
    
    let HTML = `<div>Press the button to change the href attribute of the first <a> element</div>
    <button id='button-id'>Change href attribute</button>
    <a id='a1' href="href1.com">Link a1</a>
    <a id='a2' href="href2.com">Link a2</a>
    <a id='a3' href="href3.com">Link a3</a>
    <div id='element-a1-id'></div>
    <div id='element-a2-id'></div>
    <div id='element-a3-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let attrHrefA1 = document.getElementById("a1").getAttribute("href");
    let attrHrefA2 = document.getElementById("a2").getAttribute("href");
    let attrHrefA3 = document.getElementById("a3").getAttribute("href");

    document.getElementById("element-a1-id").innerText = "href-a1 is " + attrHrefA1;
    document.getElementById("element-a2-id").innerText = "href-a2 is " + attrHrefA2;
    document.getElementById("element-a3-id").innerText = "href-a3 is " + attrHrefA3;

    document.getElementById("button-id").addEventListener("click", function () {

        document.querySelectorAll("a[href]")[0].setAttribute("href", "href-changed.com");

        attrHrefA1 = document.getElementById("a1").getAttribute("href");
        attrHrefA2 = document.getElementById("a2").getAttribute("href");
        attrHrefA3 = document.getElementById("a3").getAttribute("href");

        document.getElementById("element-a1-id").innerText = "href-a1 is " + attrHrefA1;
        document.getElementById("element-a2-id").innerText = "href-a2 is " + attrHrefA2;
        document.getElementById("element-a3-id").innerText = "href-a3 is " + attrHrefA3;
    });
}

export function AlertFirstInput(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let value = document.getElementsByClassName("input-class")[0].value;
    alert("The value is: " + value);
});`;
    
    let HTML = `<div>Press the button to show an alert with the value of the first input</div>
    <button id='button-id'>Show alert</button>
    <input class='input-class' type'text'>
    <input class='input-class' type'text'>
    <input class='input-class' type'text'>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let value = document.getElementsByClassName("input-class")[0].value;
        alert("The value is: " + value);
    });
}

export function RemoveAllItems(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    while(document.getElementsByClassName("same-class").length > 0){
        document.getElementsByClassName("same-class")[0].remove();
    }
});`;
    
    let HTML = `<div>Press the button to remove all the items selected</div>
    <button id='button-id'>Remove items</button>
    <div class='same-class'>Item 1</div>
    <div class='same-class'>Item 2</div>
    <div class='same-class'>Item 3</div>
    <div class='same-class'>Item 4</div>
    <div class='same-class'>Item 5</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        while(document.getElementsByClassName("same-class").length > 0){
            document.getElementsByClassName("same-class")[0].remove();
        }
    });
}

export function AnimateTwoSeconds(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    document.getElementById("element-id").animate({
        "width": "50px",
        "height": "200px"
    }, 2000);
});`;
    
    let HTML = `<div>Press the button to animate the following item</div>
    <button id='button-id'>Animate item</button>
    <div id='element-id' style='width:150px; height:150px; background-color:blue'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("element-id").animate({
            "width": "50px",
            "height": "200px"
        }, 2000);
    });
}

/* Selectors functions */

export function GetParent(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let parent = document.getElementById("child-id").parentElement;
    parent.style.fontWeight = "700";
});`;
    
    let HTML = `<div>Press the button to get the parent of 'Child element' and change his font-weight.</div>
    <button id='button-id'>Get parent</button>
    <div> Parent element
        <div id='child-id'>Child element</div>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let parent = document.getElementById("child-id").parentElement;
        parent.style.fontWeight = "700";
    });
}

export function GetChildren(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let children = document.getElementById("parent-id").children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.fontWeight = "700";
    }
});`;
    
    let HTML = `<div>Press the button to get the children of 'Parent element' and change their font-weight.</div>
    <button id='button-id'>Get children</button>
    <div id='parent-id'> Parent element
        <div>Child element 1</div>
        <div>Child element 2</div>
        <div>Child element 3</div>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let children = document.getElementById("parent-id").children;
        for (let i = 0; i < children.length; i++) {
            children[i].style.fontWeight = "700";
        }
    });
}

export function GetElementsByClass(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let collection = document.getElementsByClassName("class-type-2");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.fontWeight = "700";
    }
});`;
    
    let HTML = `<div>Press the button to get the elements with a class type 2 and change their font-weight.</div>
    <button id='button-id'>Get by class</button>
    <div class='class-type-1'>Element 1 with class type 1</div>
    <div class='class-type-2'>Element 2 with class type 2</div>
    <div class='class-type-2'>Element 3 with class type 2</div>
    <div class='class-type-1'>Element 4 with class type 1</div>
    <div class='class-type-2'>Element 5 with class type 2</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let collection = document.getElementsByClassName("class-type-2");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.fontWeight = "700";
        }
    });
}

export function GetElementById(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    document.GetElementById("selected").style.fontWeight = "700";
});`;
    
    let HTML = `<div>Press the button to get the element with the id 'selected' and change his font-weight.</div>
    <button id='button-id'>Get by id</button>
    <div id='not-selected'>Element 1 with id not-selected</div>
    <div id='not-selected'>Element 2 with id not-selected</div>
    <div id='not-selected'>Element 3 with id not-selected</div>
    <div id='selected'>Element 4 with id selected</div>
    <div id='not-selected'>Element 5 with id not-selected</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        document.getElementById("selected").style.fontWeight = "700";
    });
}

export function GetOptionsOfElement(){
    let textCode =
`document.getElementById("button-id").addEventListener("click", function () {
    let optionNumber = document.querySelector("option[selected]").value;
    document.getElementById("element-id").innerText = "Option number " + optionNumber + " is pre-selected";
});`;
    
    let HTML = `<div>Change the value of the following select element:</div>
    <button id='button-id'>Get the option with attribute selected as true</button>
    <select name="select-name" id="select-id">
        <option value="1">Option 1</option>
        <option value="2" selected>Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    document.getElementById("button-id").addEventListener("click", function () {
        let optionNumber = document.querySelector("option[selected]").value;
        document.getElementById("element-id").innerText = "Option number " + optionNumber + " is pre-selected";
    });
}