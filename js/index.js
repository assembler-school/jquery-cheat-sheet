//Modal creation
function createModal(itemTitle){
    $("body").append(`<div id="modal">
                        <head class="">${itemTitle}</head>
                        <main id="modal-main">
                            <section class="vanilla">
                                <h2>Vanilla JS</h2>
                                <!-- posible insercion de code snippet -->
                                <div class="demo">
                                    <!--VanillaDemo-->
                                </div>
                            </section>
                            <img src="../assets/img/modal_prog.svg" id="modal-img">
                            <section class="jquery">
                                <h2>Vanilla JS</h2>
                                <!-- posible insercion de code snippet -->
                                <div class="demo">
                                    <!--jQueryDemo-->
                                </div>
                                
                            </section>
                        </main>
                    </div>`)
}
//remove modal
function removeModal(){
    $("#modal").remove()
}


//event listeners for paragrahs

$(function(){
    $(".item").each(function(idx,element){
        $(element).on("click",function(event){
            if($("#modal").length){
                removeModal();
                createModal(event.target.textContent);
            }else{
                createModal(event.target.textContent);
            }
            
        })
    })
})
