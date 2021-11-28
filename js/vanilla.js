
//Events section
const btnAction=document.getElementById("vanillaBtn");
//HTML document has been loaded
    function htmlDocumentLoadedVanilla(){
        const demo=document.getElementsByClassName("demo")[0]
        const loaded= document.createElement("p");
        loaded.innerText="The document is loaded!"
        demo.appendChild(loaded)
    }
    eventsList[0].vanillaMethod=function(){
        htmlDocumentLoadedVanilla();
    }
    eventsList[0].vanillaSnippet=`<code>window.onload=function(){
        console.log("document loaded!")
            }
    </code>`



//HTML item has been clicked 
function htmlItemClickedVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    
    exampleBtn.innerText="click on me!"
    exampleBtn.addEventListener("click",()=>{
            times++;
            p.innerText=`You clicked me ${times} times`
            demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
}
eventsList[1].vanillaMethod=function(){
    htmlItemClickedVanilla();
}
eventsList[1].vanillaSnippet=`<code>
                                    example.addEventListener
                                    ("click",function(){}
                                </code>`

//item has been double clicked
function htmlItemDoubleClickedVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    
    exampleBtn.innerText="Double click on me!"
    exampleBtn.addEventListener("dblclick",()=>{
            times++;
            p.innerText=`You double clicked me ${times} times`
            demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
}
eventsList[2].vanillaMethod=function(){
    htmlItemDoubleClickedVanilla();
}
eventsList[2].vanillaSnippet=`<code>
                                    example.addEventListener
                                    ("dblclick",function(){}
                                </code>`
//user presses a key on the keyboard 
function pressKeyVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    exampleBtn.innerText="Enter a key"
    window.addEventListener("keypress",(e)=>{
            p.innerText=`You press the "${e.key}" key`
            demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
}
eventsList[3].vanillaMethod=function(){
    pressKeyVanilla();
}
eventsList[3].vanillaSnippet=`<code>
                                    example.addEventListener
                                    ("keypress",function(){}
                                </code>`
//user moves the mouse cursor
function movesCursorVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    exampleBtn.innerText="click me and move the cursor!"
    exampleBtn.addEventListener("mousemove",(e)=>{
            p.innerText=`you are moving the cursor!`
            demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
}
eventsList[4].vanillaMethod=function(){
    movesCursorVanilla();
}
eventsList[4].vanillaSnippet=`<code>
                                    example.addEventListener
                                    ("mousemove",function(){}
                                </code>`
//user changes a value of an text input
function changeValueInputVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    const input=document.createElement("input");
    input.setAttribute("type","text");
    ;
    exampleBtn.innerText="Write something!"
    input.addEventListener("change",()=>{
            p.innerText=`you change the option to ${input.value}!`
            demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(input)
}
eventsList[5].vanillaMethod=function(){
    changeValueInputVanilla();
}
eventsList[5].vanillaSnippet=`<code>
                                    input.addEventListener
                                    ("change",function(){}
                                </code>`
//image is loaded
function imageIsLoadedVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const p=document.createElement("p");
    const img=document.createElement("img")
    img.classList.add("imgExample")
    img.setAttribute("src","../assets/img/imageloaded.png")
    demo.appendChild(img)
    img.addEventListener("load",function(){
        p.innerText="Your image was loaded"
        demo.appendChild(p)
    })
        
}
eventsList[6].vanillaMethod=function(){
    imageIsLoadedVanilla();
}
eventsList[6].vanillaSnippet=`<code>
                                    img.addEventListener
                                    ("load",function(){}
                                </code>`
//image fails to load
function imageFailsVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const p=document.createElement("p");
    const img=document.createElement("img")
    img.classList.add("imgExample")
    img.setAttribute("src","../assets/img/imageloade.png")
    demo.appendChild(img)
    img.addEventListener("error",function(){
        p.innerText="Your image is failing"
        demo.appendChild(p)
    })
        
}
eventsList[7].vanillaMethod=function(){
    imageFailsVanilla();
}
eventsList[7].vanillaSnippet=`<code>
                                    img.addEventListener
                                    ("error",function(){}
                                </code>`
//form is submitted
function formSubmitVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const p=document.createElement("p");
    const submit=document.createElement("input")
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Send form")
    submit.addEventListener("click",function(e){
        e.preventDefault();
        p.innerText="your form was submited"
        demo.appendChild(p)
    })
    demo.appendChild(submit)
        
}
eventsList[8].vanillaMethod=function(){
    formSubmitVanilla();
}
eventsList[8].vanillaSnippet=`<code>
                                    input.addEventListener
                                    ("submit",function(){}
                                </code>`
//user changes the option of a select element
function changeValueSelectVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const p=document.createElement("p");
    const input=document.createElement("select");
    const option1=document.createElement("option");
    const option2=document.createElement("option");
    const option3=document.createElement("option");
    option1.innerText="Opcion 1"
    option2.innerText="Opcion 2"
    option3.innerText="Opcion 3"
    input.appendChild(option1);
    input.appendChild(option2);
    input.appendChild(option3);
    input.addEventListener("change",()=>{
            p.innerText=`you change the option to ${input.value}!`
            demo.appendChild(p)
    })
    demo.appendChild(input)

}

eventsList[9].vanillaMethod=function(){
    changeValueSelectVanilla();
}
eventsList[9].vanillaSnippet=`<code>
                                input.addEventListener
                                ("change",function(){}
                            </code>`
//When you position the mouse over an element
function mouseOverVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    exampleBtn.innerText="Move the cursor around me!"
    exampleBtn.addEventListener("mouseover",(e)=>{
            p.innerText=`You are moving the cursor!`
            demo.appendChild(p)
    })
    exampleBtn.addEventListener("mouseout",(e)=>{
        p.innerText=`you are NOT moving the cursor around me!`
        demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
}
    eventsList[10].vanillaMethod=function(){
        mouseOverVanilla();
    }
    eventsList[10].vanillaSnippet=`<code>
                                    example.addEventListener
                                    ("mouseover",function(){}
                                </code>`

//When a checkbox is checked or unchecked
function checkboxVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    const input=document.createElement("input");
    input.setAttribute("type","checkbox");
    exampleBtn.innerText="check and uncheck!";
    input.addEventListener("change",()=>{
        if(input.checked){
            p.innerText=`The checkbox is on!`
            demo.appendChild(p)
        }else{
            p.innerText=`The checkbox is off!`
            demo.appendChild(p)
        }
            
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(input)
}
eventsList[11].vanillaMethod=function(){
    checkboxVanilla();
}
eventsList[11].vanillaSnippet=`<code>
                                    input.addEventListener
                                    ("change",function(){
                                        if(input.checked)
                                    }
                                </code>`
//When a ul list item is clicked, show the item that was clicked
function itemListClickedVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const ul = document.createElement("ul");
    const p=document.createElement("p");
    exampleBtn.innerText="Click one list item!";
    for(let i=1;i<3;i++){
        const li = document.createElement("li");
        li.innerText="item-"+i;
        li.style.cursor="pointer"
        li.addEventListener("click",function(){
            p.innerText=`You selected the ${li.innerText}`
            demo.appendChild(p)
        })
        ul.appendChild(li);
    }
    
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(ul);
}
eventsList[12].vanillaMethod=function(){
    itemListClickedVanilla();
}
eventsList[12].vanillaSnippet=`<code>
                                    input.addEventListener
                                    ("change",function(){
                                        if(input.checked)
                                    }
                                </code>`

//functions section
//Create an HTML element
function createHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to create a paragraph!";
    exampleBtn.addEventListener("click", function(){
        p.innerText="Paragraph created"
        demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);

}
functionsList[0].vanillaMethod=function(){
    createHtmlElementVanilla();
}
functionsList[0].vanillaSnippet=`<code>
                                    let element=
                                    document.CreateElement("div");
                                </code>`
//Remove an HTML element
function removeHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to remove the paragraph!";
    p.innerText="Will you delete me?:'("
    exampleBtn.addEventListener("click", function(){
        demo.removeChild(demo.lastChild)
    },{once:true})
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p)

}
functionsList[1].vanillaMethod=function(){
    removeHtmlElementVanilla();
}
functionsList[1].vanillaSnippet=`<code>
                                    let element=
                                    element.remove();
                                </code>`
