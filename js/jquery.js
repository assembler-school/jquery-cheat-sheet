
//HTML document has been loaded
function htmlDocumentLoadedjquery(){
    $(".demo").eq(1).append(`<p>The document is loaded!</p>`)
}
eventsList[0].jqueryMethod=function(){
    htmlDocumentLoadedjquery();
}
eventsList[0].jquerySnippet=`<code>$().on("ready",function(){})</code>`
//HTML item has been clicked 
function htmlItemClickedjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Click on me!</button>`)
    const p=$(`<p></p>`)
    
    $(btn).on("click",function(){
        p.text(`You clicked me ${timesquery} times`)
        $(demo).append(p)
        timesquery++;
    })
    $("#jqueryBtn").remove();
    $(demo).append(btn);
}
eventsList[1].jqueryMethod=function(){
    htmlItemClickedjquery();
}
eventsList[1].jquerySnippet=`<code>
                                $("item").on
                                ("click",function(){})
                            </code>`
//item has benn double clicked
function htmlItemDoubleClickedjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Double click on me!</button>`)
    const p=$(`<p></p>`)
    
    $(btn).on("dblclick",function(){
        p.text(`You clicked me ${timesquery} times`)
        $(demo).append(p)
        timesquery++;
    })
    $("#jqueryBtn").remove();
    $(demo).append(btn);
}
eventsList[2].jqueryMethod=function(){
    htmlItemDoubleClickedjquery();
}
eventsList[2].jquerySnippet=`<code>
                                $("item").on
                                ("dblclick",function(){})
                            </code>`
