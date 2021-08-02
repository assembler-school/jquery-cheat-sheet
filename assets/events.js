let jsScreen = $("#jsCodeShow");
let jqScreen = $("#jqueryCodeShow");
let eventScreen = $(".name-of-event");

let jsFunctionsScreen = $("#jsFunction");
let jqFunctionsScreen = $("#jqFunction");

jsScreen.text("Vanilla JS Code and Examples will be showed here");
jqScreen.text("jQuery Code and Examples will be showed here ");

$("select").on("change", () => {
    jsScreen.text("");
    jqScreen.text("");
    if ($("#list-div") !== null) {
        $("#list-div").remove();
    }

    switch ($("select").val()) {
        case "When HTML Document Loaded":
            //For JS Screen
            let p = $(
                "<div><p>The Represention of HTML Content Loaded Event in JS Script is following: </p><code>windows.addEventListener('DOMcontentLoaded', event =>{function goes here})</code></div>"
            );
            jsScreen.append(p);

            //For jQuery Screen

            let p2 = $(
                "<div><p>The Represention of HTML Content Loaded Event in jQuery is following:</p> <code>$(document).ready(function(){your function goes here})</code></div>"
            );

            jqScreen.append(p2);

            break;

        case "HTML Item Clicked":
            let pClick = $(
                "<div><p>The Represention of HTML Item Clicked in JS Script is following:</p> <code>anyDomElement.addEventListener('click', event =>{function goes here})</code></div>"
            );

            jsScreen.append(pClick);

            //For jQuery Screen

            let pJqClick = $(
                "<div><p>The Represention of Click Event in jQuery is following:</p> <code>$(anyDomElement).on('click', function(){your function goes here})</code></div>"
            );

            jqScreen.append(pJqClick);

            break;

        case "HTML Item Double Clicked":
            let pDclick = $(
                "<div><p>The Represention of Double Click Event in jQuery is following:</p> <code>AnyDomElement.addEventListener('dblclick', event =>{function goes here})</code></div>"
            );

            jsScreen.append(pDclick);

            //For jQuery Screen

            let pJqDclick = $(
                "<div><p>The Represention of Double Click Event in jQuery is following:</p> <p><code>$(anyDomElement).on('dblclick', function(){your function goes here})</code></p> or <p><code>$(anyDomElement).dblclick(function(){})</code></p></div>"
            );

            jqScreen.append(pJqDclick);

            break;

        case "When a Key is Pressed":
            //For JS Screen
            let keyDownP = $(
                "<div><p>The Represention of KeyDown Event in JavaScript is following: </p> <p><code>document.addEventListener('keydown', event =>{function goes here})</code></p> <p>Try Pressing the 'S' Key.</p></div>"
            );
            window.addEventListener("keydown", () => {
                var keyPressed = event.key;

                if (keyPressed === "s") {
                    alert(`The Key Pressed Was "S"`);
                }
            });

            jsScreen.append(keyDownP);

            //For jQuery Screen

            let keyDownjq = $(
                "<div><p>The Represention of KeyDown Event in jQuery is following: </p> <p><code>$('anyDomElement').keydown( function(){function goes here})</code></p> <p>Try Pressing the 'S' Key.</p></div>"
            );

            jqScreen.append(keyDownjq);

            break;

        case "When cursor is moved":
            let cursonMoveJS = $(
                "<div><p>Cursor Move Events can be used in Art/ Designing Softwares. The code is represented by: </p> <p><code>element.addEventListener('mousemove', event =>{function goes here})</code></p> <canvas id='drawing'></canvas> <p>Sign Inside the Box Above</p></div>"
            );

            jsScreen.append(cursonMoveJS);

            //Draw function

            if (document.getElementById("drawing") !== null) {
                function SignCanvas() {
                    let drawing = false;
                    let x = 0;
                    let y = 0;
                    let context = document.getElementById("drawing").getContext("2d");
                    $("canvas").mousedown((e) => {
                        drawing = true;
                        x = e.offsetX;
                        y = e.offsetY;
                    });
                    $("canvas").mousemove((e) => {
                        function drawLine(context, x1, y1, x2, y2) {
                            context.beginPath();
                            context.strokeStyle = "black";
                            context.lineWidth = 1;
                            context.moveTo(x1, y1);
                            context.lineTo(x2, y2);
                            context.stroke();
                            context.closePath();
                        }
                        if (drawing === true) {
                            drawLine(context, x, y, e.offsetX, e.offsetY);
                            x = e.offsetX;
                            y = e.offsetY;
                        }
                    });
                }
                SignCanvas();
            }
            let cursonMoveJQ = $(
                "<div><p>The code in JQuery is represented by: </p> <p><code>$(AnyDomElement).mousemove(function() {function goes here})</code></p></div>"
            );

            jqScreen.append(cursonMoveJQ);

            break;

        case "When User Changes Value of an Input":
            let inputChangedJS = $(
                "<div><p>The Change Event also applies to the Inputs. The code would be following:</p> <p><code>element.addEventListener('change', event =>{function goes here})</code></p> <input class='input-check'/> <p>Everytime you put an input, and then Change it, the text color with change.</p></div>"
            );

            jsScreen.append(inputChangedJS);

            function ChangeColors() {
                let colors = [
                    "yellow",
                    "green",
                    "blue",
                    "red",
                    "pink",
                    "Black",
                    "Grey",
                    "orange",
                ];
                let selectedColor = colors[Math.floor(Math.random() * 8)];
                $("input").css("color", selectedColor);
            }
            $("input").on("change", ChangeColors);

            let inputChangedJQ = $(
                "<div><p>The Change Event also applies to the Inputs. The code would be following:</p> <p><code>$('element').on('change', event =>{function goes here})</code></p> <input class='input-check'/> <p>Everytime you put an input, and then Change it, the text color with change.</p></div>"
            );

            jqScreen.append(inputChangedJQ);
            $("input").on("change", ChangeColors);

            break;

        case "When an Image is loaded":
            let imgJS = $('<img src="./assets/cat.jpeg"></img>');
            let imgJQ = $('<img src="./assets/cat.jpeg"></img>');
            let imgDiv = $(
                "<div><p>You can perform a certain task as soon as the image finishes loading:</p> <p><code>image.addEventListener('load', ()=>{function goes here})</code></p></div>"
            );

            jsScreen.append(imgDiv);
            imgDiv.append(imgJS);

            $("img").on("load", () => {
                alert("Hello, This Alert Appears on Image Load Event");
            });

            let imgDivJq = $(
                "<div><p><code>$('img').on('load', () => {function goes here}</code></p></div>"
            );

            jqScreen.append(imgDivJq);
            imgDivJq.append(imgJQ);

            break;

        case "When an Image fails to Load":
            let imgSrc = $('<img src="./assets/cat">');
            let imgSrcJS = $('<img src="./assets/cat">');

            $(imgSrc).on("error", function() {
                alert("The Cat Has Escaped");
            });

            let imgErrorJS = $(
                '<p>The Following would be the Code to execute a function on error. <code>element.addEventListener("error", event(){Function goes here})</code></p>'
            );

            jsScreen.append(imgErrorJS);
            jsScreen.append(imgSrcJS);

            let imgErrorJQ = $(
                '<p>The Following would be the Code to execute a function on error. <code>$(element).on("error", event(){Function goes here})</code></p>'
            );

            jqScreen.append(imgErrorJQ);
            jqScreen.append(imgSrc);
            break;

        case "When a form is Submitted":
            let form = $(
                '<div><form ><label>Name:</label><input type="text"/> <input type="submit"></form><p>The Code to run a function would be as follows:</p> <code>formElement.addEventListener("submit", function(){Function goes here})</code>'
            );

            $(form).on("submit", (event) => {
                event.preventDefault();
            });

            jsScreen.append(form);

            let formJQ = $(
                '<div><form ><label>Last Name:</label><input type="text"/> <input type="submit"></form><p>The Code to run a function would be as follows:</p> <code>$("form").on("submit", (event){Function goes here})</code>'
            );
            jqScreen.append(formJQ);

            break;

        case "When a User changed Select Option":
            let selectJQ = $(
                '<div><p>This whole page is working on the changing of the Select Option. The Code in JQuery would be following:</p><code>$("select").on("change", () => {function Goes here}</code></div>'
            );

            let selectJS = $(
                '<div><p>This whole page is working on the changing of the Select Option. The Code in JS would be following:</p><code>selectElement.addEventListener("change", () => {function Goes here}</code></div>'
            );

            jsScreen.append(selectJS);
            jqScreen.append(selectJQ);
            break;

        case "Mouse Over":
            let mouseHoveredevent = $(
                '<div><p>Place the mouse over the code lines to see the "hover" event take place</p><code>element.addEventListener("mouseover", function(){Function goes here})</code></div>'
            );

            jsScreen.append(mouseHoveredevent);

            let jqHover = $(
                "<div><p>You can use two type of event Triggers. .hover() will perform the task as long as mouse is over the element.  <code>element.hover(mouseonFunction, mouseOutFunction))</code><p>the .mouseover() method will require a .mouseout() function to stop executing the function <code>element.mouseover(function()=>{})</code></p></p></div>"
            );

            jqScreen.append(jqHover);

            $(mouseHoveredevent).hover(
                function() {
                    mouseHoveredevent.css("opacity", "0");
                },
                function() {
                    mouseHoveredevent.css("opacity", "100");
                }
            );

        case "Checked or Unchecked Checkbox":
            let JSchecked = $(
                '<div><p>To Check If a box is checked or not you can use</p><p><code>document.getElementById("checkbox").checked = true</code> (True if Checked)</p> <p><code>document.getElementById("checkbox").checked = false</code> (False if unchecked)</p><p>In order to Trigger a Click event on checkbox, we Would have to use <code>checkbox.addEventListener("click", () =>{Function goes here})</code></p></div>'
            );

            jsScreen.append(JSchecked);

            let JQChecked = `<div><p>Check Event with jQuery <code>$("#id").prop("checked")</code></p> <p>returns True if Checked, other wise False. Try the Checkbox below</p> <input type="checkbox" id="chkbox"><p id="tof"></p></div>`;

            jqScreen.append(JQChecked);

            document.querySelector("#chkbox").addEventListener("click", () => {
                let tOf = $("#tof");

                tOf.text("");

                let checkedBox = document.querySelector("#chkbox").checked;

                tOf.text(checkedBox);
            });
            break;

        case "When a list item is clicked":
            let listOfItems = $(
                "<div id='list-div'><ul><li>Doggo</li><li>Catto</li><li>Smoll Doggo</li><li>Chunky Doggo</li></ul></div>"
            );
            eventScreen.append(listOfItems);
            let listMsg = $(
                "<div><p>In order to click the list, We can use different approaches. We can use IDs for different list items, We can use Parent Node(ul) and use <code>event.target</code> to locate the clicked list item. For Example, Click on the list item.</p></div>"
            );

            jsScreen.append(listMsg);

            let listJq = $(
                '<div><p>This is made by using Event Listeners with jQuery</p><p><code>$("ul").on("click", (event) => {function goes here}</code></p></div>'
            );
            jqScreen.append(listJq);

            listOfItems.on("click", (e) => {
                jsScreen.text("");

                if (e.target.innerHTML === "Doggo") {
                    let img = $("<img src='./assets/doggo.jfif'>");

                    jsScreen.append(img);
                }
                if (e.target.innerHTML === "Catto") {
                    let img = $("<img src='./assets/catto.jpg'>");
                    jsScreen.append(img);
                }
                if (e.target.innerHTML === "Smoll Doggo") {
                    let img = $("<img src='./assets/smoll.jpg'>");

                    jsScreen.append(img);
                }

                if (e.target.innerHTML === "Chunky Doggo") {
                    let img = $("<img src='./assets/thiccboi.jpg'>");

                    jsScreen.append(img);
                }
            });

            break;

        default:
            break;
    }
});