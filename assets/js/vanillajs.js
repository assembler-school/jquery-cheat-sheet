const codeTextVjs = document.querySelector("#code-to-type");
const demoConsoleContainerVjs = document.querySelector("#demo-console-content");

function vanillaJavaScript(id) {
  let number = id;
  let btn = document.createElement("button");
  let demoText = document.createElement("p");
  btn.classList.add("demo-btn");
  if (demoConsoleContainerVjs.children.length > 0) {
    while (demoConsoleContainerVjs.firstChild) {
      demoConsoleContainerVjs.removeChild(demoConsoleContainerVjs.lastChild);
    }
  }
  switch (number) {
    case "van0":
      codeTextVjs.innerText = "document.createElement('p')";
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Create it!";
      btn.onclick = function () {
        let p = demoConsoleContainerVjs.appendChild(
          document.createElement("p")
        );
        p.innerText = "A <p> element has been created!";
      };
      break;
    case "van1":
      codeTextVjs.innerText = `elementToRemove.remove()`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Remove me!";
      btn.onclick = function () {
        btn.remove();
      };
      break;
    case "van2":
      codeTextVjs.innerText = `parentElement.appendChild(elementToAppend)`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Append me!";
      btn.onclick = function () {
        let appended = document.createElement("p");
        demoConsoleContainerVjs.appendChild(appended);
        appended.innerHTML = `I'm appended`;
      };
      break;
    case "van3":
      codeTextVjs.innerText = `parentElement.prepend(elementToPrepend)`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Prepend me!";
      btn.onclick = function () {
        let prepended = document.createElement("p");
        demoConsoleContainerVjs.prepend(prepended);
        prepended.innerHTML = `I'm prepended`;
      };
      break;
    case "van4":
      codeTextVjs.innerText = `let parent = document.createElement('div');
        let child = document.createElement('p'); 
        parent.after(child)`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Add after me!";
      btn.onclick = function () {
        let p = document.createElement("p");
        btn.after(p);
        p.innerHTML = `I'm after the button`;
      };
      break;
    case "van5":
      codeTextVjs.innerText = `let new = document.createElement('p');
        let old = document.getElementById('oldElement');
        let parent = old.parentNode;
        parent.insertBefore(new, old)`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Try this!";
      let oldElem = document.createElement("p");
      oldElem.innerHTML = `I'm the old element`;
      demoConsoleContainerVjs.appendChild(oldElem);
      btn.onclick = function () {
        let newElem = document.createElement("p");
        newElem.innerHTML = `I'm the new element`;
        demoConsoleContainerVjs.appendChild(newElem);
        let parent = oldElem.parentNode;
        parent.insertBefore(newElem, oldElem);
      };
      break;
    case "van6":
      codeTextVjs.innerText = `let clone = originalElement.cloneNode()`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Clone me!";
      btn.onclick = function () {
        let clonedBtn = btn.cloneNode();
        clonedBtn.innerHTML = `I'm the cloned one`;
        demoConsoleContainerVjs.appendChild(clonedBtn);
      };
      break;
    case "van7":
      codeTextVjs.innerText = `elementToAddClass.classList.add('class-name')`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Turn me red!";
      btn.onclick = function () {
        btn.classList.add("btn-red");
        btn.innerHTML = `Now, I've got a class that made me red`;
      };
      break;
    case "van8":
      codeTextVjs.innerText = `elementToRemoveClass.classList.remove('class-name')`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.classList.add("btn-red");
      btn.innerHTML = "Get me back to white and green!";
      btn.onclick = function () {
        btn.classList.remove("btn-red");
        btn.innerHTML = `Thanks!`;
      };
      break;
    case "van9":
      codeTextVjs.innerText = `btnElement.disabled = true`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Disable me!";
      btn.onclick = function () {
        btn.disabled = true;
      };
      break;
    case "van10":
      codeTextVjs.innerText = `btnElement.disabled = false`;
      btn.disabled = true;
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.setAttribute("id", "checkbox");
      let labelForCheck = document.createElement("label");
      labelForCheck.style.color = "white";
      checkBox.style.marginLeft = "15px";
      labelForCheck.innerText = "Check me to enable the button";
      demoConsoleContainerVjs.appendChild(checkBox);
      demoConsoleContainerVjs.appendChild(labelForCheck);
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "I'm disabled";
      checkBox.onchange = function () {
        if (checkbox.checked === true) {
          btn.disabled = false;
          btn.innerHTML = "I'm enabled";
        } else {
          btn.disabled = true;
          btn.innerHTML = "I'm disabled";
        }
      };
      break;
    case "van11":
      codeTextVjs.innerText = `image.setAttribute('data-src', 'demo-data-src')`;
      btn.style.display = "block";
      btn.style.marginRight = "15px";
      demoConsoleContainerVjs.appendChild(btn);
      demoText.innerHTML = "The image has no data-src";
      demoText.style.color = "white";
      demoConsoleContainerVjs.appendChild(demoText);
      let image = document.createElement("img");
      image.src =
        "https://i1.wp.com/www.goodigcaptions.com/wp-content/uploads/2020/03/Funny-Cat.jpg?resize=391%2C306&ssl=1";
      image.style.width = "350px";
      image.style.height = "auto";
      image.style.marginLeft = "15px";
      demoConsoleContainerVjs.appendChild(image);
      btn.innerHTML = "Set the data-src";
      btn.onclick = function () {
        image.setAttribute("data-src", "demoDataSrc");
        demoText.innerHTML = `The image's data-src is now: demoDataSrc`;
      };
      break;
    case "van12":
      codeTextVjs.innerText = `image.removeAttribute('data-src')`;
      btn.style.display = "block";
      btn.style.marginRight = "15px";
      demoConsoleContainerVjs.appendChild(btn);
      demoText.innerHTML = `The image's data-src is now: demoDataSrc`;
      demoText.style.color = "white";
      demoConsoleContainerVjs.appendChild(demoText);
      let image2 = document.createElement("img");
      image2.src =
        "https://i1.wp.com/www.goodigcaptions.com/wp-content/uploads/2020/03/Funny-Cat.jpg?resize=391%2C306&ssl=1";
      image2.style.width = "350px";
      image2.style.height = "auto";
      image2.style.marginLeft = "15px";
      image2.setAttribute("data-src", "demoDataSrc");
      demoConsoleContainerVjs.appendChild(image2);
      btn.innerHTML = "Remove the data-src";
      btn.onclick = function () {
        image2.removeAttribute("data-src");
        demoText.innerHTML = `The image has no data-src`;
      };
      break;
    case "van13":
      codeTextVjs.innerText = `elementToHide.style.display = 'none`;
      demoText.innerHTML = "Click on the button to hide me!";
      demoConsoleContainerVjs.appendChild(btn);
      demoConsoleContainerVjs.appendChild(demoText);
      btn.innerHTML = "Hide the text";
      btn.onclick = function () {
        demoText.style.display = "none";
      };
      break;
    case "van14":
      codeTextVjs.innerText = `elementToShow.style.display = 'block`;
      demoText.innerHTML = "Hello!!";
      demoText.style.display = "none";
      demoConsoleContainerVjs.appendChild(btn);
      demoConsoleContainerVjs.appendChild(demoText);
      btn.innerHTML = "Show the text";
      btn.onclick = function () {
        demoText.style.display = "block";
      };
      break;
    case "van15":
      codeTextVjs.innerText = `Mmmm... not with Vanilla.
        Try it with jQuery`;
      break;
    case "van16":
      codeTextVjs.innerText = `Mmmm... not with Vanilla.
        Try it with jQuery`;
      break;
    case "van17":
      codeTextVjs.innerText = `listOfElements.
      forEach(e => {e.style.color = 'red'})`;
      for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("div-for-demo");
        newDiv.innerHTML = i + 1;
        demoConsoleContainerVjs.appendChild(newDiv);
      }
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Change the color of all";
      btn.onclick = function () {
        let divs = document.querySelectorAll(".div-for-demo");
        divs.forEach((e) => {
          e.style.backgroundColor = "red";
          e.style.border = "2px solid white";
          e.style.color = "white";
        });
      };
      break;
    case "van18":
      codeTextVjs.innerText = `childElement.parentElement.style.fontWeight = '400'`;
      demoText.innerHTML = `I'm the parent. Click on the button to change my weight`;
      demoText.style.display = "flex";
      demoText.style.fontWeight = "700";
      demoConsoleContainerVjs.appendChild(demoText);
      demoText.appendChild(btn);
      btn.innerHTML = "Change the weight";
      btn.onclick = function () {
        btn.parentElement.style.fontWeight = "400";
      };
      break;
    case "van19":
      codeTextVjs.innerText = `let toChange = parent.children
      for (let i = 0; i < toChange.length; i++) {
        parent.children[i].style.fontWeight = '700'
      }`;
      for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("div-for-demo");
        newDiv.innerHTML = i + 1;
        demoConsoleContainerVjs.appendChild(newDiv);
      }
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Change the weight of all";
      btn.onclick = function () {
        let divs = document.querySelectorAll(".div-for-demo");
        divs.forEach((e) => {
          let toChange = demoConsoleContainerVjs.children;
          for (let i = 0; i < toChange.length; i++) {
            demoConsoleContainerVjs.children[i].style.fontWeight = "700";
          }
        });
      };
      break;
    case "van20":
      codeTextVjs.innerText = `let toChange = document.querySelectorAll('.div-for-demo')
      toChange.forEach(e => {e.style.fontWeight = '700'})`;
      for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("div-for-demo");
        newDiv.innerHTML = ".div-for-demo";
        demoConsoleContainerVjs.appendChild(newDiv);
      }
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Change the weight of all";
      btn.onclick = function () {
        let divs = document.querySelectorAll(".div-for-demo");
        divs.forEach((e) => {
          let toChange = document.querySelectorAll(".div-for-demo");
          toChange.forEach((e) => {
            e.style.fontWeight = "700";
          });
        });
      };
      break;
    case "van21":
      codeTextVjs.innerText = `let toChange = document.getElementById('id-demo')
      toChange.style.fontWeight = '700'`;
      let newDiv = document.createElement("div");
      newDiv.classList.add("div-for-demo");
      newDiv.setAttribute("id", "id-demo");
      newDiv.innerHTML = "id-demo";
      let newDiv2 = document.createElement("div");
      newDiv2.classList.add("div-for-demo");
      newDiv2.innerHTML = "no id";
      demoConsoleContainerVjs.appendChild(newDiv);
      demoConsoleContainerVjs.appendChild(newDiv2);
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Change the id's div font weight";
      btn.onclick = function () {
        let toChange = document.getElementById("id-demo");
        toChange.style.fontWeight = "700";
      };
      break;
    case "van22":
      codeTextVjs.innerText = `let toChange = document.querySelectorAll('.div-for-demo');
      toChange.forEach(e => {
        if (e.style.display === 'none') {
          e.style.color = 'red'});
        }`;
      for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("div-for-demo");
        if (i === 2 || i === 4) {
          newDiv.style.display = "none";
        }
        newDiv.innerHTML = "display=block";
        demoConsoleContainerVjs.appendChild(newDiv);
      }
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Change the display";
      btn.onclick = function () {
        let divs = document.querySelectorAll(".div-for-demo");
        divs.forEach((e) => {
          if (e.style.display === "none") {
            e.style.color = "red";
          }
        });
      };
      break;
    case "van23":
      codeTextVjs.innerText = `document.querySelectorAll('option').forEach(e => {
        if(e.selected === true) {alert(e.index)}})
      `;
      let formFor23 = document.createElement("form");
      let selectEl = document.createElement("select");
      selectEl.classList.add("select-styles");
      selectEl.setAttribute("multiple", "multiple");
      for (let i = 0; i < 4; i++) {
        let optEl = document.createElement("option");
        selectEl.appendChild(optEl);
        optEl.innerHTML = "option " + i;
      }
      let submitFor23 = document.createElement("input");
      submitFor23.type = "submit";
      submitFor23.value = "Click to get the options";
      submitFor23.style.marginBottom = "10px";
      let pForSelect = document.createElement("p");
      pForSelect.classList.add("no-padding");
      pForSelect.innerHTML =
        "Remember to hold de command or ctrl to get multiple options.";
      demoConsoleContainerVjs.appendChild(formFor23);
      formFor23.appendChild(selectEl);
      formFor23.appendChild(submitFor23);
      demoConsoleContainerVjs.appendChild(pForSelect);
      formFor23.onsubmit = function (e) {
        e.preventDefault();
        let selected = document.querySelectorAll("option");
        let para = [];
        selected.forEach((e) => {
          if (e.selected === true) {
            para.push(e.index);
          }
        });
        pForSelect.innerHTML = "You have selected the options " + para;
      };
      break;
    case "van24":
      codeTextVjs.innerText = `document.querySelectorAll(".classOfElement")[0].href = 'newHref'`;
      let links = [
        { name: "Google", link: "https://www.google.es" },
        { name: "Twitter", link: "https://twitter.com/" },
        { name: "YouTube", link: "https://www.youtube.com/" },
      ];
      for (let i = 0; i < 2; i++) {
        let aFor24 = document.createElement("a");
        aFor24.href = links[i].link;
        aFor24.classList.add("a-style");
        aFor24.target = "_blank";
        aFor24.innerHTML = links[i].name;
        demoConsoleContainerVjs.appendChild(aFor24);
      }
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Change Google for Youtube";
      btn.onclick = function () {
        document.querySelectorAll("a")[0].href = links[2].link;
        document.querySelectorAll("a")[0].innerHTML = links[2].name;
      };
      break;
    case "van25":
      codeTextVjs.innerText = `alert(document.querySelectorAll("input")[0].value)`;
      for (let i = 0; i < 2; i++) {
        let inputFor25 = document.createElement("input");
        inputFor25.type = "text";
        inputFor25.classList.add("input-style");
        inputFor25.placeholder = "Type here";
        demoConsoleContainerVjs.appendChild(inputFor25);
      }
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Show the text of the input on an alert";
      btn.onclick = function () {
        if (document.querySelectorAll("input")[0].value !== "") {
          alert(document.querySelectorAll("input")[0].value);
        }
      };
      break;
    case "van26":
      codeTextVjs.innerText = `if (parentElement.children.length > 0) {
        while (parentElement.firstChild) {
          parentElement.removeChild(parentElement.lastChild);
        };
      }`;
      for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("div-for-demo");
        newDiv.innerHTML = i + 1;
        demoConsoleContainerVjs.appendChild(newDiv);
      }
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Remove us all!";
      btn.onclick = function () {
        if (demoConsoleContainerVjs.children.length > 0) {
          while (demoConsoleContainerVjs.firstChild) {
            demoConsoleContainerVjs.removeChild(
              demoConsoleContainerVjs.lastChild
            );
          }
        }
      };
      break;
    case "van27":
      codeTextVjs.innerText = `window.onload() { setTimeout(function () {
          animation }, 2000);
      }`;
      let counterFor27 = 2;
      demoText.innerHTML = counterFor27;
      demoText.classList.add("no-padding");
      demoText.style.position = "absolute";
      demoText.style.fontSize = "26px";
      demoConsoleContainerVjs.appendChild(demoText);
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "If you click, I'll move after 2 sec";
      btn.style.position = "absolute";
      btn.style.top = "50px";
      btn.style.left = "10px";
      btn.style.transform = "translate(0,0)";
      btn.style.transition = "1.5s transform";
      btn.onclick = function () {
        let stopIt = setInterval(timer, 1000);
        function timer() {
          if (counterFor27 === 0) {
            clearInterval(stopIt);
          } else {
            counterFor27--;
            demoText.innerHTML = counterFor27;
          }
        }
        setTimeout(function () {
          btn.style.transform = "translate(30px, 50px)";
        }, 2000);
      };
      break;
    case "van28":
      codeTextVjs.innerText = `window.onload = function() {}`;
      demoText.innerHTML = "The document has been loaded";
      demoText.classList.add("no-padding");
      demoConsoleContainerVjs.appendChild(demoText);
      break;
    case "van29":
      codeTextVjs.innerText = `elemSelected.onclick = function() {}`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Click me!";
      btn.onclick = function () {
        btn.innerHTML = `I've been clicked!`;
      };
      break;
    case "van30":
      codeTextVjs.innerText = `elemSelected.ondblclick = function() {}`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Double click me!";
      btn.ondblclick = function () {
        btn.innerHTML = `I've been double clicked!`;
      };
      break;
    case "van31":
      codeTextVjs.innerText = `document.onkeypress = function() {}`;
      demoConsoleContainerVjs.appendChild(demoText);
      demoText.innerHTML = "Press any key!";
      demoText.classList.add("no-padding");
      document.onkeypress = function (event) {
        demoText.innerHTML = `You've pressed the ${event.key} key`;
      };
      break;
    case "van32":
      codeTextVjs.innerText = `elem.onmousemove = function() {}`;
      demoConsoleContainerVjs.appendChild(demoText);
      demoText.innerHTML = "Move the mouse here";
      demoText.classList.add("no-padding");
      demoConsoleContainerVjs.onmousemove = function () {
        demoText.innerHTML = "Well done hacker!";
      };
      break;
    case "van33":
      codeTextVjs.innerText = `inputEl.onkeyup = function() {}`;
      let inputFor33 = document.createElement("input");
      inputFor33.type = "text";
      inputFor33.classList.add("input-style");
      inputFor33.placeholder = "Type here";
      demoConsoleContainerVjs.appendChild(inputFor33);
      demoText.innerHTML = "You'll see here what you type on the input";
      demoConsoleContainerVjs.appendChild(demoText);
      inputFor33.onkeyup = function () {
        if (inputFor33.value === "") {
          demoText.innerHTML = "Type something";
        } else {
          demoText.innerHTML = "You are typing " + inputFor33.value;
        }
      };
      break;
    case "van34":
      codeTextVjs.innerText = `img.onload = function() {}`;
      let imgFor34 = document.createElement("img");
      imgFor34.style.width = "150px";
      imgFor34.style.height = "150px";
      imgFor34.style.border = "2px solid var(--bg)";
      imgFor34.style.margin = "5px";
      imgFor34.style.marginRight = "15px";
      imgFor34.style.float = "left";
      demoConsoleContainerVjs.appendChild(btn);
      demoConsoleContainerVjs.appendChild(imgFor34);
      btn.style.display = "block";
      btn.innerHTML = "Press here to load an image";
      demoText.innerHTML = "The image has been loaded";
      btn.onclick = function () {
        imgFor34.onload = function () {
          demoConsoleContainerVjs.appendChild(demoText);
        };
        imgFor34.src = "http://placekitten.com/150";
      };
      break;
    case "van35":
      codeTextVjs.innerText = `img.onerror = function() {}`;
      let imgFor35 = document.createElement("img");
      imgFor35.style.width = "150px";
      imgFor35.style.height = "150px";
      imgFor35.style.border = "2px solid var(--bg)";
      imgFor35.style.margin = "5px";
      imgFor35.style.marginRight = "15px";
      imgFor35.style.float = "left";
      demoConsoleContainerVjs.appendChild(btn);
      demoConsoleContainerVjs.appendChild(imgFor35);
      btn.style.display = "block";
      btn.innerHTML = "Press here to load an image";
      demoText.innerHTML = "The image couldn't load";
      btn.onclick = function () {
        imgFor35.onerror = function () {
          demoConsoleContainerVjs.appendChild(demoText);
        };
        imgFor35.src = "http://placekitten.com/siadofjasoif";
      };
      break;
    case "van36":
      codeTextVjs.innerText = `formEl.onsubmit = function() {}`;
      let formEl = document.createElement("form");
      let inputTextFor36 = document.createElement("input");
      inputTextFor36.type = "text";
      inputTextFor36.placeholder = "Name";
      inputTextFor36.classList.add("input-style");
      let inputAgeFor36 = document.createElement("input");
      inputAgeFor36.type = "num";
      inputAgeFor36.placeholder = "Age";
      inputAgeFor36.classList.add("input-style");
      let submitBtnFor36 = document.createElement("input");
      submitBtnFor36.type = "submit";
      submitBtnFor36.innerHTML = "Submit";
      demoConsoleContainerVjs.appendChild(formEl);
      formEl.appendChild(inputTextFor36);
      formEl.appendChild(inputAgeFor36);
      formEl.appendChild(submitBtnFor36);
      formEl.onsubmit = function (e) {
        e.preventDefault();
        demoText.innerHTML = `Hello ${inputTextFor36.value}! You are ${inputAgeFor36.value} years old.`;
        demoConsoleContainerVjs.appendChild(demoText);
      };
      break;
    case "van37":
      codeTextVjs.innerText = `selectElement.onchange = function () {})`;
      let selectElFor37 = document.createElement("select");
      selectElFor37.classList.add("select-styles");
      for (let i = 0; i < 4; i++) {
        let optEl = document.createElement("option");
        selectElFor37.appendChild(optEl);
        optEl.innerHTML = "option " + i;
      }
      let pForSelectFor37 = document.createElement("p");
      pForSelectFor37.classList.add("no-padding");
      pForSelectFor37.innerHTML = "you have not selected any option yet";
      demoConsoleContainerVjs.appendChild(selectElFor37);
      demoConsoleContainerVjs.appendChild(pForSelectFor37);
      selectElFor37.onchange = function () {
        pForSelectFor37.innerHTML =
          "You have selected the option " + selectElFor37.options.selectedIndex;
      };
      break;
    case "van38":
      codeTextVjs.innerText = `elem.onmouseover = function() {}`;
      demoConsoleContainerVjs.appendChild(btn);
      btn.innerHTML = "Move the mouse over me";
      btn.onmouseenter = function () {
        btn.innerHTML = `Mouse is here!`;
        btn.style.backgroundColor = "red";
        btn.style.border = "2px solid white";
        btn.style.color = "white";
      };
      btn.onmouseleave = function () {
        btn.innerHTML = "Move the mouse over me";
        btn.removeAttribute("style");
      };
      break;
    case "van39":
      codeTextVjs.innerText = `checkBox.onchange = function () {}`;
      let checkBoxFor39 = document.createElement("input");
      checkBoxFor39.type = "checkbox";
      checkBoxFor39.setAttribute("id", "checkbox");
      let labelForCheckFor39 = document.createElement("label");
      labelForCheckFor39.style.color = "white";
      checkBoxFor39.style.marginLeft = "15px";
      labelForCheckFor39.innerText = "I'm unchecked";
      demoConsoleContainerVjs.appendChild(checkBoxFor39);
      demoConsoleContainerVjs.appendChild(labelForCheckFor39);
      checkBoxFor39.onchange = function () {
        if (checkBoxFor39.checked === true) {
          labelForCheckFor39.innerText = "I'm checked";
        } else {
          labelForCheckFor39.innerText = "I'm unchecked";
        }
      };
      break;
    case "van40":
      codeTextVjs.innerText = `liElem.onmousedown = function () {}`;
      let ulFor40 = document.createElement("ul");
      ulFor40.style.color = "white";
      ulFor40.style.listStyle = "disc";
      ulFor40.style.marginLeft = "20px";
      ulFor40.setAttribute("id", "ulFor40");
      for (let i = 0; i < 4; i++) {
        let liFor40 = document.createElement("li");
        ulFor40.appendChild(liFor40);
        liFor40.innerHTML = "Item number " + i;
        liFor40.style.paddingBottom = "10px";
      }
      demoConsoleContainerVjs.appendChild(ulFor40);
      let liItem = document.querySelectorAll("li");
      liItem.forEach((e) => {
        e.onmousedown = function () {
          e.style.backgroundColor = "white";
          e.style.color = "var(--bg)";
        };
      });
      break;
    default:
      alert("default case");
  }
}
