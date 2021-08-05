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