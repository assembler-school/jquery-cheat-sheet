//InnerHtml

//HTML item has been clicked
let button = document.querySelector("#solutionjs1");
button.addEventListener("click", event => {
    button.innerHTML = 'this button has been clicked'
});
//HTML item has been double clicked
let button2 = document.querySelector('#solutionjs2');
button2.addEventListener("dblclick", event => {
    button2.innerHTML = 'this button has been double clicked'
});
//press key
document.addEventListener('keypress', pressKey);

function pressKey(e) {
    let key = document.querySelector('#solutionjs3')
    key.textContent = `${e.key}`;
}
//mouseover
let hover = document.querySelector('#solutionjs4');
hover.addEventListener("mouseover", function(e) {
    e.target.innerHTML = "you are hovered";
});
hover.addEventListener("mouseout", function(e) {
    e.target.innerHTML = "hover here";
});
//input change text
let submitText = document.querySelector("#input__button");
document.addEventListener("input", event => {
    let div = document.createElement("div")
    div.classList.add("solution__js", "items");
    let input = document.querySelector("#inputText").value
    document.querySelector("#solutionjs5").innerHTML = input
});
//img
let buttonImg = document.querySelector("#question6");
//if (img.id === "") {
buttonImg.addEventListener("click", event => {
    let img = document.createElement("img")
    img.classList.add("img", "solution__js");
    img.src = "./img/jq.jpg"
    img.id = "imgJs"
    document.querySelector("#solutionjs6").append(img)
});
//}
//error

let buttonImgError = document.querySelector("#question7");
buttonImgError.addEventListener("click", event => {
    let imgErrorJs = document.createElement("img")
    imgErrorJs.classList.add("img", "solution__js");
    imgErrorJs.src = "no_img"
    imgErrorJs.id = "imgJse"
    imgErrorJs.alt = "Error Loading"
    document.querySelector("#solutionjs7").append(imgErrorJs)
});



// form 
let $formContainer = document.querySelector("#formContainerJs")
$formContainer.addEventListener("submit", function(event) {
        event.preventDefault();

        $formJsText = document.querySelector("#formJsText")
        $formJsText.innerHTML = "this button is summited "
    })
    //checked 

let checkedButton = document.querySelector("#soluctionjs9")
checkedButton.addEventListener("change", (event) => {
    if ($(event.target).is(":checked")) {
        $(event.target).next().text("Checked");
    } else {
        $(event.target).next().text("Unchecked");
    }

});
//item is clicked

document.querySelector("#listItemsJs").addEventListener("click", (event) => {

    event.target.innerHTML = "you clicked  " + event.target.textContent
});
//-------------------------------------------------functions-------------------------------------------------
//create a Html with any text
let createElementHtml = document.querySelector("#createElement")

createElementHtml.addEventListener("click", () => {
    let p = document.createElement("p")
    p.innerHTML = "any text"
    document.querySelector("#soluctionFunctionJS1").append(p)
})

//Remove text
document.querySelector("#removeElement").addEventListener("click", () => {
    document.querySelector("#removeElement").remove();
});
//append text
document.querySelector("#appendElement").addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = "Go is appened";
    document.querySelector("#listItemsJsfunction").appendChild(li);
});

//prepend text
document.querySelector("#prependElement").addEventListener("click", (event) => {
    let li = document.createElement("li");
    li.innerText = "GO is prepend";
    document.querySelector("#listItemsJsfunctionPrepend").prepend(li);
    event.target.insertBefore(li, event.target)
})


//create and insert text After
document.querySelector("#prependCreateElement").addEventListener("click", (event) => {
    let li = document.createElement("li");
    li.innerText = "This text is After parent Node ";
    event.target.parentNode.insertBefore(li, event.target);
});
//create and insert text Before
document.querySelector("#beforeElement").addEventListener("click", (event) => {
    let li = document.createElement("li");
    li.id = "li"
    li.innerText = "This text is Before parent Node ";
    let valueInser = event.target.parentNode.querySelector("#li");
    event.target.parentNode.append(li);
});

//clone an HTML element within other element
document.querySelector("#CloneElementButton").addEventListener("click", (event) => {
    let orgn = event.target.parentNode.querySelector("#elementClon");
    let cln = orgn.cloneNode(true);
    event.target.parentNode.appendChild(cln);
});
//add Class
document.querySelector("#classButton").addEventListener("click", () => {
    let li = document.querySelector("#addClass")
    li.classList.add("background__item")
});
//Remove Class
document.querySelector("#classButtonR").addEventListener("click", () => {
    let li = document.querySelector("#removeClass")
    li.classList.remove("background__item")
});
//Toggle Class
document.querySelector("#classButtonToggle").addEventListener("click", () => {
    let li = document.querySelector("#toggleClass")
    li.classList.toggle("background__item")
});
//disabled button
document.querySelector("#disabledButton").addEventListener("click", () => {
    document.querySelector("#clickMeButton").disabled = true;
});
//remove disabled
document.querySelector("#enableButton").addEventListener("click", () => {
    document.querySelector("#clickMeButtonEnable").removeAttribute("disabled")
});
//create src
document.querySelector("#createSrcButton").addEventListener("click", () => {
    document.querySelector("#imgCreateSrc").src = "./img/js.jpg"
});
//remove src
document.querySelector("#removeSrcButton").addEventListener("click", () => {
        document.querySelector("#imgRemoveSrc").removeAttribute("src")
    })
    //display none
document.querySelector("#buttonHideElement").addEventListener("click", () => {
        let hideElement = document.querySelector("#Hideme");
        hideElement.classList.toggle("none")
    })
    //display block
document.querySelector("#buttonShowElement").addEventListener("click", () => {
    let hideElement = document.querySelector("#showMe");
    hideElement.classList.toggle("block")
})


// Add class Items
let itemsIterable = document.querySelectorAll("#itemIterable")
document.querySelector("#changeStyleButton").addEventListener("click", () => {
    itemsIterable.forEach(element => {
        element.style.color = "red"
    });
})