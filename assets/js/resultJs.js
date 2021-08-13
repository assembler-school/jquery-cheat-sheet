
/**************** EVENTS ***************/

// Event 1 -
window.addEventListener('load', () => { 
    document.querySelector('.event1-js').innerHTML ="DOM with JS fully loaded!"
});

// Event 2
let btnEvent2 = document.querySelector('.btn__event-2--js')
btnEvent2.addEventListener('click', () => {
    alert('JS Button clicked!');
})

// Event 3
let btnEvent3 = document.querySelector('.btn__event-3--js')
btnEvent3.addEventListener('dblclick', () => {
    alert('JS Button dblclick!');
})

// Event 4
document.addEventListener('keyup', function(event) { 
    if (event.keyCode === 65) { alert('JS A is pressed!'); } });

// Event 5 
let event5 = document.querySelector('.event-5--js');
event5.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red'
});
event5.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black'
});

// Event 6  
let btnEvent6 = document.querySelector('.btn__event-6--js');
let inputText = document.querySelector('.inputText');
btnEvent6.addEventListener('click', () => inputText.value = 'Totochan');

// Event 7  
let btnEvent7 = document.querySelector('.btn__event-7--js');
let myImgJS = document.querySelector('#myImgJS')
btnEvent7.addEventListener('click', () => {
    myImgJS.onload = function() {        
        alert(`Image JS loaded`);
    }
    myImgJS.setAttribute('src', 'https://images.unsplash.com/photo-1508736375612-66c03035c629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80');
})

// Event 8
let btnEvent8 = document.querySelector('.btn__event-8--js');
let myImg8Js = document.querySelector('#myImg8Js')
btnEvent8.addEventListener('click', () => {
    myImg8Js.onerror = function() {        
        document.querySelector('.event--8-js').innerHTML = "Image JS fails to load"
    }
    myImg8Js.setAttribute('src', 'https://images.unsplash.com/photo');
})

// Event 9 
let myForm = document.querySelector("#myFormJS");
myForm.addEventListener('submit', () => alert("The form was successfully submitted"))

// Event 10   
let target = document.querySelector('.target')
target.addEventListener('change', () => alert('You have choose another option with JS'))

// Event 11 
let btnEvent11 = document.querySelector('.btn__event-11--js');
btnEvent11.addEventListener('mouseover', (event) => {
    event.target.style.background = 'red'
})

// Event 12 
let btnChecked = document.querySelector('.check');
let btnUnchecked = document.querySelector('.uncheck');
let myCheck = document.querySelector('#myCheck')
btnChecked.addEventListener('click', () => myCheck.checked = true);
btnUnchecked.addEventListener('click', () => myCheck.checked = false);

// Event 13  
let listItems = document.querySelectorAll(".list-js li")
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', () => alert(listItems[i].textContent));
}


/**************** FUNCTIONS ***************/

// Function 1
let btnFunction1 = document.querySelector(".btn__function-1--js");
let function1Text = document.querySelector(".function1");
btnFunction1.addEventListener('click', () => {
    let newBtn = document.createElement("p");
    console.log(newBtn)
    newBtn.innerHTML = "Santa Clause of JS is comming!"
    function1Text.appendChild(newBtn);
})

// Function 2
let btnFunction2 = document.querySelector(".btn__function-2--js");
btnFunction2.addEventListener('click', () => {
    let function2Js = document.querySelector("#function2-js");
    function2Js.remove();
})

// Function 3 
let btnFunction3 = document.querySelector(".btn__function-3--js");
let function3 = document.querySelector(".function3");
btnFunction3.addEventListener('click', () => {
    let newEle = document.createElement("p");
    newEle.innerHTML = "Rabbit JS";
    function3.appendChild(newEle);
})

// Function 4 
let btnFunction4 = document.querySelector(".btn__function-4--js");
let function4 = document.querySelector(".function4");
btnFunction4.addEventListener('click', () => {
    let newEle = document.createElement("p");
    let newEleTextNode = document.createTextNode("Rabbit JS");
    newEle.appendChild(newEleTextNode);
    function4.insertBefore(newEle, function4.childNodes[0]);
})

// Function 5 
let btnFunction5 = document.querySelector(".btn__function-5--js");
let function5 = document.querySelector(".function5");
btnFunction5.addEventListener("click", () => {
    let newEle = document.createElement("p");
    newEle.innerHTML = "Rabbit JS";
    function5.after(newEle)
})

// Function 6
let btnFunction6 = document.querySelector(".btn__function-6--js");
let function6 = document.querySelector(".function6");
btnFunction6.addEventListener("click", () => {
    let newEle = document.createElement("p");
    newEle.innerHTML = "Rabbit JS";
    function6.before(newEle)
})

// Function 7 
let btnFunction7 = document.querySelector(".btn__function-7--js");
let list1 = document.querySelector(".list--1");
let list2 = document.querySelector(".list--2");
btnFunction7.addEventListener("click", () => {
    let item = list2.lastElementChild;
    let itemClone = item.cloneNode(true);
    list1.appendChild(itemClone);
})

// Function 8
let btnFunction8 = document.querySelector(".btn__function-8--js");
btnFunction8.addEventListener("click", () => {
    let function8 = document.querySelector(".function8");
    function8.classList.add("addClassJs")
    alert('A JS class has been added')
})

