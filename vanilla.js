//VANILLA EVENTS

//When the HTML document has been loaded and you can manipulate it
let vanillae1 = `<pre>document.addEventListener("DOMContentLoaded", function() {})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
//function vanillae1e() {document.addEventListener("DOMContentLoaded", function (){example.appendChild(imageJS)})};

//When an HTML item has been clicked
let vanillae2 = `<pre>let vanilla = document.getElementById('vanilla')
vanilla.addEventListener("click", ()=>{vanilla.style.backgroundColor = '#f7e018'})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/API/GlobalEventHandlers/onclick"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae2e() {document.getElementById('vanilla').addEventListener("click", ()=>{document.getElementById('vanilla').style.backgroundColor = '#f7e018'})};

//When an HTML item has been double clicked
let vanillae3 = `<pre>let vanilla = document.getElementById('vanilla')
vanilla.addEventListener("dblclick", ()=>{vanilla.style.backgroundColor = '#f7e018'})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae3e() {let vanilla = document.getElementById('vanilla'); vanilla.addEventListener("dblclick", ()=>{vanilla.style.backgroundColor = '#f7e018'})};
    
//User presses a key on the keyboard
let vanillae4 = `<pre>let vanilla = document.getElementById('vanilla'); 
vanilla.addEventListener("keydown", ()=>{vanilla.style.backgroundColor = '#f7e018'})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae4e() {let vanilla = document.getElementById('vanilla'); vanilla.addEventListener("keydown", ()=>{vanilla.style.backgroundColor = '#f7e018'})};

//User moves the mouse cursor
let vanillae5 = `<pre>let vanilla = document.getElementById('vanilla'); 
vanilla.addEventListener("mousemove", ()=>{vanilla.style.backgroundColor = '#f7e018'})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae5e() {let vanilla = document.getElementById('vanilla'); vanilla.addEventListener("mousemove", ()=>{vanilla.style.backgroundColor = '#f7e018'})};

//User changes a value of an text input
let vanillae6 = `<pre>element.addEventListener("change", function() {})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae6e() {let vanilla = document.getElementById('vanilla'); vanilla.addEventListener("change", ()=>{vanilla.style.backgroundColor = '#f7e018'})};

//An image is loaded
let vanillae7 = `<pre>let vanilla = document.getElementById('example'); 
vanilla.addEventListener("load", alert("Hi by Vanilla"))</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae7e() {let vanilla = document.getElementById('example7'); vanilla.addEventListener("load", function (){example.appendChild(imageJS)})};

//let vanilla = document.getElementById('example'); vanilla.addEventListener("error", alert("Img error by Vanilla"))
let vanillae8 = `<pre>let vanilla = document.getElementById('example'); 
vanilla.addEventListener("error", alert("Img error by Vanilla"))</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae8e() {let vanilla = document.getElementById('example8'); vanilla.addEventListener("error", function (){example.appendChild(imageJS)})};

//Form is submitted
let vanillae9 = `<pre>Element.addEventListener("submit", function() {})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae9e() {let vanilla = document.getElementById('example9'); vanilla.addEventListener("submit", function (e){e.preventDefault(); example.appendChild(imageJS)})};


//User changes the option of a select
let vanillae10 = `<pre>element.addEventListener("change", function() {})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae10e() {let vanilla = document.getElementById('example10'); vanilla.addEventListener("change", function (e){example.appendChild(imageJS)}   )};


//Position the mouse over an element
let vanillae11 = `<pre>element.addEventListener("mouseover", function() {})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;
function vanillae11e() {let vanilla = document.getElementById('vanilla'); vanilla.addEventListener("mouseover", ()=>{vanilla.style.backgroundColor = '#f7e018'})};

//A checkbox is checked or unchecked
let vanillae12 = `<pre>function(){if(input[type="checkbox"]:checked){alert("check")}else{alert("uncheck")}}</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS/:checked"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;


//A ul list item is clicked, show the item that was clicked
let vanillae13 = `<pre>document.querySelector("ul li").addEventListener( "click", function(){$(this).show()})</pre><a class="link" target="_blank" href="https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener"><br><img class="logo" src="/assets/logoJs.png" alt="logo-JS"></a>`;
function vanillae13e() {let vanilla = document.querySelectorAll('#ulEx li'); vanilla.forEach(lis => lis.addEventListener("click", (e)=> {e.preventDefault, alert(lis.textContent + " by Vanilla")}))};



//VANILLA FUNCTIONS

let vanillaf1 = `<pre>document.createElement(tagElement).textContent(content)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/API/Document/createElement"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf2 = `<pre>element.remove()</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/remove"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf3 = `<pre>element.appendChild(aChild)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf4 = `<pre>parentNode.insertBefore(newNode, referenceNode)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf5 = `<pre>element.insertAdjacentHTML('beforebegin', text)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf6 = `<pre>element.insertAdjacentHTML('afterend', text)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf7 = `<pre>node.cloneNode(deep)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/API/Node/cloneNode"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf8 = `<pre>element.classList.add(className)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf9 = `<pre>element.classList.remove(className)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf10 = `<pre>element.classList.toggle(className)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf11 = `<pre>document.querySelector("button").setAttribute("disabled", "")</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf12 = `<pre>document.querySelector("button").removeAttribute("disabled")</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf13 = `<pre>document.querySelector("img").setAttribute("data-src", "value")</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillaf14 = `<pre>document.querySelector("img").removeAttribute("data-src")</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;


//VANILLA FUNCTIONS

let vanillas1 = `<pre>element.style.display = "none"</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas2 = `<pre>element.style.display = "block"</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas3 = `;`;

let vanillas4 = `;`;

let vanillas5 = `<pre>array.forEach(function(){element.style.property = "value"}</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas6 = `<pre>element.parentElement.style.fontWeight = "bold"</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas7 = `;`;

let vanillas8 = `<pre>document.querySelectorAll(className).forEach(i =&gt; {i.style.fontWeight = "bold"})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas9 = `<pre>document.getElementById(elementId).style.fontWeight = "bold")</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/CSS/ID_selectors"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas10 = `<pre>document.querySelector(".class[display:none"]).style.color = "red")</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas11 = `<pre>document.querySelectorAll("input[type="select"] option:selected")</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas12 = `<pre>document.querySelector("a").setAttribute("href", value)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas13 = `<pre>alert(document.querySelector("input").value)</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/remove"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas14 = `<pre>document.querySelectorAll(selector).forEach(i =&gt; {i.remove()})</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/remove"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

let vanillas15 = `<pre>window.addEventListener(“load”, {setTimeOut(()=&gt;{item.style.right = “10px”, item.style.transition = “5s”}, 2000)}</pre><a class="link" target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement"><br><img class="logo" src="/assets/logoJS.png" alt="logo-JS"></a>`;

