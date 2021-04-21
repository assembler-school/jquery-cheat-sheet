# Key Press event

## Javascript

```html
<script>
  const input = document.getElementById("e3Js");
  input.addEventListener("keypress", function (event) {
    input.style.backgroundColor = "red";
  });
</script>
```

Press a key inside the text field to set a red background color.
<input type="text" id="e3Js">

## jQuery

```html
<script>
  $("#e3JQuery").on("keypress", function (event) {
    $("#e3JQuery").css("backgroundColor", "blue");
  });
</script>
```

Press a key inside the text field to set a blue background color.
<input type="text" id="e3JQuery">
