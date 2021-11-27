function createDiv(title, idButtonClick, divdisplay, functionIdJs, functionJs, jsText, IdTestResultjs, functionIdJq, functionJq, jqText, IdTestResultjq) {
    let content = `<div class="lineItem">`
    content += `<h2>${title} </h2> <button id="${idButtonClick}" class="btn btn-secondary btn-lg" >Click to See more </button>
    </div>`
    content += `<div id='${divdisplay}' class="contentTests hide">`

    content += `<div class="firstLine"><h4>JavaScript </h4> <button id="${functionIdJs}" class="btn btn-warning btn-lg">TRY</button>`

    content += `<h5>${jsText}</h5>`

    content += `<div id="${IdTestResultjs}" class="divTest"></div></div>`

    content += `<div class="firstLine"><h4>JQuery</h4>  <button id="${functionIdJq}" class="btn btn-warning btn-lg">TRY</button>`
    content += `<h5> ${jqText}</h5>`

    content += `<div id="${IdTestResultjq}" class="divTest"></div></div> `

    content += `</div>`

    divContent = document.getElementById('content')

    divContent.innerHTML += content

}


var allFunctions = [
    {
        title: `Create Element`,
        idButtonClick: 'createElementidButtonClick',
        divdisplay: 'createElementdivdisplay',
        functionIdJs: 'createElementfunctionIdJs',
        functionJs: () => { createElementfunctionJs() },
        jsText: 'el = document.createElement("span");<br>el.innerHTML = "text";',
        IdTestResultjs: 'createElementIdTestResultjs',
        functionIdJq: 'createElementfunctionIdJq',
        functionJq: () => { createElementfunctionJq() },
        jqText: 'var el = $("&lt;span&gt; "+"text" +"&lt;span&gt;");<br> var div = $("#foo")',
        IdTestResultjq: 'createElementIdTestResultjq'
    },
    {
        title: `Remove Element`,
        idButtonClick: 'removeElementidButtonClick',
        divdisplay: 'removeElementdivdisplay',
        functionIdJs: 'removeElementfunctionIdJs',
        functionJs: () => { removeElementfunctionJs() },
        jsText: "var myobj=document.getElementById('button-test');<br> myobj.remove();",
        IdTestResultjs: 'removeElementIdTestResultjs',
        functionIdJq: 'removeElementfunctionIdJq',
        functionJq: () => { removeElementfunctionJq() },
        jqText: ' $("#button-test").remove();',
        IdTestResultjq: 'removeElementIdTestResultjq'
    },
    {
        title: `Append Element`,
        idButtonClick: 'appendElementidButtonClick',
        divdisplay: 'appendElementdivdisplay',
        functionIdJs: 'appendElementfunctionIdJs',
        functionJs: () => { appendElementfunctionJs() },
        jsText: " let p = document.createElement('p')<br>p.textContent= 'P append on Button' <br>btn.append(p)",
        IdTestResultjs: 'appendElementIdTestResultjs',
        functionIdJq: 'appendElementfunctionIdJq',
        functionJq: () => { appendElementfunctionJq() },
        jqText: ' var el = $("&lt;p&gt;" + "P append on Div " + "&lt;p&gt;");<br>btn.append(el);;',
        IdTestResultjq: 'appendElementIdTestResultjq'
    },
    {
        title: `Prepend  Element`,
        idButtonClick: 'prependElementidButtonClick',
        divdisplay: 'prependElementdivdisplay',
        functionIdJs: 'prependElementfunctionIdJs',
        functionJs: () => { prependElementfunctionJs() },
        jsText: "let div = document.createElement('div')<br>let p=document.createElement('p')<br>div.prepend(p)",
        IdTestResultjs: 'prependElementIdTestResultjs',
        functionIdJq: 'prependElementfunctionIdJq',
        functionJq: () => { prependElementfunctionJq() },
        jqText: ' $("div").prepend("&lt;p&gt;Test&lt;/p&gt;");',
        IdTestResultjq: 'prependElementIdTestResultjq'
    },
    {
        title: `Create and Add  Element Before`,
        idButtonClick: 'createandAddBeforeidButtonClick',
        divdisplay: 'createandAddBeforedivdisplay',
        functionIdJs: 'createandAddBeforefunctionIdJs',
        functionJs: () => { createandAddBeforefunctionJs() },
        jsText: '&lt;ul id="menujs"&gt; <br>   &ensp;&lt;li&gt;Services&lt;/li&gt; <br>  &ensp;&lt;li&gt;About &lt;/li&gt; <br>  &ensp;&lt;li&gt;Contact&lt;/li&gt; <br> &lt;/ul&gt; <br>  menu=document.getElementById("menujs"); <br>  li = document.createElement("li"); <br> li.innerText= "First This" <br> menu.insertBefore(li,menu.firstElementChild); ',
        IdTestResultjs: 'createandAddBeforeIdTestResultjs',
        functionIdJq: 'createandAddBeforefunctionIdJq',
        functionJq: () => { createandAddBeforefunctionJq() },
        jqText: 'content = "&lt;ulid="menujq"&gt;<br>&ensp;&lt;li id="liFirst" &gt;Services&lt;/li&gt; <br>&ensp; &lt;li&gt;About&lt;/li&gt; <br>&ensp; &lt;li&gt;"Contact&lt;/li&gt; <br> &lt;/ul&gt; <br> li=$("&lt;li&gt;&lt;/li&gt;").text("First This"); li.insertBefore($("#liFirst")) mainjq.html(content);',
        IdTestResultjq: 'createandAddBeforeIdTestResultjq'
    },
    {
        title: `Create and Add  Element After`,
        idButtonClick: 'createandAddAfteridButtonClick',
        divdisplay: 'createandAddAfterdivdisplay',
        functionIdJs: 'createandAddAfterfunctionIdJs',
        functionJs: () => { createandAddAfterfunctionJs() },
        jsText: '&lt;ul id="menujs"&gt; <br>   &ensp;&lt;li&gt;Services&lt;/li&gt; <br>  &ensp;&lt;li&gt;About &lt;/li&gt; <br>  &ensp;&lt;li&gt;Contact&lt;/li&gt; <br> &lt;/ul&gt; <br>  menu=document.getElementById("menujs"); <br>  li = document.createElement("li"); <br> li.innerText= "Second This" <br> menu.firstElementChild.after(li); ',
        IdTestResultjs: 'createandAddAfterIdTestResultjs',
        functionIdJq: 'createandAddAfterfunctionIdJq',
        functionJq: () => { createandAddAfterfunctionJq() },
        jqText: 'content = "&lt;ulid="menujq"&gt;<br>&ensp;&lt;li id="liFirst" &gt;Services&lt;/li&gt; <br>&ensp; &lt;li&gt;About&lt;/li&gt; <br>&ensp; &lt;li&gt;"Contact&lt;/li&gt; <br> &lt;/ul&gt; <br> li=$("&lt;li&gt;&lt;/li&gt;").text("First This"); li.insertAfter($("#liFirst")) mainjq.html(content);',
        IdTestResultjq: 'createandAddAfterIdTestResultjq'
    },
    {
        title: `Create clone`,
        idButtonClick: 'cloneidButtonClick',
        divdisplay: 'clonedivdisplay',
        functionIdJs: 'clonefunctionIdJs',
        functionJs: () => { clonefunctionJs() },
        jsText: 'let pOne = document.createElement("p") <br> let newElement = pOne.cloneNode(true);',
        IdTestResultjs: 'cloneIdTestResultjs',
        functionIdJq: 'clonefunctionIdJq',
        functionJq: () => { clonefunctionJq() },
        jqText: 'let el = $("&lt;p&gt;"+"This is a P "+"&lt;/p&gt;"); <br> let newElement = $(el).clone()',
        IdTestResultjq: 'cloneIdTestResultjq'
    },
    {
        title: `Add Class`,
        idButtonClick: 'addClassidButtonClick',
        divdisplay: 'addClassdivdisplay',
        functionIdJs: 'addClassfunctionIdJs',
        functionJs: () => { addClassfunctionJs() },
        jsText: 'let pOne = document.createElement("p") <br> pOne.classList.add("pClassGreen")',
        IdTestResultjs: 'addClassIdTestResultjs',
        functionIdJq: 'addClassfunctionIdJq',
        functionJq: () => { addClassfunctionJq() },
        jqText: 'let el = $("&lt;p&gt;"+"This is a P "+"&lt;/p&gt;"); <br> $(el).addClass("pClassGreen")',
        IdTestResultjq: 'addClassIdTestResultjq'
    },
    {
        title: `Remove Class`,
        idButtonClick: 'removeClassidButtonClick',
        divdisplay: 'removeClassdivdisplay',
        functionIdJs: 'removeClassfunctionIdJs',
        functionJs: () => { removeClassfunctionJs() },
        jsText: 'let pOne = document.createElement("p") <br> pOne.classList.remove("pClassGreen")',
        IdTestResultjs: 'removeClassIdTestResultjs',
        functionIdJq: 'removeClassfunctionIdJq',
        functionJq: () => { removeClassfunctionJq() },
        jqText: 'let el = $("&lt;p&gt;"+"This is a P"+"&lt;/p&gt;"); <br> $(el).removeClass("pClassGreen")',
        IdTestResultjq: 'removeClassIdTestResultjq'
    },
    {
        title: `Toggle Class`,
        idButtonClick: 'toggleClassidButtonClick',
        divdisplay: 'toggleClassdivdisplay',
        functionIdJs: 'toggleClassfunctionIdJs',
        functionJs: () => { toggleClassfunctionJs() },
        jsText: 'let pOne = document.createElement("p") <br>  pOne.classList.toggle("pClassGreen");',
        IdTestResultjs: 'toggleClassIdTestResultjs',
        functionIdJq: 'toggleClassfunctionIdJq',
        functionJq: () => { toggleClassfunctionJq() },
        jqText: 'let el = $("&lt;p&gt;"+"This is a P "+"&lt;/p&gt;"); <br>  $(el).toggleClass("pClassGreen")',
        IdTestResultjq: 'toggleClassIdTestResultjq'
    },
    {
        title: `Add Disabled Attribute `,
        idButtonClick: 'addDisabledidButtonClick',
        divdisplay: 'addDisableddivdisplay',
        functionIdJs: 'addDisabledfunctionIdJs',
        functionJs: () => { addDisabledfunctionJs() },
        jsText: "let btnTwo= document.getElementById('AddDisabledjs') <br> btnTwo.disabled = true; ",
        IdTestResultjs: 'addDisabledIdTestResultjs',
        functionIdJq: 'addDisabledfunctionIdJq',
        functionJq: () => { addDisabledfunctionJq() },
        jqText: " $('#addDisabledjq').attr('disabled', true)",
        IdTestResultjq: 'addDisabledIdTestResultjq'
    },
    {
        title: `Remove Disabled Attribute `,
        idButtonClick: 'removeDisabledidButtonClick',
        divdisplay: 'removeDisableddivdisplay',
        functionIdJs: 'removeDisabledfunctionIdJs',
        functionJs: () => { removeDisabledfunctionJs() },
        jsText: "let btnTwo= document.getElementById('removeDisabledjs') <br> btnTwo.disabled = false; ",
        IdTestResultjs: 'removeDisabledIdTestResultjs',
        functionIdJq: 'removeDisabledfunctionIdJq',
        functionJq: () => { removeDisabledfunctionJq() },
        jqText: " $('#removeDisabledjq').attr('disabled', false)",
        IdTestResultjq: 'removeDisabledIdTestResultjq'
    },
    {
        title: `Set Data-src Attribute `,
        idButtonClick: 'setDataSrcidButtonClick',
        divdisplay: 'setDataSrcdivdisplay',
        functionIdJs: 'setDataSrcfunctionIdJs',
        functionJs: () => { setDataSrcfunctionJs() },
        jsText: "let image = document.createElement('img') <br> image.setAttribute('data-src', 'This is a Data Src');",
        IdTestResultjs: 'setDataSrcIdTestResultjs',
        functionIdJq: 'setDataSrcfunctionIdJq',
        functionJq: () => { setDataSrcfunctionJq() },
        jqText: " imageJq= $('&lt;img&gt;') <br> $(imageJq).attr('data-src', 'This is a Data Src')",
        IdTestResultjq: 'setDataSrcIdTestResultjq'
    },
    {
        title: `Remove Data-src Attribute `,
        idButtonClick: 'removeDataSrcidButtonClick',
        divdisplay: 'removeDataSrcdivdisplay',
        functionIdJs: 'removeDataSrcfunctionIdJs',
        functionJs: () => { removeDataSrcfunctionJs() },
        jsText: "let image = document.createElement('img') <br> image.removeAttribute('data-src');",
        IdTestResultjs: 'removeDataSrcIdTestResultjs',
        functionIdJq: 'removeDataSrcfunctionIdJq',
        functionJq: () => { removeDataSrcfunctionJq() },
        jqText: " imageJq= $('&lt;img&gt;') <br> $(imageJq).removeAttr('data-src')",
        IdTestResultjq: 'removeDataSrcIdTestResultjq'
    },
    {
        title: `Hide HTML Element `,
        idButtonClick: 'hideHTMLidButtonClick',
        divdisplay: 'hideHTMLdivdisplay',
        functionIdJs: 'hideHTMLfunctionIdJs',
        functionJs: () => { hideHTMLfunctionJs() },
        jsText: "let pOne = document.createElement('p') <br>  pOne.style.display= 'none' ",
        IdTestResultjs: 'hideHTMLIdTestResultjs',
        functionIdJq: 'hideHTMLfunctionIdJq',
        functionJq: () => { hideHTMLfunctionJq() },
        jqText: 'let el = $("&lt;p&gt;").text(" This is a P") <br>  $(el).hide()',
        IdTestResultjq: 'hideHTMLIdTestResultjq'
    },
    {
        title: `show HTML Element `,
        idButtonClick: 'showHTMLidButtonClick',
        divdisplay: 'showHTMLdivdisplay',
        functionIdJs: 'showHTMLfunctionIdJs',
        functionJs: () => { showHTMLfunctionJs() },
        jsText: "let pOne = document.createElement('p') <br>  pOne.style.display= 'block'",
        IdTestResultjs: 'showHTMLIdTestResultjs',
        functionIdJq: 'showHTMLfunctionIdJq',
        functionJq: () => { showHTMLfunctionJq() },
        jqText: 'let el = $("&lt;p&gt;").text(" This is a P") <br>  $(el).show()',
        IdTestResultjq: 'showHTMLIdTestResultjq'
    },
    {
        title: `Fade in  HMTL `,
        idButtonClick: 'fadeInidButtonClick',
        divdisplay: 'fadeIndivdisplay',
        functionIdJs: 'fadeInfunctionIdJs',
        functionJs: () => { fadeInfunctionJs() },
        jsText: "let pOne = document.createElement('p') <br>  pOne.style.transition='opacity 1s'; <br>  pOne.style.opacity= '100%';",
        IdTestResultjs: 'fadeInIdTestResultjs',
        functionIdJq: 'fadeInfunctionIdJq',
        functionJq: () => { fadeInfunctionJq() },
        jqText: '  $("#fadeInjq").fadeIn("slow");',
        IdTestResultjq: 'fadeInIdTestResultjq'
    },
    {
        title: `Fade Out  HMTL `,
        idButtonClick: 'fadeOutidButtonClick',
        divdisplay: 'fadeOutdivdisplay',
        functionIdJs: 'fadeOutfunctionIdJs',
        functionJs: () => { fadeOutfunctionJs() },
        jsText: "let pOne = document.createElement('p') <br>  pOne.style.transition='opacity 1s'; <br>  pOne.style.opacity= '0';",
        IdTestResultjs: 'fadeOutIdTestResultjs',
        functionIdJq: 'fadeOutfunctionIdJq',
        functionJq: () => { fadeOutfunctionJq() },
        jqText: '  $("#fadeOutjq").fadeOut("slow");',
        IdTestResultjq: 'fadeOutIdTestResultjq'
    },
]

