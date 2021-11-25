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
        createCreate(r)
    }

    if(r === "Remove") {
        createRemove(r)
    }

    if (r === "Append"){
        createAppend(r)
    }
    if(r === "Prepend"){
        createPrepend(r)
    }
    
    if(r === "Create and add:after") {
        afterAdd(r)
    }
}

//create
function createCreate(r) {
    let ex = $(".exampleSide")
    ex.empty()

    let container = document.createElement("div")
    $(container).addClass("con")
    $(".exampleSide").append(container)




    let toH3 = document.createElement("h3")
    $(toH3).addClass("Vanilla")
    $(toH3).text(r + ":" + " " + "Vanilla")
    $(container).append(toH3)
    

    let topSlider = document.createElement("div")
    $(topSlider).addClass("topSlider")
    $(container).append(topSlider)

    let par = document.createElement("p")
    $(par).text(`Creating an element in vanilla Js is super simple, you just need to type the following code: let r = document.createElement("p")`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("I got the power to create life")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           createVanilla(btn1, par)
        }
    })


    $(toH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(par).slideToggle()
        }
    });

    let boH3 = document.createElement("h3")
    $(boH3).addClass("Vanilla")
    $(boH3).text("Jquery")
    $(container).append(boH3)
    

    let boSlider = document.createElement("div")
    $(boSlider).addClass("topSlider")
    $(container).append(boSlider)

    let parBo = document.createElement("p")
    $(parBo).text(`Jquery offers a super easy way to add an element. Just append the html elements directly for example:  $(parBo).append("<p>EXISTANCE IS PAIN<p>")`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("I need to fulfill my purpose")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
            queryAdd(btn2, parBo)
        },
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    });

    $(boH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(parBo).slideToggle()
        }
    });

}

//remove
function createRemove(r) {
    let ex = $(".exampleSide")
    ex.empty()

    let container = document.createElement("div")
    $(container).addClass("con")
    $(".exampleSide").append(container)




    let toH3 = document.createElement("h3")
    $(toH3).addClass("Vanilla")
    $(toH3).text(r + ":" + " " + "Vanilla")
    $(container).append(toH3)
    

    let topSlider = document.createElement("div")
    $(topSlider).addClass("topSlider")
    $(container).append(topSlider)

    let par = document.createElement("p")
    $(par).text(`This a code example of how to remove an element using Js vanilla:  let x = document.getElementById("vanilla")

    x.removeChild(btn1)`)
    $(par).attr("id", "vanilla")
    $(par).css("display", "none")
    $(par).addClass("textBox")
    $(topSlider).append(par)

    let btn1 = document.createElement("button")
    $(btn1).text("I´m an ugly button")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
            removeMe(btn1, par)
        }
    })

    $(toH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(par).slideToggle()
        }
    });

    let boH3 = document.createElement("h3")
    $(boH3).addClass("Jquery")
    $(boH3).text("Jquery")
    $(container).append(boH3)
    

    let boSlider = document.createElement("div")
    $(boSlider).addClass("boSlider")
    $(container).append(boSlider)

    let parBo = document.createElement("p")
    $(parBo).text(`In order to remove an element in Jquery it is as easy as calling the element and using the "remove()" method. For example: $(x).remove() `)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("I´m an ugly button")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
            queryRemove(btn2, parBo)
        },
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    })

    $(boH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(parBo).slideToggle()
        }
    });
}

//Create Append

function createAppend(r) {
    let ex = $(".exampleSide")
    ex.empty()

    let container = document.createElement("div")
    $(container).addClass("con")
    $(".exampleSide").append(container)




    let toH3 = document.createElement("h3")
    $(toH3).addClass("Vanilla")
    $(toH3).text(r + ":" + " " + "Vanilla")
    $(container).append(toH3)
    

    let topSlider = document.createElement("div")
    $(topSlider).addClass("topSlider")
    $(container).append(topSlider)

    let par = document.createElement("p")
    $(par).text(`Now that we have our element created we have to append it as a child for something else to see it, yes, more steps: par.appendChild(z)`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("If I give it a child, is it SFW?")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           appendVanilla(btn1, par)
        }
    })


    $(toH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(par).slideToggle()
        }
    });

    let boH3 = document.createElement("h3")
    $(boH3).addClass("Vanilla")
    $(boH3).text("Jquery")
    $(container).append(boH3)
    

    let boSlider = document.createElement("div")
    $(boSlider).addClass("topSlider")
    $(container).append(boSlider)

    let parBo = document.createElement("p")
    $(parBo).text(`We don´t need to create the entire element here. We can also just pass a previously created element, for ex:  $(btn2).append(test)`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("What is my purpose?")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
            let test = document.createElement("p")
            $(test).text("I pass butter")
            queryAppend(btn2, parBo, test)
        },
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    });

    $(boH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(parBo).slideToggle()
        }
    });
}

