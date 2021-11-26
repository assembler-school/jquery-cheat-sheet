//imports+
//declarations
let eventsList=[];
let functionsList=[];
let selectorsList=[];
//Modal creation
function createModal(obj){
    $("body").append(`
    
                <div id="background-modal"></div>                  
                    <div id="modal">
                        <header class="">
                            ${obj.group}
                            <img id="exit" src="../assets/img/cross.png">
                        </header>

                        <div id="blackboard">
                            <article>
                            ${obj.name}
                            </article>

                            <main id="modal-main">
                                <section class="vanilla">
                                    <h2>Vanilla JS</h2>
                                    <div class="demo">
                                    <p class="snippet">${obj.vanillaSnippet}</p>
                                        <!--VanillaDemo-->
                                    </div>
                                </section>
                                    
                                    <img src="../assets/img/modal_prog.svg" id="modal-img">
                                    
                                <section class="jquery">
                                    <h2>jQuery</h2>
                                    <div class="demo">
                                    <p class="snippet">${obj.jquerySnippet}</p>
                                        <!--jQueryDemo-->
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                                    `)
                                    //event listener if click out the modal and exit button
                                    $("#exit").on("click", removeModal);
                                    $("#background-modal").on("click",removeModal);
                                    //create button example
                                    const buttonVanilla=$("<button id='vanillaBtn'>Press me to see how it works!</</button>");
                                    $(buttonVanilla).one("click",obj.vanillaMethod);
                                    const buttonJquery=$("<button id='jqueryBtn'>Press me to see how it works!</button>");
                                    $(buttonJquery).one("click",obj.jqueryMethod);
                                    $(".demo").eq(0).append(buttonVanilla);
                                    $(".demo").eq(1).append(buttonJquery);           
            }
//remove modal
function removeModal(){
    $("#background-modal").remove();
    $("#modal").remove();
}


//event listeners for paragrahs when document is loaded

$(function(){
    $(".item").each(function(idx,element){
        $(element).on("click",function(e){
            //TODO hacer funcion que filtre el nombre del target y encuentre el objeto en el array
                createModal(filterElement(e.target));
        })
    })
})

//TODO hacer funcion que filtre el nombre del target y encuentre el objeto en el array
function filterElement(element){
    //pick title of the section
    const grandFather=getTitle("#events");
    if(grandFather=="Events"){
        const objFiltered=eventsList.find(obj=>obj.name==element.textContent);
        return objFiltered;
        
    }
}

//TODO convert items to obj and put all in array of obj
function createItemObj(){
    const eventsItems=$("#events").children(".content").children();
    const title=getTitle("#events");
    console.log(title);
    eventsItems.each(function(idx,element){
        eventsList[idx]={
            group: title,
            name:element.textContent,
            vanillaMethod:undefined,
            jqueryMethod:undefined,
            vanillaSnippet:undefined,
           jQuerySnippet:undefined,

        }
    })
}
createItemObj();

function getTitle(section){
    return $(section).children(".title").children().text();
}