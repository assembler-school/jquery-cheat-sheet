let techselect = "";

// Select the button and set a class or remove depending on which tech it is
$(".navbtn").each(function(i) {
    $(this).on("click", function() {
        if (i === 0) {
            $("#codecontainer").text(
                "Welcome to JavaScript Vanilla.  Click on the elements below."
            );
            $("#resultcontainer").empty();
            techselect = "js";
            $(".navbtn").last().removeClass("active");
            $(".navbtn").first().toggleClass("active");
        } else if (i === 1) {
            $("#codecontainer").text(
                "Welcome to JQuery. Click on the elements below"
            );
            $("#resultcontainer").empty();
            techselect = "jq";
            $(".navbtn").first().removeClass("active");
            $(".navbtn").last().toggleClass("active");
        }
        selectTech(techselect);
    });
});

// The id is set on each tech page, we choose it and link it with its technology and its button
function selectTech(tech) {
    $(".function__box--text").each(function(i, element) {
        $(this).attr("id", tech + i);
    });
    $(".function__box--text").each(function() {
        $(this).on("click", function() {
            if (techselect === "js") {
                JSItems($(this).attr("id"));
            } else if (techselect === "jq") {
                jQueryItems($(this).attr("id"));
            }
        });
    });
}