//createPreppend

function createPrepend(r) {
        let ex = $(".exampleSide")
        ex.empty()
    
        let container = document.createElement("div")
        $(container).addClass("con")
        $(".exampleSide").append(container)
    
    
    
    
        let toH3 = document.createElement("h3")
        $(toH3).addClass("Vanilla")
        $(toH3).text(r + ":" + " " + "Vanilla")
        $(container).append(toH3)
        
    
        let topSlider = document.createElement("div")
        $(topSlider).addClass("topSlider")
        $(container).append(topSlider)
    
        let par = document.createElement("p")
        $(par).text(`As usual first we need to create the element that we are gonna use in a different line of code and then we preppend it before another child element of that node  like this: par.insertBefore(x, btn1)`)
        $(par).css("display", "none")
        $(topSlider).append(par)
    
        
        let btn1 = document.createElement("button")
        $(btn1).text("No unfunny joke now")
        $(btn1).addClass("btn1")
        $(par).append(btn1)
    
        $(btn1).on({
            click: function () {
               prependVanilla(btn1, par)
            }
        })
    
    
        $(toH3).on({
            mouseenter: function (params) {
                $(this).css("cursor", "pointer")
            },
            click: function (params) {
                $(par).slideToggle()
            }
        });
    
        let boH3 = document.createElement("h3")
        $(boH3).addClass("Vanilla")
        $(boH3).text("Jquery")
        $(container).append(boH3)
        
    
        let boSlider = document.createElement("div")
        $(boSlider).addClass("topSlider")
        $(container).append(boSlider)
    
        let parBo = document.createElement("p")
        $(parBo).text(`As usual, it is a little easier to do this with Jquery, you can as before create the element, give it text and add it all in the same line like this: par.insertBefore(x, btn1) `)
        $(parBo).css("display", "none")
        $(boSlider).append(parBo)
    
        let btn2 = document.createElement("button")
        $(btn2).text("Did I forget something?")
        $(btn2).addClass("btn1")
        $(parBo).append(btn2)
    
        $(btn2).on({
            click: function () {
                let test = document.createElement("p")
                $(test).text("I pass butter")
                queryPrepend(btn2, parBo)
            },
            mouseenter: function (params) {
                $(this).css("cursor", "pointer")
            }
        });
    
        $(boH3).on({
            mouseenter: function (params) {
                $(this).css("cursor", "pointer")
            },
            click: function (params) {
                $(parBo).slideToggle()
            }
        });
}

//createAfterAdd
function afterAdd(r) {
    let ex = $(".exampleSide")
    ex.empty()

    let container = document.createElement("div")
    $(container).addClass("con")
    $(".exampleSide").append(container)




    let toH3 = document.createElement("h3")
    $(toH3).addClass("Vanilla")
    $(toH3).text(r + ":" + " " + "Vanilla")
    $(container).append(toH3)
    

    let topSlider = document.createElement("div")
    $(topSlider).addClass("topSlider")
    $(container).append(topSlider)

    let par = document.createElement("p")
    $(par).text(`This all now can be done in a single line too, for example = par.appendChild(document.createElement("p")).innerText = "Father, I´m alive!"`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("I got the power to create life")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           createAddVanilla(btn1, par)
        }
    })


    $(toH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(par).slideToggle()
        }
    });

    let boH3 = document.createElement("h3")
    $(boH3).addClass("Vanilla")
    $(boH3).text("Jquery")
    $(container).append(boH3)
    

    let boSlider = document.createElement("div")
    $(boSlider).addClass("topSlider")
    $(container).append(boSlider)

    let parBo = document.createElement("p")
    $(parBo).text(`jQuery is just as simple, or even more. It is enough to just use the append function and create the element inside:  $(parBo).append("<p>So I have created death, destroyer of worlds<p>") `)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("I am J. Robert Oppenheimer")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
            queryCreateAdd(btn2, parBo)
        },
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        }
    });

    $(boH3).on({
        mouseenter: function (params) {
            $(this).css("cursor", "pointer")
        },
        click: function (params) {
            $(parBo).slideToggle()
        }
    });
}