jqueryButton.addEventListener("click", jQueryFunctionCode);
outputButtonJq.addEventListener("click", jQueryFunctionOutput);

//FIRST
function jQueryFunctionCode() {
    //GET FUNCTION LOADED
    let fjquery = document.getElementById("vanillajs");
    var fjqueryData = fjquery.innerHTML;
    var fjqueryAllData = fjqueryData + "jquery"

    //Select the funtion
    switch (fjqueryAllData) {
        //REady - dom content load
        case 'onLoadjquery':
            ////When the HTML document has been loaded and you can manipulate it with JavaScript
            $('.code-class').append('<p>$( document ).ready()</p>');
            $('.code-class').append('<p>$( document ).ready(function() {swal( "HTML document has been loaded and you can manipulate it with JavaScript!" );});</p>');
            break;
        case 'loadedImagejquery':
            ////When the HTML document has been loaded and you can manipulate it with JavaScript
            $('.code-class').append('<p>&ltimg src="jquery.png" alt="jQuery" id="jqueryImg  width="30" height="30""&gt</p>');
            $('.code-class').append('<p>$( "#jqueryImg" ).load(function() {alert("Image is loaded JQ")});</p>');
            break;
        default:
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
            console.info('This is default info of loaded function');
    }
}

//SECOND
function jQueryFunctionOutput() {
    //GET FUNCTION LOADED
    let fjquery = document.getElementById("vanillajs");
    var fjqueryData = fjquery.innerHTML;
    var fjqueryAllData = fjqueryData + "jquery"

    //Select the funtion
    switch (fjqueryAllData) {
        case 'onLoadjquery':
            ////When the HTML document has been loaded and you can manipulate it with JavaScript
            //HTML
            $('.output-class').append('<p>$( document ).ready()</p>');
            //JS
            //$('.myBody').append('<script>$(".img").load("#jqueryImg"function(){alert("Image is loaded JQ")});</' + 'script>');
            var myScript = document.createElement("script");
            var scriptContent = document.createTextNode("$( document ).ready(function() {swal( 'HTML document has been loaded and you can manipulate it with JavaScript!' );});");
            myScript.appendChild(scriptContent);
            document.body.appendChild(myScript);

            break;
        case 'loadedImagejquery':

            //HTML
            $('.output-class').append('<p class=img><img src="jquery.png" alt="jQuery" id="jqueryImg"  width="30" height="30"></p>');
            //JS
            var myScript = document.createElement("script");
            var scriptContent = document.createTextNode("$('#jqueryImg').load(function(){swal('msg hereee')});");
            myScript.appendChild(scriptContent);
            document.body.appendChild(myScript);

            break;
        default:
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
            console.info('Jquery is not working');
    }

}