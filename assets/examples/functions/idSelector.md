## Get element by id

Get an item by id and change its font weight

### Javascript

```html
<p id="f21JsDemo">This is a paragraph with class = "f21JsDemo"</p>

<script>
  const selector = document.getElementById("f21Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f21JsDemo");
    para.textContent = "Hello World!";
  });
</script>
```

#### Example

click to chande paragraph text

<button id="f21Js">Try it</button>

<p id="f21JsDemo" >This is a paragraph with class = "f21JsDemo"</p>

### jQuery

```html
<p id="f21JsDemo">This is a paragraph with class = "f21JsDemo"</p>
;

<script>
  $("#f21JQuery").on("click", function (e) {
    $("#f21JQueryDemo").text("Hello World!");
  });
</script>
```

#### Example

click to chande paragraph text

<button id="f21JQuery">Try it</button>

<p id="f21JQueryDemo">This is a paragraph with class = "f21JQueryDemo"</p>
