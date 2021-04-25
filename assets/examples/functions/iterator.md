## Iteration

Iterate a collection of elements and apply a change of style on them

### Javascript

```html
<script>
  const selector = document.getElementById("f17Js");

  selector.addEventListener("click", function (e) {
    let lis = document.querySelectorAll("#f17JsDemo li");
    lis.forEach((element) => {
      element.style.color = "red";
    });
  });
</script>
```

#### Example

Click to change the color of the <code>ul<code> elements to red

<button id="f17Js">Try it</button>

<ul id="f17JsDemo">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>

### jQuery

```html
<script>
  $("#f17JQuery").on("click", function (e) {
    $("#f17JQueryDemo li").each(function (index) {
      $(this).css("color", "red");
    });
  });
</script>
```

#### Example

Click to change the color of the <code>ul<code> elements to red

<button id="f17JQuery">Try it</button>

<ul id="f17JQueryDemo">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
