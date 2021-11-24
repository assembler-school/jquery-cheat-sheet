const body = $("body")


window.onload = load()

function load(params) {
    createHome()
}

//Homepage

function createHome(params) {
    let main = document.createElement("main")
    $(main).addClass("homeCon")
    body.append(main)

    //create elementes to go inside the main
    let flex1 = document.createElement("div")
    $(flex1).addClass("f1")
    let flex2 = document.createElement("div")
    $(flex2).addClass("f2")
    let flex3 = document.createElement("div")
    $(flex3).addClass("f3")

    $(main).append(flex1, flex2, flex3)

    //create the h2 elements for each flex

    let fun = document.createElement("h2")
    $(fun).text("Functions")
    $(flex1).append(fun)

    
    let selectors = document.createElement("h2")
    $(selectors).text("Selectors")
    $(flex2).append(selectors)

    let events = document.createElement("h2")
    $(events).text("Events")
    $(flex3).append(events)

    clickDetect(flex1, flex2, flex3, main)

}

function clickDetect(flex1, flex2, flex3, main) {
    $(flex1).on({
        click: function(params) {
            createFunctions()
            $(main).remove()
        },

        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    });

    $(flex2).on({
        click: function(params) {
            console.log("click")
            $(main).remove()
        },

        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    });

    $(flex3).on({
        click: function(params) {
            console.log("click")
            $(main).remove()
        },

        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    });
}

//Home page is done, starts with function list

function createFunctions() {
    let listArray = ["Create", "Remove", "Append", "Prepend", "Create and add:after", "Create and add:before",
    "Clone", "Add a class", "Remove a class", "Toggle a class", "Add a disabled attribute",
    "Remove the disabled attribute", "Set a data-src attribute", "Remove the data-src attribute", "Hide", "Show",
"Fade in", "Fade out", "Iterate a collection of elements"]

let main = document.createElement("div")
$(main).addClass("flexiMain")
body.append(main)

let list = document.createElement("aside")
$(list).addClass("funSideBar")
$(main).append(list)

let exampleSide = document.createElement("div")
$(exampleSide).addClass("exampleSide")
$(main).append(exampleSide)

listArray.forEach(element => {
    let z = document.createElement("p")
    $(z).text(element)
    $(list).append(z)
    let r = $(z).text()

    $(z).on({
        click: function (params) {
          displayExample(r)
        },
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    })
});
}

//verifies the innerText of the element and if match calls function to create that example
function  displayExample(r) {
    if(r === "Create") {
        createCreate()
    }
}


function createCreate() {
    let ex = $(".exampleSide")
    ex.empty()
}