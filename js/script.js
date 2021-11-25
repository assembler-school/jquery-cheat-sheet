const body = $("body");

window.onload = load();

function load(params) {
  createHome();
}

//Homepage

function createHome(params) {
  let main = document.createElement("main");
  $(main).addClass("homeCon");
  body.append(main);

  //create elementes to go inside the main
  let flex1 = document.createElement("div");
  $(flex1).addClass("f1");
  let flex2 = document.createElement("div");
  $(flex2).addClass("f2");
  let flex3 = document.createElement("div");
  $(flex3).addClass("f3");

  $(main).append(flex1, flex2, flex3);

  //create the h2 elements for each flex

  let fun = document.createElement("h2");
  $(fun).text("Functions");
  $(flex1).append(fun);

  let selectors = document.createElement("h2");
  $(selectors).text("Selectors");
  $(flex2).append(selectors);

  let events = document.createElement("h2");
  $(events).text("Events");
  $(flex3).append(events);

  clickDetect(flex1, flex2, flex3, main);
}

function clickDetect(flex1, flex2, flex3, main) {
  $(flex1).on({
    click: function (params) {
      createFunctions();
      $(main).remove();
    },

    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });

  $(flex2).on({
    click: function (params) {
      console.log("click");
      $(main).remove();
    },

    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });

  $(flex3).on({
    click: function (params) {
      console.log("click");
      $(main).remove();
    },

    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });
}

//Home page is done, starts with function list

function createFunctions() {
  let listArray = [
    "Create",
    "Remove",
    "Append",
    "Prepend",
    "Create and add:after",
    "Create and add:before",
    "Clone",
    "Add a class",
    "Remove a class",
    "Toggle a class",
    "Add a disabled attribute",
    "Remove the disabled attribute",
    "Set a data-src attribute",
    "Remove the data-src attribute",
    "Hide",
    "Show",
    "Fade in",
    "Fade out",
    "Iterate a collection of elements",
  ];

  let main = document.createElement("div");
  $(main).addClass("flexiMain");
  body.append(main);

  let list = document.createElement("aside");
  $(list).addClass("funSideBar");
  $(main).append(list);

  let exampleSide = document.createElement("div");
  $(exampleSide).addClass("exampleSide");
  $(main).append(exampleSide);

/// just to mark test code

let container = document.createElement("div");
  $(container).addClass("con");
  $(".exampleSide").append(container);

  let toH3 = document.createElement("h3");
  $(toH3).addClass("Vanilla");
  $(toH3).text("Click an element from the left side list to see examples");
  $(container).append(toH3);

//for EACH

  listArray.forEach((element) => {
    let z = document.createElement("p");
    $(z).text(element);
    $(list).append(z);
    let r = $(z).text();

    $(z).on({
      click: function (params) {
        displayExample(r);
      },
      mouseenter: function (params) {
        $(this).css("cursor", "pointer");
      },
    });
  });
}

//verifies the innerText of the element and if match calls function to create that example
function displayExample(r) {


  if (r === "Create") {
    createCreate(r);
  }

  if (r === "Remove") {
    createRemove(r);
  }

  if (r === "Append") {
    createAppend(r);
  }
  if (r === "Prepend") {
    createPrepend(r);
  }
  if (r === "Create and add:after") {
    afterAdd(r);
  }
  if (r === "Create and add:before") {
    createAddBefore(r);
  }
  if (r === "Clone"){
      createClone(r)
  }
  if(r === "Add a class") {
      createBeClassy(r)
  }
  if (r === "Remove a class"){
      createRemoveClass(r)
  }
  if(r === "Toggle a class"){
      createClassToggle(r)
  }
  if (r === "Add a disabled attribute"){
      createAddDisabled(r)
  }
  if (r === "Remove the disabled attribute"){
      createRemoveDisabled(r)
  }
  if (r === "Set a data-src attribute"){
      createSetDataSrc(r)
  }
  if(r === "Remove the data-src attribute") {
      createRemoveDataSrc(r)
  }
  if(r === "Hide"){
      createHideExample(r)
  }
  if (r === "Show"){
    createShowElement(r)
  }
  if(r === "Fade in"){
      createFades(r)
  }
  if(r === "Fade out"){
      createFadeThisOut(r)
  }
}

