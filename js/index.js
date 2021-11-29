//imports+

jQuery(function(){
    $("section").hide()
    $("section").eq(0).fadeIn(300)
    $("section").eq(1).fadeIn(600)
    $("section").eq(2).fadeIn(900)
    $("section").eq(3).fadeIn(1200)
    
})
//declarations
let eventsList=[];
let functionsList=[];
let selectorsList=[];
var times=0;
var timesquery=1;
//onload
//Modal creation
function createModal(obj){
    times=0;
    timesquery=1;
    $("body").append(`
    
                <div id="background-modal"></div>                  
                    <div id="modal">
                        <header class="">
                            <h2>${obj.group}</h2>
                            <img id="exit" src="../assets/img/cross.png">
                        </header>

                        <div id="blackboard">
                            <article>
                            ${obj.name}
                            </article>

                            <main id="modal-main">
                                <section class="vanilla">
                                    <h2>Vanilla JS</h2>
                                    <div class="demo5">
                                    <p class="snippet">${obj.vanillaSnippet}</p>
                                    <!--VanillaDemo-->
                                    <div class="demo"></div>
                                    </div>
                                    <img src="../assets/img/snippet.png" class="modal-img" id="vanillaMiniBoard">
                                </section>
                                    <img src="../assets/img/line-chalked.png" id="modal-line">
                                    
                                    
                                <section class="jquery">
                                    <h2>jQuery</h2>
                                    <div class="demo5">
                                    <p class="snippet">${obj.jquerySnippet}</p>
                                    <!--jQueryDemo-->
                                    <div class="demo">
                                    
                                    </div>
                                    </div>
                                    <img src="../assets/img/snippet.png" class="modal-img" id="jqueryMiniBoard">
                                </section>
                            </main>
                        </div>
                    </div>
                                    `)
                                    //event listener if click out the modal and exit button
                                    $("#exit").on("click", animateBeforeClose);
                                    $("#background-modal").on("click",removeModal);
                                    //create button example
                                    const buttonVanilla=$("<button id='vanillaBtn'>Press me to see how it works!</button>");
                                    $(buttonVanilla).one("click",obj.vanillaMethod);
                                    const buttonJquery=$("<button id='jqueryBtn'>Press me to see how it works!</button>");
                                    $(buttonJquery).one("click",obj.jqueryMethod);
                                    $(".demo").eq(0).append(buttonVanilla);
                                    $(".demo").eq(1).append(buttonJquery);      
                                    $("#modal").hide();     
            }
//remove modal
function removeModal(){
    $("#background-modal").remove();
    $("#modal").remove();
}

function animateBeforeClose(){
    $("#modal").addClass("animation");
    setTimeout(removeModal,500)

}
function animateAfterStart(e){
    $("#modal").fadeIn(600)
    
    
}
//event listeners for paragrahs when document is loaded

$(function(){
    $(".item").each(function(idx,element){
        $(element).on("click",function(e){
            //TODO hacer funcion que filtre el nombre del target y encuentre el objeto en el array
            createModal(filterElement(e.target));
            animateAfterStart()
        })
    })
})

//TODO hacer funcion que filtre el nombre del target y encuentre el objeto en el array
function filterElement(element){
    //pick title of the section
    const grandFather=getTitle("#"+$(element).parent().parent().attr("id"));
    if(grandFather=="Events"){
        const objFiltered=eventsList.find(obj=>obj.name==element.textContent);
        return objFiltered;
        
    }else if(grandFather=="Functions"){
        const objFiltered=functionsList.find(obj=>obj.name==element.textContent);
        return objFiltered;

    }else if(grandFather=="Selectors"){
        const objFiltered=selectorsList.find(obj=>obj.name==element.textContent);
        return objFiltered;
    }
}

//TODO convert items to obj and put all in array of obj
function createItemObj(){
    const eventsItems=$("#events").children(".content").children();
    const titleEvents=getTitle("#events");
    //Events
    eventsItems.each(function(idx,element){
        eventsList[idx]={
            group: titleEvents,
            name:element.textContent,
            vanillaMethod:undefined,
            jqueryMethod:undefined,
            vanillaSnippet:undefined,
           jQuerySnippet:undefined,

        }
    })
    //functions
    const functionsItems=$("#functions").children(".content").children();
    const titleFunctions=getTitle("#functions");
    functionsItems.each(function(idx,element){
        functionsList[idx]={
            group: titleFunctions,
            name:element.textContent,
            vanillaMethod:undefined,
            jqueryMethod:undefined,
            vanillaSnippet:undefined,
           jQuerySnippet:undefined,
        }
    })
    //functions 2
    const functions2Items=$("#functions2").children(".content").children();
    const titleFunctions2=getTitle("#functions2");
    functions2Items.each(function(idx,element){
        functionsList.push({
            group: titleFunctions2,
            name:element.textContent,
            vanillaMethod:undefined,
            jqueryMethod:undefined,
            vanillaSnippet:undefined,
           jQuerySnippet:undefined,
        })
    });
    //selectors
    const selectorsItems=$("#selectors").children(".content").children();
    const titleSelectors=getTitle("#selectors");
    selectorsItems.each(function(idx,element){
        selectorsList[idx]={
            group: titleSelectors,
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