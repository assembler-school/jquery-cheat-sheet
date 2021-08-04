/**
 * Global Variables
 */
let listObjectsJS = [
  {
    id: "",
    title: "",
    type: "",
    code: "",
    link: "",
  },
  {
    id: "1",
    title: "Click",
    type: "events",
    code: `let eventSubject=document.getElementById("demo"); <br>
    eventSubject.addEventListener("click",function(){ <br>
      alert("YOU CLICKED ME!")
    });
      `,
    link: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick",
  },
  {
    id: "2",
    title: "Click",
    type: "events",
    code: `let eventSubject=document.getElementById("demo"); <br>
    eventSubject.addEventListener("click",function(){ <br>
      alert("YOU CLICKED ME!")
    });
      `,
    link: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick",
  },
];
localStorage.setItem("objectsJS", JSON.stringify(listObjectsJS));

let listObjectsJQ = [
  {
    id: "",
    title: "",
    type: "",
    code: "",
    link: "",
  },
  {
    id: "1",
    title: "The onclick Event",
    type: "events",
    code: `function myFunction() {
      document.getElementById("demo").innerHTML = "Hello World";
    }`,
    link: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick",
  },
  {
    id: "2",
    title: "Click",
    type: "events",
    code: `let eventSubject=document.getElementById("demo"); <br>
    eventSubject.addEventListener("click",function(){ <br>
      alert("YOU CLICKED ME!")
    });
      `,
    link: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick",
  },
];
localStorage.setItem("objectsJQ", JSON.stringify(listObjectsJQ));

/* let listExamples = [
  {
    id: "1",
    text: `<h1>The onclick Event</h1>

    <p>The onclick event is used to trigger a function when an element is clicked on.</p>
    
    <p>Click the button to trigger a function that will output "Hello World" in a p element with id="demo".</p>
    
    <button onclick="myFunction()">Click me</button>
    
    <p id="demo"></p>`,

    popUpText: "se ha efectuado example 1 con exito",
  },
];
localStorage.setItem("examples", JSON.stringify(listExamples)); */

let dragged;
