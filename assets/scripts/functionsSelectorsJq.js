//! Selectors Functions------------------------------------------------------------

function iterateCollectionfunctionJq() {
    buttonTest('iterateCollectionIdTestResultjq', 'interatecollectionjq')
    for (let index = 0; index < 5; index++) {
        let el = $("<p>").text(" This is a P").addClass('pdif')
        $('#iterateCollectionIdTestResultjq').append(el)
    }


    $('#interatecollectionjq').on('click', function () {
        $('.pdif').each(function (indexInArray, valueOfElement) {
            $(valueOfElement).removeClass('pdif')
            $(valueOfElement).addClass('pClassGreen')

        })
    })
}

function parentElementfunctionJq() {
    buttonTest('parentElementIdTestResultjq', 'parentElementjq')
    let div1 = $("<div>").text(" This is a div").attr('id', 'div1id')
    $('#parentElementIdTestResultjq').append(div1)

    let el = $("<p>").text(" This is a P")
    $('#div1id').append(el)

    $('#parentElementjq').on('click', function () {
        el.parent().css('fontWeight', 'bolder')
    })
}

function childrenElementfunctionJq() {
    buttonTest('childrenElementIdTestResultjq', 'childrenElementjq')
    let div1 = $("<div>").text(" This is a div").attr('id', 'div1id')
    $('#childrenElementIdTestResultjq').append(div1)

    let el = $("<p>").text(" This is a P")
    $('#div1id').append(el)

    $('#childrenElementjq').on('click', function () {
        $('#div1id').children().css('fontWeight', 'bolder')
    })
}

function classElementfunctionJq() {
    buttonTest('classElementIdTestResultjq', 'classElemenntjq')
    for (let index = 0; index < 5; index++) {
        let el = $("<p>").text(" This is a P").addClass('pdifjq')
        $('#classElementIdTestResultjq').append(el)
    }


    $('#classElemenntjq').on('click', function () {
        $('.pdifjq').css('font-weight', 'bolder');
    })
}

function getElementbyidfunctionJq() {
    buttonTest('getElementbyidIdTestResultjq', 'getelementbyidjq')
    let el = $("<p>").text(" This is a P").attr('id', 'pOneidjq')
    $('#getElementbyidIdTestResultjq').append(el)

    $('#getelementbyidjq').on('click', function () {
        $('#pOneidjq').css('fontWeight', 'bolder')
    })
}

function getOptionsfunctionJq() {
    buttonTest('getOptionsIdTestResultjq', 'getoptionsjq')
    for (let index = 0; index < 4; index++) {
        let el = $("<p>").text(" This is a P").addClass('pdifjq')
        $('#getOptionsIdTestResultjq').append(el)
    }
    let el = $("<p>").text(" This is a P").addClass('pdifjq').attr('id', 'pOneidjq')
    $('#getOptionsIdTestResultjq').append(el)

    $('#getoptionsjq').on('click', function () {
        $('.pdifjq[id]').css('fontWeight', 'bolder')
    })
}

function valueFirstinputfunctionJq() {
    buttonTest('valueFirstinputIdTestResultjq', 'valuefirstinputjq')
    let el = $("<input>").attr('placeholder', 'write something here')
    $('#valueFirstinputIdTestResultjq').append(el)

    $('#valuefirstinputjq').on('click', function () {
        inputvaluejq = $('input').first().val();
        console.log(inputvaluejq)
        alert(inputvaluejq)
    })
}

function animateitemfunctionJq() {
    buttonTest('valueFirstinputIdTestResultjq', 'valuefirstinputjq')
    let el = $("<input>").attr('placeholder', 'write something here')
    $('#valueFirstinputIdTestResultjq').append(el)

    $('#valuefirstinputjq').on('click', function () {
        inputvaluejq = $('input').first().val();
        console.log(inputvaluejq)
        alert(inputvaluejq)
    })
}

function displaynoneandblockElementfunctionIdJq() {
    buttonTest('displaynoneandblockElementIdTestResultjq', 'callmebaby2')
    let contentoft = $("<p></p>")
    let contentoft1 = $("<p></p>")
    contentoft.text("content 1").css("display", "none")
    contentoft1.text("content 2").css("display", "none")
    $("#displaynoneandblockElementIdTestResultjq").append(contentoft)
    $("#displaynoneandblockElementIdTestResultjq").append(contentoft1)
    $("#callmebaby2").on("click", () => {
        if (contentoft.css('display') == 'none' && contentoft1.css('display') == 'none') {
            contentoft.css('color', 'red')
            contentoft.css('display', 'block')
            contentoft1.css('color', 'green')
            contentoft1.css('display', 'block')
        } else if (contentoft.css('display') == 'block' && contentoft1.css('display') == 'block') {
            contentoft.css('display', 'none')
            contentoft1.css('display', 'none')
        }
    })
}

function changehrefattributeElementfunctionIdJq() {
    let a1 = $('<a href="link1"></a>')
    let a2 = $('<a href="link1"></a>')
    let a3 = $('<a href="link1"></a>')
    a1.text('<a href="link1">link 1</a>')
    a2.text('<a href="link2">link 2</a>')
    a3.text('<a href="link2">link 2</a>')
    $("#changehrefattributeElementIdTestResultjq").append(a1)
    $("#changehrefattributeElementIdTestResultjq").append(a2)
    $("#changehrefattributeElementIdTestResultjq").append(a3)
    buttonTest('changehrefattributeElementIdTestResultjq', 'changehrefjq')
    $("#changehrefjq").on("click", () => {
        a1.text('<a href="linkchanged">link changed</a>')
    })
}

function removeallitemsElementfunctionIdJq() {
    let p1 = $("<p>content1</p>")
    let p2 = $("<p>content2</p>")
    let p3 = $("<p>content3</p>")
    $("#removeallitemsElementIdTestResultjq").append(p1)
    $("#removeallitemsElementIdTestResultjq").append(p2)
    $("#removeallitemsElementIdTestResultjq").append(p3)
    buttonTest('removeallitemsElementIdTestResultjq', 'removelementalljq')
    $("#removelementalljq").on("click", () => {
        p1.remove()
    })
}