//Append an HTML element
function appendHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to append the paragraph to the window";
    exampleBtn.addEventListener("click", function(){
        p.innerText="paragraph appened!"
        demo.appendChild(p);
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p);

}
functionsList[2].vanillaMethod=function(){
    appendHtmlElementVanilla();
}
functionsList[2].vanillaSnippet=`<code>
                                    element.append(myDiv);
                                </code>`
//Prepend an HTML element 
function prependHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    const snippet = document.getElementsByClassName("snippet")[0]
    exampleBtn.innerText="Click me to prepend the paragraph to the button";
    exampleBtn.addEventListener("click", function(){
        p.innerText="paragraph prepened!"
        snippet.append(p);
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p);

}
functionsList[3].vanillaMethod=function(){
    prependHtmlElementVanilla();
}
functionsList[3].vanillaSnippet=`<code>
                                    element.prepend(myDiv);
                                </code>`
//Create and add an HTML element after another element 
function createAfterHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to create the paragraph after the button";
    exampleBtn.addEventListener("click", function(){
        p.innerText="paragraph created after the button!"
        exampleBtn.insertAdjacentElement('afterend', p);
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p);

}
functionsList[4].vanillaMethod=function(){
    createAfterHtmlElementVanilla();
}
functionsList[4].vanillaSnippet=`<code>
                                    element.insertAdjacentElement
                                    ("afterend",myDiv);
                                </code>`
