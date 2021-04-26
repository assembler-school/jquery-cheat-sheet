/* Events functions*/

export function HTMLLoaded(){
    let textCode =
`$(document).ready(function () {
    $("#element-id").hide();
    $("#button-id").on("click", function () {
        $("#element-id").show();
    });
});`;

    let HTML = `<div id='element-id'>Element Text</div>
    <button id='button-id'>Show Element</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").hide();
    $("#button-id").on("click", function () {
        $("#element-id").show();
    });
}

export function Click(){
    let textCode =
`$("#button-id").on("click", function () {
    $("#element-id").css("color", "red");
});`;

    let HTML = `<div id='element-id'>Element Text Style</div>
    <button id='button-id'>Change Color</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        $("#element-id").css("color", "red");
    });
}

export function DoubleClick(){
    let textCode =
`$("#button-id").on("dblclick", function () {
    $("#element-id").css("color", "red");
});`;

    let HTML = `<div id='element-id'>Element Text Style</div>
    <button id='button-id'>Change Color - Double Click</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("dblclick", function () {
        $("#element-id").css("color", "red");
    });
}

export function KeyPressed(){
    let textCode =
`let counter = 0;
$("#input-id").on("keypress", function () {
    counter++;
    $("#element-id").text("Times keyboard pressed: " + counter);
});`;

    let HTML = `<div>Start to write in the input field</div>
    <input id='input-id' type'text'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    let counter = 0;
    $("#input-id").on("keypress", function () {
        counter++;
        $("#element-id").text("Times keyboard pressed: " + counter);
    });
}

export function MouseMoved(){
    let textCode =
`$("#element1-id").on("mousemove", function (event) {
    $("#element2-id").text("Cursor position: (" + event.pageX + ", " + event.pageY + ")");
});`;

    let HTML = `<div>Move the cursor over the following element:</div>
    <div id='element1-id' style='width:150px; height:150px; background-color:blue'></div>
    <div id='element2-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element1-id").on("mousemove", function (event) {
        $("#element2-id").text("Cursor position: (" + event.pageX + ", " + event.pageY + ")");
    });
}

export function TextChanged(){
    let textCode =
`$("#input-id").on("input", function () {
    $("#element-id").text($("#input-id").val());
});`;

    let HTML = `<div>Start to write in the input field</div>
    <input id='input-id' type'text'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#input-id").on("input", function () {
        $("#element-id").text($("#input-id").val());
    });
}

export function ImgLoaded(){
    let textCode =
`$("#img-id").on("load", function () {
    $("#element-id").text("Image correctly loaded");
});`;

    let HTML = `<div>URL: http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif</div>
    <img id='img-id' src='http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#img-id").on("load", function () {
        $("#element-id").text("Image correctly loaded");
    });
}

export function ImgFailed(){
    let textCode =
`$("#img-id").on("error", function () {
    $("#element-id").text("Image not correctly loaded");
});`;

    let HTML = `<div>URL: xxxx.gif</div>
    <img id='img-id' src='xxxx.gif'>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#img-id").on("error", function () {
        $("#element-id").text("Image not correctly loaded");
    });
}

