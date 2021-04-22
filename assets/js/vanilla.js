/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { blankMacroOutput } from "./script.js";

console.log("Vanilla JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */

let macroTextVanilla = document.getElementById("macro-text");
let outputVanilla = document.getElementById("output-panel");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0
function HTMLloaded() {
  blankMacroOutput();
  // Macro
  macroTextVanilla.innerText = `// Loading an html
    code that will
    go here.
    `;
  // Output
}

/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const vanillaExamples = [
  // 0
  function () {
    HTMLloaded();
  },
];