// Function 9
let btnFunction9 = document.querySelector(".btn__function-9--js");
btnFunction9.addEventListener("click", () => {
    let function9 = document.querySelector(".function9");
    function9.classList.remove("removeClassJS")
    alert('A JS class has been removed')
})

// Function 10
let btnFunction10 = document.querySelector(".btn__function-10--js");
btnFunction10.addEventListener("click", () => {
    let function10 = document.querySelector(".function10");
    function10.classList.toggle("toggleClassJS")
    alert('A Js class has been toggled')
})


// Function 11
let btnFunction11Js = document.querySelector(".btn__function-11--js");
let disabledBtn11Js = document.querySelector(".btn__disabled11--js");
btnFunction11Js.addEventListener("click", () => {
    disabledBtn11Js.disabled = true;
})

// Function 12
let btnFunction12Js = document.querySelector(".btn__function-12--js");
let disabledBtn12Js = document.querySelector(".btn__disabled12--js");
btnFunction12Js.addEventListener("click", () => {
    disabledBtn12Js.disabled = false;
})

// Function 13
let btnFunction13Js = document.querySelector(".btn__function-13--js");
btnFunction13Js.addEventListener("click", () => {
    let img13Js = document.querySelector("#img-13--js");
    img13Js.setAttribute("src", "assets/image/snoopy/snoopy10.svg")
})

// Function 14
let btnFunction14Js = document.querySelector(".btn__function-14--js");
btnFunction14Js.addEventListener("click", () => {
    let img14 = document.querySelector("#img-14--js");
    img14.removeAttribute("src")
})

// Function 15
let btnFunction15Js = document.querySelector(".btn__function-15--js");
btnFunction15Js.addEventListener("click", () => {
    let img15js = document.querySelector("#img-15--js");
    img15js.style.display = "none";
})

// Function 16
let btnFunction16Js = document.querySelector(".btn__function-16--js");
btnFunction16Js.addEventListener("click", () => {
    let img16js = document.querySelector("#img-16--js");
    img16js.style.display = "block";
})

// Function 17, 18 : use Jquery

/**************** SeLECTORS ***************/
// Selector 1
let btnSelector1 = document.querySelector(".btn__selector-1--js");
btnSelector1.addEventListener('click', () => {
    let allElements = document.querySelectorAll('.selector--1');
    allElements.forEach(element => {
        element.style.color = 'green';
    })
})

// Selector 2
let btnSelector2 = document.querySelector(".btn__selector-2--js");
btnSelector2.addEventListener('click', () => {
    let spanSelector2 = document.querySelector('.span-selector--2').parentElement;
    spanSelector2.style.fontWeight = '100';
})

// Selector 3
let btnSelector3 = document.querySelector(".btn__selector-3--js");
btnSelector3.addEventListener('click', () => {
    let listSelector3 = document.querySelector('.list__selector-3').children;
    for (let i = 0; i < listSelector3.length; i++ ) {
        listSelector3[i].style.fontWeight = '200';
    }
})

// Selector 4
let btnSelector4 = document.querySelector(".btn__selector-4--js");
btnSelector4.addEventListener('click', () => {
    let itemSelector4 = document.querySelectorAll('.item__selector-4');
    itemSelector4.forEach(element => {
        element.style.fontWeight = '900';
    })
})


// Selector 5
let btnSelector5 = document.querySelector('.btn__selector-5--js');
btnSelector5.addEventListener('click', () => {
    let quoteSelector5 = document.querySelector('#quote__selector-5');
    quoteSelector5.style.fontWeight = '900';   
})

// Selector 6 
let btnSelector6 = document.querySelector('.btn__selector-6--js');
btnSelector6.addEventListener('click', () => {
    let itemSelector6 = document.querySelectorAll('[class~=item__selector-6--js], [style="display:none"]');
    itemSelector6.forEach(element => {
        element.style.color = 'orange';
        element.style.display = 'block';
    })
})

// Selector 7
let btnSelector7 = document.querySelector('.btn__selector-7--js');
btnSelector7.addEventListener('click', () => {
    let dropdownList = document.querySelector('#characters');
    let selectedOpt = dropdownList.value;
    alert(`${selectedOpt}`);
})

// Selector 8 
let btnSelector8 = document.querySelector('.btn__selector-8--js')
btnSelector8.addEventListener('click', () => {
    let firstElement = document.querySelector('.bootcamp__list').firstElementChild;
    firstElement.setAttribute('href', 'https://www.udacity.com/')
    firstElement.innerHTML = 'Udacity'
})

// Selector 9
let btnSelector9 = document.querySelector('.btn__selector-9--js');
btnSelector9.addEventListener('click', () => {
    var person = prompt('What is ur name ?')
    if (person != null) {
        alert(person)
    }
})

// Selector 10  
let btnSelector10 = document.querySelector('.btn__selector-10--js');
btnSelector10.addEventListener('click', () => {
    let list10 = document.querySelectorAll('.list__selector-10--js')
    list10.forEach((element) => element.remove())
})

// Selector 11 
setTimeout(function() {
    let selector11 = document.querySelector('#selector-11')
    selector11.style.width = '200px'
},5000)


