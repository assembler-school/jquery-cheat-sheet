/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { blankMacroOutput } from "./script.js";

console.log("jQuery JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroJquery = $("#macro-text");
let outputJquery = $("#output-panel");
let macroString;

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0
function HTMLloaded() {
  // Macro
  macroString = ` jQuery Example
  with some line breaks
        and 
    tabulations.
  `;
  macroJquery.text(macroString);

  // Output
}

/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const jQueryExamples = [
  function () {
    HTMLloaded();
  }, // 0
];
