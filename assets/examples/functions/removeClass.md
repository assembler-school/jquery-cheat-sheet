## Remove css class

Remove a class to an HTML item

### Javascript

```html
<script>
  const selector = document.getElementById("f1Js");

  selector.addEventListener("click", function (e) {
    document.getElementById("f1JsDemo").remove();
  });
</script>
```

#### Example

remove class CSS

<button id="f8Js">Try it</button>

<p id="f8JsDemo" class="red-text">This is a paragraph</p>

### jQuery

```html
<script>
  $("#f1JQuery").on("click", function (e) {
    $("#f1JQueryDemo").remove();
  });
</script>
```

#### Example

add class CSS

<button id="f8JQuery">Try it</button>

<p id="f8JQueryDemo" class="red-text">This is a paragraph</p>
