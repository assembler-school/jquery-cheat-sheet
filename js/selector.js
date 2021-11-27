function createSelectors() {
    let listArray = ["Get the parent element", "Get the collection of children", "Get all the elements that have a certain class", "Get an item by id", "Get all the elements", "Get the options of a select element that are selected","Change the href attribute",  "Show an alert with the value of the first <input> of the page", "Remove all items", "Animate an item"
      ];
    
      let main = document.createElement("div");
      $(main).addClass("flexiMain");
      body.append(main);
    
      let list = document.createElement("aside");
      $(list).addClass("funSideBar2");
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
            displayExampleSelectors(r);
          },
          mouseenter: function (params) {
            $(this).css("cursor", "pointer");
          },
        });
      });
    }

  //Click element
    function displayExampleSelectors(r) {

      if(r === "Get the parent element"){
        createGetParentElement(r)
      }
      if(r === "Get the collection of children"){
        createCollectionOfKids(r)
      }
      if(r === "Get all the elements that have a certain class"){
        createAllElementsClass(r)
      }
      if(r === "Get an item by id"){
        createIdElements(r)
      }
      if(r === "Get all the elements"){
      getAllThemElements(r)
    }
    if (r === "Get the options of a select element that are selected"){
      createOptionSelect(r)
    }
    if(r === "Change the href attribute"){
      changeHref(r)
    }
    if(r === "Show an alert with the value of the first <input> of the page"){
      showMeThemInputs(r)
    }
    if(r === "Remove all items"){
      createRemoveItems(r)
    }
    if(r === "Animate an item"){
      createAnimationFun(r)
    }
  }

    //Get parent element
    function createGetParentElement(r) {
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
    .text(`This one is pretty simple on Js: let x = btn1.parentElement;  `);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("All my world is blue");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      vanillaParents(btn1, par);
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
    `And jquery is just as simple: $(btn2).parent().css("color", "green")`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Green is not prettiest color");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      fatherElementQuery(btn2, parBo);
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

//collection of Children elements

  function  createCollectionOfKids(r) {
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
    .text(`In order to select them you just need to do as follows, we will delete them to show the selection worked: par.childNodes  `);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("I am... protection");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  let z = ["I´m a child", "I´m a child Too", "I´m adopted"]

  z.forEach(element => {
    let m = document.createElement("p")
    m.innerText = element
    $(par).append(m)
  });

  $(btn1).on({
    click: function () {
      killThemKids(btn1, par);
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
    `As usual, here we just have to use a simple method: $(par).children`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Gonna paint them red");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  z.forEach(element => {
    let m = document.createElement("p")
    m.innerText = element
    $(parBo).append(m)
  });

  $(btn2).on({
    click: function () {
      redPaintedKids(btn2, parBo);
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

  // Get all the elements that have a certain class

  function createAllElementsClass(r) {
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
    .text(`This can be done with classes and tags. As I´m lazy I´m gonna use all P elements instead of creating elements with an specific class. There are many ways of doing this but my favourite is: document.querySelectorAll("p"), this however returns a node list, so as usual to interact with the elements is necessary to convert them to an array.`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Those classists P");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      classChange(btn1, par);
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
    `As usual, it is easier with Jquery:  $("p").each(function(){} `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("I guess yellow is better");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
     allPToYellow(btn2, parBo);
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

  //get an element by id

  function createIdElements(r){
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
      .text(`This one of the most intuitive ways of selecting a single element: document.getElementById("id")`);
    $(par).css("display", "none");
    $(topSlider).append(par);
  
    let btn1 = document.createElement("button");
    $(btn1).text("Those classists P");
    $(btn1).addClass("btn1");
    $(par).append(btn1);
    $(par).append("<p id=Star>If I turn blue, the selection worked<p>")
  
    $(btn1).on({
      click: function () {
        shootAPaintBall(btn1, par);
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
      `With this, is even shorter. You just need to write as follows = $(#id) `
    );
    $(parBo).css("display", "none");
    $(boSlider).append(parBo);
  
    let btn2 = document.createElement("button");
    $(btn2).text("I guess yellow is better");
    $(btn2).addClass("btn1");
    $(parBo).append(btn2);
    $(parBo).append("<p id=street>If I turn orange, the selection worked<p>")
  
  
    $(btn2).on({
      click: function () {
       shootPaintBallOrange(btn2, parBo);
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

  //Get all the elements

  function getAllThemElements(r){
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
      .text(`It always requires more steps with js: Array.from(document.querySelectorAll(".ninjas")).forEach(element => {
         element.style.display = "block"; `);
    $(par).css("display", "none");
    $(topSlider).append(par);
  
    let btn1 = document.createElement("button");
    $(btn1).text("Those classists P");
    $(btn1).addClass("btn1");
    $(par).append(btn1);
    let z = ["I was hidden", "So was I", "Never expect the spanish inquisition!"]

    z.forEach(element => {
     let u = document.createElement("p")
     $(u).text(element)
     $(u).addClass("ninjas")

      $(par).append(u)
    });
  
    $(btn1).on({
      click: function () {
        dynamite(btn1, par);
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
      `If I had to choose between garlic bread and Jquery, I choose Jquery:  $(".magicians").css({
        "display":"block",
        "color":"red"
    })
} `
    );
    $(boSlider).append(parBo);
  
    let btn2 = document.createElement("button");
    $(btn2).text("Adaba Kadabra");
    $(btn2).addClass("btn1");
    $(parBo).append(btn2);
    $(parBo).css("display", "none")

    let j = ["Ich bin Lord Voldemord", "Ich will deutsch sprechen", "Why are those guys speaking german?"]
  j.forEach(element => {
    let l = document.createElement("p")
    l.innerText = element
    $(l).addClass("magicians")
    $(parBo).append(l)
  });

    $(btn2).on({
      click: function () {
      magicCarpetRide(btn2, parBo);
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

  //Create Option Select

function createOptionSelect(r) {
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
    .text(`In order to do the following functionality, it was necesasry to do as follows: let r = document.getElementById("rockets").value
    let z = document.createElement("p")
    z.innerText = r;
    par.appendChild(z)`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Plse create your selection");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

//select element
let label = document.createElement("label")
$(label).attr("for", "rockets")
$(label).text("CHOOSE A ROCKET")
$(par).append(label)

$(par).append("<select name=rockets id=rockets><option value=SpaceX>SpaceX</option> <option value=blueOrigins>blue Origins</option></select>")

  $(btn1).on({
    click: function () {
     displaySelection(btn1, par);
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
    `This time is unsually a little more complicated than in vanilla: $("#fruit option:selected").text()`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Please choose your fruit");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);
  //Select Element
  let label2 = document.createElement("label")
$(label2).attr("for", "fruit")
$(label2).text("CHOOSE A FRUIT")
$(parBo).append(label2)

$(parBo).append("<select name=rockets id=fruit><option value=Apple>Apple</option> <option value=Banana>Banana</option></select>")

  $(btn2).on({
    click: function () {
      chooseFruits(btn2, parBo);
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

//Change the href attribute

function changeHref(r){
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
    .text(`This how you change the href from the first anchor element: Array.from(document.querySelectorAll("a"))[0].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Click the first attribute after pressing this button to see the change");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  let x = document.createElement("a")
  $(x).attr("href", "https://www.youtube.com/watch?v=pM3JPhWApvY&ab_channel=wiceone")
  $(x).text("Extremoduro")
  $(par).append(x)

  let k = document.createElement("a")
  $(k).attr("href", "https://www.youtube.com/watch?v=pM3JPhWApvY&ab_channel=wiceone")
  $(k).text("Extremoduro")
  $(par).append(k)

  $(btn1).on({
    click: function () {
      changeTheLink(btn1, par);
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
    `As usual less steps are necessary with Jquery: $("a").prop("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("I´m tired of making jokes");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  let g = document.createElement("a")
  $(g).attr("href", "https://www.youtube.com/watch?v=pM3JPhWApvY&ab_channel=wiceone")
  $(g).text("Extremoduro")
  $(parBo).append(g)

  let h = document.createElement("a")
  $(h).attr("href", "https://www.youtube.com/watch?v=pM3JPhWApvY&ab_channel=wiceone")
  $(h).text("Extremoduro")
  $(parBo).append(h)

  $(btn2).on({
    click: function () {
      tiredOfJokes(btn2, parBo);
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

// Show an alert with the value of the first <input> of the page

function showMeThemInputs(r){
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
    .text(`This one is fairly simple in js: document.querySelector("input").value`);
  $(par).css("display", "none");
  $(topSlider).append(par);

 $(par).append("<form id=l> <label for=textMe>Enter Input Here</label><input type=text id=textMe name=textMe><button id=testComm>I´ll show you what I mean</button></form>")
 let h = document.getElementById("l")

$(l).on({
  submit: function(){
    event.preventDefault()
    showInputs(par)
  }
})

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
    `This code will work only on the first input of the page, so go back and write something in both fields and see the alert you get: alert($("input").val())`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  $(parBo).append("<form id=u> <label for=textIt>Enter Input Here</label><input type=text id=textIt name=textIt><button id=testCom>I´ll show you what I mean</button></form>")
  let o = document.getElementById("u")

  $(o).on({
    submit: function(){
      event.preventDefault()
      passTheValue(parBo)
    }
  })

  $(boH3).on({
    mouseenter: function (params) {
      $(this).css("cursor", "pointer");
    },
    click: function (params) {
      $(parBo).slideToggle();
    },
  });
}

//remove all items

function createRemoveItems(r){
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
    .text(`for this a loop seems to be necessary as follows: while (par.firstChild) {
      par.removeChild(par.childNodes[0]) `);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("I wouldn´t touch me if I were you.");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      vanillaBodyDelete(btn1, par);
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
    `This is as easy as it gets, the following code will empty everything attached to the body: $(body).empty()`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("KILL THEM ALL");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      destroyThePage(btn2, parBo);
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

// Animeta elements

function createAnimationFun(r){
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
    .text(`It was ask to be animated 2 seconds after page load. For demo purposes we are gonna do it 2 seconds after button click.In order to do that we are gonna put the animation inside a set timeout.`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Leave");
  $(btn1).addClass("btn1");
  $(par).append(btn1);
  let m = document.createElement("p");
  $(m).text("I´m leaving, don´t try to stop me");
  $(m).css("opacity", "1");
  $(m).attr("id", "meh")
  $(par).append(m);

  $(btn1).on({
    click: function () {
      timeOfYourLife(btn1, par, m);
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
    `to add a delay to the animation, we add the delay method before the animation, all other animations after that will be delayed too: $("#carmen").delay(2000).animate({
      width: "500px"
  }, 2000); `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Where did she go?");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);
  $(parBo).append("<p id=carmen style=background:white>My name is Carmen San Diego<p>")

  $(btn2).on({
    click: function () {
      letsDance(btn2, parBo);
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