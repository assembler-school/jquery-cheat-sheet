function createElementfunctionJq () {
    var el = $("<span>" + 'text ' + "<span>");
    $('#createElementIdTestResultjq').append(el);

}

function removeElementfunctionJq() {
    buttonTest('removeElementIdTestResultjq')
    setTimeout(() => {
        $("#button-test").remove();
    }, 3000);
}