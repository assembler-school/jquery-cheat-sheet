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

}