var allSelectors = [
    {
        title: `Iterate a collection of elements`,
        idButtonClick: 'iterateCollectionidButtonClick',
        divdisplay: 'iterateCollectiondivdisplay',
        functionIdJs: 'iterateCollectionfunctionIdJs',
        functionJs: () => { iterateCollectionfunctionJs() },
        jsText: " allP = document.querySelectorAll('p') <br> allP.forEach(element => { <br> element.classList.add('pClassGreen') <br> });",
        IdTestResultjs: 'iterateCollectionIdTestResultjs',
        functionIdJq: 'iterateCollectionfunctionIdJq',
        functionJq: () => { iterateCollectionfunctionJq() },
        jqText: "$('p').each(function (indexInArray, valueOfElement) { <br> $(valueOfElement).addClass('pClassGreen') <br> })",
        IdTestResultjq: 'iterateCollectionIdTestResultjq'
    },
    {
        title: `Parent Element`,
        idButtonClick: 'parentElementidButtonClick',
        divdisplay: 'parentElementdivdisplay',
        functionIdJs: 'parentElementfunctionIdJs',
        functionJs: () => { parentElementfunctionJs() },
        jsText: " parent= pOne.parentElement <br> parent.style.fontWeight = 'bolder';",
        IdTestResultjs: 'parentElementIdTestResultjs',
        functionIdJq: 'parentElementfunctionIdJq',
        functionJq: () => { parentElementfunctionJq() },
        jqText: " el.parent().css('fontWeight' , 'bolder')",
        IdTestResultjq: 'parentElementIdTestResultjq'
    },
    {
        title: `Children Element`,
        idButtonClick: 'childrenElementidButtonClick',
        divdisplay: 'childrenElementdivdisplay',
        functionIdJs: 'childrenElementfunctionIdJs',
        functionJs: () => { childrenElementfunctionJs() },
        jsText: " children= divOne.childrenElement <br> children.style.fontWeight = 'bolder';",
        IdTestResultjs: 'childrenElementIdTestResultjs',
        functionIdJq: 'childrenElementfunctionIdJq',
        functionJq: () => { childrenElementfunctionJq() },
        jqText: " $('#div1id').children().css('fontWeight' , 'bolder')",
        IdTestResultjq: 'childrenElementIdTestResultjq'
    },
    {
        title: `Class Element`,
        idButtonClick: 'classElementidButtonClick',
        divdisplay: 'classElementdivdisplay',
        functionIdJs: 'classElementfunctionIdJs',
        functionJs: () => { classElementfunctionJs() },
        jsText: " elems = document.getElementsByClassName('pdif') <br> for (var i = 0; i < elems.length; ++i) { <br> elems[i].style.fontWeight = 'bolder'; <br>}  " ,
        IdTestResultjs: 'classElementIdTestResultjs',
        functionIdJq: 'classElementfunctionIdJq',
        functionJq: () => { classElementfunctionJq() },
        jqText: " $('.pdifjq').css('font-weight', 'bolder'); ",
        IdTestResultjq: 'classElementIdTestResultjq'
    },
    {
        title: `Get Element By Id`,
        idButtonClick: 'getElementbyididButtonClick',
        divdisplay: 'getElementbyiddivdisplay',
        functionIdJs: 'getElementbyidfunctionIdJs',
        functionJs: () => { getElementbyidfunctionJs() },
        jsText: "  pOneId= document.getElementById('pOneidjs') <br> pOneId.style.fontWeight = 'bolder';  " ,
        IdTestResultjs: 'getElementbyidIdTestResultjs',
        functionIdJq: 'getElementbyidfunctionIdJq',
        functionJq: () => { getElementbyidfunctionJq() },
        jqText: " $('#pOneidjq').css('fontWeight' , 'bolder') ",
        IdTestResultjq: 'getElementbyidIdTestResultjq'
    },
]



