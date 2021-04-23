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
    for (let i = optionsList.length; i >= 0 ; i--) {
        selectBox.remove(i);
    }
}