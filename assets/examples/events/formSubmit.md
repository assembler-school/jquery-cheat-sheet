# Submit event

## Javascript

```html
<script>
  document.addEventListener("click", function (event) {
    alert("You just clicked on button");
  });
</script>
```

<form id="e8Js" action="/action_page.php">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

## jQuery

```html
<script>
  $(document).ready(function () {
    console.log("DOM loaded from jQuery");
  });
</script>
```

<form id="e8JQuery" action="/action_page.php">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>
