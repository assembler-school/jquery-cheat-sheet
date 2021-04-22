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
    if ( elemDisplay == 'none' ) {
        elemDisplay.style.display = 'block';
        elemDisplay.style.fontWeight = 'bold';
    }
}