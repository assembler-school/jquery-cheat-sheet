# Parent

## Javascript

```html
<script>
  const selector = document.getElementById("f19Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f19JsDemo li").parentElement;
    para.style.background = "red";
  });
</script>
```

Click to change the color of the <code>ul<code> to red

<button id="f19Js">Try it</button>

<ul id="f19JsDemo">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>

## jQuery

```html
<script>
  $("#f19JQuery").on("click", function (e) {
    $("#f19JQueryDemo li").parent().css("background", "red");
  });
</script>
```

Click to change the color of the <code>ul<code> to red

<button id="f19JQuery">Try it</button>

<ul id="f19JQueryDemo">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