//user presses a key on the keyboard 
function pressKeyjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Press a key!</button>`)
    const p=$(`<p></p>`)
    
    btn.on("keypress",function(e){
        p.text(`You pressed the ${e.key} key`)
        $(demo).append(p)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
}
eventsList[3].jqueryMethod=function(){
    pressKeyjquery();
}
eventsList[3].jquerySnippet=`<code>
                                $("item").on
                                ("keypress",function(){})
                            </code>`
//user moves the mouse cursor
function movesCursorjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Move the mouse</button>`)
    const p=$(`<p></p>`)

    $(btn).on("mousemove",function(){
        p.text(`You moved the mouse!`)
        $(demo).append(p)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
}
eventsList[4].jqueryMethod=function(){
    movesCursorjquery();
}
eventsList[4].jquerySnippet=`<code>
                            $("item").on
                            ("mousemove",function(){})
                        </code>`
//user changes a value of an text input
function changeValueInputjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Write something!</button>`)
    const p=$(`<p></p>`)
    const input=$("<input>");

    input.on("change",function(){
        p.text(`You changed the input to ${input.val()}!`)
        demo.append(p)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
    demo.append(input);
}
eventsList[5].jqueryMethod=function(){
    changeValueInputjquery();
}
eventsList[5].jquerySnippet=`<code>
                            $("item").on
                            ("change",function(){})
                            p.text("You changed the value to "+input.val())!)
                        </code>`
//image is loaded
function imageIsLoadedjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const img=$("<img src='../assets/img/imageloaded.png'>");
    img.addClass("imgExample")
       img.ready(function(){
           p.text(`The img was loaded!`);
           demo.append(img)
           demo.append(p)
        })
}
eventsList[6].jqueryMethod=function(){
    imageIsLoadedjquery();
}
eventsList[6].jquerySnippet=`<code>
                            $("item").ready(function(){
                                p.text("The img was loaded!");
                            })
                        </code>`
//image fails to load
function imageFailsjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const img=$("<img src='../assets/img/imageloade.png'>");
    img.addClass("imgExample")
       img.on("error",function(){
           p.text(`img failed to load!`),
          demo.append(img),
          demo.append(p)

       })
}
eventsList[7].jqueryMethod=function(){
    imageFailsjquery();
}
eventsList[7].jquerySnippet=`<code>
                            $("item").ready(function(){
                                p.text("img failed to load!");
                            })
                        </code>`
//form is submitted
function formSubmitjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const input=$("<input type='submit' value='Send form'>");

    input.on("click",function(e){
        e.preventDefault()
        p.text(`You submit the form!`)
        demo.append(p)
    })
    demo.append(input);
}
eventsList[8].jqueryMethod=function(){
    formSubmitjquery();
}
eventsList[8].jquerySnippet=`<code>
                            $("item").on
                            ("submit",function(){})
                            p.text("Form submited"!)
                        </code>`
//user changes the option of a select element
function changeValueSelectjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const select=$("<select>");
    for(let i=1;i<3;i++){
        const option=$(`<option>option-${i}</option>`)
        select.append(option);
    }
    select.on("change",function(e){
        
        p.text(`You selected the ${select.val()}!`)
        demo.append(p)
    })
    demo.append(select);
}
eventsList[9].jqueryMethod=function(){
    changeValueSelectjquery();
}
eventsList[9].jquerySnippet=`<code>
                            $("item").on
                            ("change",function(){})
                            p.text("You selected the"+item.val()!)
                        </code>`
//When you position the mouse over an element
function mouseOverjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Move the cursor around me!</button>");
    
    btn.on("mouseover",function(e){
        
        p.text(`You are moving the cursor around me!`)
        demo.append(p)
    })
    btn.on("mouseout",function(e){
        p.text(`You are NOT moving the cursor around me!`)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
}
eventsList[10].jqueryMethod=function(){
    mouseOverjquery();
}
eventsList[10].jquerySnippet=`<code>
                            $("item").on
                            ("mouseover",function(){})
                            p.text("Hi world"!)
                        </code>`
//When a checkbox is checked or unchecked
function checkboxCheckedJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Check and uncheck!</button>")
    const checkbox=$("<input type='checkbox'>")
    checkbox.on("change",function(e){
        if(checkbox.is(":checked")){
            p.text(`The checkbox is on!`)
            demo.append(p)

        }else{
            p.text(`The checkbox is off!`)
        }

    })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(checkbox)
}
eventsList[11].jqueryMethod=function(){
    checkboxCheckedJquery();
}
eventsList[11].jquerySnippet=`<code>
                            $("item").on
                            ("change",function(){})
                            if(checkbox.is(":checked")){
                        </code>`
//When a ul list item is clicked, show the item that was clicked
function itemListClickedjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Click one of the list items</button>")
    const ul=$("<ul>");
    const option1=$(`<li>option1</li>`)
    const option2=$(`<li>option2</li>`)
    $("#jqueryBtn").remove();
    demo.append(btn)
    demo.append(ul);
    ul.append(option1)
    ul.append(option2)
    $("li").each(function(idx,element){
        console.log(element);
        $(element).css("cursor","pointer")
        $(element).on("click",function(){
            p.text(`You selected the ${element.textContent}!`)
            demo.append(p)
            
        })
    })
}
eventsList[12].jqueryMethod=function(){
    itemListClickedjquery();
}
eventsList[12].jquerySnippet=`<code>
                             $("elementlist").each(
                                 function(i,element){
                                $(element).on("click",function(){
                                p.text("You selected the"+ element.textcontent)
                        </code>`
//Functions section
//Create an HTML element
function createHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Click me to create a paragraph</button>")
        btn.on("click", function(){
            p.text("Hi world!")
            demo.append(p)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
}
functionsList[0].jqueryMethod=function(){
    createHtmlElementJquery();
}
functionsList[0].jquerySnippet=`<code>
                             $("&lt;p&gt;Hello world!&lt;/p&gt;")
                        </code>`
//Remove an HTML element
function removeHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Dont delete me please :'(</p>`)
    const btn=$("<button>Click me to delete the paragraph</button>")
        btn.on("click", function(){
            p.text("Hi world!")
            p.remove()
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[1].jqueryMethod=function(){
removeHtmlElementJquery();
}
functionsList[1].jquerySnippet=`<code>
                         $(element).remove()
                    </code>`
//Append an HTML element
function appendHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Click me to append the paragraph</button>")
        btn.on("click", function(){
            p.text("paragraph appened!")
            demo.append(p)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
}
functionsList[2].jqueryMethod=function(){
    appendHtmlElementJquery();
}
functionsList[2].jquerySnippet=`<code>
                         $(element).append(myDiv)
                    </code>`
//Prepend an HTML element 
function prependHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Parent</p>`)
    const p1=$("<p></p>")
    const btn=$("<button>Click me to append the paragraph</button>")
        btn.on("click", function(){
            p1.text("paragraph prepened!")
            p.prepend(p1)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p)
}
functionsList[3].jqueryMethod=function(){
    prependHtmlElementJquery();
}
functionsList[3].jquerySnippet=`<code>
                         $(element).prepend(myDiv)
                    </code>`
//Create and add an HTML element after another element 
function createAfterHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Parent</p>`)
    const p1=$("<p></p>")
    const btn=$("<button>Click me to append the 'p' after the parent paragraph</button>")
        btn.on("click", function(){
            p1.text("paragraph created after the p parent")
            p.after(p1)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[4].jqueryMethod=function(){
    createAfterHtmlElementJquery();
}
functionsList[4].jquerySnippet=`<code>
                         $(element).after(myDiv)
                    </code>`
//Create and add an HTML element before another element 
function createBeforeHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Parent</p>`)
    const p1=$("<p></p>")
    const btn=$("<button>Click me to append the 'p' after the parent paragraph</button>")
        btn.on("click", function(){
            p1.text("paragraph created after the p parent")
            p.before(p1)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[5].jqueryMethod=function(){
    createBeforeHtmlElementJquery();
}
functionsList[5].jquerySnippet=`<code>
                         $(element).before(myDiv)
                    </code>`
//Clone an HTML element within other element
function cloneHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Parent</p>`)
    const p1=$("<p></p>")
    const btn=$("<button>Click me to clone the parent paragraph</button>")
        btn.one("click", function(){
            p.clone().appendTo(p)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[6].jqueryMethod=function(){
    cloneHtmlElementJquery();
}
functionsList[6].jquerySnippet=`<code>
                         $(element).clone().appendTo("myDiv")
                    </code>`
//Add a class to an HTML item
function addClassHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to add a class to the paragraph</button>")
        btn.one("click", function(){
            p.addClass("title")
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[7].jqueryMethod=function(){
    addClassHtmlElementJquery();
}
functionsList[7].jquerySnippet=`<code>
                         $(element).addClass("myClass")
                    </code>`
//Remove a class to an HTML item
function removeClassHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Paragraph</p>`)
    p.addClass("title")
    const btn=$("<button>Click me to remove the class to the paragraph</button>")
        btn.one("click", function(){
            p.removeClass("title")
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[8].jqueryMethod=function(){
    removeClassHtmlElementJquery();
}
functionsList[8].jquerySnippet=`<code>
                         $(element).removeClass("myClass")
                    </code>`
//Toggle a class of an HTML item
function toggleClassHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to toggle the class to the paragraph</button>")
        btn.on("click", function(){
            p.toggleClass("title")
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[9].jqueryMethod=function(){
    toggleClassHtmlElementJquery();
}
functionsList[9].jquerySnippet=`<code>
                         $(element).toggleClass("myClass")
                    </code>`
//Add a disabled attribute to an HTML button
function disabledAttrHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const mybtn=$(`<button>Im active!</button>`)
    const btn=$("<button>Click me to disable the active button</button>")
        btn.one("click", function(){
            mybtn.prop("disabled", true)
            mybtn.text("Im disabled!")
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(mybtn)
}
functionsList[10].jqueryMethod=function(){
    disabledAttrHtmlElementJquery();
}
functionsList[10].jquerySnippet=`<code>
                         $(element).prop("disabled",true)
                    </code>`
//Remove the disabled attribute of an HTML button
function removedisabledAttrHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const mybtn=$(`<button>Im active!</button>`)
    mybtn.prop("disabled", true)
    mybtn.text("Im disabled!")
    const btn=$("<button>Click me to active the button</button>")
        btn.one("click", function(){
            mybtn.removeAttr("disabled");
            mybtn.text("Im active!")
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(mybtn)
}
functionsList[11].jqueryMethod=function(){
    removedisabledAttrHtmlElementJquery();
}
functionsList[11].jquerySnippet=`<code>
                         $(element).removeAttr("disabled")
                    </code>`
//Set a data-src attribute to a img element
function dataSrcHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const img=$(`<img>`)
    img.addClass("imgExample")
    const btn=$("<button>Click me to assign to img a data-src</button>")
        btn.one("click", function(){
            img.attr("data-src","../assets/img/imageloaded.png");
            img.attr(img.data())
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(img)
}
functionsList[12].jqueryMethod=function(){
    dataSrcHtmlElementJquery();
}
functionsList[12].jquerySnippet=`<code>
                         $(element).attr("data-src","value")
                    </code>`
//Remove the data-src attribute of the img element
function removeDataSrcHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const img=$(`<img>`)
    img.addClass("imgExample")
    const btn=$("<button>Click me to remove to img a data-src</button>")
    img.attr("data-src","../assets/img/imageloaded.png");
    img.attr(img.data())
        btn.one("click", function(){
            img.removeAttr("data-src").removeData("src");
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(img)
}
functionsList[13].jqueryMethod=function(){
    removeDataSrcHtmlElementJquery();
}
functionsList[13].jquerySnippet=`<code>
                         $(element).removeAttr("data-src").removeData("src")
                    </code>`
//Hide an HTML element on click (display: none)
function hideHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to hide the paragraph</button>")
        btn.on("click", function(){
            p.hide()
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[14].jqueryMethod=function(){
    hideHtmlElementJquery();
}
functionsList[14].jquerySnippet=`<code>
                         $(element).hide()
                    </code>`
    
//Show an HTML element on click (display: block)
function blockHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to show the paragraph</button>")
    p.hide()
        btn.on("click", function(){
            p.show()
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[15].jqueryMethod=function(){
    blockHtmlElementJquery();
}
functionsList[15].jquerySnippet=`<code>
                         $(element).show()
                    </code>`
//Fade in an HTML element using jQuery
function fadeInHtmlElementJquery(n,method){
    const demo=$(".demo").eq(n)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to 'fade in' the paragraph</button>")
    p.hide()
        btn.on("click", function(){
            p.fadeIn()
        })
    $("#"+method+"Btn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[16].jqueryMethod=function(){
    fadeInHtmlElementJquery(1,"jquery");
}
functionsList[16].jquerySnippet=`<code>
                         $(element).fadeIn()
                    </code>`
//vanilla
functionsList[16].vanillaMethod=function(){
    fadeInHtmlElementJquery(0,"vanilla");
}
functionsList[16].vanillaSnippet=`<code>
                         $(element).fadeIn()
                    </code>`
//Fade out an HTML element using jQuery
function fadeOutHtmlElementJquery(n, method){
    const demo=$(".demo").eq(n,method)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to 'fade out' the paragraph</button>")
    p.hide()
        btn.on("click", function(){
            p.fadeOut()
        })
    $("#"+method+"Btn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[17].jqueryMethod=function(){
    fadeOutHtmlElementJquery(1,"jquery");
}
functionsList[17].jquerySnippet=`<code>
                         $(element).fadeOut()
                    </code>`
//vanilla
functionsList[17].vanillaMethod=function(){
    fadeOutHtmlElementJquery(0,"vanilla");
}
functionsList[17].vanillaSnippet=`<code>
                         $(element).fadeOut()
                    </code>`

//Animate an item after 2 seconds from the initial page load
function animateHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to animate the paragraph</button>")
        btn.on("click", function(){
            p.animate({
                fontSize:"20px"
            },1000)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[18].jqueryMethod=function(){
    animateHtmlElementJquery();
}
functionsList[18].jquerySnippet=`<code>
                         $(element).animate({
                            p.animate({
                                fontSize:"20px"
                            },1000)
                         })
                    </code>`
//Selectors section
//Iterate a collection of elements and apply a change of style on them
function changeStyleHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Paragraph</p>`)
    const btn=$("<button>Click me to change the font size of the paragraph</button>")
    btn.on("click", function(){
        console.log($(".pExample"));
        $(".pExample").css("fontSize","20px")
    })
    $("#jqueryBtn").remove()
    demo.append(btn);
    for(let i=0;i<2;i++){
         demo.append($(`<p class="pExample">Paragraph</p>`))
    }
}
selectorsList[0].jqueryMethod=function(){
    changeStyleHtmlElementJquery();
}
selectorsList[0].jquerySnippet=`<code>
                         $(element).css("fontSize","20px")
                    </code>`
//Get the parent element of a certain element and change its font weight
function getParentHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Parent</p>`)
    const child=$(`<p>Child</p>`)
    const btn=$("<button>Click me tochange the font weight of the parent paragraph</button>")
    btn.on("click", function(){
        child.parent().css("fontWeight","bold");
    })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
    p.append(child);
}
selectorsList[1].jqueryMethod=function(){
    getParentHtmlElementJquery();
}
selectorsList[1].jquerySnippet=`<code>
                         child.parent().css("fontWeight","bold");
                    </code>`
//Get the collection of children of a certain element and change its font weight
function collectionChildrenHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const parent=$(`<p>Parent</p>`)
    const btn=$("<button>Click me to change the font weight of the paragraph</button>")
    btn.on("click", function(){
        parent.children().css("fontWeight","bolder")
    })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(parent);
    for(let i=0;i<2;i++){
         parent.append($(`<p class="pExample">Child</p>`))
    }
}
selectorsList[2].jqueryMethod=function(){
    collectionChildrenHtmlElementJquery();
}
selectorsList[2].jquerySnippet=`<code>
                         parent.children().css("fontWeight","bolder");
                    </code>`
//Get all the elements that have a certain class and change their font weight
function fontWeightOfClassCollectionHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const btn=$("<button>Click me to change the font weight of the class pExample</button>")
    btn.on("click", function(){
        $(".pExample").css("fontWeight","bolder")
    })
    $("#jqueryBtn").remove()
     demo.append(btn);
    for(let i=0;i<2;i++){
        demo.append($(`<p class="pExample">Child</p>`))
    }
}
    selectorsList[3].jqueryMethod=function(){
        fontWeightOfClassCollectionHtmlElementJquery();
    }
    selectorsList[3].jquerySnippet=`<code>
                             $(".myClass").css("fontWeight","bolder");
                        </code>`
//Get an item by id
function getIdHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p id="pId">Paragraph</p>`)

    const btn=$("<button>Click me to get the id and change the color!</button>")
    btn.on("click", function(){
        $("#pId").css("color","green");
    })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
selectorsList[4].jqueryMethod=function(){
    getIdHtmlElementJquery();
}
selectorsList[4].jquerySnippet=`<code>
                         $("#myId").css("color","green");
                    </code>`
    
//Get all the elements that have a certain class and the display property of none 
function hideCollectionHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const btn=$("<button>Click me to do display none in the class pExample</button>")
    btn.on("click", function(){
        $(".pExample").css("display","none")
    })
    $("#jqueryBtn").remove()
     demo.append(btn);
    for(let i=0;i<2;i++){
        demo.append($(`<p class="pExample">Paragraph to dissapear</p>`))
    }
}
    selectorsList[5].jqueryMethod=function(){
        hideCollectionHtmlElementJquery();
    }
    selectorsList[5].jquerySnippet=`<code>
                             $(".myClass").css("display","none")
                        </code>`
//Get the options of a select element that are selected
function getOptionsJquery(){
    const demo=$(".demo").eq(1)
    const btn=$("<button>Select one or more options!</button>")
    const select=$("<select multiple></select>")
    const p=$("<p></p>")
    select.on("click", function(){
        
        p.text(`you selected the ${select.val()}`)
        demo.append(p)
    })
    $("#jqueryBtn").remove()
     demo.append(btn);
     demo.append(select)
    for(let i=1;i<3;i++){
        select.append($(`<option>option-${i}</option>`))
    }
}
    selectorsList[6].jqueryMethod=function(){
        getOptionsJquery();
    }
    selectorsList[6].jquerySnippet=`<code>
    select.on("click", function(){
        
        p.text("you selected the "+select.val())
        })
                        </code>`
//Change an attribute of a first element
function changeAttributeFirstElementHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const btn=$("<button>Click me to change attribute to the first li element</button>")
    const ul=$("<ul></ul>")
    const p=$("<p></p>")
    btn.on("click", function(){
        $("li").first().attr("style","color:red;")
    })
    $("#jqueryBtn").remove()
     demo.append(btn);
     demo.append(ul);
    for(let i=1;i<3;i++){
        ul.append($(`<li>option-${i}</li>`))
    }
}
    selectorsList[7].jqueryMethod=function(){
        changeAttributeFirstElementHtmlElementJquery();
    }
    selectorsList[7].jquerySnippet=`<code>
    select.on("click", function(){
        
        $("li").first().attr("style","color:red;")
        })
                        </code>`
//Show an alert with the value of the first input of the page
function alertOnChangeInputJquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Write something!</button>`)
    const p=$(`<p></p>`)
    const input=$("<input>");

    input.first().on("change",function(){
        alert(`You changed the input to ${input.val()}!`)
        demo.append(p)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
    demo.append(input);
}
selectorsList[8].jqueryMethod=function(){
    alertOnChangeInputJquery();
}
selectorsList[8].jquerySnippet=`<code>
                           input.first().on("change",function(){
                               alert("you changed it")
                           });
                        </code>`
//Remove all items from a specific selector
function removeItemsFromSpecificSelectorJquery(){
    const demo=$(".demo").eq(1)
    const btn=$("<button>Click me to remove the list</button>")
    const ul=$("<ul></ul>")
    const p=$("<p></p>")
    btn.on("click", function(){
        $("li").remove()
    })
    $("#jqueryBtn").remove()
     demo.append(btn);
     demo.append(ul);
    for(let i=1;i<3;i++){
        ul.append($(`<li>option-${i}</li>`))
    }
}
selectorsList[9].jqueryMethod=function(){
    removeItemsFromSpecificSelectorJquery();
}
selectorsList[9].jquerySnippet=`<code>
                        $("li").remove()
                    </code>`