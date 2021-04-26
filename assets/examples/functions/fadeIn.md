## Fadein

Fade in an HTML element using jQuery

### Javascript

We have to add and remove CSS classes to achieve the same result

```html
<style>
  .none {
    display: none;
  }
  .fade-in {
    animation: fade-in 0.5s ease-out;
  }
  @keyframes fade-in {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
</style>

<button id="f15Js">Try it</button>
<p id="f15JsDemo" class="none">This is a paragraph</p>

<script>
  const selector = document.getElementById("f15Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f15JsDemo");
    para.classList.add("fade-in");
    para.classList.remove("none");
  });
</script>
```

#### Example

<button id="f15Js">Try it</button>

<p id="f15JsDemo" class="none">This is a paragraph</p>

### jQuery

```html
<script>
  $("#f15JQuery").on("click", function (e) {
    $("#f15JQueryDemo").fadeIn();
  });
</script>
```

#### Example

<button id="f15JQuery">Try it</button>

<p id="f15JQueryDemo" style="display:none;">This is a paragraph</p>

<br>
<br>
<br>
