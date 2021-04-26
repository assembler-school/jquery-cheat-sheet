import { jQueryFuncData, jQueryEventData, jQueryEffectData } from "/data.js";

export const jQueryDisplay = (index) => {
  if ($(".modalContent").attr("id") === "functionModal") {
    functionDisplay(index);
  }
  if ($(".modalContent").attr("id") === "eventModal") {
    eventDisplay(index);
  }
  if ($(".modalContent").attr("id") === "effectModal") {
    effectDisplay(index);
  }
};

const eventDisplay = (index) => {
  $(`#jQueryEvent${index}`).text(jQueryEventData[index]);

  switch (index) {
    case 0:
      $(`#eventScreen${index}`).html(
        `<div id="myDiv"><button id="functionBtn">Click</button><br><h2>Hello</h2></div>`
      );
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          $(document).ready(function () {
            $("#myDiv h2").css("color", "green").text("Loaded");
          });
        });
      break;
    case 1:
      $(`#eventScreen${index}`).html(`<div id="myDiv"><h2>Click me</h2></div>`);
      jQueryActivated();
      $("#javaScriptBtn, #jQueryBtn, #myDiv h2")
        .off("click")
        .on("click", function () {
          $("#myDiv h2").css("background-color", "yellow").text("clicked");
          // document.querySelector("#myDiv h2").style.backgroundColor = "yellow";
          // document.querySelector("#myDiv h2").innerHTML = "clicked";
        });
      break;
    case 2:
      $(`#eventScreen${index}`).html(
        `<div id="myDiv"><div class="circle"></div><p>Double click the circle</p></div>`
      );
      jQueryActivated();
      $("#myDiv .circle")
        .off("dblclick")
        .on("dblclick", function () {
          $("#myDiv .circle").css("background-color", "yellow");
        });
      // document.querySelector("#myDiv .circle")
      //   .addEventListener("dblclick", function() {
      //     document.querySelector("#myDiv .circle").style.backgroundColor = "yellow";
      //   })
      break;
    case 3:
      $(`#eventScreen${index}`).html(`<div id="myDiv"><fieldset>
      <label for="target"><p>Type Something:</p></label>
      <input id="target" type="text">
    </fieldset></div>`);
      jQueryActivated();
      $("#target").keypress(function (event) {
        alert("You pressed a key");
      });
      // document.getElementById("target").addEventListener('keypress', function() {
      //   alert('You pressed a key');
      // });
      break;
    case 4:
      $(`#eventScreen${index}`).html(`
        <div id="myDiv">
          <div class="square">
          <p></p>
          </div>
        </div>`);
      jQueryActivated();
      $("#myDiv .square").mousemove(function (event) {
        let pageCoords =
          "Coordinates: ( " + event.pageX + ", " + event.pageY + " )";
        $("p").text(pageCoords);
      });

      // document.querySelector("#myDiv .square").addEventListener("mousemove", function(event) {
      //   myFunction(event);
      // });

      // function myFunction(e) {
      //   let x = e.clientX;
      //   let y = e.clientY;
      //   let pageCoords = "Coordinates: (" + x + "," + y + ")";
      //   document.querySelector("#myDiv p").innerHTML = pageCoords;
      // }
      break;
    case 5:
      $(`#eventScreen${index}`).html(`
      <div id="myDiv">
        <h1>Hello, I am here!</h1>
      </div>`);
      jQueryActivated();
      $("#myDiv h1").mouseover(function (event) {
        $(this).css("background-color", "pink");
      });
      // document.querySelector("#myDiv h1").addEventListener("mouseover", function() {
      //   document.querySelector("#myDiv h1").style.backgroundColor = "pink"
      // })
      break;
    case 6:
      $(`#eventScreen${index}`).html(`
        <div id="myDiv">
          <h1>Hello, I am here!</h1>
        </div>`);
      jQueryActivated();
      $("#myDiv h1").mouseout(function (event) {
        $(this).css("background-color", "gray");
      });
      // document.querySelector("#myDiv h1").addEventListener("mouseout", function() {
      //   document.querySelector("#myDiv h1").style.backgroundColor = "gray"
      // })

      break;
    case 7:
      $(`#eventScreen${index}`).html(
        `<div id="myDiv">
          <img src="images/cat-svgrepo-com.svg">
          </div>`
      );
      jQueryActivated();

      $("#myDiv img").on("load", function () {
        $("<p>image loaded</p>").appendTo("#myDiv");
      });
      // document.querySelector("#myDiv img").onload = function () {
      //   let newParagraph = document.createElement("p");
      //   newParagraph.innerText = "image loaded";
      //   document.getElementById("myDiv").appendChild(newParagraph);
      // }

      break;
    case 8:
      $(`#eventScreen${index}`).html(
        `<div id="myDiv">
          <img src="images/cat-svgrepo-com.sv">
          </div>`
      );
      jQueryActivated();

      $("#myDiv img")
        .on("load", function () {
          $("<p>image loaded</p>").appendTo("#myDiv");
        })
        .on("error", function () {
          $("<p>failed loading the image</p>").appendTo("#myDiv");
        });
      // document.querySelector("#myDiv img").onload = function () {
      //   let newParagraph = document.createElement("p");
      //   newParagraph.innerText = "image loaded";
      //   document.getElementById("myDiv").appendChild(newParagraph);
      // }
      // document.querySelector("#myDiv img").onerror = function () {
      //   let newParagraph = document.createElement("p");
      //   newParagraph.innerText = "failed loading the image";
      //   document.getElementById("myDiv").appendChild(newParagraph);
      // }

      break;
    case 9:
      $(`#eventScreen${index}`).html(
        `<div id="myDiv">
            <form action="">
            First name: <input type="text" name="FirstName"><br>
            Last name: <input type="text" name="LastName"><br>
              <button type="submit" value="Submit">Submit</button>
            </form> 
          <p></p>
        </div>`
      );
      jQueryActivated();
      // document.querySelector("#myDiv form").addEventListener("submit", function(e) {
      //   e.preventDefault();
      //   alert("Submitted");
      //   let firstName = document.querySelectorAll("#myDiv form input")[0].value;
      //   let lastName = document.querySelectorAll("#myDiv form input")[1].value;
      //   document.querySelector("#myDiv p").innerText = "Submitted: " + firstName + lastName
      // })
      $("form").submit(function (e) {
        e.preventDefault();
        alert("Submitted");
        let firstName = $("form [name=FirstName]").val();
        let lastName = $("form [name=LastName]").val();
        $("p").text("Submitted: " + firstName + lastName);
      });
      break;
    case 10:
      $(`#eventScreen${index}`).html(
        `<div id="myDiv">
            <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            </ul>
        </div>`
      );
      jQueryActivated();
      $("#myDiv li").each(function () {
        $(this).click(function () {
          $(this).text("clicked").css("background-color", "yellow");
        });
      });
      // document.querySelectorAll("#myDiv li").forEach((ele) => {
      //   ele.addEventListener("click", function () {
      //     ele.innerText = "clicked";
      //     ele.style.backgroundColor = "yellow";
      //   });
      // });
      break;
  }
};

