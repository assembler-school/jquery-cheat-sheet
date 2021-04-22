function jqueryListItems(tag) {
  let line = "----------jQuery-------------------~";
  switch (tag) {
    case 0:
      line += "To get the first parent of an element use $.parent()~";
      line += "To get the all the parents of an element use $.parents()";
      break;

    default:
      break;
  }
  return line;
}
