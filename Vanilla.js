//* ---------- VARIABLES FOR EVENTS ----------

let event1Vanilla = document.getElementById("event1");
let event2Vanilla = document.getElementById("event2");
let event3Vanilla = document.getElementById("event3");
let event4Vanilla = document.getElementById("event4");
let event5Vanilla = document.getElementById("event5");
let event6Vanilla = document.getElementById("event6");
let event7Vanilla = document.getElementById("event7");
let event8Vanilla = document.getElementById("event8");
let event9Vanilla = document.getElementById("event9");
let event10Vanilla = document.getElementById("event10");
let event11Vanilla = document.getElementById("event11");
let event12Vanilla = document.getElementById("event12");
let event13Vanilla = document.getElementById("event13");

//* ------------- VARIABLES FOR FUNCTIONS & SELECTORS -----------

let function1 = document.getElementById("function1");
let function2 = document.getElementById("function2");
let function3 = document.getElementById("function3");
let function4 = document.getElementById("function4");
let function5 = document.getElementById("function5");
let function6 = document.getElementById("function6");
let function7 = document.getElementById("function7");
let function8 = document.getElementById("function8");
let function9 = document.getElementById("function9");
let function10 = document.getElementById("function10");
let function11 = document.getElementById("function11");
let function12 = document.getElementById("function12");
let function13 = document.getElementById("function13");
let function14 = document.getElementById("function14");
let function15 = document.getElementById("function15");
let function16 = document.getElementById("function16");
let function17 = document.getElementById("function17");
let function18 = document.getElementById("function18");
let function19 = document.getElementById("function19");
let function20 = document.getElementById("function20");
let function21 = document.getElementById("function21");
let function22 = document.getElementById("function22");
let function23 = document.getElementById("function23");
let function24 = document.getElementById("function24");
let function25 = document.getElementById("function25");
let function26 = document.getElementById("function26");
let function27 = document.getElementById("function27");
let function28 = document.getElementById("function28");
let function29 = document.getElementById("function29");

let vanillaModal = document.getElementById("modalVanilla");

let greenTick =
  //* ---------- SELECT EVENTS ----------

  document.addEventListener("click", selectEvent);

