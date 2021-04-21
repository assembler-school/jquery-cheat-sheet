# Click event

## Javascript

```html
<script>
  const selector = document.getElementById("e10Js");
  selector.addEventListener("mouseover", function (e) {
    document.getElementById("e10Js").style.color = "red";
  });
</script>
```

<h2 id="e10Js">Mouse over me</h2>

## jQuery

```html
<script>
  $("#e10JQuery").on("mouseover", function (e) {
    $(this).css("color", "red");
  });
</script>
```

<h2 id="e10JQuery">Mouse over me</h2>
