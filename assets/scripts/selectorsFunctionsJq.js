//! Selectors Functions------------------------------------------------------------

function iterateCollectionfunctionJq() {
    buttonTest('iterateCollectionIdTestResultjq', 'interatecollectionjq')
    for (let index = 0; index < 5; index++) {
        let el= $("<p>").text(" This is a P").addClass('pdif')
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
        let div1= $("<div>").text(" This is a div").attr('id', 'div1id')
        $('#parentElementIdTestResultjq').append(div1)

        let el= $("<p>").text(" This is a P")
        $('#div1id').append(el)

    $('#parentElementjq').on('click', function () {
        el.parent().css('fontWeight' , 'bolder')
    })
}

function childrenElementfunctionJq() {
    buttonTest('childrenElementIdTestResultjq', 'childrenElementjq')
        let div1= $("<div>").text(" This is a div").attr('id', 'div1id')
        $('#childrenElementIdTestResultjq').append(div1)

        let el= $("<p>").text(" This is a P")
        $('#div1id').append(el)

    $('#childrenElementjq').on('click', function () {
        $('#div1id').children().css('fontWeight' , 'bolder')
    })
}

function classElementfunctionJq() {
    buttonTest('classElementIdTestResultjq', 'classElemenntjq')
    for (let index = 0; index < 5; index++) {
        let el= $("<p>").text(" This is a P").addClass('pdifjq')
        $('#classElementIdTestResultjq').append(el)
    }


    $('#classElemenntjq').on('click', function () {
        $('.pdifjq').css('font-weight', 'bolder');
    })
}

function getElementbyidfunctionJq() {
    buttonTest('getElementbyidIdTestResultjq', 'getelementbyidjq')
        let el= $("<p>").text(" This is a P").attr('id', 'pOneidjq')
        $('#getElementbyidIdTestResultjq').append(el)

    $('#getelementbyidjq').on('click', function () {
        $('#pOneidjq').css('fontWeight' , 'bolder')
    })
}