function selectEvent(e) {
  if (e.target == event1Vanilla) {
    vanillaModal.innerText = `document.addEventListener("DOMContentLoaded", function() {// code...});`;
  } else if (e.target == event2Vanilla) {
    vanillaModal.innerText = `In Html: <element onclick="myScript">
    In Javascript : object.onclick = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("click", function() {// code...}));`;
    vanillaModal.innerHTML +=
      '<button id="example2" class="example-btn">Click!</button>';
    let ex2 = document.getElementById("example2");
    ex2.addEventListener("click", () => {
      ex2.classList.add("btn-clicked");
    });
  } else if (e.target == event3Vanilla) {
    vanillaModal.innerText = `In Html: <element ondblclick="myScript">
    In Javascript : object.ondblclick = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("dblclick", function() {// code...}))`;
    vanillaModal.innerHTML +=
      '<button id="example3" class="example-btn">Dbl Click!</button>';
    let ex3 = document.getElementById("example3");
    ex3.addEventListener("dblclick", () => {
      ex3.classList.add("btn-clicked");
    });
  } else if (e.target == event4Vanilla) {
    vanillaModal.innerText = `In Html: <element onkeypress="myScript">
    In Javascript : object.onkeypress = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("keypress", function() {// code...}))`;
    vanillaModal.innerHTML +=
      '<button id="example4" class="example-btn">Press Key</button>';
    let ex4 = document.getElementById("example4");
    ex4.addEventListener("keypress", () => {
      ex4.classList.add("btn-clicked"); //? REVISAR BOTONES > TEXT AREA
    });
  } else if (e.target == event5Vanilla) {
    vanillaModal.innerText = `In Html: <element onmousemove="myScript">
    In Javascript : object.onmousemove = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("mousemove", function() {// code...}))`;
    vanillaModal.innerHTML +=
      '<button id="example5" class="example-btn">Hover!</button>';
    let ex5 = document.getElementById("example5");
    ex5.addEventListener("mousemove", () => {
      ex5.classList.toggle("btn-clicked");
    });
  } else if (e.target == event6Vanilla) {
    vanillaModal.innerText = `In Html: <element onchange="myScript">
    In Javascript : object.onchange = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("change", function() {// code...}))`;
    vanillaModal.innerHTML +=
      '<label for="example6">Vanilla 6</label><input id="example6" class="example-input" ></input>';
    let ex6 = document.getElementById("example6");
    ex6.addEventListener("change", () => {
      ex6.classList.add("input-changed");
    });
  } else if (e.target == event7Vanilla) {
    vanillaModal.innerText = `In Html: <element onload="myScript">
    In Javascript : object.onload = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("load", function() {// code...}))`;
    vanillaModal.innerHTML +=
      '<img  id="example7" class="example-img" src="http://cdn.onlinewebfonts.com/svg/img_391102.png" width="50">';
    let ex7 = document.getElementById("example7");
    ex7.addEventListener("load", () => {
      ex7.src =
        "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png";
    });
  } else if (e.target == event8Vanilla) {
    vanillaModal.innerText = `In Html: <element onerror="myScript">
    In Javascript : object.onerror = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("error", function() {// code...}))`;
    vanillaModal.innerHTML +=
      '<img  id="example8" class="example-img" src="http://cdn.onlinewebfonts.com/svg/img_391102.pn" width="50">';
    let ex8 = document.getElementById("example8");
    ex8.addEventListener("error", () => {
      ex8.src =
        "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png";
    });
  } else if (e.target == event9Vanilla) {
    vanillaModal.innerText = `formObject.submit()`;
    vanillaModal.innerHTML +=
      '<form id="example9"><label for="example9">Vanilla 9</label><input class="example-input" ></input><input class="example-btn" type="submit"></input></form>';
    let ex9 = document.getElementById("example9");
    ex9.addEventListener("submit", (e) => {
      e.preventDefault();
      vanillaModal.innerHTML +=
        '<img  id="example9" class="example-img" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png" width="50">';
    });
  } else if (e.target == event10Vanilla) {
    vanillaModal.innerText = `In Html: <element onchange="myScript">
    In Javascript : object.onchange = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("change", function() {// code...}))`;
    vanillaModal.innerHTML += `<label for="rapper">Elige un rapero</label><select id="rapper" class="example-input" name="rappers"><option value="Tupac">Tupac</option><option value="Snoop Dog">Snoop Dog</option></select>`;
    let ex10 = document.getElementById("rapper");
    ex10.addEventListener("change", () => {
      vanillaModal.innerHTML += `<h1>¡Que nooooo primo!</h1>`;
    });
  } else if (e.target == event11Vanilla) {
    vanillaModal.innerText = `In Html: <element onerror="myScript">
    In Javascript : object.onerror = function(){myScript};
    In JavaScript, using the addEventListener() method: object.addEventListener("mouseover", function() {// code...}))`;
    vanillaModal.innerHTML +=
      '<button id="example11" class="example-btn">Hover!</button>';
    let ex11 = document.getElementById("example11");
    ex11.addEventListener("mouseover", () => {
      ex11.classList.add("btn-clicked");
    });
  } else if (e.target == event12Vanilla) {
    vanillaModal.innerText = `function check() {
      document.getElementById("myCheck").checked = true;
  }
  function uncheck() {
      document.getElementById("myCheck").checked = false;
  }`;

    vanillaModal.innerHTML += `<form><label for="checkBox"><input id="checkBox" type="checkbox"></input> Checkbox 1</label></form>`;
    vanillaModal.innerHTML +=
      '<button style="display:none" id="example12" class="example-btn">Check!</button>';
    let checkBox = document.getElementById("checkBox");
    let buttonCheck = document.getElementById("example12");
    checkBox.addEventListener("change", () => {
      if (checkBox.checked == true) {
        buttonCheck.style.display = "block";
      } else {
        buttonCheck.style.display = "none";
      }
    });
  } else if (e.target == event13Vanilla) {
    vanillaModal.innerText = `WTF????`;

    //* --------- SELECT FUNCTIONS & SELECTORS -----------------------------------------
  } else if (e.target == function1) {
    vanillaModal.innerHTML = `document.createElement(nodename; 
      nodeName.innerText = "whatevertext"`;
  } else if (e.target == function2) {
    vanillaModal.innerHTML = "node.remove()";
  } else if (e.target == function3) {
    vanillaModal.innerHTML = "Element.append()";
  } else if (e.target == function4) {
    vanillaModal.innerHTML = `Element.prepend()`;
  } else if (e.target == function5) {
    vanillaModal.innerHTML = `document.createElement(nodeName; 
      nodeName.innerText = "whatevertext";<br/>
      document.append(nodeName)`;
  } else if (e.target == function6) {
    vanillaModal.innerHTML = `document.createElement(nodeName; 
      nodeName.innerText = "whatevertext";<br/>
      document.prepend(nodeName)`;
  } else if (e.target == function7) {
    vanillaModal.innerHTML = `let elementToClone = document.querySelector(".elementToClone").cloneNode(true);
    document.querySelector("p").appendChild(elementToClone);`;
  } else if (e.target == function8) {
    vanillaModal.innerHTML = `element.classList.add("whateverClass")`;
  } else if (e.target == function9) {
    vanillaModal.innerHTML = `element.classList.remove("whateverClass")`;
  } else if (e.target == function10) {
    vanillaModal.innerHTML = `element.classList.toggle("whateverClass")`;
  } else if (e.target == function11) {
    vanillaModal.innerHTML = `document.querySelector(“input”).disabled = true;`;
  } else if (e.target == function12) {
    vanillaModal.innerHTML = `document.querySelector(“input”).removeAttribute(“disabled”);`;
  } else if (e.target == function13) {
    vanillaModal.innerHTML = `document.querySelector (“img”).setAttribute("data-src");`;
  } else if (e.target == function14) {
    vanillaModal.innerHTML = `document.querySelector (“img”).removeAttribute(“data-src”);`;
  } else if (e.target == function15) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function16) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function17) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function18) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function19) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function20) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function21) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function22) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function23) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function24) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function25) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function26) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function27) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function28) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  } else if (e.target == function29) {
    vanillaModal.innerHTML = "document.createElement(nodename)";
  }
}

//* --------- ADD EVENT LISTENER FOR EVENTS --------------
