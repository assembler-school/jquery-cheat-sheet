function createSelectors() {
    let listArray = ["Get the parent element", "Get the collection of children", "Get all the elements that have a certain class", "Get an item by id", "Get all the elements", "Get the options of a select element that are selected","Change the href attribute",  "Show an alert with the value of the first <input> of the page", "Remove all items", "Animate an item"
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
