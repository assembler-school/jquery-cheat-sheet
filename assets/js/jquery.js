/*-----------------FUNCTIONS---------------------------*/

let createjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let divs = $(
            "<div>I am the new one dude, what´ s going on, M.C. jQ ?</div>"
        );
        $(".jquery").append(divs);
    });
};

let removejQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let divs = $(
            "<div class='remove-me'>I am the new one dude, what´ s going on, M.C. jQ ?</div>"
        );
        $(".jquery").append(divs);
        $(".jquery").append(
            "<button class='the-remover'>Give a pop() to this crazy guy jQ!</button>"
        );
        $(".the-remover").on("click", () => {
            $(".remove-me").remove();
        });
    });
};

let appendjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let divs = $("<div class='append-to-me'>I am Daddy Yankee ?</div>");
        $(".jquery").append(divs);
        $(".jquery").append(
            "<button class='the-appender'>CLick here you get another bad joke! LoL</button>"
        );
        $(".the-appender").on("click", () => {
            $(".append-to-me").append(
                $(
                    '<div class="append-me">I am Junior Yankee, first son or my daddy</div>'
                )
            );
        });
    });
};

let prependjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let divs = $("<div class='append-to-me'></div>");
        $(".jquery").append(divs);
        $(".jquery").append(
            "<button class='the-prepender'>CLick here to get the sumary of the last chapter of the latin novel Affairs from a Reggeaton Singer! Who is actually the first son of Daddy Yankee</button>"
        );
        $(".append-to-me").append(
            $(
                '<div class="append-me">I am Junior Yankee, oh no, virgencita de Guadalupe, what I gonna do now?</div>'
            )
        );
        $(".the-prepender").on("click", () => {
            divs.prepend($("<div>Bad Bunny babyyyy</div>"));
        });
    });
};

let afterjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let divs = $("<div class='append-to-me'></div>");
        $(".jquery").append(divs);
        $(".jquery").append(
            "<button class='the-prepender'>CLick here to get the sumary of the last chapter of the latin novel Affairs from a Reggeaton Singer! Who is actually the first son of Daddy Yankee</button>"
        );
        $(".append-to-me").append(
            $(
                '<div class="append-me">I am Junior Yankee, oh no, virgencita de Guadalupe, what I gonna do now?</div>'
            )
        );
        $(".the-prepender").on("click", () => {
            divs.after($("<div>Bad Bunny bebeafter    </div>"));
        });
    });
};

let beforejQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let divs = $("<div class='append-to-me'></div>");
        $(".jquery").append(divs);
        $(".jquery").append(
            "<button class='the-prepender'>CLick here to get the sumary of the last chapter of the latin novel Affairs from a Reggeaton Singer! Who is actually the first son of Daddy Yankee</button>"
        );
        $(".append-to-me").append(
            $(
                '<div class="append-me">I am Junior Yankee, oh no, virgencita de Guadalupe, what I gonna do now?</div>'
            )
        );
        $(".the-prepender").on("click", () => {
            divs.before($("<div>Bad Bunny bebebefore    </div>"));
        });
    });
};

let clonejQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        let divs = $(
            "<div class='append-to-me'>The viral button, press me and you´ll see the exponencial growth!</div>"
        );
        $(".jquery").append(divs);
        $(".jquery").append("<button class='the-cloner'>Let´s grow</button>");
        $(".the-cloner").on("click", () => {
            $(".append-to-me").clone().appendTo(".jquery");
        });
    });
};

let addClassjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        $(".jquery-button").addClass("red-class");
    });
};

let removeClassjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        $(".jquery-button").addClass("red-class");
    });
    $(".jquery-button").on("mouseover", () => {
        $(".jquery-button").removeClass("red-class");
    });
};

let toggleClassjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        $(".jquery-button").toggleClass("yellow-class");
    });
};

let attrDisabledjQ = function jQueryCreate() {
    $(".jquery-button").on("click", () => {
        $(".jquery-button").attr("disabled", true);
    });
};

let removeAttrDisabledjQ = function jQueryCreate() {
    let containerjQ = $(
        '<button class="remove-disabled">Click here to remove disabled</button>'
    );
    $(".jquery-button").on("click", () => {
        $(".jquery-button").attr("disabled", true);

        $(".jquery").append(containerjQ);
    });
    containerjQ.on("click", () => {
        $(".jquery-button").attr("disabled", false);
    });
};

let attrDatajQ = function jQueryCreate() {
    let containerjQ = $(".jquery");
    let imgDat = $(
        "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
    );
    containerjQ.append(imgDat);
    $(".jquery-button").on("click", () => {
        imgDat.attr(
            "data-src",
            "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        );
    });
};

let removeAttrDatajQ = function jQueryCreate() {
    let containerjQ = $(".jquery");
    let imgDat = $(
        "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
    );
    imgDat.attr(
        "data-src",
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    );
    containerjQ.append(imgDat);
    $(".jquery-button").on("click", () => {
        imgDat.removeAttr("data-src");
    });
};

let hidejQ = function jQueryCreate() {
    let containerjQ = $(".jquery");
    let imgDat = $(
        "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
    );
    containerjQ.append(imgDat);
    $(".jquery-button").on("click", () => {
        imgDat.hide();
    });
};

let showjQ = function jQueryCreate() {
    let containerjQ = $(".jquery");
    let imgDat = $(
        "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
    );
    imgDat.hide();
    containerjQ.append(imgDat);
    $(".jquery-button").on("click", () => {
        imgDat.show();
    });
};

let fadeInjQ = function jQueryCreate() {
    $(".vanilla-button").html("Click to fade in");
    let containerjQ = $(".jquery");
    let imgDat = $(
        "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
    );
    imgDat.fadeOut("fast");
    containerjQ.append(imgDat);
    $(".vanilla-button").on("click", () => {
        imgDat.fadeIn("slow");
    });
};

let fadeOutjQ = function jQueryCreate() {
    $(".jquery-button").html("Click to fade out");
    let containerjQ = $(".jquery");
    let imgDat = $(
        "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
    );
    containerjQ.append(imgDat);
    $(".jquery-button").on("click", () => {
        imgDat.fadeOut("slow");
    });
};

let animatejQ = function jQueryCreate() {
    let containerjQ = $(".jquery");
    let imgDat = $(
        "<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'/>"
    );
    containerjQ.append(imgDat);
    $(".jquery-button").on("click", () => {
        imgDat.delay(2000).animate({ right: "10vw" }, 5000);
    });
};