//create
function createCreate(r) {
  let ex = $(".exampleSide");
  ex.empty();

  let container = document.createElement("div");
  $(container).addClass("con");
  $(".exampleSide").append(container);

  let toH3 = document.createElement("h3");
  $(toH3).addClass("Vanilla");
  $(toH3).text(r + ":" + " " + "Vanilla");
  $(container).append(toH3);

  let topSlider = document.createElement("div");
  $(topSlider).addClass("topSlider");
  $(container).append(topSlider);

  let par = document.createElement("p");
  $(par).text(
    `Creating an element in vanilla Js is super simple, you just need to type the following code: let r = document.createElement("p")`
  );
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("I got the power to create life");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      createVanilla(btn1, par);
    },
  });

  $(toH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(par).slideToggle();
    },
  });

  let boH3 = document.createElement("h3");
  $(boH3).addClass("Vanilla");
  $(boH3).text("Jquery");
  $(container).append(boH3);

  let boSlider = document.createElement("div");
  $(boSlider).addClass("topSlider");
  $(container).append(boSlider);

  let parBo = document.createElement("p");
  $(parBo).text(
    `Jquery offers a super easy way to add an element. Just append the html elements directly for example:  $(parBo).append("<p>EXISTANCE IS PAIN<p>")`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("I need to fulfill my purpose");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      queryAdd(btn2, parBo);
    },
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });

  $(boH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(parBo).slideToggle();
    },
  });
}

//remove
function createRemove(r) {
  let ex = $(".exampleSide");
  ex.empty();

  let container = document.createElement("div");
  $(container).addClass("con");
  $(".exampleSide").append(container);

  let toH3 = document.createElement("h3");
  $(toH3).addClass("Vanilla");
  $(toH3).text(r + ":" + " " + "Vanilla");
  $(container).append(toH3);

  let topSlider = document.createElement("div");
  $(topSlider).addClass("topSlider");
  $(container).append(topSlider);

  let par = document.createElement("p");
  $(par)
    .text(`This a code example of how to remove an element using Js vanilla:  let x = document.getElementById("vanilla")

    x.removeChild(btn1)`);
  $(par).attr("id", "vanilla");
  $(par).css("display", "none");
  $(par).addClass("textBox");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("I´m an ugly button");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      removeMe(btn1, par);
    },
  });

  $(toH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(par).slideToggle();
    },
  });

  let boH3 = document.createElement("h3");
  $(boH3).addClass("Jquery");
  $(boH3).text("Jquery");
  $(container).append(boH3);

  let boSlider = document.createElement("div");
  $(boSlider).addClass("topSlider");
  $(container).append(boSlider);

  let parBo = document.createElement("p");
  $(parBo).text(
    `In order to remove an element in Jquery it is as easy as calling the element and using the "remove()" method. For example: $(x).remove() `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("I´m an ugly button");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      queryRemove(btn2, parBo);
    },
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });

  $(boH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(parBo).slideToggle();
    },
  });
}

//Create Append

function createAppend(r) {
  let ex = $(".exampleSide");
  ex.empty();

  let container = document.createElement("div");
  $(container).addClass("con");
  $(".exampleSide").append(container);

  let toH3 = document.createElement("h3");
  $(toH3).addClass("Vanilla");
  $(toH3).text(r + ":" + " " + "Vanilla");
  $(container).append(toH3);

  let topSlider = document.createElement("div");
  $(topSlider).addClass("topSlider");
  $(container).append(topSlider);

  let par = document.createElement("p");
  $(par).text(
    `Now that we have our element created we have to append it as a child for something else to see it, yes, more steps: par.appendChild(z)`
  );
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("If I give it a child, is it SFW?");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      appendVanilla(btn1, par);
    },
  });

  $(toH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(par).slideToggle();
    },
  });

  let boH3 = document.createElement("h3");
  $(boH3).addClass("Vanilla");
  $(boH3).text("Jquery");
  $(container).append(boH3);

  let boSlider = document.createElement("div");
  $(boSlider).addClass("topSlider");
  $(container).append(boSlider);

  let parBo = document.createElement("p");
  $(parBo).text(
    `We don´t need to create the entire element here. We can also just pass a previously created element, for ex:  $(btn2).append(test)`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("What is my purpose?");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      let test = document.createElement("p");
      $(test).text("I pass butter");
      queryAppend(btn2, parBo, test);
    },
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });

  $(boH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(parBo).slideToggle();
    },
  });
}