//Create and add an HTML element before another element 
function createBeforeHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to create the paragraph before the button";
    exampleBtn.addEventListener("click", function(){
        p.innerText="paragraph created after the button!"
        exampleBtn.insertAdjacentElement('beforebegin', p);
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p);

}
functionsList[5].vanillaMethod=function(){
    createBeforeHtmlElementVanilla();
}
functionsList[5].vanillaSnippet=`<code>
                                    element.insertAdjacentElement
                                    ("beforebegin",myDiv);;
                                </code>`
//Clone an HTML element within other element
function cloneHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    exampleBtn.innerText="Click me to clone the button";
    exampleBtn.addEventListener("click", function(){
        var newbtn=exampleBtn.cloneNode(true)
        demo.appendChild(newbtn);
    },{once:true})
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);

}
functionsList[6].vanillaMethod=function(){
    cloneHtmlElementVanilla();
}
functionsList[6].vanillaSnippet=`<code>
                                    element.cloneNode(true)
                                </code>`
//Add a class to an HTML item
function addClassHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p= document.createElement("p");
    p.innerText="This is a test"
    exampleBtn.innerText="Click me to add a class to the p element";
    exampleBtn.addEventListener("click", function(){
        p.classList.add("title")
    },{once:true})
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p)

}
functionsList[7].vanillaMethod=function(){
    addClassHtmlElementVanilla();
}
functionsList[7].vanillaSnippet=`<code>
                                    element.classList.add("className")
                                </code>`

//Remove a class to an HTML item
function removeClassHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p= document.createElement("p");
    p.innerText="This is a test"
    p.classList.add("title")
    exampleBtn.innerText="Click me to remove a class to the p element";
    exampleBtn.addEventListener("click", function(){
        p.classList.remove("title")
    },{once:true})
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p)

}
functionsList[8].vanillaMethod=function(){
    removeClassHtmlElementVanilla();
}
functionsList[8].vanillaSnippet=`<code>
                                    element.classList.remove("className")
                                </code>`
//Toggle a class of an HTML item    
function toggleClassHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p= document.createElement("p");
    p.innerText="This is a test"
    exampleBtn.innerText="Click me to toggle a class to the p element";
    exampleBtn.addEventListener("click", function(){
        p.classList.toggle("title")
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p)

}
functionsList[9].vanillaMethod=function(){
    toggleClassHtmlElementVanilla();
}
functionsList[9].vanillaSnippet=`<code>
                                    element.classList.toggle("className")
                                </code>`
