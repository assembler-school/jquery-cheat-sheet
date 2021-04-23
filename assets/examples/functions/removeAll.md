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

<button id="f26Js">Try it</button>

<p class="text">This is a paragraph 1</p>
<p class="text">This is a paragraph 2</p>
<p class="text">This is a paragraph 3</p>

## jQuery

```html
<script>
  $("#f1JQuery").on("click", function (e) {
    $("#f1JQueryDemo").remove();
  });
</script>
```

toggle class CSS

<button id="f26JQuery">Try it</button>

<p class="textjq">This is a paragraph 1</p>
<p class="textjq">This is a paragraph 2</p>
<p class="textjq">This is a paragraph 3</p>