const functionDisplay = (index) => {
  $(`#jQueryFunc${index}`).text(jQueryFuncData[index]);
  // screen display
  switch (index) {
    case 0:
      $(`#functionScreen${index}`).html(
        `<div id="myDiv"><button id="functionBtn">Click</button></div>`
      );

      jQueryActivated();

      $("#functionBtn")
        .off("click")
        .on("click", function () {
          let newP = $("<p/>");
          newP.text("Hello, I am a new paragraph");
          newP.appendTo("#myDiv");
        });
      // $("#javaScriptBtn, #jQueryBtn")
      //   .off("click")
      //   .on("click", function () {
      //     let newP = $("<p/>");
      //     newP.text("Hello, I am a new paragraph");
      //     $(`#functionScreen${index}`).append(newP);
      //   });
      break;
    case 1:
      $(`#functionScreen${index}`).html(
        `<div id="myDiv"><button id="functionBtn">Click</button><p>Hello1</p><p>Hello2</p><p>Hello3</p></div>`
      );
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          $("#myDiv p").last().remove();
          //.children().last().remove();
        });
      break;
    case 2:
      $(`#functionScreen${index}`).html(
        `<div id="myDiv"><button id="functionBtn">Click</button><h2>I am old!</h2></div>`
      );
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          $("#myDiv").append("<p>I am new!</p>");
        });
      break;
    case 3:
      $(`#functionScreen${index}`).html(`
      <div id="myDiv"><button id="functionBtn">Click</button>
       <div class="container">
          <p>Good</p>
          <p>Bad</p>
        </div>
      </div>
      `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          $(".container").prepend("<p>Very good</p>");
        });
      break;
    case 4:
      $(`#functionScreen${index}`).html(`
      <div id="myDiv">
      <button id="functionBtn">Click</button>
      <h1>I am a Title</h1>
      <h2 class="subtitle">I am a subtitle</h2>
      </div>
      `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // let newParagraph = document.createElement("p"); newParagraph.textContent = "New paragraph"; let myDiv = document.querySelector(".myDiv"); let subtitle = document.querySelector(".subtitle"); myDiv.insertBefore(newParagraph, subtitle);
          // let newParagraph = $("<p></p>").text("new paragraph")
          $(".subtitle").after("<p>I am a new paragraph</p>");
        });
      break;
    case 5:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button>
    <h1>I am a Title</h1>
    <p class="content">I am a paragraph</p>
    </div>
    `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // let newParagraph = document.createElement("p"); newParagraph.textContent = "New paragraph"; let myDiv = document.querySelector(".myDiv"); let subtitle = document.querySelector(".subtitle"); myDiv.insertBefore(newParagraph, subtitle);
          // let newText = $("<p></p>").text("new paragraph")
          $(".content").before("<h2>I am a subtitle</h2>");
        });
      break;
    case 6:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button>
      <h1>I am a Title</h1>
      <h2>I am a subtitle</h2>
      </div>
      <div>
      <h1>I am a Title 2</h1>
      <h2>I am a subtitle 2</h2>
      <p class="content">Copy me!</p>
      </div>
      
      `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          $(".content").clone().appendTo("#myDiv");
          // let clonedParagraph = document.querySelector(".content").cloneNode(true);
          // document.getElementById("myDiv").appendChild(clonedParagraph);
        });
      break;
    case 7:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button>
    <h1 id="myTitle">I am a Title</h1>
    <h2>I am a subtitle</h2>
    </div>
    `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //let title = document.getElementById("myTitle"); title.classList.add("titleClass");
          $("#myTitle").addClass("titleClass");
        });
      break;
    case 8:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button>
      <h1 id="myTitle" class="titleClass">I am a Title</h1>
      <h2>I am a subtitle</h2>
      </div>
      `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //let title = document.getElementById("myTitle"); title.classList.remove("titleClass");
          $("#myTitle").removeClass("titleClass");
        });
      break;
    case 9:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button>
      <h1 id="myTitle">I am a Title</h1>
      <h2>I am a subtitle</h2>
      </div>
      `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //let title = document.getElementById("myTitle"); title.classList.toggle("titleClass");
          $("#myTitle").toggleClass("titleClass");
        });
      break;
    case 10:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button>
        <button id="disableBtn">Hello</button>
        </div>
        `);
      jQueryActivated();
      $("#disableBtn").click(function () {
        $(this).after("<p>Hello!</p>");
      });
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // document.querySelector("#myDiv button").setAttribute("disabled", "disabled")
          $("#disableBtn").attr("disabled", true).text("Bye");
        });
      break;
    case 11:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button>
      <button id="disableBtn" disabled>Bye</button>
      </div>
      `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // document.querySelector("#myDiv button").removeAttribute("disabled", "disabled")
          $("#disableBtn")
            .attr("disabled", false)
            .text("Hello!")
            .on("click", function () {
              $("<p>'disabled' has been removed! </p>").appendTo("#myDiv");
            });
        });
      break;
    case 12:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button><br>
   <img alt="Cat">
    </div>
    `);

      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //document.querySelector("#myDiv img").setAttribute("data-src", "images/cat-svgrepo-com.svg");
          $("#myDiv img").data("src");
          $("#myDiv img").attr("data-src", "images/cat-svgrepo-com.svg");
          $("#myDiv img").after(
            `<p>data-src is : ${$("#myDiv img").data("src")}</p>`
          );
        });
      break;
    case 13:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button><br>
      <img alt="Cat" data-src="images/cat-svgrepo-com.svg">
       </div>
       `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //document.querySelector("#myDiv img").removeAttribute("data-src", "images/cat-svgrepo-com.svg");
          $("#myDiv img").removeData("data-src");
          $("#myDiv img").removeAttr("data-src");
          $("#myDiv img").after(
            `<p>data-src is : ${$("#myDiv img").data("src")}</p>`
          );
        });
      break;
    case 14:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button><br>
        <img alt="Cat" src="images/cat-svgrepo-com.svg">
         </div>
         `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //document.querySelector("#myDiv img").style.display = "none";
          $("#myDiv img").hide();
        });
      break;
    case 15:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button><br>
         <img alt="Cat" src="images/cat-svgrepo-com.svg" style="display:none">
          </div>
          `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // document.querySelector("#myDiv img").style.display = "block";
          // document.querySelector("#myDiv").style.textAlign = "-webkit-center"
          $("#myDiv img").show();
        });
      break;
    case 16:
      $(`#functionScreen${index}`).html(`<div id="myDiv">
      <button id="functionBtn">Click</button><br>
          <input type="checkbox" id="checkBox" name="checkBox" value="checkBox" checked>
          <label for="checkBox"><h3>Check here</h3></label><br>
           </div>
           `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // document.querySelector("#myDiv input[type=checkbox]").checked = false;
          $("#myDiv input:checkbox").prop("checked", false);
        });
      break;
    case 17:
      $(`#functionScreen${index}`).html(`
      <div id="myDiv">
      <button id="functionBtn">Click</button><br>
          <div class="city">
          <h3>Barcelona</h3>
          <p>Barcelona is in Spain.</p>
        </div>

        <div class="city">
          <h3>Paris</h3>
          <p>Paris is in France.</p>
        </div>

        <div class="city">
          <h3>Seoul</h3>
          <p>Seoul is in South Korea.</p>            
          </div>
      </div>
           `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // document.querySelectorAll(".city").forEach(element => {
          //   element.style.fontWeight = 700;
          // })
          $(".city").css("font-weight", 700);
        });
      break;
    case 18:
      $(`#functionScreen${index}`).html(`
        <div id="myDiv">
        <button id="functionBtn">Click</button><br>

            <div class="city" id="myCity">
              <h3>Barcelona</h3>
              <p>Barcelona is in Spain.</p>
            </div>

            <div class="city">
              <h3>Paris</h3>
              <p>Paris is in France.</p>
            </div>

            <div class="city">
              <h3>Seoul</h3>
              <p>Seoul is in South Korea.</p>
            </div>
        </div>
             `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //document.getElementById("myCity").style.fontWeight = 700;
          $("#myCity").css("font-weight", 700);
        });
      break;
    case 19:
      $(`#functionScreen${index}`).html(`
          <div id="myDiv">
                  <button id="functionBtn">Click</button><br>

              <div class="city" id="myCity">
                <h3>Barcelona</h3>
                <p class="country" style="display:none;">Barcelona is in Spain.</p>
              </div>
  
              <div class="city">
                <h3>Paris</h3>
                <p class="country" style="display:none;">Paris is in France.</p>
              </div>
  
              <div class="city">
                <h3>Seoul</h3>
                <p class="country" style="display:none;">Seoul is in South Korea.</p>
              </div>
          </div>
               `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // document.querySelectorAll(".country").forEach(element => {
          //   element.style.display = "block";
          //   element.style.color = "red"
          // })
          $(".country:hidden").css("color", "red").show();
        });
      break;
    case 20:
      $(`#functionScreen${index}`).html(`
          <div id="myDiv">
          <button id="functionBtn">Click</button><br>
          <h2>City:</h2>
          <select>
            <option>Barcelona</option>
            <option>Paris</option>
            <option>Seoul</option>
            <option>Rome</option>
          </select>
          </div>
               `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          // let select = document.querySelectorAll("select option");
          // select[3].setAttribute("selected", true);
          $("#myDiv select option").last().attr("selected", true);
        });
      break;
    case 21:
      $(`#functionScreen${index}`).html(`
          <div id="myDiv">
          <button id="functionBtn">Click</button><br>
          <h2>Go to</h2>
            <a href="#">Google</a><br>
            <a href="#">Facebook</a><br>
            <a href="#">Instagram</a><br>         
          </div>
               `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          //document.querySelectorAll("a")[0].setAttribute("href", "https://www.google.es/")
          $("a").first().attr("href", "https://www.google.es/");
        });
      break;
    case 22:
      $(`#functionScreen${index}`).html(`
          <div id="myDiv">
          <h2>What is your name?</h2>
          <p>First name</p> <input type="text" name="firstName">
          <p>Last name</p> <input type="text" name="lastName"><br>
          <button id="functionBtn">Click</button><br>
          <p>Fill the form and click the button</p>
          </div>
               `);
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          alert("Hello," + $("input:text").first().val());
          // alert("Hello," + document.querySelectorAll("input[type=text]")[0].value);
        });
      break;
  }
};

const effectDisplay = (index) => {
  $(`#jQueryEffect${index}`).text(jQueryEffectData[index]);

  switch (index) {
    case 0:
      $(`#effectScreen${index}`).html(
        `<div id="myDiv">
            <ul>
            <li>item 1</li>
            <p>paragraph 1</p>
            <li>item 2</li>
            <p>paragraph 2</p>
            <li>item 3</li>
            <p>paragraph 3</p>
            </ul>
            <button id="functionBtn">Click</button>
        </div>`
      );
      jQueryActivated();
      $("#functionBtn")
        .off("click")
        .on("click", function () {
          $("#myDiv li").each(function () {
            $(this).css({ "background-color": "pink", "font-style": "italic" });
          });
        //   document.querySelectorAll("#myDiv li").forEach(ele => {
        //     ele.style.backgroundColor = "pink";
        //     ele.style.fontStyle = "italic";
        //   } )
        });
        break;
        case 1:
          $(`#effectScreen${index}`).html(
            `<div id="myDiv">
                <ul>
                <li>item 1
                <p>paragraph 1<br><span>I am the span element!</span></p>
                </li>
                <li>item 2
                <p>paragraph 2<br><span>I am the span element!</span></p>
                </li>
                <li>item 3
                <p>paragraph 3<br><span>I am the span element!</span></p>
                </li>
                </ul>
                <button id="functionBtn">Click</button>
            </div>`
          );
          jQueryActivated();
          $("#functionBtn")
            .off("click")
            .on("click", function () {
              $("#myDiv span").each(function () {
                $(this).parent().css({ "background-color": "pink", "font-style": "italic" });
              });
            
            // document.querySelectorAll("#myDiv span").forEach(ele => {
            //   ele.parentElement.style.backgroundColor = "pink";
            //   ele.parentElement.style.fontStyle = "italic";
            // })
          })
            break;
          case 2:
            $(`#effectScreen${index}`).html(
              `<div id="myDiv">
                  <ul>
                  <li>item 1
                  <p>paragraph 1<br><span>I am the span element!</span></p>
                  </li>
                  <li>item 2
                  <p>paragraph 2<br><span>I am the span element!</span></p>
                  </li>
                  <li>item 3
                  <p>paragraph 3<br><span>I am the span element!</span></p>
                  </li>
                  </ul>
                  <button id="functionBtn">Click</button>
              </div>`
            );
            jQueryActivated();
            $("#functionBtn")
              .off("click")
              .on("click", function () {
                $("#myDiv p").each(function () {
                  $(this).children().css({ "background-color": "pink", "font-style": "italic" }).text("children");
                }); 
            //     document.querySelectorAll("#myDiv p").forEach(ele => {
            //   ele.children[1].style.backgroundColor = "pink";
            //   ele.children[1].style.fontStyle = "italic";
            //   ele.children[1].innerText = "children"
            // })
              })
              break;
             case 3:
              $(`#effectScreen${index}`).html(
                `<div id="myDiv">
                    <ul>
                    <li>item 1
                    <p>paragraph 1<br><span>span to hide</span></p>
                    </li>
                    <li>item 2
                    <p>paragraph 2<br><span>span to hide</span></p>
                    </li>
                    <li>item 3
                    <p>paragraph 3<br><span>span to hide</span></p>
                    </li>
                    </ul>
                    <button id="functionBtn">Click</button>
                </div>`
              );
              jQueryActivated();
              $("#functionBtn")
                .off("click")
                .on("click", function () {
                  $("#myDiv p").each(function () {
                    $(this).children().hide();
                  }); 
              //     document.querySelectorAll("#myDiv p").forEach(ele => {
              //   ele.children[1].style.display = "none"
              // })
                });
                break;  
                case 4:
                  $(`#effectScreen${index}`).html(
                    `<div id="myDiv">
                        <ul>
                        <li>Greeting 1
                        <p>Good <br><span style="display:none">Morning</span></p>
                        </li>
                        <li>Greeting 2
                        <p>Good <br><span style="display:none">Afternoon</span></p>
                        </li>
                        <li>Greeting 3
                        <p>Good <br><span style="display:none">Evening</span></p>
                        </li>
                        </ul>
                        <button id="functionBtn">Click</button>
                    </div>`
                  );
                  jQueryActivated();
                  $("#functionBtn")
                    .off("click")
                    .on("click", function () {
                      $("#myDiv p").each(function () {
                        $(this).children().css({"background-color": "pink", "display": "block"}).show();
                      }); 
                  //     document.querySelectorAll("#myDiv p").forEach(ele => {
                  //   ele.children[1].style.display = "block"
                  //  ele.children[1].style.backgroundColor = "pink"    
                  // })
                    })  
           break;
           case 5:
            $(`#effectScreen${index}`).html(
              `<div id="myDiv"> 
                  <button id="functionBtn">Click</button>
                  <h1>Hello!</h1>
                  <h1>Good</h1>
                  <h1>Morning</h1>
                 
              </div>`
            );
            jQueryActivated();
            $("#functionBtn")
              .off("click")
              .on("click", function () {
                  // let fadeTargets = document.querySelectorAll("#myDiv h1");
                  // fadeTargets.forEach((ele, index) => {
                  //  ele.style.animation = `fadeIn ${index+1}s`
                  // })
               $("#myDiv h1").hide();
               $("#myDiv h1").first().fadeIn(1000)
               $("#myDiv h1:nth-child(3)").fadeIn(2000);
               $("#myDiv h1").last().fadeIn(3000);
              })
              break;
              case 6:
                $(`#effectScreen${index}`).html(
                  `<div id="myDiv"> 
                      <button id="functionBtn">Click</button>
                      <h1>Hello!</h1>
                      <h1>Good</h1>
                      <h1>Morning</h1>
                     
                  </div>`
                );
                jQueryActivated();
                $("#functionBtn")
                  .off("click")
                  .on("click", function () {
                      // let fadeTargets = document.querySelectorAll("#myDiv h1");
                      // fadeTargets.forEach((ele, index) => {
                      //  ele.style.animation = `fadeOut ${ 3-index}s`;
                      //  ele.style.animationFillMode = "forwards"
                      // })
                  
                   $("#myDiv h1").first().fadeOut(3000)
                   $("#myDiv h1:nth-child(3)").fadeOut(2000);
                   $("#myDiv h1").last().fadeOut(1000);
                  })
                  break;
      

            
             
  }
};

const jQueryActivated = () => {
  $("#jQueryBtn").click(function () {
    $("#javaScriptBtn").removeClass("activeBtn");
    $(this).addClass("activeBtn");
    $(this).next().css("visibility", "visible");
  });
};
