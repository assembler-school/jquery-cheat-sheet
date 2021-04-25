## FadeOut

Fade out an HTML element using jQuery

### Javascript

We have to add and remove CSS classes to achieve the same result

```html
<style>
  .fade-out {
    opacity: 0;
    transition: opacity 0.5s linear;
  }
</style>

<button id="f16Js">Try it</button>
<p id="f16JsDemo">This is a paragraph</p>

<script>
  const selector = document.getElementById("f16Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f16JsDemo");
    para.classList.add("fade-out");
  });
</script>
```

#### Example

<button id="f16Js">Try it</button>

<p id="f16JsDemo">This is a paragraph</p>

### jQuery

```html
<script>
  $("#f16JQuery").on("click", function (e) {
    $("#f16JQueryDemo").fadeOut();
  });
</script>
```

#### Example

<button id="f16JQuery">Try it</button>

<p id="f16JQueryDemo">This is a paragraph</p>

<br>
<br>
<br>