export function FormSubmitted(){
    let textCode =
`$("#form-id").on("submit", function (event) {
    event.preventDefault();
    $("#element-id").text("Formulary submitted");
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
    $("#form-id").on("submit", function (event) {
        event.preventDefault();
        $("#element-id").text("Formulary submitted");
    });
}

export function OptionSelectChanged(){
    let textCode =
`$("#select-id").on("change", function () {
    $("#element-id").text("Option number " + $("#select-id").val() + " is selected");
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
    $("#select-id").on("change", function () {
        $("#element-id").text("Option number " + $("#select-id").val() + " is selected");
    });
}

export function MouseOver(){
    let textCode =
`$("#element-id").on("mouseover", function () {
    $(this).css("background-color", "red");
});`;
    
    let HTML = `<div>Position the mouse over the following element to change the color:</div>
    <div id='element-id' style='width:150px; height:150px; background-color:blue'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").on("mouseover", function () {
        $(this).css("background-color", "red");
    });
}

export function CheckboxChanged(){
    let textCode =
`$("#input-id").on("click", function () {
    if($("#input-id").prop("checked")) {
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
    $("#input-id").on("click", function () {
        if($("#input-id").prop("checked")) {
            $("#element-id").text("Checkbox is checked");
        }
        else{
            $("#element-id").text("Checkbox is not checked");
        }
    });
}

export function UlListItemClicked(){
    let textCode =
`$("li").on("click", function () {
    $("#element-id").text($(this).text() + " was clicked.");
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
    $("li").on("click", function () {
        $("#element-id").text($(this).text() + " was clicked.");
    });
}

/* Functions functions*/

export function CreateElement(){
    let textCode =
`$("#button-id").on("click", function () {
    let newElement = $("<div>").text("I'm a new element");
    $("#wrapper-id").append(newElement);
});`;
    
    let HTML = `<div id='wrapper-id'>
        <div>Press the button to create a div element after it.</div>
        <button id='button-id'>Create element</button>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        let newElement = $("<div>").text("I'm a new element");
        $("#wrapper-id").append(newElement);
    });
}

export function RemoveElement(){
    let textCode =
`$("#button-id").on("click", function () {
    $("#to-be-removed").remove();
});`;
    
    let HTML = `<div>Press the button to remove the element.</div>
    <button id='button-id'>Remove element</button>
    <div id='to-be-removed'>Element to be removed</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        $("#to-be-removed").remove();
    });
}

export function AppendElement(){
    let textCode =
`$("#button-id").on("click", function () {
    let newElement = $("<div>").text("I'm a new element");
    $("#wrapper-id").append(newElement);
});`;
    
    let HTML = `<div id='wrapper-id'>
        <div>Press the button to append a div element as a child of container.</div>
        <button id='button-id'>Create element</button>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        let newElement = $("<div>").text("I'm a new element");
        $("#wrapper-id").append(newElement);
    });
}

export function PrependElement(){
    let textCode =
`$("#button-id").on("click", function () {
    let newElement = $("<div>").text("I'm a new element");
    $("#wrapper-id").prepend(newElement);
});`;
    
    let HTML = `<div id='wrapper-id'>
        <div>Press the button to prepend a div element as a child of container.</div>
        <button id='button-id'>Create element</button>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        let newElement = $("<div>").text("I'm a new element");
        $("#wrapper-id").prepend(newElement);
    });
}

export function CreateAfterElement(){
    let textCode =
`$("#button-id").on("click", function () {
    let newElement = $("<div>").text("I'm a new element");
    $("#element-id").after(newElement);
});`;
    
    let HTML = `<div>Press the button to append a div element after.</div>
    <button id='button-id'>Create element</button>
    <div id='element-id'>--- After me.</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        let newElement = $("<div>").text("I'm a new element");
        $("#element-id").after(newElement);
    });
}

export function CreateBeforeElement(){
    let textCode =
`$("#button-id").on("click", function () {
    let newElement = $("<div>").text("I'm a new element");
    $("#element-id").before(newElement);
});`;
    
    let HTML = `<div>Press the button to append a div element before.</div>
    <button id='button-id'>Create element</button>
    <div id='element-id'>--- Before me.</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        let newElement = $("<div>").text("I'm a new element");
        $("#element-id").before(newElement);
    });
}

export function CloneElement(){
    let textCode =
`$("#button-id").on("click", function () {
    let newElement = $("#element-id").clone();
    $("#element-id").after(newElement);
});`;
    
    let HTML = `<div>Press the button to clone a div element.</div>
    <button id='button-id'>Clone element</button>
    <div id='element-id'>Clone me</div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        let newElement = $("#element-id").clone();
        $("#element-id").after(newElement);
    });
}

