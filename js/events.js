function createEvents() {
  let listArray = [
    "HTML document has been loaded",
    "Clicked",
    "Double clicked",
    "Presses a key",
    "Moves the mouse cursor",
    "When the user changes a value of an text input",
    "When an image is loaded",
    "When an image fails to load",
    "When a form is submitted",
    "When the user changes the option of a select element",
    "When you position the mouse over an element",
    "When a checkbox is checked or unchecked",
    "When a ul list item is clicked, show the item that was clicked"
  ];

  let main = document.createElement("div");
  $(main).addClass("flexiMain");
  body.append(main);

  let list = document.createElement("aside");
  $(list).addClass("funSideBar3");
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
        displayExampEvents(r);
      },
      mouseenter: function (params) {
        $(this).css("cursor", "pointer");
      },
    });
  });
}

function displayExampEvents(r) {
  if(r === "HTML document has been loaded"){
    createCheckIfLoaded(r)
  }
  if(r === "Clicked"){
    checkIfClicked(r)
  }
  if(r === "Double clicked"){
    doubleClickListener(r)
  }
  if( r === "Presses a key"){
    keyDownCheck(r)
  }
  if(r === "Moves the mouse cursor"){
    createMouseMove(r)
  }
  if(r === "When the user changes a value of an text input"){
    createThemTextInputs(r)
  }
  if(r === "When an image is loaded"){
    imageLoadEvent(r)
  }
  if(r === "When an image fails to load"){
    badImage(r)
  }
}

// Check if loaded 

function createCheckIfLoaded(r) {
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
    .text(`Here after clicking the button we will check if the document is loaded. If it is, an element will show up saying "Yup, wasn´t it obvious?". However the to do an event listener for this is simply windows.onload()`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Thrust but verify");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      loadCheck(btn1, par);
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
    `here we just use ($(document).ready()`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("I bet it loaded");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      checkIfReady(btn2, parBo);
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

//click

function checkIfClicked(r) {
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
    .text(`Okay, this button will create another button with the actual fuction... 
    x.addEventListener("click", (e)=>{
        let k = document.createElement("p")
        k.innerText = "I´m alive"
        par.appendChild(k)
    }) `);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Button loop!");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      createButton(btn1, par);
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
    `Same as with vanilla, the button will create the button that executes the code:  $(".clicky").on({
      click: function(){
          $(parBo).append("<p>Thank you for my life</p>")
      } `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("I bet it loaded");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      queryButtonCreate(btn2, parBo);
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

//Double clicked

function doubleClickListener(r) {
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
    .text(`Same drill as before, here is the code: x.addEventListener("dblclick", (e)=> {
      x.style.background = "blue"
  }) `);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Only click me once");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      doubleClickChekerVanilla(btn1, par);
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
    `try it`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Only click me once, next one twice.");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      queryButtonCreate2(btn2, parBo);
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

//Presses a key

function keyDownCheck(r){
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
    .text(`Clicking the button below will create the event listener: document.addEventListener("keydown", (e)=>{
      btn1.style.color = "blue";`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Click to active listener");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      keyDownEvents(btn1, par);
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
    `Here goes the event code: cument).on({
      keydown: function (){
          $(parBo).css("color", "red")
      }
  }`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Code executes after this");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      eventD(btn2, parBo);
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

//Mouse Move

function createMouseMove(r){
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
    .text(`Here is the event for that:     document.addEventListener("mousemove", (e)=>{
      btn1.style.color = "green"
  })`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Activate listener");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      mouseMoveEvents(btn1, par);
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
    `Here goes the event code:     $(document).on({
      mousemove: function(){
          $(btn2).css("position", "absolute")
      }
  }) `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Code executes after this");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      eventM(btn2, parBo);
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

// When the user changes a value of an text input

function createThemTextInputs(r){
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
    .text(`The code for this is as follows:     x.addEventListener("change", (e)=>{
      let pp = document.createElement("p")
      pp.innerText = x.value
      par.appendChild(pp)
     }) `);
  $(par).css("display", "none");
  $(topSlider).append(par);
  $(par).append("<form id=copied><label>Somebody is copying me</label> <input type=text id=copy name=copy><form>")

  let btn1 = document.createElement("button");
  $(btn1).text("Activate listener");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
     createValueCopy(btn1, par);
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
    `The following code shows how the event listener can be used and written:   $("#copy").on({
      change: function(){
          let k = document.createElement("p")
          $(k).text($("#copy").val())
          $(btn2).append(k)
      }
  })`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Code executes after this");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      eventZ(btn2, parBo);
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

//When an image is loaded

function imageLoadEvent(r){
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
    .text(`This is the code we use to do an action when an image or some other element is loaded:   x.addEventListener("load", (e)=> {
      par.style.color = "blue"
  })`);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Activate listener");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      loadThatImage(btn1, par);
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
    `As usual it requires less code with jquery to do the same:   $(".loadBurning").load( function(){
      $(parBo).css("color", "red")
  })`
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Code executes after this");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      imageM(btn2, parBo);
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

//When an image fails to load

function badImage(r) {
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
    .text(` The following even lsitener is used when an element fails to load:     x.addEventListener("error", (e)=> {
      btn1.style.background ="blue"
  }) `);
  $(par).css("display", "none");
  $(topSlider).append(par);

  let btn1 = document.createElement("button");
  $(btn1).text("Activate listener");
  $(btn1).addClass("btn1");
  $(par).append(btn1);

  $(btn1).on({
    click: function () {
      erroImage(btn1, par);
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
    `The error method is used when an element fails to load, for example:   $(".ppp").on({
      error: function(){
          $(parBo).css("background", "blue")
      }
  }) `
  );
  $(parBo).css("display", "none");
  $(boSlider).append(parBo);

  let btn2 = document.createElement("button");
  $(btn2).text("Code executes after this");
  $(btn2).addClass("btn1");
  $(parBo).append(btn2);

  $(btn2).on({
    click: function () {
      loadDidntWork(btn2, parBo);
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