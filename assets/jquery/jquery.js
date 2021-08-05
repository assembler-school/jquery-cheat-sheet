function docReady() {
	$(document).ready(function () {
		/*same as: $(function() { alert("hi 1");*/
	});
}

function clicked() {
	$("p").on("click", function () {
		alert($(this).text());
	});
}

function doubleClicked() {
	$("#target").dblclick(function () {
		alert("Handler for .dblclick() called.");
	});
}

function animationAfterSecs() {
	$("#clickme").on("click", function () {
		$("#book").animate(
			{
				width: ["toggle", "swing"],
				height: ["toggle", "swing"],
				opacity: "toggle",
			},
			2000,
			"linear",
			function () {
				$(this).after("Animation complete.");
			}
		);
	});
}

function addAClass(){
	$( "div" ).addClass(function( index, currentClass ) {
		var addedClass; 
		if ( currentClass === "red" ) { 
			​addedClass = "green"; $( "p" ).text( "There is one green div" );}
			return addedClass;})
}

function removeAClass(){
	$( "li" ).last().removeClass(function() {return $( this ).prev().attr( "class" );});
}

function removeElement(){
	$( "button" ).click(function() {$( "p" ).remove();});
}

export { docReady, clicked, doubleClicked, animationAfterSecs, addAClass, removeAClass, removeElement };
