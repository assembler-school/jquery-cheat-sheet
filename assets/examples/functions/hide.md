## Hide element

Hide an HTML element on click (display: none)

### Javascript

```html
<script>
  const selector = document.getElementById("f13Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f13JsDemo");
    para.style.visibility = "hidden";
  });
</script>
```

#### Example

hide example

<button id="f13Js">Try it</button>

<p id="f13JsDemo">This is a paragraph</p>

### jQuery

```html
<script>
  $("#f13JQuery").on("click", function (e) {
    $("#f13JQueryDemo").hide();
  });
</script>
```

#### Example

hide example

<button id="f13JQuery">Try it</button>

<p id="f13JQueryDemo">This is a paragraph</p>
