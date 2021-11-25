const exercisesArr = [
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"ready()",
        functions:function (){exerciseJS0(),exerciseJQ0()},
    },
    {
        dataset:1,
        tittle:"HTML document has been loaded",
        commandJQ:"imput",
        commandJS:"imput",
        functions:function (){exerciseJS1(),exerciseJQ1()},
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
function exerciseJQ0(){
    console.log("holaJQ 0")
}
function exerciseJQ1(){
    console.log("holaJQ 1")
}



