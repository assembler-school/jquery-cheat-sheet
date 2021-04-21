# Double click event

## Javascript

```html
<script>
  const btn = document.querySelector(".e2Js");
  btn.addEventListener("dblclick", function (event) {
    alert("Js vanilla - double click");
  });
</script>
```

<button class="e2Js">Click Me!</button>

## jQuery

```html
<script>
  $(".e2JQuery").on("dblclick", function (event) {
    alert("jQuery - double click");
  });
</script>
```

<button class="e2JQuery">Click Me!</button>
