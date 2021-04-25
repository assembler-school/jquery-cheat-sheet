## Change event

### Javascript

```html
<script>
  const input = document.getElementById("e5Js");
  input.addEventListener("change", function (e) {
    let x = document.getElementById("e5Js");
    x.value = x.value.toUpperCase();
  });
</script>
```

#### Example:

When you leave the input field, a function is triggered which transforms the input text to upper case.
Enter your name: <input type="text" id="e5Js">

### jQuery

```html
<script>
  $("#e5JQuery").on("change", function (e) {
    $(this).val($(this).val().toUpperCase());
  });
</script>
```

#### Example:

When you leave the input field, a function is triggered which transforms the input text to upper case.
Enter your name: <input type="text" id="e5JQuery">
