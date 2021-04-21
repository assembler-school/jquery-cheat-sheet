// $('.functionsDemo').height($('.functionsFunctionalities').height());

//Function to switch checkbox
$("input#jsVanillaEventsCheckBox").change(function () {
  if ($("input#jsVanillaEventsCheckBox").is(":checked")) {
    $("input#jqueryEventsCheckbox").prop("checked", false);
  }else{
    $("input#jqueryEventsCheckbox").prop("checked", true);
  }
});
$("input#jqueryEventsCheckbox").change(function () {
  if ($("input#jqueryEventsCheckbox").is(":checked")) {
    $("input#jsVanillaEventsCheckBox").prop("checked", false);
  }else{
    $("input#jsVanillaEventsCheckBox").prop("checked", true);
  }
});
$("input#jsVanillaFunctionsCheckbox").change(function () {
    if ($("input#jsVanillaFunctionsCheckbox").is(":checked")) {
      $("input#jqueryFunctionsCheckbox").prop("checked", false);
    }else{
        $("input#jqueryFunctionsCheckbox").prop("checked", true);
      }
      });
  $("input#jqueryFunctionsCheckbox").change(function () {
    if ($("input#jqueryFunctionsCheckbox").is(":checked")) {
      $("input#jsVanillaFunctionsCheckbox").prop("checked", false);
    }else{
        $("input#jsVanillaFunctionsCheckbox").prop("checked", true);
      }
      });
  $("input#jsVanillaSelectorsCheckbox").change(function () {
    if ($("input#jsVanillaSelectorsCheckbox").is(":checked")) {
      $("input#jquerySelectorsCheckbox").prop("checked", false);
    }else{
        $("input#jquerySelectorsCheckbox").prop("checked", true);
      }
  });
  $("input#jquerySelectorsCheckbox").change(function () {
    if ($("input#jquerySelectorsCheckbox").is(":checked")) {
      $("input#jsVanillaSelectorsCheckbox").prop("checked", false);
    }else{
        $("input#jsVanillaSelectorsCheckbox").prop("checked", true);
      }
  });

  
