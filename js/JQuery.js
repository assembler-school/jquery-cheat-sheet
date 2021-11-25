function queryRemove(btn2, parBo) {
    $(btn2).remove()
}

function queryAdd(btn2, parBo) {
    $(parBo).append("<p>EXISTANCE IS PAIN<p>")
}

function queryAppend(btn2, parBo, test) {
    $(parBo).append(test)
}

function queryPrepend(btn2, parBo) {
    $(parBo).prepend("<p>I´m a timelord!<p>")
}

function queryCreateAdd(btn2, parBo) {
    $(parBo).append("<p>So I have become death, destroyer of worlds<p>")
}

function queryCreateAddBefore(btn2, parBo) {
    $(parBo).prepend("<p>BANG!<p>")
}

function queryClone(btn2, parBo) {
    $(btn2).clone().appendTo(parBo)
}

function addClassQuery (btn2, parBo){
$(btn2).addClass("trial")
}
