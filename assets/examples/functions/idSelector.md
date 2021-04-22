# Get element by id

## Javascript

```html
<script>
  const selector = document.getElementById("f21Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f21JsDemo");
    para.textContent = "Hello World!";
  });
</script>
```

click to chande paragraph text

<button id="f21Js">Try it</button>

<p id="f21JsDemo" >This is a paragraph with class = "f21JsDemo"</p>

## jQuery

```html
<script>
  $("#f21JQuery").on("click", function (e) {
    $("#f21JQueryDemo").text("Hello World!");
  });
</script>
```

click to chande paragraph text

<button id="f21JQuery">Try it</button>

<p id="f21JQueryDemo">This is a paragraph with class = "f21JQueryDemo"</p>
