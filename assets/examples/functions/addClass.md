# Remove element

## Javascript

```html
<script>
  const selector = document.getElementById("f7Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f7JsDemo");
    para.classList.add("red-text");
  });
</script>
```

add class CSS

<button id="f7Js">Try it</button>

<p id="f7JsDemo">This is a paragraph</p>

## jQuery

```html
<script>
  $("#f7JQuery").on("click", function (e) {
    let cln = $("#f7JQueryDemo").addClass("red-text");
  });
</script>
```

add class CSS

<button id="f7JQuery">Try it</button>

<p id="f7JQueryDemo">This is a paragraph</p>