//createPreppend

function createPrepend(r) {
  let ex = $(".exampleSide");
  ex.empty();

  let container = document.createElement("div");
  $(container).addClass("con");
  $(".exampleSide").append(container);

  let toH3 = document.createElement("h3");
  $(toH3).addClass("Vanilla");
  $(toH3).text(r + ":" + " " + "Vanilla");
  $(container).append(toH3);

  let topSlider = document.createElement("div");
  $(topSlider).addClass("topSlider");
  $(container).append(topSlider);

  let par = document.createElement("p");
  $(par).text(
    `As usual first we need to create the element that we are gonna use in a different line of code and then we preppend it before another child element of that node  like this: par.insertBefore(x, btn1)`
  );
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("No unfunny joke now");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      prependVanilla(btn1, par);
    },
  });

  $(toH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(par).slideToggle();
    },
  });

  let boH3 = document.createElement("h3");
  $(boH3).addClass("Vanilla");
  $(boH3).text("Jquery");
  $(container).append(boH3);

  let boSlider = document.createElement("div");
  $(boSlider).addClass("topSlider");
  $(container).append(boSlider);

  let parBo = document.createElement("p");
  $(parBo).text(
    `As usual, it is a little easier to do this with Jquery, you can as before create the element, give it text and add it all in the same line like this: par.insertBefore(x, btn1) `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Did I forget something?");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      let test = document.createElement("p");
      $(test).text("I pass butter");
      queryPrepend(btn2, parBo);
    },
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });

  $(boH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(parBo).slideToggle();
    },
  });
}

//createAfterAdd
function afterAdd(r) {
  let ex = $(".exampleSide");
  ex.empty();

  let container = document.createElement("div");
  $(container).addClass("con");
  $(".exampleSide").append(container);

  let toH3 = document.createElement("h3");
  $(toH3).addClass("Vanilla");
  $(toH3).text(r + ":" + " " + "Vanilla");
  $(container).append(toH3);

  let topSlider = document.createElement("div");
  $(topSlider).addClass("topSlider");
  $(container).append(topSlider);

  let par = document.createElement("p");
  $(par).text(
    `This all now can be done in a single line too, for example = par.appendChild(document.createElement("p")).innerText = "Father, I´m alive!"`
  );
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("I got the power to create life");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      createAddVanilla(btn1, par);
    },
  });

  $(toH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(par).slideToggle();
    },
  });

  let boH3 = document.createElement("h3");
  $(boH3).addClass("Vanilla");
  $(boH3).text("Jquery");
  $(container).append(boH3);

  let boSlider = document.createElement("div");
  $(boSlider).addClass("topSlider");
  $(container).append(boSlider);

  let parBo = document.createElement("p");
  $(parBo).text(
    `jQuery is just as simple, or even more. It is enough to just use the append function and create the element inside:  $(parBo).append("<p>So I have created death, destroyer of worlds<p>") `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("I am J. Robert Oppenheimer");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      queryCreateAdd(btn2, parBo);
    },
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
  });

  $(boH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(parBo).slideToggle();
    },
  });
}

//Creates before Add part

