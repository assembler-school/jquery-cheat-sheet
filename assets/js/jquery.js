/*============ Global variables ===========*/
const testArea = $("#testArea");
/*========================================*/

/*========== TestArea scenarios ==========*/
function scenario1(){

}
/*========================================*/

/*========= Excercise functions ==========*/
// 01 OnLoad Event
// $(window).on("load", function(event){
//     console.log("Onload");
// });

export function onLoadJqueryCode(){
    return `    $(window).on("load", function(event){
                    console.log("Onload");
    });`;
}

export function onLoadJqueryOutput(){
    return "This event makes a change on the page when the page loads";
}

//02 Element clicked
export function onClickJqueryCode(){
    console.log("Im in")
    let testButton = $("<button>");
    testButton.attr("id", "btn");
    testButton.text("Click here");
    testArea.append(testButton);
    $("#btn").on("click", function(){
        $("<p>button clicked</p>").insertAfter($("#btn"));
    });
    console.log(testArea);
    console.log(testArea.children());
}
/*======================================*/
onClickJqueryCode()