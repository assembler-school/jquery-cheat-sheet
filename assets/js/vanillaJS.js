const JSCONTENTCONTAINER = document.querySelector("#codecontainer");
const JSRESULTCONTAINER = document.querySelector("#resultcontainer");

function JSItems(id) {
    let block = id;
    let btn = document.createElement("button");
    let myTextContent = document.createElement("p");
    btn.classList.add("demo-btn");

    // Remove elements every time we do a new iteration
    if (JSRESULTCONTAINER.children.length > 0) {
        while (JSRESULTCONTAINER.firstChild) {
            JSRESULTCONTAINER.removeChild(JSRESULTCONTAINER.lastChild);
        }
    }
    switch (block) {
        case "js0":
            JSCONTENTCONTAINER.textContent = "document.createElement('p')";
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Create it!";
            btn.onclick = function() {
                let p = JSRESULTCONTAINER.appendChild(document.createElement("p"));
                p.textContent = "A <p> element has been created!";
            };
            break;
        case "js1":
            JSCONTENTCONTAINER.textContent = `elementToRemove.remove()`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Remove me!";
            btn.onclick = function() {
                btn.remove();
            };
            break;
        case "js2":
            JSCONTENTCONTAINER.textContent = `parentElement.appendChild(appendedElement)`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Click to append me!";
            btn.onclick = function() {
                let appendedElement = document.createElement("p");
                JSRESULTCONTAINER.appendChild(appendedElement);
                appendedElement.textContent = `I am appended`;
            };
            break;
        case "js3":
            JSCONTENTCONTAINER.textContent = `parentElement.prepend(elementToPrepend)`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Prepend me!";
            btn.onclick = function() {
                let prependElement = document.createElement("p");
                JSRESULTCONTAINER.prepend(prependElement);
                prependElement.textContent = `I'm prepended`;
            };
            break;
        case "js4":
            JSCONTENTCONTAINER.textContent = `let parent = document.createElement('div');
            \nlet child = document.createElement('p'); 
            \nparent.after(child)`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Add element after";
            btn.onclick = function() {
                let p = document.createElement("p");
                btn.after(p);
                p.textContent = `This text is inserted after the button`;
            };
            break;
        case "js5":
            JSCONTENTCONTAINER.textContent = `let newElement = document.createElement('p');
        let prevElement = document.getElementById('prevElement');
        let parent = prevElement.parentNode;
        parent.insertBefore(newElement, prevElement)`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Click me!";
            let prevElem = document.createElement("p");
            prevElem.textContent = `I'm the previous element`;
            JSRESULTCONTAINER.appendChild(prevElem);
            btn.onclick = function() {
                let newElem = document.createElement("p");
                newElem.textContent = `I'm the new element`;
                JSRESULTCONTAINER.appendChild(newElem);
                let parent = prevElem.parentNode;
                parent.insertBefore(newElem, prevElem);
            };
            break;
        case "js6":
            JSCONTENTCONTAINER.textContent = `let Dolly 🐑 = originalElement.cloneNode()`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Clone me! 🐑";
            btn.onclick = function() {
                let cloneBtn = btn.cloneNode();
                cloneBtn.textContent = `I'm the cloned Dolly 🐑`;
                JSRESULTCONTAINER.appendChild(cloneBtn);
            };
            break;
        case "js7":
            JSCONTENTCONTAINER.textContent = `AddingAClass.classList.add('class-name')`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Turn me black!";
            btn.onclick = function() {
                btn.classList.add("section__resultbutton");
                btn.textContent = `Now, I've got a class that made me red`;
            };
            break;
        case "js8":
            JSCONTENTCONTAINER.textContent = `element.classList.toogle('class-name')`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Toggle me!";
            btn.onclick = function() {
                btn.classList.toggle("section__resultbutton");
                btn.textContent = `Check me toggling`;
            };
            break;
        case "js9":
            JSCONTENTCONTAINER.textContent = `elementToRemoveClass.classList.remove('class-name')`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.classList.add("function__box--blue");
            btn.textContent = "I don´t like it blue!";
            btn.onclick = function() {
                btn.classList.remove("function__box--blue");
                btn.textContent = `Awesome. Thank you!`;
            };
            break;
        case "js10":
            JSCONTENTCONTAINER.textContent = `btnElement.disabled = true`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Disable me!";
            btn.onclick = function() {
                btn.disabled = true;
            };
            break;
        case "js11":
            JSCONTENTCONTAINER.textContent = `btnElement.disabled = false`;
            btn.disabled = true;
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.setAttribute("id", "checkbox");
            let checkLabel = document.createElement("label");
            checkLabel.style.color = "white";
            checkBox.style.marginLeft = "15px";
            checkLabel.textContent = "Check me to enable the button";
            JSRESULTCONTAINER.appendChild(checkBox);
            JSRESULTCONTAINER.appendChild(checkLabel);
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "I'm disabled";
            checkBox.onchange = function() {
                if (checkbox.checked === true) {
                    btn.disabled = false;
                    btn.textContent = "I'm enabled";
                } else {
                    btn.disabled = true;
                    btn.textContent = "I'm disabled";
                }
            };
            break;
        case "js12":
            JSCONTENTCONTAINER.textContent = `image.setAttribute('data-src', 'demo-data-src')`;
            btn.style.display = "block";
            btn.style.marginRight = "15px";
            JSRESULTCONTAINER.appendChild(btn);
            myTextContent.textContent = "The image has no data-src";
            myTextContent.style.color = "white";
            JSRESULTCONTAINER.appendChild(myTextContent);
            let image = document.createElement("img");
            image.src =
                "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-29.png";
            image.style.width = "75px";
            image.style.height = "75px";
            image.style.marginLeft = "2rem";
            JSRESULTCONTAINER.appendChild(image);
            btn.textContent = "Set the data-src";
            btn.onclick = function() {
                image.setAttribute("data-src", "amongUsIsCool");
                myTextContent.textContent = `The image's data-src is now: amongUsIsCool`;
            };
            break;
        case "js13":
            JSCONTENTCONTAINER.textContent = `image.removeAttribute('data-src')`;
            btn.style.display = "block";
            btn.style.marginRight = "15px";
            JSRESULTCONTAINER.appendChild(btn);
            myTextContent.textContent = `The image's data-src is now: demoDataSrc`;
            myTextContent.style.color = "white";
            JSRESULTCONTAINER.appendChild(myTextContent);
            let myImage = document.createElement("img");
            myImage.src =
                "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-29.png";
            myImage.style.width = "75px";
            myImage.style.height = "75px";
            myImage.style.marginLeft = "2rem";
            myImage.setAttribute("data-src", "amongUsIsCool");
            JSRESULTCONTAINER.appendChild(myImage);
            btn.textContent = "Remove the data-src";
            btn.onclick = function() {
                myImage.removeAttribute("data-src");
                myTextContent.textContent = `The image has no data-src`;
            };
            break;
        case "js14":
            JSCONTENTCONTAINER.textContent = `elementToHide.style.display = 'none`;
            myTextContent.textContent = "Click on the button to hide me!";
            JSRESULTCONTAINER.appendChild(btn);
            JSRESULTCONTAINER.appendChild(myTextContent);
            btn.textContent = "Hide the text";
            btn.onclick = function() {
                myTextContent.style.display = "none";
            };
            break;
        case "js15":
            JSCONTENTCONTAINER.textContent = `elementToShow.style.display = 'block`;
            myTextContent.textContent = "Hello World!!";
            myTextContent.style.display = "none";
            JSRESULTCONTAINER.appendChild(btn);
            JSRESULTCONTAINER.appendChild(myTextContent);
            btn.textContent = "Show the text";
            btn.onclick = function() {
                myTextContent.style.display = "block";
            };
            break;
        case "js16":
            JSCONTENTCONTAINER.textContent = `Try it in jQuery`;
            break;
        case "js17":
            JSCONTENTCONTAINER.textContent = `Try it in jQuery`;
            break;
        case "js18":
            JSCONTENTCONTAINER.textContent = `listOfElements.
      forEach(e => {
          e.style.color = 'black'
        })`;
            for (let i = 0; i < 3; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("div-for-demo");
                newDiv.innerHTML = i + 1;
                JSRESULTCONTAINER.appendChild(newDiv);
            }
            JSRESULTCONTAINER.appendChild(btn);
            btn.innerHTML = "Change all elements´color";
            btn.onclick = function() {
                let divs = document.querySelectorAll(".div-for-demo");
                divs.forEach((e) => {
                    e.style.backgroundColor = "black";
                    e.style.border = "1px solid white";
                    e.style.color = "white";
                });
            };
            break;
        case "js18":
            JSCONTENTCONTAINER.textContent = `childElement.parentElement.style.fontWeight = '400'`;
            myTextContent.textContent = `I'm the parent. Click on the button to change my weight`;
            myTextContent.style.display = "flex";
            myTextContent.style.fontWeight = "700";
            JSRESULTCONTAINER.appendChild(myTextContent);
            myTextContent.appendChild(btn);
            btn.textContent = "Change the weight";
            btn.onclick = function() {
                btn.parentElement.style.fontWeight = "400";
            };
            break;
        case "js19":
            JSCONTENTCONTAINER.textContent = `let toChange = parent.children
      for (let i = 0; i < toChange.length; i++) {
        parent.children[i].style.fontWeight = '700'
      }`;
            for (let i = 0; i < 3; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("div-for-demo");
                newDiv.textContent = i + 1;
                JSRESULTCONTAINER.appendChild(newDiv);
            }
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Change the weight of all";
            btn.onclick = function() {
                let divs = document.querySelectorAll(".div-for-demo");
                divs.forEach((e) => {
                    let toChange = JSRESULTCONTAINER.children;
                    for (let i = 0; i < toChange.length; i++) {
                        JSRESULTCONTAINER.children[i].style.fontWeight = "700";
                    }
                });
            };
            break;
        case "js20":
            JSCONTENTCONTAINER.textContent = `let toChange = document.querySelectorAll('.div-for-demo')
      toChange.forEach(e => {e.style.fontWeight = '700'})`;
            for (let i = 0; i < 3; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("div-for-demo");
                newDiv.textContent = "Today is a wonderful day";
                JSRESULTCONTAINER.appendChild(newDiv);
            }
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Change the weight of all";
            btn.onclick = function() {
                let divs = document.querySelectorAll(".div-for-demo");
                divs.forEach((e) => {
                    let toChange = document.querySelectorAll(".div-for-demo");
                    toChange.forEach((e) => {
                        e.style.fontWeight = "700";
                    });
                });
            };
            break;
        case "js21":
            JSCONTENTCONTAINER.textContent = `let toChange = document.getElementById('id-demo')
      toChange.style.fontWeight = '1200'`;
            let thisDiv = document.createElement("div");
            thisDiv.classList.add("div-for-demo");
            thisDiv.setAttribute("id", "id-demo");
            thisDiv.textContent = "id-demo";
            let thisDiv2 = document.createElement("div");
            thisDiv2.classList.add("div-for-demo");
            thisDiv2.textContent = "no id";
            JSRESULTCONTAINER.appendChild(thisDiv);
            JSRESULTCONTAINER.appendChild(thisDiv2);
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Change the id's div font weight";
            btn.onclick = function() {
                let toChange = document.getElementById("id-demo");
                toChange.style.fontWeight = "1200";
            };
            break;
        case "js22":
            JSCONTENTCONTAINER.textContent = `let toChange = document.querySelectorAll('.div-for-demo');
      toChange.forEach(e => {
        if (e.style.display === 'none') {
          e.style.color = 'red'});
        }`;
            for (let i = 0; i < 4; i++) {
                let thisDiv = document.createElement("div");
                thisDiv.classList.add("div-for-demo");
                if (i === 2 || i === 4) {
                    thisDiv.style.display = "none";
                }
                thisDiv.textContent = "display=block";
                JSRESULTCONTAINER.appendChild(thisDiv);
            }
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Change the display";
            btn.onclick = function() {
                let divs = document.querySelectorAll(".div-for-demo");
                divs.forEach((e) => {
                    if (e.style.display === "none") {
                        e.style.color = "red";
                    }
                });
            };
            break;
        case "js23":
            JSCONTENTCONTAINER.textContent = `document.querySelectorAll('option').forEach(e => {
        if(e.selected === true) {alert(e.index)}})
      `;
            let thisForm = document.createElement("form");
            let selectedElement = document.createElement("select");
            selectedElement.classList.add("select-styles");
            selectedElement.setAttribute("multiple", "multiple");
            for (let i = 0; i < 4; i++) {
                let thisOption = document.createElement("option");
                selectedElement.appendChild(thisOption);
                thisOption.textContent = "option " + i;
            }
            let thisSubmit = document.createElement("input");
            thisSubmit.type = "submit";
            thisSubmit.value = "Click to get the options";
            thisSubmit.style.marginBottom = "10px";
            let pSelected = document.createElement("p");
            pSelected.classList.add("no-padding");
            pSelected.textContent =
                "Remember to hold de command or ctrl to get multiple options.";
            JSRESULTCONTAINER.appendChild(thisForm);
            thisForm.appendChild(selectedElement);
            thisForm.appendChild(thisSubmit);
            JSRESULTCONTAINER.appendChild(pSelected);
            thisForm.onsubmit = function(e) {
                e.preventDefault();
                let selection = document.querySelectorAll("option");
                let myArray = [];
                selection.forEach((e) => {
                    if (e.selection === true) {
                        myArray.push(e.index);
                    }
                });
                pSelected.textContent = `You have selected the option ${myArray.index}`;
            };
            break;
        case "js24":
            JSCONTENTCONTAINER.textContent = `document.querySelectorAll(".classOfElement")[0].href = 'newHref'`;
            let links = [
                { name: "Mamma Mia", link: "https://www.mammamia.com" },
                { name: "Among Us", link: "https://amongus.com/" },
            ];
            for (let i = 0; i < 1; i++) {
                let changeAttr = document.createElement("a");
                changeAttr.href = links[i].link;
                changeAttr.classList.add("section__resultbutton");
                changeAttr.target = "_blank";
                changeAttr.textContent = links[i].name;
                JSRESULTCONTAINER.appendChild(changeAttr);
            }
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Change Mamma Mia for Among Us";
            btn.onclick = function() {
                document.querySelectorAll("a")[0].href = links[0].link;
                document.querySelectorAll("a")[0].textContent = links[1].name;
            };
            break;
        case "js25":
            JSCONTENTCONTAINER.textContent = `alert(document.querySelectorAll("input")[0].value)`;
            for (let i = 0; i < 2; i++) {
                let firstInput = document.createElement("input");
                firstInput.type = "text";
                firstInput.classList.add("section__resultbutton");
                firstInput.placeholder = "Type here";
                JSRESULTCONTAINER.appendChild(firstInput);
            }
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Show the text of the input on an alert";
            btn.onclick = function() {
                if (document.querySelectorAll("input")[0].value !== "") {
                    alert(document.querySelectorAll("input")[0].value);
                }
            };
            break;
        case "js26":
            JSCONTENTCONTAINER.textContent = `if (parentElement.children.length > 0) {
        while (parentElement.firstChild) {
          parentElement.removeChild(parentElement.lastChild);
        };
      }`;
            for (let i = 0; i < 3; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("div-for-demo");
                newDiv.textContent = i + 1;
                JSRESULTCONTAINER.appendChild(newDiv);
            }
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Remove us all!";
            btn.onclick = function() {
                if (JSRESULTCONTAINER.children.length > 0) {
                    while (JSRESULTCONTAINER.firstChild) {
                        JSRESULTCONTAINER.removeChild(JSRESULTCONTAINER.lastChild);
                    }
                }
            };
            break;
        case "js27":
            JSCONTENTCONTAINER.textContent = `window.onload() { setTimeout(function () {
          animation }, 2000);
      }`;
            let animation = 2;
            myTextContent.textContent = animation;
            myTextContent.classList.add("no-padding");
            myTextContent.style.position = "right";
            myTextContent.style.fontSize = "26px";
            JSRESULTCONTAINER.appendChild(myTextContent);
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "If you click, I'll move after 2 sec";
            btn.style.position = "absolute";
            btn.style.top = "150px";
            btn.style.left = "800px";
            btn.style.transform = "translate(0,0)";
            btn.style.transition = "1.5s transform";
            btn.onclick = function() {
                let stopIteration = setInterval(timer, 1000);

                function timer() {
                    if (animation === 0) {
                        clearInterval(stopIteration);
                    } else {
                        animation--;
                        myTextContent.textContent = animation;
                    }
                }
                setTimeout(function() {
                    btn.style.transform = "translate(30px, 50px)";
                }, 2000);
            };
            break;
        case "js28":
            JSCONTENTCONTAINER.textContent = `window.onload = function() {}`;
            myTextContent.textContent = "The document has been loaded";
            myTextContent.classList.add("no-padding");
            JSRESULTCONTAINER.appendChild(myTextContent);
            break;
        case "js29":
            JSCONTENTCONTAINER.textContent = `elemSelected.onclick = function() {}`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Click me!";
            btn.onclick = function() {
                btn.textContent = `I've been clicked!`;
            };
            break;
        case "js30":
            JSCONTENTCONTAINER.textContent = `elemSelected.ondblclick = function() {}`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Double click me!";
            btn.ondblclick = function() {
                btn.textContent = `I've been double clicked!`;
            };
            break;
        case "js31":
            JSCONTENTCONTAINER.textContent = `document.onkeypress = function() {}`;
            JSRESULTCONTAINER.appendChild(myTextContent);
            myTextContent.textContent = "Press any key!";
            myTextContent.classList.add("no-padding");
            document.onkeypress = function(event) {
                myTextContent.textContent = `You've pressed the ${event.key} key`;
            };
            break;
        case "js32":
            JSCONTENTCONTAINER.textContent = `elem.onmousemove = function() {}`;
            JSRESULTCONTAINER.appendChild(myTextContent);
            myTextContent.textContent = "Move the mouse here";
            myTextContent.classList.add("no-padding");
            JSRESULTCONTAINER.onmousemove = function() {
                myTextContent.textContent = "Congrats!";
            };
            break;
        case "js33":
            JSCONTENTCONTAINER.textContent = `inputEl.onkeyup = function() {}`;
            let inputValue = document.createElement("input");
            inputValue.type = "text";
            inputValue.classList.add("section__resultbutton");
            inputValue.placeholder = "Type here";
            JSRESULTCONTAINER.appendChild(inputValue);
            myTextContent.textContent = "See here what you type";
            JSRESULTCONTAINER.appendChild(myTextContent);
            inputValue.onkeyup = function() {
                if (inputValue.value === "") {
                    myTextContent.textContent = "Type something";
                } else {
                    myTextContent.textContent = "You are typing " + inputValue.value;
                }
            };
            break;
        case "js34":
            JSCONTENTCONTAINER.textContent = `img.onload = function() {}`;
            let loadedImage = document.createElement("img");
            loadedImage.style.width = "150px";
            loadedImage.style.height = "150px";
            loadedImage.style.border = "2px solid black";
            loadedImage.style.marginBottom = "2rem";
            loadedImage.style.marginRight = "2rem";
            loadedImage.style.float = "left";
            JSRESULTCONTAINER.appendChild(btn);
            JSRESULTCONTAINER.appendChild(loadedImage);
            btn.style.display = "block";
            btn.textContent = "Press here to load an image";
            btn.onclick = function() {
                loadedImage.onload = function() {
                    JSRESULTCONTAINER.appendChild(myTextContent);
                };
                loadedImage.src =
                    "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-29.png";
            };
            break;
        case "js35":
            JSCONTENTCONTAINER.textContent = `img.onerror = function() {}`;
            let errorImage = document.createElement("img");
            errorImage.style.width = "150px";
            errorImage.style.height = "150px";
            errorImage.style.border = "1px solid black";
            errorImage.style.marginRight = "15px";
            errorImage.style.float = "left";
            JSRESULTCONTAINER.appendChild(btn);
            JSRESULTCONTAINER.appendChild(errorImage);
            btn.style.display = "block";
            btn.textContent = "Press here to load an image";
            myTextContent.textContent = "The image couldn't load";
            btn.onclick = function() {
                errorImage.onerror = function() {
                    JSRESULTCONTAINER.appendChild(myTextContent);
                };
                errorImage.src =
                    "https://wonder-day.com/wp-content/uploads/2020/10/wonder";
            };
            break;
        case "js36":
            JSCONTENTCONTAINER.textContent = `formEl.onsubmit = function() {}`;
            let formEl = document.createElement("form");
            let inputForm = document.createElement("input");
            inputForm.type = "text";
            inputForm.placeholder = "Name";
            inputForm.classList.add("section__resultbutton");
            let inputAge = document.createElement("input");
            inputAge.type = "num";
            inputAge.placeholder = "Age";
            inputAge.classList.add("section__resultbutton");
            let submitBtn = document.createElement("input");
            submitBtn.type = "submit";
            submitBtn.textContent = "Submit";
            JSRESULTCONTAINER.appendChild(formEl);
            formEl.appendChild(inputForm);
            formEl.appendChild(inputAge);
            formEl.appendChild(submitBtn);
            formEl.onsubmit = function(e) {
                e.preventDefault();
                myTextContent.textContent = `Hello ${inputForm.value}! You are ${inputAge.value} years old.`;
                JSRESULTCONTAINER.appendChild(myTextContent);
            };
            break;
        case "js37":
            JSCONTENTCONTAINER.textContent = `selectElement.onchange = function () {})`;
            let selected = document.createElement("select");
            selected.classList.add("select-styles");
            for (let i = 0; i < 4; i++) {
                let selectedOptions = document.createElement("option");
                selected.appendChild(selectedOptions);
                selectedOptions.textContent = "option " + i;
            }
            let pSelectOptions = document.createElement("p");
            pSelectOptions.classList.add("no-padding");
            pSelectOptions.textContent = "you have not selected any option yet";
            JSRESULTCONTAINER.appendChild(selected);
            JSRESULTCONTAINER.appendChild(pSelectOptions);
            selected.onchange = function() {
                pSelectOptions.textContent =
                    "You have selected the option " + selected.options.selectedIndex;
            };
            break;
        case "js38":
            JSCONTENTCONTAINER.textContent = `elem.onmouseover = function() {}`;
            JSRESULTCONTAINER.appendChild(btn);
            btn.textContent = "Move the mouse over me";
            btn.onmouseenter = function() {
                btn.textContent = `You hovered me!`;
                btn.style.backgroundColor = "black";
                btn.style.border = "2px solid white";
                btn.style.color = "white";
            };
            btn.onmouseleave = function() {
                btn.textContent = "Hover me, pleeeeease";
                btn.removeAttribute("style");
            };
            break;
        case "js39":
            JSCONTENTCONTAINER.textContent = `checkBox.onchange = function () {}`;
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("id", "checkbox");
            let checkBoxLabel = document.createElement("label");
            checkBoxLabel.style.color = "white";
            checkbox.style.marginLeft = "15px";
            checkBoxLabel.textContent = "I'm unchecked";
            JSRESULTCONTAINER.appendChild(checkbox);
            JSRESULTCONTAINER.appendChild(checkBoxLabel);
            checkbox.onchange = function() {
                if (checkbox.checked === true) {
                    checkBoxLabel.textContent = "I'm checked";
                } else {
                    checkBoxLabel.textContent = "I'm unchecked";
                }
            };
            break;
        case "js40":
            JSCONTENTCONTAINER.textContent = `liElem.onmousedown = function () {}`;
            let ulList = document.createElement("ul");
            ulList.style.color = "white";
            ulList.style.listStyle = "disc";
            ulList.style.marginLeft = "0.25rem";
            ulList.setAttribute("id", "ulList");
            for (let i = 0; i < 3; i++) {
                let liList = document.createElement("li");
                ulList.appendChild(liList);
                liList.textContent = "item" + i;
                liList.style.paddingBottom = "10px";
            }
            JSRESULTCONTAINER.appendChild(ulList);
            let liItem = document.querySelectorAll("li");
            liItem.forEach((e) => {
                e.onmousedown = function() {
                    e.style.backgroundColor = "black";
                    e.style.color = "white";
                };
            });
            break;
        default:
            alert("default case");
    }
}