export function AddClass(){
    let textCode =
`$("#element-id").text("The class is: " + $("#title-id").attr("class"));
$("#button-id").on("click", function () {
    $("#title-id").addClass("title");
    $("#element-id").text("The class is: " + $("#title-id").attr("class"));
});`;
    
    let HTML = `<div id='title-id'>Press the button to add a class in me.</div>
    <button id='button-id'>Add class</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").text("The class is: " + $("#title-id").attr("class"));
    $("#button-id").on("click", function () {
        $("#title-id").addClass("title-class");
        $("#element-id").text("The class is: " + $("#title-id").attr("class"));
    });
}

export function RemoveClass(){
    let textCode =
`$("#element-id").text("The class is: " + $("#title-id").attr("class"));
$("#button-id").on("click", function () {
    $("#title-id").removeClass();
    $("#element-id").text("The class is: " + $("#title-id").attr("class"));
});`;
    
    let HTML = `<div id='title-id' class='title-class'>Press the button to remove a class in me.</div>
    <button id='button-id'>Remove class</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").text("The class is: " + $("#title-id").attr("class"));
    $("#button-id").on("click", function () {
        $("#title-id").removeClass();
        $("#element-id").text("The class is: " + $("#title-id").attr("class"));
    });
}

export function ToggleClass(){
    let textCode =
`$("#element-id").text("The class is: " + $("#title-id").attr("class"));
$("#button-id").on("click", function () {
    $("#title-id").toggleClass("title-class-2");
    $("#element-id").text("The class is: " + $("#title-id").attr("class"));
});`;
    
    let HTML = `<div id='title-id' class='title-class-1'>Press the button to toggle a class in me.</div>
    <button id='button-id'>Toggle class</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").text("The class is: " + $("#title-id").attr("class"));
    $("#button-id").on("click", function () {
        $("#title-id").toggleClass("title-class-2");
        $("#element-id").text("The class is: " + $("#title-id").attr("class"));
    });
}

export function AddDisabled(){
    let textCode =
`$("#button-id").on("click", function () {
    $(this).attr("disabled", true);
});`;
    
    let HTML = `<div>Press the button to make disabled.</div>
    <button id='button-id'>Make disabled</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        $(this).attr("disabled", true);
    });
}