function pepe() {
    allSelectors.forEach(function (elem) {
        createDiv(elem.title, elem.idButtonClick, elem.divdisplay, elem.functionIdJs, elem.functionJs, elem.jsText, elem.IdTestResultjs, elem.functionIdJq, elem.functionJq, elem.jqText, elem.IdTestResultjq)
    })

    allSelectors.forEach(function (elem) {
        let divdisplay = document.getElementById(elem.divdisplay)

        let showButton = document.getElementById(elem.idButtonClick)
        showButton.addEventListener('click', function () {
            divdisplay.classList.toggle("hide");
        })

        let callFunctionjs = document.getElementById(elem.functionIdJs)
        callFunctionjs.addEventListener('click', elem.functionJs)

        let callFunctionjq = document.getElementById(elem.functionIdJq)
        callFunctionjq.addEventListener('click', elem.functionJq)
    })
}


function hideFunc() {
    divToHide = document.getElementById('button-display')
    console.log(divToHide.classList)
    if (divToHide.classList[1] == 'show') {
        divToHide.classList.remove('show')
        divToHide.classList.add('hide')
    } else
        if (divToHide.classList[1] == 'hide') {
            divToHide.classList.remove('hide')
            divToHide.classList.add('show')
        }
}

function buttonTest(father, id) {
    var btn = document.createElement('button')
    btn.textContent = 'Button Test'
    btn.setAttribute('id', id)
    btn.classList.add('btn')
    btn.classList.add('btn-danger')
    divtest = document.getElementById(father)
    divtest.appendChild(btn)
}
