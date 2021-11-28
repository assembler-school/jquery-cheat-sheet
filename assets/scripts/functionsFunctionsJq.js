function createElementfunctionJq () {
    var el = $("<span>" + 'text ' + "<span>");
    $('#createElementIdTestResultjq').append(el);

}

function removeElementfunctionJq() {
    buttonTest('removeElementIdTestResultjq',  "button-testjq")
    setTimeout(() => {
        $("#button-testjq").remove();
    }, 3000);
}

function appendElementfunctionJq() {
    var main = $('#appendElementIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    main.append(el)
    setTimeout(() => {
        let span = $('<span>'+ 'this is a Span' +'</span>')
        $(el).append(span)
    }, 3000);
}

function prependElementfunctionJq() {
    var main = $('#prependElementIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    setTimeout(() => {
        let span = $('<span>'+ 'this is a Span' +'</span>')
        main.append(el).prepend(span)
    }, 3000);
}

function createandAddBeforefunctionJq() {
    let mainjq = $('#createandAddBeforeIdTestResultjq')
    let content = '<ul id="menujq"><li id="liFirst" >Services</li><li>About</li><li>Contact</li></ul>'
    mainjq.html(content)
    setTimeout(() => {
        li = $("<li></li>").text('First This');
        li.insertBefore($('#liFirst'))
    }, 3000);
}

function createandAddAfterfunctionJq() {
    let mainjq = $('#createandAddAfterIdTestResultjq')
    content = '<ul id="menujq"><li id="liFirst1" >Services</li><li>About</li><li>Contact</li></ul>'
    mainjq.html(content)
    setTimeout(() => {
        li = $("<li></li>").text('Second This');
        li.insertAfter($('#liFirst1'))
    }, 3000);
}

function clonefunctionJq() {
    var main = $('#cloneIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    main.append(el)
    setTimeout(() => {
        let newElement = $(el).clone()
        newElement.text('This is a P is a clone')
        main.append(newElement)
    }, 3000);
}

function addClassfunctionJq() {
    var main = $('#addClassIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    main.append(el)
    setTimeout(() => {
        $(el).addClass('pClassGreen')
        el.text('This is a P with class')
    }, 3000);
}

function removeClassfunctionJq() {
    var main = $('#removeClassIdTestResultjq')
    let el = $("<p>" + 'This is a P with class ' + "</p>");
    $(el).addClass('pClassGreen')
    main.append(el)
    setTimeout(() => {
        $(el).removeClass('pClassGreen')
        el.text('This is a P without class')
    }, 3000);
}

function toggleClassfunctionJq() {
    buttonTest('toggleClassIdTestResultjq', 'togglebtnjq')
    var main = $('#toggleClassIdTestResultjq')
    let el = $("<p>" + 'This is a P' + "</p>");
    main.append(el)
    $('#togglebtnjq').on('click', function () {
        $(el).toggleClass('pClassGreen')
    })
}

function addDisabledfunctionJq() {
    buttonTest('addDisabledIdTestResultjq', 'addDisabledbtnjq')
    buttonTest('addDisabledIdTestResultjq', 'jqaddDisabled')

    $('#addDisabledbtnjq').on('click', function () {
        $('#jqaddDisabled').attr('disabled', true)
    })
    $('#jqaddDisabled').on('click', function () {
        let el = $("<p>" + 'This is a P' + "</p>");
        $(el).insertAfter($('#jqaddDisabled'))

    })
}

function removeDisabledfunctionJq() {
    buttonTest('removeDisabledIdTestResultjq', 'removeDisabledbtnjq')
    buttonTest('removeDisabledIdTestResultjq', 'removeDisabledjq')
    $('#removeDisabledjq').attr('disabled', true)
    $('#removeDisabledbtnjq').on('click', function () {
        $('#removeDisabledjq').attr('disabled', false)
    })
    $('#removeDisabledjq').on('click', function () {
        let el = $("<p>" + 'This is a P' + "</p>");
        $(el).insertAfter($('#removeDisabledjq'))

    })
}

function removeDataSrcfunctionJq() {
    buttonTest('removeDataSrcIdTestResultjq', 'removeDatasrcbtnjq')
    let imageJq= $('<img>').attr('src', './assets/css/img/10592-EGO-LV1-6-Planet-Eclipse--68-Cal-Fire-Opal-gold---rot.jpg')
    $('#removeDataSrcIdTestResultjq')
    imageJq.addClass('my-img')
    $('#removeDataSrcIdTestResultjq').append(imageJq)
    $(imageJq).attr('data-src', 'This is a Data Src')
    let el = $("<p></p>").text(imageJq.attr('data-src')).insertAfter($(imageJq))

    $('#removeDatasrcbtnjq').on('click', function () {
        $(imageJq).removeAttr('data-src')
        el.text("Don't have Data-src");
        $(el).insertAfter($(imageJq))
    })
}


function hideHTMLfunctionJq() {
    buttonTest('hideHTMLIdTestResultjq', 'hideHTMLbtnjq')
    let el = $("<p>").text(" This is a P")
    $('#hideHTMLIdTestResultjq').append(el)

    $('#hideHTMLbtnjq').on('click', function () {
        $(el).hide()
    })
}

function showHTMLfunctionJq() {
    buttonTest('showHTMLIdTestResultjq', 'showHTMLbtnjq')
    let el = $("<p>").text(" This is a P")
    $('#showHTMLIdTestResultjq').append(el)
    $(el).hide()

    $('#showHTMLbtnjq').on('click', function () {
        $(el).show()
    })
}

function fadeInfunctionJq() {
    buttonTest('fadeInIdTestResultjq', 'fadeInbtnjq')
    let el = $("<p>").text(" This is a P")
    el.attr('id', 'fadeInjq')
    $('#fadeInIdTestResultjq').append(el)
    $("#fadeInjq").css('opacity' , '0');

    $('#fadeInbtnjq').on('click', function () {
        $("#fadeInjq").css('transition' , 'opacity 3s');
        $("#fadeInjq").css('opacity' , '100%');
        // $('#fadeInjq').fadeIn("slow");
    })
}

function fadeOutfunctionJq() {
    buttonTest('fadeOutIdTestResultjq', 'fadeoutbtnjq')
    let el = $("<p>").text(" This is a P")
    el.attr('id', 'fadeoutjq')
    $('#fadeOutIdTestResultjq').append(el)
    $("#fadeoutjq").css('opacity' , '0');

    $('#fadeoutbtnjq').on('click', function () {
        $('#fadeoutjq').fadeOut();("slow");
    })
}