function createAddBefore(r) {
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
    $(par).text(`Same as before, we can write it like this:  par.insertBefore(document.createElement("p"), btn1).innerText = "Ninja Attack!"`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("What happens if I click here?")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           createAddbeforeVanilla(btn1, par)
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
    $(parBo).text(`Same here, we can easily add all in a single line even shorter than in Js, like this: $(parBo).prepend("<p>BANG!p>")`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("You feeling lucky, punk?")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
            queryCreateAddBefore(btn2, parBo)
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

//Create Clone 

function createClone(r) {
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
    $(par).text(`In order to clone in vanilla Js we need to select the previous element, clonate it then append it as a  new child: let cl = btn1.cloneNode(true)
    par.appendChild(cl) `)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("I serve the republic")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           clonate(btn1, par)
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
    $(parBo).text(`Cloning here is as usual, easier: $(btn2).clone().appendTo(parBo)`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Long live the Empire!")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
           queryClone(btn2, parBo)
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

//add Class

function createBeClassy(r){
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
        $(par).text(`There are different ways to do this in Js, but the one I use the most is this:  `)
        $(par).css("display", "none")
        $(topSlider).append(par)
    
        
        let btn1 = document.createElement("button")
        $(btn1).text("Pls don´t click me")
        $(btn1).addClass("btn1")
        $(par).append(btn1)
    
        $(btn1).on({
            click: function () {
                $(btn1).text("OMG I´M BLEADING")
               addClassVanilla(btn1, par)
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
        $(parBo).text(`Here we can do it in a similar way: $(btn2).addClass("trial") `)
        $(parBo).css("display", "none")
        $(boSlider).append(parBo)
    
        let btn2 = document.createElement("button")
        $(btn2).text("I´m not in a funny mood")
        $(btn2).addClass("btn1")
        $(parBo).append(btn2)
    
        $(btn2).on({
            click: function () {
                addClassQuery (btn2, parBo)
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

    //Remove class

   function createRemoveClass(r){
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
    $(par).text(`Here we just do as follows: btn1.classList.remove("trial2")`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("Pls don´t, I don´t wanna be trashy")
    $(btn1).addClass("btn1")
    $(par).append(btn1)
    $(btn1).addClass("trial2")

    $(btn1).on({
        click: function () {
           removeClassVanilla(btn1, par)
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
    $(parBo).text(`Here we just remove the class like this:  $(btn2).removeClass("trial2")`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Fine, do it. I dare you.")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)
    $(btn2).addClass("trial2")

    $(btn2).on({
        click: function () {
           testName(btn2, parBo)
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

   //Toggle a class

   function createClassToggle(r) {
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
    $(par).text(`For this we also use the classList: btn1.classList.toggle("trial2") `)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("What should I wear now?")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           vanillaClassToogle(btn1, par)
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
    $(parBo).text(`And it is just as usual here: $(btn2).toggleClass("trial2")`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Switch the lights on")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
           toogleClassQuery(btn2, parBo)
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

   //Add a disabled attribute

   function createAddDisabled(r) {
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
    $(par).text(`Let´s see how to change this: btn1.setAttribute("disabled", "true") `)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("I should not make the joke I´m thinking about.")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           disabledVanilla(btn1, par)
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
    $(parBo).text(`We can use the attr method to do this: $(btn2).attr("disabled", "true")`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Pls, no, don´t break my legs")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
           disabledQuery(btn2, parBo)
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

   // Remove the disabled attribute
   
   function createRemoveDisabled(r) {
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
    $(par).text(`For this we have to do it as follows: document.getElementById("dummy").disabled = false`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("Heal thy legs")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

 let x = $(par).append("<button id=dummy disabled=`true`>Please Heal me</button>")

    $(btn1).on({
        click: function () {
           fixDisabledVanilla(btn1, par, x)
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
    $(parBo).text(`Here it is pretty simple too, for example: $('#my-input-id').prop('disabled', false);)`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("That looks bad")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)
    $(parBo).append("<button id=dummy2 disabled=`true`>Please Heal me</button>")

    $(btn2).on({
        click: function () {
           fixDisabledQuery(btn2, parBo)
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

   //Set a data-src attribute

   function createSetDataSrc(r) {
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
    $(par).text(`ask about this`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("I serve the republic")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           clonate(btn1, par)
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
    $(parBo).text(`Ask about this `)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Long live the Empire!")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
           queryClone(btn2, parBo)
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


   //remove data-src 

   function createRemoveDataSrc(r) {
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
    $(par).text(`ask about this`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("I serve the republic")
    $(btn1).addClass("btn1")
    $(par).append(btn1)

    $(btn1).on({
        click: function () {
           clonate(btn1, par)
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
    $(parBo).text(`Ask about this `)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Long live the Empire!")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)

    $(btn2).on({
        click: function () {
           queryClone(btn2, parBo)
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

   //Hide

   function createHideExample(r) {
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
    $(par).text(`You can do this by changing the style like this: ocument.getElementById("dark").style.visibility = "hidden"`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("Put him to sleep")
    $(btn1).addClass("btn1")
    $(par).append(btn1) 
    $(par).append("<p id=dark>Pls sir, I´m afraid of the dark<p>")
    $(btn1).on({
        click: function () {
           vanillaHideF(btn1, par)
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
    $(parBo).text(`As usual it is easier with Jquery: $( ".target" ).hide()`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Puff!")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)
    $(parBo).append("<p class=dark>And for my next trick...<p>")
    $(btn2).on({
        click: function () {
           JqueryHide(btn2, parBo)
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

   //show

   function createShowElement(r) {
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
    $(par).text(`You can do this by changing the style like this: document.getElementById("dark").style.display = "block"`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("Could the real Slim Shady pls stand up")
    $(btn1).addClass("btn1")
    $(par).append(btn1)
    let h = document.createElement("p")
    h.innerText = "Guess who´s back, guess who´s back, guess who´s back..."
    h.style.display = "none"
    $(par).append(h)
    $(btn1).on({
        click: function () {
           vanillaShowF(btn1, par, h)
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
    $(parBo).text(`As usual it is easier with Jquery: $( ".target" ).hide()`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Play AC/DC")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)
    let z = document.createElement("p")
    z.innerText = "Cause I´m back in Black, I hit the sack..."
    z.style.display = "none"
    $(parBo).append(z)

    $(btn2).on({
        click: function () {
           JqueryShow(btn2, parBo, z)
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

   // Fade in

   function createFades(r) {
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
    $(par).text(`This one made me cry, but here is how this is done: let cry = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    let i = 0
let x = setInterval(() => {
  i++
      m.style.opacity = cry[i]
        console.log("I work")
        console.log(i)
    if( i === 10) {
clearInterval(x)
    }
    }, 1000); `)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("I hope nobody shows up")
    $(btn1).addClass("btn1")
    $(par).append(btn1)
    let m = document.createElement("p")
    $(m).text("I´m a really bad ninja")
    $(m).css("opacity", "0.0")
    $(par).append(m)

    $(btn1).on({
        click: function () {
           painInTheAss(btn1, par, m)
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
    $(parBo).text(`This is waay, easier than in vanilla. Here all we need is to use the following method: $(x).fadeIn()  `)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Where is x?")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)
    let x = document.createElement("p")
    $(x).css("display", "none")
    $(x).text("Sorry, me late")
    $(parBo).append(x)

    $(btn2).on({
        click: function () {
           fadeInFun(btn2, parBo, x)
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

//Fade out

function createFadeThisOut(r) {
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
    $(par).text(`Same pain in the rear as before, but with the array elements ordered backwards`)
    $(par).css("display", "none")
    $(topSlider).append(par)

    
    let btn1 = document.createElement("button")
    $(btn1).text("Go away, dude")
    $(btn1).addClass("btn1")
    $(par).append(btn1)
    let m = document.createElement("p")
    $(m).text("I´m leaving, don´t try to stop me")
    $(m).css("opacity", "1")
    $(par).append(m)

    $(btn1).on({
        click: function () {
           painInTheRear(btn1, par, m)
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
    $(parBo).text(`I love Jquery: $(x).fadeOut()`)
    $(parBo).css("display", "none")
    $(boSlider).append(parBo)

    let btn2 = document.createElement("button")
    $(btn2).text("Out")
    $(btn2).addClass("btn1")
    $(parBo).append(btn2)
    let x = document.createElement("p")
    $(x).text("K, I´m leaving")
    $(parBo).append(x)

    $(btn2).on({
        click: function () {
           fadeOutFun(btn2, parBo, x)
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

// Iterate a collection of elements