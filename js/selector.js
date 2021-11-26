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