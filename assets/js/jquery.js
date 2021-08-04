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