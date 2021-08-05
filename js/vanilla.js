//get modal content classes 
let $codeExampleJs = document.querySelector(".modal__exCode__Js");

let $codeExampleJq = document.querySelector(".modal__exCode__Jq");

let $title = document.querySelector(".modal__title");

let $tryArea = document.querySelector(".modal__exArea");

var $list = document.getElementsByTagName("li");

var $btnBlack = document.querySelector(".btn__black");

var $exResult = document.querySelector(".modal__exResult");

for (let i = 0; i < $list.length; i++){
  $list[i].addEventListener("click", (e) =>{

    modal.style.display = "block"
  

switch (e.target.innerHTML) {

  case 'HTML document loaded':
    $codeExampleJs.innerHTML=`<code>var htmlLoaded = false;
    document.addEventListener("DOMContentLoaded", () => {
    htmlLoaded = true;
    });</code>`
    $codeExampleJq.innerHTML=`<code>var wasLoaded = false;
    $(document).ready(function(){
    wasLoaded = true;
    });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button> <br> <br> Was the HTML document loaded?`

    document.querySelector(".btn__black").addEventListener("click",()=>{ $exResult.innerText = "True" })
    break;

  case 'HTML item clicked':
    $codeExampleJs.innerHTML=`<code>var button = document.querySelector("button"); button.addEventListener("click",()=>{ button.innerText = button.innerText+" Clicked!" });</code>`
    $codeExampleJq.innerHTML=`<code>$("button").click(()=>{
    let button = $("button").text();
    $("button").text(button+"Clicked!");
    });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    document.querySelector(".btn__black").addEventListener("click",()=>{ $exResult.innerText = "Clicked!" })
    break;

    case 'HTML item double clicked':
    $codeExampleJs.innerHTML=`<code>var button = document.querySelector("button"); button.addEventListener("dblclick",()=>{ button.innerText = button.innerText+" Double clicked!" });</code>`
    $codeExampleJq.innerHTML=`<code>$("button").dblclick(()=>{
      let button = $("button").text();
      $("button").text(button+"Double clicked!");
      });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    document.querySelector(".btn__black").addEventListener("dblclick",()=>{ $exResult.innerText = "Double clicked!" })
    break;

    case 'Key pressed on keyboard':
    $codeExampleJs.innerHTML=`<code>document.addEventListener("keydown", function(){
    document.querySelector("span").innerText = event.key;
    });</code>`
    $codeExampleJq.innerHTML=`<code>$(document).keydown(()=>{
    $("span").text(event.key);
    });</code>`
    $tryArea.innerHTML=`Press a key!`
    document.addEventListener("keydown", function(){ $exResult.innerText = event.key; });
    break;

    case 'Mouse cursor moves':
    $codeExampleJs.innerHTML=`let span = document.querySelector("span");
    document.addEventListener("mousemove", () => {
    span.innerText = "Mouse moving: "+ event.pageX + ", " + event.pageY;
    });</code>`
    $codeExampleJq.innerHTML=`<code>let input = document.querySelector("input");
    input.addEventListener("input", ()=> {
    document.querySelector("p").innerText = event.target.value; });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>
    <p>MOUSE</p>
    `
    document.querySelector("p").addEventListener("mousemove", () => {
      $tryArea.innerText = "Mouse moving: "+ event.pageX + ", " + event.pageY;
      });
    break;

    case 'Value changed on text input':
    $codeExampleJs.innerHTML=`<code>let input = document.querySelector("input");
    input.addEventListener("input", ()=> {
    document.querySelector("p").innerText = event.target.value; });</code>`;
    $codeExampleJq.innerHTML=`<code>$("input").on("input", () => {
      $("p").text($(event.target).val());
      })</code>`;
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`;
    
    document.querySelector(".btn__black").addEventListener("click", () => {
      let input = document.createElement("input");
      input.id = "inputId";
      $tryArea.appendChild(input);
      
    });
    break;

    case 'Image loaded':
    $codeExampleJs.innerHTML=`<code>document.querySelector(".btn__black")
    .addEventListener("click", () => {
      let img = document.createElement("img");
      img.classList.add("img");
      img.src = "./images/yo-ahora.jpg";
      $exResult.append(img);
    });</code>`
    $codeExampleJq.innerHTML=`<code>var img = false;
    $("img").one("load",function(){
    imgLoaded = true;
    }).attr("src", "./images/yo-ahora.jpg");</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    document.querySelector(".btn__black").addEventListener("click", () => {
      let img = document.createElement("img");
      img.classList.add("img");
      img.src = "./images/yo-ahora.jpg";
      $exResult.append(img);
    });
    
    break;

    case 'Image load fail':
    $codeExampleJs.innerHTML=`<code>var imgErrorVanilla = false;
    document.querySelector("img").
    addEventListener("error", function() { imgErrorVanilla = true;
    });</code>`
    $codeExampleJq.innerHTML=`<code>var imgErrorQuery = false;
    $("img").on("error", function(){
    imgErrorQuery = true;
    });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    let img = document.createElement("img");
      img.classList.add("img");
      img.src = "./images/yo-ahora.jpgg";
      $exResult.append(img);
    break;

    case 'Form submitted':
    $codeExampleJs.innerHTML=`<code>document.querySelector("#form").
    addEventListener("submit", () => {
    event.preventDefault(); event.target.nextSibling.innerText = "FORM SUBMITTED!";
    event.target.remove();
    });
    </code>`
    $codeExampleJq.innerHTML=`<code>$("#form").on("submit", () => {
    event.preventDefault();
    $("span").text("FORM SUBMITTED!")
    $(event.target).remove();
    });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;

    case 'Option selected on select element':
    $codeExampleJs.innerHTML=`<code>document.querySelector("select").
    addEventListener("change", () => {
    document.querySelector("p").
    innerText = "Changed to: " + event.target.value;
    });</code>`
    $codeExampleJq.innerHTML=`<code>$("select").change( () => {
    $("p").text("Changed to: "+$("select").val());
    });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;

    case 'When you position the mouse over an element':
    $codeExampleJs.innerHTML=`<code>document.querySelector("#event-11V span").
    addEventListener("mouseover", () => {
    event.target.innerText = "Mouse is over!"
    });</code>`
    $codeExampleJq.innerHTML=`<code>$("span").mouseover(()=>{
    $(event.target).text("Mouse is over!");
    });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;

    case 'Checkbox checked or unchecked':
    $codeExampleJs.innerHTML=`<code>document.querySelector("input").
    addEventListener("change", () => {
    if (event.target.checked){
    event.target.nextSibling.innerText = "Checked"
    } else {
    event.target.nextSibling.innerText = "Unchecked"
    }
    });</code>`
    $codeExampleJq.innerHTML=`<code>$("input").change(()=>{
    if ($(event.target).is(":checked")) {
    $(event.target).next().text("Checked");
    } else {
    $(event.target).next().text("Unchecked");
    }
    });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;

    case 'Show the clicked item of an UL list':
    $codeExampleJs.innerHTML=`<code>document.querySelector("ul").
    addEventListener("click", () => {
    document.querySelector("p").innerText =
    "Item clicked: " + event.target.innerText; });</code>`
    $codeExampleJq.innerHTML=`<code>$("ul").click(()=>{
      $("p").text("Item clicked: " + $(event.target).text());
      });</code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;

    case ' ':
    $codeExampleJs.innerHTML=`<code></code>`
    $codeExampleJq.innerHTML=`<code></code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;

    case ' ':
    $codeExampleJs.innerHTML=`<code></code>`
    $codeExampleJq.innerHTML=`<code></code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;

    case ' ':
    $codeExampleJs.innerHTML=`<code></code>`
    $codeExampleJq.innerHTML=`<code></code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break; 

    case ' ':
    $codeExampleJs.innerHTML=`<code></code>`
    $codeExampleJq.innerHTML=`<code></code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;    

    case ' ':
    $codeExampleJs.innerHTML=`<code></code>`
    $codeExampleJq.innerHTML=`<code></code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;  
    
    case ' ':
    $codeExampleJs.innerHTML=`<code></code>`
    $codeExampleJq.innerHTML=`<code></code>`
    $tryArea.innerHTML=`<button class="btn__black">try it</button>`
    break;
  }})
}
