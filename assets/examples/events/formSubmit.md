## Submit event

### Javascript

```html
<script>
  document.getElementById("e8Js").addEventListener("submit", function () {
    alert("The form was submitted");
  });
</script>
```

#### Example:

<form id="e8Js" action="/action_page.php">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

### jQuery

```html
<script>
  $("#e8JQuery").on("submit", function () {
    alert("The form was submitted");
  });
</script>
```

#### Example:

<form id="e8JQuery" action="/action_page.php">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>
