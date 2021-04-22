# Toggle class

## Javascript

```html
<script>
  const selector = document.getElementById("f1Js");

  selector.addEventListener("click", function (e) {
    document.getElementById("f1JsDemo").remove();
  });
</script>
```

toggle class CSS

<button id="f9Js">Try it</button>

<p id="f9JsDemo" class="red-text">This is a paragraph</p>

## jQuery

```html
<script>
  $("#f1JQuery").on("click", function (e) {
    $("#f1JQueryDemo").remove();
  });
</script>
```

toggle class CSS

<button id="f9JQuery">Try it</button>

<p id="f9JQueryDemo" class="red-text">This is a paragraph</p>
