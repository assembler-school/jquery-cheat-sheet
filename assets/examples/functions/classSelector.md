# Get element by class

## Javascript

```html
<p class="f20JsDemo">This is a paragraph with class = "f20JsDemo"</p>

<script>
  const selector = document.getElementById("f20Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector(".f20JsDemo");
    para.textContent = "Hello World!";
  });
</script>
```

click to chande paragraph text

<button id="f20Js">Try it</button>

<p class="f20JsDemo" >This is a paragraph with class = "f20JsDemo"</p>

## jQuery

```html
<p class="f20JQueryDemo">This is a paragraph with class = "f20JQueryDemo"</p>

<script>
  $("#f20JQuery").on("click", function (e) {
    $(".f20JQueryDemo").text("Hello World!");
  });
</script>
```

click to chande paragraph text

<button id="f20JQuery">Try it</button>

<p class="f20JQueryDemo">This is a paragraph with class = "f20JQueryDemo"</p>
