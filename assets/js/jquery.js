const exercisesArr = [
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"ready()",
        functions:function (jQueryDiv, jScriptDiv){exerciseJS0(jScriptDiv),exerciseJQ0(jQueryDiv)},
    },
    {
        dataset:1,
        tittle:"HTML document has been loaded",
        commandJQ:"imput",
        commandJS:"imput",
        functions:function (jQueryDiv, jScriptDiv){exerciseJS1(jScriptDiv),exerciseJQ1(jQueryDiv)},
    },
]
function findExercisesFun(index){
    exercise = exercisesArr.find(item => {
        return item.dataset === index;
    })
    if(exercise == null){
        return console.log("do not exist");
    }else{
        return exercise;
    }
}
function exerciseJQ0(jQueryDiv){
    let jQueryDivInnet1 = document.createElement("div")
    jQueryDivInnet1.classList.add("jQuery-container-inner")
    jQueryDivInnet1.innerText = "HOLA jquery"
    jQueryDiv.appendChild(jQueryDivInnet1)
}
function exerciseJQ1(jQueryDiv){
    console.log("holaJQ 1"+jQueryDiv)
}



