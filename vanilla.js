//__Selector Functions
function jsChangeParentWeight() {
    document.getElementById('pId').parentElement.style.fontWeight = "bold";
}

function jsChangeCollectionWeight() {
    var childElem = document.getElementById('runID').children;
    for (let i = 0; i < childElem.length; i++) {
        childElem[i].style.fontWeight = 'bold';
    }
}

function jsChangeClassWeight() {
    document.querySelector('.changeWeight').style.fontWeight = 'bold';
}

function jsChangeIdWeight() {
    document.getElementById('pId').style.fontWeight = 'bold';
}

function jsClassAndDisplay() {
    var elemDisplay = document.querySelector('.changeWeight').style.display;
    if (elemDisplay == 'none') {
        document.querySelector('.changeWeight').style.display = 'block';
        document.querySelector('.changeWeight').style.color = 'blue';
        document.querySelector('.changeWeight').style.fontWeight = 'bold';
    }
}

function jsGetFromSelect() {
    var e = document.getElementById('selectOptions');
    e.onchange = function () {
        var divResult = document.querySelector('#resultFunction');
        var strUser = "Option: " + e.value;
        divResult.innerHTML = "";
        divResult.append(strUser);
    }
}

function jsChangeLink() {
    document.getElementsByTagName('a')[0].href = "https://es.wikipedia.org/wiki/GitHub";
    document.getElementsByTagName('a')[0].innerText = "https://es.wikipedia.org/wiki/GitHub"
    document.querySelector('#runID p').innerText = "GitHub wiki: ";
}

function jsAlertInput() {
    var value = document.querySelector('#runID input').value;
    alert(value);
}

function jsRemoveOption() {
    var selectBox = document.getElementById('selectOptions');
    var optionsList = selectBox.options;
    for (let i = optionsList.length; i >= 0; i--) {
        selectBox.remove(i);
    }
}

//__Selector Functions
let parag;
function addTextContent(text, id, style1, style2) {
    parag = document.createElement('p');
    parag.setAttribute('id', id);
    parag.textContent = text;
    parag.style.marginLeft = style1;
    parag.style.marginTop = style2;
}

function styleOne(style1, style2) {
    parag.style.marginLeft = style1;
    parag.style.marginTop = style2;
}

function styleTwo(style1, style2) {
    parag.style.marginBottom = style1;
    parag.style.textDecoration = style2;
}

//Not finished
function jsAnimateLoad() {

}

function jsAppendElement() {
    var select = document.getElementById('runID');
    select.removeChild(select.lastChild);

    addTextContent('- Enric Juliana -', 'addedParag');
    styleOne('150px', '20px');

    document.querySelectorAll('#runID p')[1].appendChild(parag);
}

function jsRemoveElement() {
    document.getElementById('pId').remove();
}

function jsAppendParentElement() {
    var select = document.getElementById('runID');
    select.removeChild(select.lastChild);

    addTextContent('- Enric Juliana -', 'addedParag');
    styleOne('150px', '20px');

    document.getElementById('runID').appendChild(parag);
}

function jsPrependParentElement() {
    var select = document.getElementById('runID');
    select.removeChild(select.firstChild);

    addTextContent('Filosofía y Letras', 'prependParag');
    styleTwo('10px', 'underline black');

    document.getElementById('runID').prepend(parag);
}

function jsApppendAfterElement() {
    var childrens = document.getElementById('rightModalContent').children;
    if (childrens.length > 1) {
        childrens[1].remove();
    }

    addTextContent('Empezando por ti mismo', 'afterParag');
    styleTwo('10px', 'underline black');

    document.getElementById('runID').after(parag);
}

function jsApppendBeforeElement() {
    var childrens = document.getElementById('rightModalContent').children;
    if (childrens.length > 1) {
        childrens[0].remove();
    }

    addTextContent('Filosofía y Letras', 'BeforeParag');
    styleTwo('0', 'underline black');

    document.getElementById('runID').before(parag);
}