//Add a disabled attribute to an HTML button                            
function disabledAttrHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const btn= document.createElement("button");
    btn.innerText="This is a test"
    exampleBtn.innerText="Click me to add the disabled attribute to the p element";
    exampleBtn.addEventListener("click", function(){
        btn.setAttribute("disabled","true")
        btn.innerText="Disabled!"
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(btn);

}
functionsList[10].vanillaMethod=function(){
    disabledAttrHtmlElementVanilla();
}
functionsList[10].vanillaSnippet=`<code>
                                    element.setAttribute("attr","value")
                                </code>`
//Remove the disabled attribute of an HTML button                                
function removedisabledAttrHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const btn= document.createElement("button");
    btn.setAttribute("disabled","true")
    btn.innerText="Disabled!"
    exampleBtn.innerText="Click me to remove the disabled attribute to the p element";
    exampleBtn.addEventListener("click", function(){
        btn.removeAttribute("disabled")
        btn.innerText="Active!"
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(btn);

}
functionsList[11].vanillaMethod=function(){
    removedisabledAttrHtmlElementVanilla();
}
functionsList[11].vanillaSnippet=`<code>
                                    element.removeAttribute("attr")
                                </code>`
//Set a data-src attribute to a img element                                
function dataSrcHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const img= document.createElement("img");
    img.classList.add("imgExample");
    exampleBtn.innerText="Click me to add a data-src to an img element";
    exampleBtn.addEventListener("click", function(){
        img.setAttribute("data-src","../assets/img/imageloaded.png")
        img.setAttribute("src",img.dataset.src)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(img);

}
functionsList[12].vanillaMethod=function(){
    dataSrcHtmlElementVanilla();
}
functionsList[12].vanillaSnippet=`<code>
img.setAttribute("data-src","url")
                                </code>`
//Remove the data-src attribute of the img element                    
function removeDataSrcHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const img= document.createElement("img");
    img.classList.add("imgExample");
    exampleBtn.innerText="Click me to remove a data-src to an img element";
    exampleBtn.addEventListener("click", function(){
        img.removeAttribute("data-src")
        img.setAttribute("src",img.dataset.src)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(img);

}
functionsList[13].vanillaMethod=function(){
    removeDataSrcHtmlElementVanilla();
}
functionsList[13].vanillaSnippet=`<code>
img.removeAttribute("data-src","url")
                                </code>`
//Hide an HTML element on click (display: none)
function hideHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to hide the paragraph!";
    p.innerText="Will you hide me?:'("
    exampleBtn.addEventListener("click", function(){
        p.style.display="none";
    },{once:true})
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p)

}
functionsList[14].vanillaMethod=function(){
    hideHtmlElementVanilla();
}
functionsList[14].vanillaSnippet=`<code>
                                    element.style.display="none";
                                </code>`
//Show an HTML element on click (display: block)                                
function blockHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to appear and disappear the paragraph!";
    p.innerText="Will you hide me?:'("
    exampleBtn.addEventListener("click", function(){
        p.classList.toggle("display");
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p)

}
functionsList[15].vanillaMethod=function(){
    blockHtmlElementVanilla();
}
functionsList[15].vanillaSnippet=`<code>
                                    element.style.display="block";
                                </code>`
//Fade in an HTML element using jQuery
//Fade out an HTML element using jQuery  
//Animate an item after 2 seconds from the initial page load                              
function animateHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    exampleBtn.innerText="Click me to animate the paragraph!";
    p.innerText="im animated :D"
    exampleBtn.addEventListener("click", function(){
        p.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-30px)' }
        ],{
            duration: 1000,
            iterations: Infinity
        })
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p)

}
functionsList[18].vanillaMethod=function(){
    animateHtmlElementVanilla();
}
functionsList[18].vanillaSnippet=`<code>
                                    window.onload=function(){
                                        element.animate([
                                            {
                                                options
                                            }
                                        ],{
                                            duration,
                                            iteration
                                        })
                                    }
                                </code>`