export function RemoveDisabled(){
    let textCode =
`$("#button1-id").on("click", function () {
    $("#button2-id").removeAttr("disabled");
});`;
    
    let HTML = `<div>Press the button to remove the disabled.</div>
    <button id='button1-id'>Remove disabled</button>
    <button id='button2-id' disabled>Button disabled</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button1-id").on("click", function () {
        $("#button2-id").removeAttr("disabled");
    });
}

export function SetDataSrc(){
    let textCode =
`$("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
$("#button-id").on("click", function () {
    $("#title-id").attr("data-src", "value-of-data");
    $("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
});`;
    
    let HTML = `<div id='title-id'>Press the button to set the data-src in me.</div>
    <button id='button-id'>Set data-src</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
    $("#button-id").on("click", function () {
        $("#title-id").attr("data-src", "value-of-data");
        $("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
    });
}

export function RemoveDataSrc(){
    let textCode =
`$("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
$("#button-id").on("click", function () {
    $("#title-id").removeAttr("data-src");
    $("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
});`;
    
    let HTML = `<div id='title-id' data-src='value-of-data'>Press the button to remove the data-src in me.</div>
    <button id='button-id'>Remove data-src</button>
    <div id='element-id'></div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
    $("#button-id").on("click", function () {
        $("#title-id").removeAttr("data-src");
        $("#element-id").text("The data-src is: " + $("#title-id").attr("data-src"));
    });
}

export function HideElement(){
    let textCode =
`$("#button-id").on("click", function () {
    $(this).hide();
});`;
    
    let HTML = `<div>Press the button to hide it.</div>
    <button id='button-id'>Hide button</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        $(this).hide();
    });
}

export function ShowElement(){
    let textCode =
`$("#element-id").hide();
$("#button-id").on("click", function () {
    $("#element-id").show();
});`;

    let HTML = `<div>Press the button to show the element hidden</div>
    <div id='element-id'>Element hidden</div>
    <button id='button-id'>Show Element</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").hide();
    $("#button-id").on("click", function () {
        $("#element-id").show();
    });
}

export function FadeInElement(){
    let textCode =
`$("#element-id").hide();
$("#button-id").on("click", function () {
    $("#element-id").fadeIn(1000);
});`;

    let HTML = `<div>Press the button to fade in the element hidden</div>
    <div id='element-id'>Element hidden</div>
    <button id='button-id'>Show Element with fade in</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element-id").hide();
    $("#button-id").on("click", function () {
        $("#element-id").fadeIn(1000);
    });
}

export function FadeOutElement(){
    let textCode =
`$("#button-id").on("click", function () {
    $(this).fadeOut(1000);
});`;
    
    let HTML = `<div>Press the button to fade out it.</div>
    <button id='button-id'>Hide button</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        $(this).fadeOut(1000);
    });
}

export function IterateCollection(){
    let textCode =
`$("#button-id").on("click", function () {
    $(".collection").each(function () {
        $(this).css("color", "red");
    });
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
    $("#button-id").on("click", function () {
        $(".collection").each(function () {
            $(this).css("color", "red");
        });
    });
}

export function ChangeHref(){
    let textCode =
`$("#element-a1-id").text("href-a1 is " + $("#a1").attr("href"));
$("#element-a2-id").text("href-a2 is " + $("#a2").attr("href"));
$("#element-a3-id").text("href-a3 is " + $("#a3").attr("href"));

$("#button-id").on("click", function () {

    $("a[href]").eq(0).attr("href", "href-changed.com");

    $("#element-a1-id").text("href-a1 is " + $("#a1").attr("href"));
    $("#element-a2-id").text("href-a2 is " + $("#a2").attr("href"));
    $("#element-a3-id").text("href-a3 is " + $("#a3").attr("href"));
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
    $("#element-a1-id").text("href-a1 is " + $("#a1").attr("href"));
    $("#element-a2-id").text("href-a2 is " + $("#a2").attr("href"));
    $("#element-a3-id").text("href-a3 is " + $("#a3").attr("href"));

    $("#button-id").on("click", function () {

        $("a[href]").eq(0).attr("href", "href-changed.com");

        $("#element-a1-id").text("href-a1 is " + $("#a1").attr("href"));
        $("#element-a2-id").text("href-a2 is " + $("#a2").attr("href"));
        $("#element-a3-id").text("href-a3 is " + $("#a3").attr("href"));
    });
}

export function AlertFirstInput(){
    let textCode =
`$("#button-id").on("click", function () {
    let value = $(".input-class").eq(0).val();
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
    $("#button-id").on("click", function () {
        let value = $(".input-class").eq(0).val();
        alert("The value is: " + value);
    });
}

export function RemoveAllItems(){
    let textCode =
`$("#button-id").on("click", function () {
    $(".same-class").remove();
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
    $("#button-id").on("click", function () {
        $(".same-class").remove();
    });
}

export function AnimateTwoSeconds(){
    let textCode =
`$("#button-id").on("click", function () {
    $("#element-id").animate({
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
    $("#button-id").on("click", function () {
        $("#element-id").animate({
            "width": "50px",
            "height": "200px"
        }, 2000);
    });
}

/* Selectors functions */

export function GetParent(){
    let textCode =
`$("#button-id").on("click", function () {
    let parent = $("#child-id").parent();
    parent.css("font-weight", "700");
});`;
    
    let HTML = `<div>Press the button to get the parent of 'Child element' and change his font-weight.</div>
    <button id='button-id'>Get parent</button>
    <div> Parent element
        <div id='child-id'>Child element</div>
    </div>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button-id").on("click", function () {
        let parent = $("#child-id").parent();
        parent.css("font-weight", "700");
    });
}

export function GetChildren(){
    let textCode =
`$("#button-id").on("click", function () {
    let children = $("#parent-id").children();
    children.css("font-weight", "700");
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
    $("#button-id").on("click", function () {
        let children = $("#parent-id").children();
        children.css("font-weight", "700");
    });
}

export function GetElementsByClass(){
    let textCode =
`$("#button-id").on("click", function () {
    $(".class-type-2").css("font-weight", "700");
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
    $("#button-id").on("click", function () {
        $(".class-type-2").css("font-weight", "700");
    });
}

export function GetElementById(){
    let textCode =
`$("#button-id").on("click", function () {
    $("#selected").css("font-weight", "700");
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
    $("#button-id").on("click", function () {
        $("#selected").css("font-weight", "700");
    });
}

export function GetOptionsOfElement(){
    let textCode =
`$("#select-id").on("change", function () {
    $("#element-id").text("Option number " + $("#select-id").val() + " is selected");
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
    $("#button-id").on("click", function () {
        $("#element-id").text("Option number " + $("option[selected]").val() + " is pre-selected");
    });
}