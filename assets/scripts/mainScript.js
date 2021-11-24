function createDiv(name, jsText, jqText) {
    let content= `<div class="lineItem">`
    content += `<h2>${name} </h2> <button id="displayDiv" class="btn btn-secondary btn-lg" >Click to See more </button>
    </div>`
    content += `<div id='button-display' class="contentTests hide">`
    
    content += `<div class="firstLine"><h4>JS</h4> <button class="btn btn-warning btn-lg">TRY</button>`
    
    content+=`<h5>${jsText}</h5>`
    
    content+=`<div id="jsTest" class="divTest"></div></div>`
    
    content+= `<div class="firstLine"><h4>JQ</h4>  <button class="btn btn-warning btn-lg">TRY</button><h5> ${jqText}</h5><div id="jqTest" class="divTest">
    <button class="btn btn-danger btn-lg"> test</button></div></div> `
    
    content += `</div>`
    
    divContent = document.getElementById('content')
    
    divContent.innerHTML= content
    
    showButton =document.getElementById('displayDiv')
    showButton.addEventListener('click', hideFunc)
    
}

//createDiv('Button', 'document.createElement("button") ', '${<button/>}')

var allElements= [
    {
        title: `Button`,
        jsText: `document.createElement('button')`,
        jqText: '${&lt; button &gt; }'
    },
]

function pepe() {
    allElements.forEach( function (elem) {
        createDiv( elem.title, elem.jsText, elem.jqText)
    })
}


function hideFunc(){
    divToHide= document.getElementById('button-display')
    console.log(divToHide.classList)
    if( divToHide.classList[1] == 'show'){
        divToHide.classList.remove('show')
        divToHide.classList.add('hide')
    }else
    if (divToHide.classList[1] == 'hide'){
        divToHide.classList.remove('hide')
        divToHide.classList.add('show')
    }
}
