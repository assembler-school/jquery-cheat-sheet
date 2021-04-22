# Remove element

## Javascript

```html
<script>
  const selector = document.getElementById("f1Js");

  selector.addEventListener("click", function (e) {
    document.getElementById("f1JsDemo").remove();
  });
</script>
```

Click the button to remove the paragraph

<button id="f1Js">Try it</button>

<p id="f1JsDemo">This is a paragraph.</p>

## jQuery

```html
<script>
  $("#f1JQuery").on("click", function (e) {
    $("#f1JQueryDemo").remove();
  });
</script>
```

Click the button to remove the paragraph

<button id="f1JQuery">Try it</button>

<p id="f1JQueryDemo">This is a paragraph.</p>
