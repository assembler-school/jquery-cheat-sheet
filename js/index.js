//Modal creation
function createModal(obj){
    $("body").append(`
    
                <div id="background-modal"></div>                  
                    <div id="modal">
                        <header class="">
                            ${obj.itemGroup}
                            <img id="exit" src="../assets/img/cross.png">
                        </header>

                        <div id="blackboard">
                            <article>
                            ${obj.itemTitle}
                            </article>

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
                        </div>
                    </div>
                `)
                //event listener if click out the modal and exit button
                $("#exit").on("click", removeModal);
                $("#background-modal").on("click",removeModal);
}
//remove modal
function removeModal(){
    $("#background-modal").remove();
    $("#modal").remove();
}





//event listeners for paragrahs when document is loaded

$(function(){
    $(".item").each(function(idx,element){
        $(element).on("click",function(event){
                createModal(event.target.textContent);
        })
    })
})
