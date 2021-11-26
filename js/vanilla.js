

function removeMe(btn1, par) {
    let x = document.getElementById("vanilla")

    x.removeChild(btn1)
}

function createVanilla(btn1, par) {
    let r = document.createElement("p")
    r.innerText = "I´m Mr Meeseeks look at me! "
par.appendChild(r)

}

function appendVanilla(btn1, par) {
    let z = document.createElement("p")
    z.innerText = "I´m a child!... Element "
par.appendChild(z)
}

function prependVanilla(btn1, par) {
    par.insertBefore(x, btn1)
}

function createAddVanilla(btn1, par) {
    par.appendChild(document.createElement("p")).innerText = "Father, I´m alive!"
}

function createAddbeforeVanilla(btn1, par) {
    par.insertBefore(document.createElement("p"), btn1).innerText = "Ninja Attack!"
}

function clonate(btn1, par) {
let cl = btn1.cloneNode(true)
par.appendChild(cl)
}

function addClassVanilla(btn1, par){
    btn1.setAttribute("class", "trial")
}

function removeClassVanilla(btn1, par) {
    btn1.classList.remove("trial2")
}

function vanillaClassToogle(btn1, par) {
    btn1.classList.toggle("trial2")
}

function disabledVanilla(btn1, par) {
    btn1.setAttribute("disabled", "true")
}

function fixDisabledVanilla(btn1, par, x) {
    document.getElementById("dummy").disabled = false
}

function vanillaHideF(btn1, par) {
document.getElementById("dark").style.visibility = "hidden";
}

function vanillaShowF(btn1, par, h){
    h.style.display = "block";
}

function painInTheAss(btn1, par, m){
  let cry = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    let i = 0
let x = setInterval(() => {
  i++
      m.style.opacity = cry[i]
        console.log("I work")
        console.log(i)
    if( i === 10) {
clearInterval(x)
    }
    }, 1000);

}

function painInTheRear(btn1, par, m){
    let cry = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0 ]
      let i = 0
  let x = setInterval(() => {
    i++
        m.style.opacity = cry[i]
          console.log("I work")
          console.log(i)
      if( i === 10) {
  clearInterval(x)
      }
      }, 100);
  
  }

  function dontKnowWhatImDoing(btn1, par) {
    let x = Array.from(document.querySelectorAll("p"))
    
    x.forEach(element => {
        element.style.background = "blue";
    });
    }

    function vanillaParents(btn1, par) {
    let x = btn1.parentElement;
    x.style.color = "blue"
    }

    function killThemKids(btn1, par) {
    let x = par.childNodes
 let z =  Array.from(x)
 console.log(z)
z.forEach(element => {
    if(element !== z[0])
    par.removeChild(element)
});
    }

    function classChange(btn1, par){
 
        Array.from(document.querySelectorAll("p")).forEach(element => {
    element.style.background = "purple"
});
    }

    function shootAPaintBall(btn1, par){
        document.getElementById("Star").style.color = "blue";
    }
    function dynamite(btn1, par) {
        Array.from(document.querySelectorAll(".ninjas")).forEach(element => {
         element.style.display = "block";
         element.style.color = "green";
     });
    }
    
    function displaySelection(btn1, par){
        let r = document.getElementById("rockets").value
        let z = document.createElement("p")
        z.innerText = r;
        par.appendChild(z)
    }

    function changeTheLink(btn1, par){
         Array.from(document.querySelectorAll("a"))[0].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        
    }