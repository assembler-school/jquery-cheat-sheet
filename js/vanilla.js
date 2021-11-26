
//Events section
const demo=document.getElementsByClassName("demo")[0];
const btnAction=document.getElementById("vanillaBtn");
//HTML document has been loaded
function htmlDocumentLoadedVanilla(){
    const btnAction=document.getElementById("vanillaBtn");
    const loaded= document.createElement("p");
    loaded.innerText="The document is loaded!"
    btnAction.parentNode.appendChild(loaded)
}
eventsList[0].vanillaMethod=function(){
    htmlDocumentLoadedVanilla();
}
eventsList[0].vanillaSnippet=`<code>window.onload=function(){
    console.log("document loaded!")
}</code>`
//HTML item has been clicked 
function htmlItemClicked(){
    const button=document.createElement("button");
    const demo=document.querySelector(".demo");
    $("vanilla").eq(0).append("<button>Hola que tal</button>");
}
eventsList[1].vanillaMethod=function(){
    htmlItemClicked();
}
//item has been double clicked
//user presses a key on the keyboard 
//user moves the mouse cursor
//user changes a value of an text input
//image is loaded
//image fails to load
//form is submitted
//user changes the option of a select element
//When you position the mouse over an element
//When a checkbox is checked or unchecked
//When a ul list item is clicked, show the item that was clicked