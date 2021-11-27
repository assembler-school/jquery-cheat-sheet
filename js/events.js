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
  $(btn1).text("Only click me once");
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