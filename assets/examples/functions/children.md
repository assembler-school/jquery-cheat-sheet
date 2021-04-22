# Children

## Javascript

```html
<script>
  const selector = document.getElementById("f18Js");

  selector.addEventListener("click", function (e) {
    let lis = document.querySelectorAll("#f18JsDemo")[0].children;
    for (const iterator of lis) {
      iterator.style.color = "red";
    }
  });
</script>
```

Click to change the color of the <code>ul<code> elements to red

<button id="f18Js">Try it</button>

<ul id="f18JsDemo">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>

## jQuery

```html
<script>
  $("#f18JQuery").on("click", function (e) {
    $("#f18JQueryDemo")
      .children()
      .each(function (index, element) {
        $(element).css("color", "red");
      });
  });
</script>
```

Click to change the color of the <code>ul<code> elements to red

<button id="f18JQuery">Try it</button>

<ul id="f18JQueryDemo">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
