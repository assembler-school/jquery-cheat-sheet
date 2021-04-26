## Change the href attribute

Change the href attribute of the first <code>a</code> element (You have to create several <code>a</code> elements)

### Javascript

```html
<nav id="f24JsDemo">
  <a href="#">One</a>
  <a href="#">Two</a>
  <a href="#">Three</a>
</nav>

<script>
  const selector = document.getElementById("f24Js");

  selector.addEventListener("click", function (e) {
    let para = document.getElementById("f24JsDemo").firstElementChild;
    para.href = "https://www.google.com/";
    para.target = "_blank";
    para.textContent = "Go to Google";
  });
</script>
```

#### Example

<button id="f24Js">Try it</button>

<nav id="f24JsDemo">
  <a href="#">One</a>
  <a href="#">Two</a>
  <a href="#">Three</a>
</nav>

### jQuery

```html
<nav id="f24JQueryDemo">
  <a href="#">One</a>
  <a href="#">Two</a>
  <a href="#">Three</a>
</nav>

<script>
  $("#f24JQuery").on("click", function (e) {
    let para = $("#f24JQueryDemo a")
      .first()
      .attr("href", "https://www.google.com/")
      .attr("target", "_blank")
      .text("Go to Google");
  });
</script>
```

#### Example

<button id="f24JQuery">Try it</button>

<nav id="f24JQueryDemo">
  <a href="#">One</a>
  <a href="#">Two</a>
  <a href="#">Three</a>
</nav>