function jsCloneElement() {
    var childrens = document.getElementById('rightModalContent').children;
    if (childrens.length > 1) {
        childrens[1].remove();
    }
    var clonedElement = document.getElementById('runID').cloneNode(true);
    document.getElementById('rightModalContent').appendChild(clonedElement);
}

function jsAddClass() {
    var elementParag = document.querySelectorAll('#runID p');
    elementParag[0].classList.add('newClass');
    elementParag[1].classList.add('newClass');
}

function jsRemoveClass() {
    var elementParag = document.querySelectorAll('#runID p');
    elementParag[0].classList.remove('changeWeight');
}

function jsToggleClass() {
    var elementParag = document.querySelectorAll('#runID p');
    elementParag[0].classList.toggle('newClass');
    elementParag[1].classList.toggle('newClass');
}

function jsAddDisabled() {
    var button = document.querySelector('#runID button');
    button.setAttribute('disabled', true);
}

function jsRemoveDisabled() {
    var button = document.querySelector('#runID button');
    button.removeAttribute('disabled');
}

function jsSetData() {
    var img = document.querySelector('#rightModalContent img');
    img.setAttribute('data-src', 'This is the DATA-SRC: https://i.pinimg.com/originals/bd/c0/99/bdc099373d6acbce20fe7179ba9372e4.jpg')
}

function jsRemoveData() {
    var img = document.querySelector("#rightModalContent img");
    img.removeAttribute("data-src");
}

//Start multiple function
function hideElement() {
    document.querySelector('#runID p').style.display = 'none';
}

function jsHideElement() {
    addTextContent('Hide clicking on me');
    document.getElementById('runID').appendChild(parag);
    document.querySelector('#runID p').setAttribute('onclick', 'hideElement()');
}
//End multiple function

function jsShowElement() {
    document.querySelector('#runID p').style.display = 'block';
}

function jsIterateStyle() {
    var items = document.querySelectorAll('#runID li');
    items.forEach((value) => {
        value.style.color = '#005eff';
    });
}

//__________Events Functions_________//
//
//---------- On Load HTML Document ---------//
function jsLoadPage() {
    $( document ).ready(function() {
        console.log( "ready!" );
    });
};
//---------- On Clicked HTML ---------------//
function jsClickedElement() {
    $( document ).ready(function() {
        console.log( "ready!" );
    });
};
//---------- On Double Clicked HTML --------//
function jsDobleClicked() {
    $('#eventsForm img').dblclick(function () {
        $('#eventsForm img').css({'display':'none'});
        $('#eventsForm').css({'width':'100%'});
    })
};
//---------- On Press Keyboard Key ---------//
function jsPressKey() {
    $('#eventsForm img').keypress(function () {
        $('#eventsForm img').css({'display':'none'});
        $('#eventsForm').css({'width':'100%'});
    })
};
//---------- On Mouse Move -----------------//
function jsMouseMoved() {
    $("#eventsForm").append('<p>');
    $(document).mousemove(function(event){
        $("#eventsForm p").html("Pos X: "+event.pageX + " | Pos Y: "+event.pageY+"");
        $("#eventsForm p").css({'margin-top':'10px'})
    });
}
//---------- On Input Change ---------------//
function jsInputChange() {
    $("#eventsForm input").change(function () {
        $("#eventsForm #nameInput").css({'border':'2px solid rgb(0, 94, 255)'});
    });
}
//---------- On Load Image -----------------//
function jsLoadImage() {
    $("#eventsForm img").load(function () {
        $('#eventsForm img').css({ 'display': 'none' });
        $('#eventsForm').css({ 'width': '100%' });
    });
}
//---------- On Fail Load Image ---------//
function jsFailLoadImage() {
    $("#eventsForm img").attr('src','');
    $("#eventsForm img").error(function () {
        $('#eventsForm').css({ 'width': '100%' });
    });
}
//---------- On Submit Form --------//
function jsSubmitedForm() {
    console.log("Sended!");
    //$("#eventsForm").append('<p>');
    $('#eventsForm').submit(function(event){
        console.log("Sended!");
        event.preventDefault();
    });
}