//Selectors section
//Iterate a collection of elements and apply a change of style on them
function changeStyleHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const ul = document.createElement("ul");
    exampleBtn.innerText="Click to apply a style to the list";
    for(let i=1;i<3;i++){
        const li = document.createElement("li");
        li.innerText="item-"+i;
        li.classList.add("list");
        ul.appendChild(li);
    }
    exampleBtn.addEventListener("click", function(){
        const list=document.querySelectorAll(".list");
        list.forEach(element=>{
            element.style.color="brown";
        })
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(ul)

}
selectorsList[0].vanillaMethod=function(){
    changeStyleHtmlElementVanilla();
}
selectorsList[0].vanillaSnippet=`<code>
                                   const list=document.querySelectorAll(".list");
                                    list.forEach(element=>{
                                        element.style.color="brown";
                                    })
                                </code>`
//Get the parent element of a certain element and change its font weight                                
function getParentHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const parent = document.createElement("p");
    const child = document.createElement("p");
    exampleBtn.innerText="Click to change the font weigth of the parent";
    parent.innerText="Im the parent"
    child.innerText="Im te child"
    exampleBtn.addEventListener("click", function(){
        child.parentNode.style.fontWeight="bolder";
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(parent)
    parent.appendChild(child)


}
selectorsList[1].vanillaMethod=function(){
    getParentHtmlElementVanilla();
}
selectorsList[1].vanillaSnippet=`<code>
                                   child.parentNode.style.fontWeight="bolder";
                                </code>`
//Get the collection of children of a certain element and change its font weight                                
function collectionChildrenHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const ul = document.createElement("ul");
    exampleBtn.innerText="Click to apply a font weight to the list items";
    for(let i=1;i<3;i++){
        const li = document.createElement("li");
        li.innerText="item-"+i;
        li.classList.add("list");
        ul.appendChild(li);
    }
    exampleBtn.addEventListener("click", function(){
        var children=ul.childNodes
        children.forEach(element=>{
            element.style.fontWeight="bold";
        });
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(ul)

}
selectorsList[2].vanillaMethod=function(){
    collectionChildrenHtmlElementVanilla();
}
selectorsList[2].vanillaSnippet=`<code>
                                   var children=ul.childNodes
                            children.forEach(element=>{
                                element.style.fontWeight="bold";
                            });
                                </code>`
//Get all the elements that have a certain class and change their font weight
function fontWeightOfCollectionHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const ul = document.createElement("ul");
    exampleBtn.innerText="Click to apply a style to the list";
    for(let i=1;i<3;i++){
        const li = document.createElement("li");
        li.innerText="item-"+i;
        li.classList.add("list");
        ul.appendChild(li);
    }
    exampleBtn.addEventListener("click", function(){
        const list=document.querySelectorAll(".list");
        list.forEach(element=>{
            element.style.fontWeight="1000";
        })
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(ul)

}
selectorsList[3].vanillaMethod=function(){
    fontWeightOfCollectionHtmlElementVanilla();
}
selectorsList[3].vanillaSnippet=`<code>
                                   const list=document.querySelectorAll(".list");
                                    list.forEach(element=>{
                                        element.style.fontWeight="1000";
                                    })
                                </code>`
//Get an item by id                                
function getIdHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p = document.createElement("p");
    p.innerText="Im not picked"
    exampleBtn.innerText="Click to pick the element with the id";
    
    exampleBtn.addEventListener("click", function(){
        p.innerText="Im picked!"
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p);
    

}
selectorsList[4].vanillaMethod=function(){
    getIdHtmlElementVanilla();
}
selectorsList[4].vanillaSnippet=`<code>
                                const element=
                                document.getElementById("myDiv");  
                                </code>`
//Get all the elements that have a certain class and the display property of none                                 
function hideCollectionHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const ul = document.createElement("ul");
    exampleBtn.innerText="Click to hide the list";
    for(let i=1;i<3;i++){
        const li = document.createElement("li");
        li.innerText="item-"+i;
        li.classList.add("list");
        ul.appendChild(li);
    }
    exampleBtn.addEventListener("click", function(){
        const list=document.querySelectorAll(".list");
        list.forEach(element=>{
            element.style.display="none";
        })
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(ul)

}
selectorsList[5].vanillaMethod=function(){
    hideCollectionHtmlElementVanilla();
}
selectorsList[5].vanillaSnippet=`<code>
                                   const list=document.querySelectorAll(".list");
                                    list.forEach(element=>{
                                        element.style.display="none";
                                    })
                                </code>`
//Get the options of a select element that are selected                                
function getOptionsVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const p=document.createElement("p");
    const input=document.createElement("select");
    input.setAttribute("multiple","multiple");
    const option1=document.createElement("option");
    const option2=document.createElement("option");
    const option3=document.createElement("option");
    option1.innerText="Option 1"
    option2.innerText="Option 2"
    option3.innerText="Option 3"
    input.appendChild(option1);
    input.appendChild(option2);
    input.appendChild(option3);
    
    input.addEventListener("change",()=>{
        if(input.selectedOptions.length==2){
            p.innerText+=`, the${input.selectedOptions[1].value}`
        }else if(input.selectedOptions.length==3){
            p.innerText+=`, and the${input.selectedOptions[2].value}`
        }else{
            p.innerText=`you picked the option ${input.selectedOptions[0].value}`
        }
        demo.appendChild(p)
    })
    demo.appendChild(input)

}

selectorsList[6].vanillaMethod=function(){
    getOptionsVanilla();
}
selectorsList[6].vanillaSnippet=`<code>
                                input.addEventListener
                                ("change",function(){}
                            </code>`
//Change an attribute of a first element
function changeAttributeFirstElementHtmlElementVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const p= document.createElement("p");
    const p1= document.createElement("p");
    p.setAttribute("style","color:brown;")
    p.innerText="First Element"
    p1.innerText="Second Element"
    exampleBtn.innerText="Click me to edit the first element attribute";
    exampleBtn.addEventListener("click", function(){
        p.setAttribute("style","color:green");
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(p);
    demo.appendChild(p1);

}
selectorsList[7].vanillaMethod=function(){
    changeAttributeFirstElementHtmlElementVanilla();
}
selectorsList[7].vanillaSnippet=`<code>
                            element.setAttribute
                            ("style","color:green")
                                </code>`
//Show an alert with the value of the first input of the page                                
function alertOnChangeInputVanilla(){
    const demo=document.getElementsByClassName("demo")[0];
    const exampleBtn=document.createElement("button");
    const p=document.createElement("p");
    const input=document.createElement("input");
    input.setAttribute("type","text");
    ;
    exampleBtn.innerText="Write something!"
    input.addEventListener("change",()=>{
            alert("you changed the first input of the page")
            demo.appendChild(p)
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(input)
}
selectorsList[8].vanillaMethod=function(){
    alertOnChangeInputVanilla(); 
}
selectorsList[8].vanillaSnippet=`<code>
                            element.setAttribute
                            input.addEventListener("change",()=>{
                                alert("you changed the first input of the page")
                            })
                                </code>`
//Remove all items from a specific selector                                
function removeItemsFromSpecificSelectorVanilla(){
    const demo = document.getElementsByClassName("demo")[0];
    const exampleBtn = document.createElement("button");
    const ul = document.createElement("ul");
    exampleBtn.innerText="Click to remove the list";
    for(let i=1;i<4;i++){
        const li = document.createElement("li");
        li.innerText="item-"+i;
        li.classList.add("list");
        ul.appendChild(li);
    }
    exampleBtn.addEventListener("click", function(){
        const listItems=document.querySelectorAll(".list");
        listItems.forEach(element=>{
            element.remove()
        });
    })
    demo.removeChild(demo.lastChild);
    demo.appendChild(exampleBtn);
    demo.appendChild(ul)
    
}
selectorsList[9].vanillaMethod=function(){
    removeItemsFromSpecificSelectorVanilla();
}
selectorsList[9].vanillaSnippet=`<code>
                                   const listItems=document.querySelectorAll(".list");
                                    listItems.forEach(element=>{
                                        element.remove()
                                    });
                                </code>`