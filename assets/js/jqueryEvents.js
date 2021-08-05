/*-----------------EVENTS---------------------------*/
// $(document).ready(() => {
//     alert("DOMContentLoaded by jQuery");
// });

let clickJQuery = function createVanilla() {
    $(".jquery-button").on("click", function() {
        $(".jquery-button").css({ "background-color": "purple", color: "white" });
    });
};

let dblClickJQuery = function createVanilla() {
    $(".jquery-button").on("dblclick", function() {
        $(".jquery-button").css({ "background-color": "yellow", color: "black" });
    });
};

let keyJQuery = function createVanilla() {
    $(".jquery-button").on("keypress", (e) => {
        if (e.key == 74) {
            $(".jquery-button").css({ "background-color": "yellow", color: "black" });
        }
    });
};

let mouseJQuery = function createVanilla() {
    $(".jquery-button").on("mousemove", () => {
        $(".jquery-button").css({ "background-color": "yellow", color: "black" });
    });
};

let changejQuery = function jQueryCreate() {
    let newCont = $(".jquery");
    let btns = $(".jquery-button");
    let inputs = $(
        "<label for='changing'>Change to see the effect</label><input id='changing' type='text'></input>"
    );
    btns.on("click", () => {
        newCont.append(inputs);
        $("#changing").on("change", () => {
            alert("changing jQ");
        });
    });
};

let loadImgJQuery = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let containerjQ = $(".jquery");
        let imgDat = $(
            "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
        );
        containerjQ.append(imgDat);
        imgDat.on("load", () => {
            alert("loaded Img jQuery");
        });
    });
};

let errorImgJQuery = function jQueryCreate() {
    let containerjQ = $(".jquery");
    $(".jquery-button").on("click", () => {
        let imgDat = $(
            "<img src='https://www.google.com/imes/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
        );
        containerjQ.append(imgDat);
        imgDat.on("error", () => {
            alert("Img loading fail, wrong url jQuery");
        });
    });
};

let submittedjQuery = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let newForm = $(
            "<form class='new-form'><input type='text' name='name' placeholder='name' /><input type='text' placeholder='email' name='email' /><input type='submit' name='submit' /></form>"
        );
        $(".jquery").append(newForm);
        newForm.on("submit", (e) => {
            e.preventDefault();
            alert("submitted form jQuery");
        });
    });
};

let changeSeljQuery = function jQueryCreate() {
    let newCont = $(".jquery");
    let btns = $(".jquery-button");
    let newSelect = $(
        "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>"
    );
    btns.on("click", () => {
        newCont.append(newSelect);
        $("select").on("change", () => {
            alert("changing jQ");
        });
    });
};

let mouseOverJQuery = function createVanilla() {
    $(".jquery-button").on("mouseover", () => {
        alert("mouseover jQ");
    });
};

let changeCheckJQuery = function createVanilla() {
    let newCont = $(".jquery");
    let newCheck = $("<input type='checkbox' name='check'/>");
    $(".jquery-button").on("click", () => {
        newCont.append(newCheck);
    });
    newCheck.on("change", () => {
        alert("changing jQ");
    });
};

let selectListJQuery = function createVanilla() {
    let newList = $(
        "<ul><li class='items'>Item 1</li><li class='items'>Item 2</li><li class='items'>Item 3</li></ul>"
    );
    let newCont = $(".jquery");
    $(".jquery-button").on("click", () => {
        newCont.append(newList);
    });
    $(".items").each((item) => {
        $(item).on("click", () => {
            alert("The clicked element was this" + item.text() + " by jQuery");
        });
    });
};