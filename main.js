//Grab the Node list
let sectionList = document.querySelectorAll(".section-1-ul-class li");

//Turn it into data
let a = sectionList[0];
let b = sectionList[1];
let c = sectionList[3];
let d = sectionList[4];
let e = sectionList[5];
let f = sectionList[6];
let g = sectionList[7];
let h = sectionList[8];
let i = sectionList[9];
let j = sectionList[10];
let k = sectionList[11];
let l = sectionList[12];
let m = sectionList[13];

//Descriptions

let aText = (a.innerHTML) + " When the HTML document has been loaded and you can manipulate it with JavaScript ";
let bText = (b.innerHTML) + " When an HTML item has been clicked";
let cText = (c.innerHTML) + " When an HTML item has been double clicked";
let dText = (d.innerHTML) + " When the user presses a key on the keyboard";
let eText = (e.innerHTML) + " When the user moves the mouse cursor";
let fText = (f.innerHTML) + " When the user changes a value of an text input";
let gText = (g.innerHTML) + " When an image is loaded";
let hText = (h.innerHTML) + " When an image fails to load, (if you write an incorrect image url the loading of the image will fail)";
let iText = (i.innerHTML) + " When a form is submitted";
let jText = (j.innerHTML) + " When the user changes the option of a select element";
let kText = (k.innerHTML) + " When you position the mouse over an element";
let lText = (l.innerHTML) + " When a checkbox is checked or unchecked";
//let mText = (m.innerHTML) + " When a ul list item is clicked, show the item that was clicked";

//Name functions
let afx = (a.innerHTML) + " function";
let bfx = (b.innerHTML) + " function";
let cfx = (c.innerHTML) + " function";
let dfx = (d.innerHTML) + " function";
let efx = (e.innerHTML) + " function";
let ffx = (f.innerHTML) + " function";
let gfx = (g.innerHTML) + " function";
let hfx = (h.innerHTML) + " function";
let ifx = (i.innerHTML) + " function";
let jfx = (j.innerHTML) + " function";
let kfx = (k.innerHTML) + " function";
let lfx = (l.innerHTML) + " function";

//Event Listeners
a.addEventListener("mouseover", insertDataDescription);
a.addEventListener("mouseout", clearDataDescription);

function insertDataDescription() {
    let descriptionList = document.querySelector(".description-list-class");
    descriptionList.insertAdjacentHTML('beforeend', '<li class=description-text>' + `${aText}` + '</li>');
}

function clearDataDescription() {
    let description = document.querySelector(".description-text");
    description.remove();
}

let vanillaButton = document.getElementById("jsVanilla");
let jqueryButton = document.getElementById("jQuery");