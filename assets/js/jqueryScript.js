// Functions to run on start
addTag();
/*
Function to add tags to all clickable elements
*/
function addTag() {
  $(".count").each(function (index, element) {
    $(element).attr("tag", index).on("click", clickOnTag);
  });
}
function clickOnTag(event) {
  console.log($(event.target).attr("tag"));
  const tag = $(event.target).attr("tag");
  switch (tag) {
    case 0:
      break;
    //TODO
    default:
      break;
  }
}
