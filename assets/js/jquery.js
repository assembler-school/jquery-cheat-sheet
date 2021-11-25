const exercisesArr= [
    {
        dataset:1,
        tittle:"HTML document has been loaded",
        commandJQ:"imput",
        commandJS:"imput",
        exampleJQ:`$(function(){
            console.log( 'ready!' );
        })`,
        exampleJS:`$(function(){
            console.log( 'ready!' );
        })`,
        link:"<a href='https://learn.jquery.com/using-jquery-core/document-ready/'></a>",
        functions:function (){exerciseJS1(),exerciseJQ1()},
    },
    {
        dataset:0,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"ready()",
        exampleJQ:`$(function(){
            console.log( 'ready!' );
        })`,
        exampleJS:`$(function(){
            console.log( 'ready!' );
        })`,
        link:"<a href='https://learn.jquery.com/using-jquery-core/document-ready/'></a>",
        functions:function (){exerciseJS0(),exerciseJQ0()},
    },

]

function exerciseJQ0(){
    console.log("holaJQ 0")
}
function exerciseJQ1(){
    console.log("holaJQ 1")
}

function findExercisesFun(index){
    exercise = exercisesArr.find(item => {
        return item.dataset === index
    })
    return exercise;
}


