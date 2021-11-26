function htmlDocumentLoadedjquery(){
    $("#jqueryBtn").parent().append(`<p>The document is loaded!</p>`)
}
eventsList[0].jqueryMethod=function(){
    htmlDocumentLoadedjquery();
}
eventsList[0].jquerySnippet=`<code>$("document").ready(value)</code>`