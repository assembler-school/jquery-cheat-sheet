import { jQueryFuncData } from "/data.js";

export const jQueryDisplay = (index) => {
  if ($(".modalContent").attr("id") === "functionModal") {
    $(`#jQueryFunc${index}`).text(jQueryFuncData[index]);
    // screen display
    switch (index) {
      case 0:
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            let newP = $("<p/>");
            newP.text("Hello, I am a new paragraph");
            $(`#functionScreen${index}`).append(newP);
          });
        break;
      case 1:
        $(`#functionScreen${index}`).html(
          "<p>Hello1</p><p>Hello2</p><p>Hello3</p>"
        );
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            $(`#functionScreen${index}`).children().last().remove();
            //.children().last().remove();
          });
        break;
      case 2:
        $(`#functionScreen${index}`).html(
          `<div class="myDiv"><h2>I am old!</h2></div>`
        );
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            $(".myDiv").append("<p>I am new!</p>");
          });
        break;
      case 3:
        $(`#functionScreen${index}`).html(`
          <div class="container">
            <p>Good</p>
            <p>Bad</p>
          </div>
        `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            $(".container").prepend("<p>Very good</p>");
          });
        break;
      case 4:
        $(`#functionScreen${index}`).html(`<div>
        <h1>I am a Title</h1>
        <h2 class="subtitle">I am a subtitle</h2>
        </div>
        `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            // let newParagraph = document.createElement("p"); newParagraph.textContent = "New paragraph"; let myDiv = document.querySelector(".myDiv"); let subtitle = document.querySelector(".subtitle"); myDiv.insertBefore(newParagraph, subtitle);
            // let newParagraph = $("<p></p>").text("new paragraph")
            $(".subtitle").after("<p>I am a new paragraph</p>");
          });
        break;
      case 5:
        $(`#functionScreen${index}`).html(`<div>
      <h1>I am a Title</h1>
      <p class="content">I am a paragraph</p>
      </div>
      `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            // let newParagraph = document.createElement("p"); newParagraph.textContent = "New paragraph"; let myDiv = document.querySelector(".myDiv"); let subtitle = document.querySelector(".subtitle"); myDiv.insertBefore(newParagraph, subtitle);
            // let newText = $("<p></p>").text("new paragraph")
            $(".content").before("<h2>I am a subtitle</h2>");
          });
        break;
      case 6:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
        <h1>I am a Title</h1>
        <h2>I am a subtitle</h2>
        </div>
        <div>
        <h1>I am a Title 2</h1>
        <h2>I am a subtitle 2</h2>
        <p class="content">Copy me!</p>
        </div>
        
        `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            $(".content").clone().appendTo("#myDiv");
            // let clonedParagraph = document.querySelector(".content").cloneNode(true);
            // document.getElementById("myDiv").appendChild(clonedParagraph);
          });
        break;
      case 7:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
      <h1 id="myTitle">I am a Title</h1>
      <h2>I am a subtitle</h2>
      </div>
      `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            //let title = document.getElementById("myTitle"); title.classList.add("titleClass");
            $("#myTitle").addClass("titleClass");
          });
        break;
      case 8:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
        <h1 id="myTitle" class="titleClass">I am a Title</h1>
        <h2>I am a subtitle</h2>
        </div>
        `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            //let title = document.getElementById("myTitle"); title.classList.remove("titleClass");
            $("#myTitle").removeClass("titleClass");
          });
        break;
      case 9:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
        <h1 id="myTitle">I am a Title</h1>
        <h2>I am a subtitle</h2>
        </div>
        `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            //let title = document.getElementById("myTitle"); title.classList.toggle("titleClass");
            $("#myTitle").toggleClass("titleClass");
          });
        break;
      case 10:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
          <button>Click me!</button>
          </div>
          `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            // document.querySelector("#myDiv button").setAttribute("disabled", "disabled")
            $("#myDiv button").attr("disabled", true);
          });
        break;
      case 11:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
        <button disabled>Click me!</button>
        </div>
        `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            // document.querySelector("#myDiv button").removeAttribute("disabled", "disabled")
            $("#myDiv button")
              .attr("disabled", false)
              .on("click", function () {
                $("<p>'disabled' has been removed! </p>").appendTo("#myDiv");
              });
          });
        break;
      case 12:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
     <img alt="Cat">
      </div>
      `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            //document.querySelector("#myDiv img").setAttribute("data-src", "images/cat-svgrepo-com.svg");
            $("#myDiv img").data("src");
            $("#myDiv img").attr("data-src", "images/cat-svgrepo-com.svg");
          });
        break;
      case 13:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
        <img alt="Cat" data-src="images/cat-svgrepo-com.svg">
         </div>
         `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            //document.querySelector("#myDiv img").removeAttribute("data-src", "images/cat-svgrepo-com.svg");
            $("#myDiv img").removeData("data-src");
            $("#myDiv img").removeAttr("data-src");
          });
        break;
      case 14:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
          <img alt="Cat" src="images/cat-svgrepo-com.svg">
           </div>
           `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            //document.querySelector("#myDiv img").style.display = "none";
            $("#myDiv img").hide();
          });
        break;
      case 15:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
           <img alt="Cat" src="images/cat-svgrepo-com.svg" style="display:none">
            </div>
            `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            // document.querySelector("#myDiv img").style.display = "block";
            // document.querySelector("#myDiv").style.textAlign = "-webkit-center"
            $("#myDiv img").show();
          });
        break;
      case 16:
        $(`#functionScreen${index}`).html(`<div id="myDiv">
            <input type="checkbox" id="checkBox" name="checkBox" value="checkBox" checked>
            <label for="checkBox">Check here</label><br>
             </div>
             `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            // document.querySelector("#myDiv input[type=checkbox]").checked = false;
            $("#myDiv input:checkbox").prop("checked", false);
          });
        break;
      case 17:
        $(`#functionScreen${index}`).html(`
        <div id="myDiv">
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
        $("#javaScriptBtn, #jQueryBtn")
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
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            //document.getElementById("myCity").style.fontWeight = 700;
            $("#myCity").css("font-weight", 700);
          });
        break;
      case 19:
        $(`#functionScreen${index}`).html(`
            <div id="myDiv">
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
        $("#javaScriptBtn, #jQueryBtn")
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
            <h2>City:</h2>
            <select>
              <option>Barcelona</option>
              <option>Paris</option>
              <option>Seoul</option>
              <option>Rome</option>
            </select>
            </div>
                 `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            // let select = document.querySelectorAll("select option");
            // select[3].setAttribute("selected", true);
            $("option").last().prop("selected");
          });
        break;
      case 21:
        $(`#functionScreen${index}`).html(`
            <div id="myDiv">
            <h2>Go to</h2>
              <a href="#">Google</a><br>
              <a href="#">Facebook</a><br>
              <a href="#">Instagram</a><br>         
            </div>
                 `);
        $("#javaScriptBtn, #jQueryBtn")
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
            <p>Last name</p> <input type="text" name="lastName">
            <p>Fill the form and click js or jquery button</p>
            </div>
                 `);
        $("#javaScriptBtn, #jQueryBtn")
          .off("click")
          .on("click", function () {
            alert("Hello," + $("input:text").first().val());
            // alert("Hello," + document.querySelectorAll("input[type=text]")[0].value);
          });
        break;
    }
  }
};
