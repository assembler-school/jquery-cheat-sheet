# Click event on checkbox

## Javascript

```html
<script>
  const selector = document.getElementById("e11Js");
  selector.addEventListener("click", function (e) {
    let checkBox = document.getElementById("e11Js");
    let text = document.getElementById("e11JsDemo");

    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
</script>
```

<label for="e11Js">Checkbox:</label>
<input type="checkbox" id="e11Js">

<p id="e11JsDemo" style="display:none">Checkbox is CHECKED!</p>

## jQuery

```html
<script>
  $("#e11JQuery").on("click", function (e) {
    let checkBox = $("#e11JQuery");
    let text = $("#e11JQueryDemo");

    if (checkBox.prop("checked")) {
      text.css("display", "block");
    } else {
      text.css("display", "none");
    }
  });
</script>
```

<label for="e11JQuery">Checkbox:</label>
<input type="checkbox" id="e11JQuery">

<p id="e11JQueryDemo" style="display:none">Checkbox is CHECKED!</p>
