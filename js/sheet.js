import {events, functions} from "../js/variables.js";
import {eventsQuery, functionsQuery} from "../js/jQuery.js";
import {eventsJavaScript, functionsJavaScript} from "../js/java-script.js";

class Sheet{

    constructor(title, parent){
        switch(parent){
            case "events": 
                $(".comparation").append($("<pre></pre>").text(eventsJavaScript[events.indexOf(title)]).addClass("java-script"));
                $(".comparation").append($("<pre></pre>").text((eventsQuery[events.indexOf(title)])).addClass("jQuery"));
                break;
            case "functions": 
                $(".comparation").append($("<pre></pre>").text(functionsJavaScript[functions.indexOf(title)]).addClass("java-script"));
                $(".comparation").append($("<pre></pre>").text((functionsQuery[functions.indexOf(title)])).addClass("jQuery"));
                break;
            default: break;
        }
        //execution
    }

}

export default Sheet;