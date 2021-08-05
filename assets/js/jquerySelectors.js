/*-----------------SELECTORS---------------------------*/

let eachCssjQ = function createVanilla() {
    let newList = $(
        "<ul><li class='items'>Item 1</li><li class='items'>Item 2</li><li class='items'>Item 3</li></ul>"
    );
    let newCont = $(".jquery");
    $(".jquery-button").on("click", () => {
        newCont.append(newList);
    });
    $(".items").each((item) => {
        $(item).css("background-color", "red");
    });
};