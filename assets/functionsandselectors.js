let jsFunctionsScreen = $("#jsFunction");
let jqFunctionsScreen = $("#jqFunction");

jsFunctionsScreen.text("Vanilla JS Code and Examples will be showed here");
jqFunctionsScreen.text("jQuery Code and Examples will be showed here ");

$("#whichFunction").on("change", () => {
    jsFunctionsScreen.text("");
    jqFunctionsScreen.text("");

    switch ($("#whichFunction").val()) {
        case "Create an HTML Element":
            let newHTMLitem = $(
                "<div class='new-html-item'><p>the default way of creating and Element with Vanilla Javascript is:</p><button id='create'>Click to Create</button><p>Once created, you can edit the text and append it to a parent node</p></div>"
            );
            jsFunctionsScreen.append(newHTMLitem);

            let codeElement = $('<p><code>document.createElement("div")</code></p>');

            $("#create").on("click", () => {
                $(".new-html-item p:nth-child(1)").append(codeElement);

                $("#create").remove();
            });

            let newJQitem = $(
                "<div><p>In jQuery you simply use the $ selector and create the needed element inside the brackets. See the following Example: <button id='create2'>Click To Create</button> </p> </div>"
            );
            let codeLine = $(
                '<p>This <code>$("&lt;p&gt;&lt;/p&gt;")</code> Will create a "p" element. <code>$("&lt;div&gt;&lt;/div&gt;"")</code> will create a "div" element</p>'
            );

            jqFunctionsScreen.append(newJQitem);

            $("#create2").on("click", () => {
                newJQitem.append(codeLine);

                $("#create2").remove();
            });

            break;

        case "Remove an HTML Element":
            let removeStatement = $(
                "<div><p>Both JS and JQuery use the <code>.remove()</code> method to delete the selected Element. </p></div>"
            );
            itemToRemove = $("<h1 class='remove-item'>Click On Me to Delete</h1>");

            removeStatement = removeStatement.append(itemToRemove);
            jsFunctionsScreen.append(removeStatement);

            itemToRemove.on("click", () => {
                itemToRemove.remove();
            });

            let jqStatement = removeStatement.clone();

            jqFunctionsScreen.append(jqStatement);

            $(".remove-item")
                .last()
                .on("click", () => {
                    $(".remove-item").last().remove();
                });
            break;

        case "Append an HTML Element":
            let parentItem = $(
                "<div><p>In JS we can use <code>parentNode.appendChild(newNode)</code> or we can simply use <code>parentNode.append(newNode)</code></p><button id='append'>Click Here to Append</button></div>"
            );
            jsFunctionsScreen.append(parentItem);

            let childItem = $(
                "<p>Hello Im the Child Node. Append Child (by default) will Always add the element as <b>LAST</b> child.</p>"
            );
            $("#append").on("click", () => {
                parentItem.append(childItem);
                $("#append").remove();
            });

            //--------------For----JQuery--------------//
            let parentJq = $(
                '<div><p>To Append an element in jQuery you use the Selector with .append() method. Check the code Below:</p> <p><code>$("parentNode").append("childNode")</code></p> <p>This .append() Mehtod will also add the new element as Last child.</p></div>'
            );

            jqFunctionsScreen.append(parentJq);
            break;

        case "Prepend an HTML Element":
            let prependItem = $(
                "<div><p>In JS we can use <code>parentNode.prepend(newNode)</code></p><button id='prepend'>Click Here to Prepend</button></div>"
            );
            jsFunctionsScreen.append(prependItem);

            let prependChild = $(
                "<p>Prepend Child adds the element as <b>FIRST</b> child.</p>"
            );
            $("#prepend").on("click", () => {
                prependItem.prepend(prependChild);
                $("#prepend").remove();
            });

            //--------------For----JQuery--------------//
            let prependJq = $(
                '<div><p>To Prepend an element in jQuery you use the Selector with .prepend() method. Check the code Below:</p> <p><code>$("parentNode").prepend("childNode")</code></p> <p>This .prepend() Mehtod will also add the new element as First child.</p></div>'
            );

            jqFunctionsScreen.append(prependJq);

            break;

        case "Add an Element Before another one":
            let listOfItems = $(
                "<div><p>To perform this task, we will be Using <code>parentNode.insertBefore(newNode, childNode)</code></p><ol><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ol> <button id='insert-before'>Click To Insert Before</button></div>"
            );

            jsFunctionsScreen.append(listOfItems);

            $("#insert-before").on("click", () => {
                let newNode = $("<li>This is the new List Item</li>");
                $("ol li:nth-child(1)").before(newNode);
            });

            let jqState = $(
                "<div><p>To insert and element before the other, We use jQuery selector with <code>.before()</code> Method.</p> <p><code>$('parentNode').before(newNode, childNode)</code></p></div>"
            );
            jqFunctionsScreen.append(jqState);

            break;

        case "Add an Element After another one":
            let adjacentElement = $(
                '<div id="jsdiv"><p>To add an element after the other, we can use the <code>.insertAdjacentElement()</code> Method.</p> <p><code>targetElement.insertAdjacentElement("afterend", newElement)</code></p> <button id="add">Click To Add</button></div>'
            );

            jsFunctionsScreen.append(adjacentElement);

            let toAddElement = $(
                "<p>This method can be used with: <li>beforebegin: Insert before target Element</li> <li>afterbegin: as (new) first child </li><li>beforeend: as Last Child</li> <li>afterend: After the Target Element</li></p>"
            );
            $("#add").on("click", () => {
                $("#jsdiv p:nth-child(1)").after(toAddElement);
            });

            let jqAfterElement = $(
                "<div><p>To add an element after in jQuery, we can use the <code>.after()</code> method. The code would be following:</p> <p><code>$('parentNode child:nth-child(n)).after(newElement)</code> or </p> <p><code>$('element').after(newElement)</code></p></div>"
            );

            jqFunctionsScreen.append(jqAfterElement);
            break;

        case "Clone HTML Element Within itself":
            let node = $(
                "<div><p>We can use the <code>.cloneNode()</code> Method to clone a specified Node. The new clone has no Parent Element untill apended.</p> <p>Code Would be following: <code>node.cloneNode([deep])</code></p> <sub class='sub'>*[deep] Optional <p>If true, then node and its whole subtree—including text that may be in child Text nodes—is also copied. </p> <p>If false, only node will be cloned. Any text that node contains is not cloned, either (since text is contained by one or more child Text nodes).</p></sub></div>"
            );
            jsFunctionsScreen.append(node);

            let jqNode = $(
                '<div><p>We can clone a specified node in jQuery by using <code>.clon()</code> method.</p> <p>The code would be following: <code id="beCloned">$("elementNode").clone()</code></p> <button id="jqClone">Clone Code</button></div>'
            );
            jqFunctionsScreen.append(jqNode);

            $("#jqClone").on("click", () => {
                let clone = $("#beCloned").clone();
                jqNode.append(clone);
            });

            break;

        case "Add Class":
            let jsClass = $(
                "<div><p>There are different ways to add a class to an element in JS.</p> <code><ol><li>element.classList.add('newClassName')</li><li> element.className = 'newClassName'</li><li>element.setAttribute('class', 'newClassName')</li></ol></code> <sub class='sub'><li>classList will add the new class to existing class.</li> <li>className method will add the new class or replace the previous.</li><li>setAttribute method will add class to elements with no class or Modify it.</li></sub></div>"
            );

            jsFunctionsScreen.append(jsClass);

            let jqClass = $(
                '<div><p>With jQuery you can use the <code>.addClass()</code> method to add class to an Element.</p><p>the code would be <code id="cd">$("element").addClass("newClass")</code></p> <button id="btn">Click to Change Class</button></div>'
            );
            jqFunctionsScreen.append(jqClass);

            $("#btn").on("click", () => {
                $("#cd").addClass("newClass");
            });
            break;

        case "Remove a Class":
            let remClassJS = $(
                "<div><p>To Remove class using JavaScript we can use the <code>.remove()</code> with classList.</p> <p><code class='newClass'>element.classList.remove('classToRemove')</code></p> <button id = 'remClass'>Click to remove Class</button></div>"
            );
            jsFunctionsScreen.append(remClassJS);

            $("#remClass").on("click", () => {
                $(".newClass").removeClass("newClass");
            });

            let remClassJQ = $(
                '<div><p>To Remove class in jQuery, we can use the <code>.removeClass()</code> Method.</p><p>The Code would be following: <code>$("element").removeClass("classToRemove")</code></p></div>'
            );

            jqFunctionsScreen.append(remClassJQ);

            break;

        case "Toggle Class":
            let classToggle = $(
                "<div><p>To Toggle Class in JavaScript we can use the <code>.toggle()</code> method.</p><p>The code would be following: <code class = 'newClass' id = 'code-element'>element.classList.toggle('classToToggle')</code></p> <button id='tgl-btn'>Click to Toggle Class</button></div>"
            );
            jsFunctionsScreen.append(classToggle);

            $("#tgl-btn").on("click", () => {
                $("#code-element").toggleClass("newClass");
            });

            let classToggleJQ = $(
                '<div><p>To Toggle Classes in jQuery we can use the <code>.toggleClass()</code> Method.</p><p>The code would be following: <code>$("element").toggleClass("classToToggle")</code></p></div>'
            );

            jqFunctionsScreen.append(classToggleJQ);
            break;

        case "Add/Remove a Disabled Attribute":
            let disabledAtt = $(
                '<div><p>To do this we simply need to use <code>setAttribute()</code>. True would render the element "Disabled", False would enable it.</p> <p>The Code would be following. <code>element.setAttribute("disabled", true/false)</code></p> <input id="disable-input" type="text"> <button id="disable-button">Disable Input</button></div>'
            );
            jsFunctionsScreen.append(disabledAtt);

            $("#disable-button").on("click", () => {
                if ($("#disable-input").prop("disabled") === false) {
                    $("#disable-input").attr("disabled", true);
                } else {
                    $("#disable-input").attr("disabled", false);
                }
            });

            let disabledJQ = $(
                '<div><p>In jQuery we can do this by using <code>.attr()</code>Method. True would render the element "Disabled", False would enable it.</p> <p>The code would be following: <code> $("element").attr("disabled", true/false)</code></p></div>'
            );

            jqFunctionsScreen.append(disabledJQ);
            break;

        case "Set data-src Attribute":
            let dataAttr = $(
                '<div><p>We Can use the <code>setAttribute</code> to add whichever attribute we want to add to an element. For this case the Code would be following:</p><p><code>element.setAttribute("data-src", "any-value")</code></p></div>'
            );

            jsFunctionsScreen.append(dataAttr);

            let dataJQ = $(
                '<div><p>In order to do this with jQuery, We will use <code>.attr()</code>. In order to read the dataset value, we can use <code>.data()</code> method.</p><p>The code would be following: <code>$("element").attr("data-src", "any-value")</code></p></div>'
            );
            jqFunctionsScreen.append(dataJQ);
            break;

        case "Hide or Show On Click":
            let hAndS = $(
                '<div id = "hide-or-show"><p>We can show or hide elements by using different methods. In this example we`ll be using <code>.style.display</code> property.</p> <p>The code would be following: <code>element.style.display = "none"</code></p><p><code>element.style.display = "block"</code></p></div>'
            );
            jsFunctionsScreen.append(hAndS);

            let button = $("<button>Hide or Show</button>");

            jsFunctionsScreen.append(button);

            $(button).on("click", () => {
                if ($("#hide-or-show").css("display") === "none") {
                    $("#hide-or-show").show();
                } else {
                    $("#hide-or-show").hide();
                }
            });

            let jqHandS = $(
                "<div><p>In jQuery we can hide or show the element using different methods.</p><p><code>$('element').show()</code> or <code>$('element').hide()</code> Or we can manually change the css display property</p><p><code> $('element').css('display', 'block');</code></p></div>"
            );
            jqFunctionsScreen.append(jqHandS);
            break;

        case "Fade In and Fade Out":
            let fade = $(
                "<div><p>In order to do these functions, we use jQuery. The Code would be following</p> <p><code>$(element).fadeIn(speed, callback)</code></p><p><code>$(element).fadeOut(time, callback)</code></p> </div>"
            );

            jqFunctionsScreen.append(fade);

            let text = $("<p>Welcome To The Moon</p>");
            let fadeIn = $('<button id="fade-in">Fade In</button>');
            let fadeOut = $('<button id="fade-out">Fade Out</button>');

            jsFunctionsScreen.append(text, fadeIn, fadeOut);
            $(fadeIn).on("click", () => {
                $(text).fadeIn();
            });

            $(fadeOut).on("click", () => {
                $(text).fadeOut();
            });
            break;

        case "Change Style of Collection of Elements":
            let paragraphs = $(
                '<p>In order to change the properties of all these elements, we`ll need to iterate through and apply the effects that we want.</p><p>In JS, We could use different loops <code>for, for In, for off, for each</code></p><p>the code for this example is following:</p><p><code>for (let i = 0; i < 4; i++){ paragraphs[i].style.font = "30px italic small-caps"   }</code></p>'
            );
            let colorBtn = $('<button id="color">Change style</button>');

            jsFunctionsScreen.append(paragraphs, colorBtn);

            $(colorBtn).on("click", () => {
                $(paragraphs).each(function(index, element) {
                    $(element).css({ font: "30px italic small-caps" });
                });
            });

            let paraJq = $(
                "<div><p>In jQuery we can use the iteration of <code>.each()</code> method.</p> <p>Here is the code</p></div>"
            );
            let code = $(`<code>$(colorBtn).on("click", () => {
             $(paragraphs).each(function(index, element) {
             $(element).css({ font: "30px italic small-caps" });
              });
                });</code>`);
            jqFunctionsScreen.append(paraJq);
            jqFunctionsScreen.append(code);
            break;

        case "Change font-weight of Parent Element":
            let parentNode = $(
                `<div class = "parent-div">This is the Parent Div  <p id = "child">This is the Child Div</p> <p>In order to change the Font Weight of Parent Element, We'll use the following code:</p> <p><code> element.parentNode.style.fontWeight = "bold"</code></p></div>`
            );
            let parentButton = $(
                '<button id="parent-button">Click to Change</button>'
            );
            jsFunctionsScreen.append(parentNode, parentButton);

            $(parentButton).on("click", () => {
                $("#child").parent().css("font-weight", "bolder");
            });

            let parentNodeJq = $(
                `<div><p>To change the style of the Parent Element, the jQuery code would be following:</p> <p><code>$("#child").parent().css("font-weight", "bolder")</code></p></div>`
            );
            jqFunctionsScreen.append(parentNodeJq);
            break;

        case "Change font-weight of Collection of Children":
            let parentList = $(
                "<div id='parent-list'>This is Parent of List Items <p>Para 1</p> <p>para 2</p> <p>para 3</p></div>"
            );

            let changeButton = $(
                '<button id="change-weight">Click to Change</button>'
            );
            jsFunctionsScreen.append(parentList, changeButton);

            console.log($("#parent-list"));

        default:
            break;
    }
});