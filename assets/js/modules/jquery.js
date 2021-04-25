/* Events functions*/

export function HTMLLoaded(){
    let textCode =
`$(document).ready(function () {
    $("#element1").hide();
    $("#button1").on("click", function () {
        $("#element1").show();
    });
});`;

    let HTML = `<div id='element1'>Element 1 Text</div>
    <button id='button1'>Show Element</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#element1").hide();
    $("#button1").on("click", function () {
        $("#element1").show();
    });
}

export function Click(){
    let textCode =
`$("#button2").on("click", function () {
    $("#element2").css("color", "red");
});`;

    let HTML = `<div id='element2'>Element 2 Text Style</div>
    <button id='button2'>Change Color</button>`;

    $("#code-modal").html(textCode);
    $("#html-modal").html(HTML);

    /* Code in Textcode Area */
    $("#button2").on("click", function () {
        $("#element2").css("color", "red");
    });
}

export function DoubleClick(){
}

export function KeyPressed(){
}

export function MouseMoved(){
}

export function TextChanged(){
}

export function ImgLoaded(){
}

export function ImgFailed(){
}

export function FormSubmitted(){
}

export function OptionSelectChanged(){
}

export function MouseOver(){
}

export function CheckboxChanged(){
}

export function UlListItemClicked(){
}

/* Functions functions*/

export function CreateElement(){
}

export function RemoveElement(){
}

export function AppendElement(){
}

export function PrependElement(){
}

export function CreateAfterElement(){
}

export function CreateBeforeElement(){
}

export function CloneElement(){
}

export function AddClass(){
}

export function ToggleClass(){
}

export function AddDisabled(){
}

export function RemoveDisabled(){
}

export function SetDataSrc(){
}

export function RemoveDataSrc(){
}

export function HideElement(){
}

export function ShowElement(){
}

export function FadeInElement(){
}

export function FadeOutElement(){
}

export function IterateCollection(){
}

export function ChangeHref(){
}

export function AlertFirstInput(){
}

export function RemoveAllItems(){
}

export function AnimateTwoSeconds(){
}

/* Selectors functions */

export function GetParent(){
}

export function GetChildren(){
}

export function GetElementsByClass(){
}

export function GetElementById(){
}

export function GetElementsByClassAndNone(){
}

export function GetOptionsOfElement(){
}