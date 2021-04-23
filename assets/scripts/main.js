import * as jquery_ex from "./jquery.js";
import * as javascript_ex from "./javascript.js";

$(".article__title").on("click", function () {
  $(this).next().toggleClass("article__content--hidden");
});
