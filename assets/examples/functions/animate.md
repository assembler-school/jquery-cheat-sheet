## Animation

Animate an item after 2 seconds from the initial page load

### Javascript

```html
<style>
  .default {
    background: #98bf21;
    height: 100px;
    width: 100px;
    margin: 6px;
  }
  .width-anim {
    width: 300px;
    transition: width 0.5s ease-out;
  }
</style>

<div id="f27JsDemo" class="default"></div>

<script>
  const selector = document.getElementById("f27Js");

  selector.addEventListener("click", function (e) {
    const para = document.getElementById("f27JsDemo");
    para.classList.add("width-anim");
  });
</script>
```

#### Example

<button id="f27Js">Try it</button>

<div id="f27JsDemo" class="default"></div>

### jQuery

With <code>animate()</code> method Only numeric values can be animated (like "margin:30px"). String values cannot be animated (like "background-color:red"), except for the strings "show", "hide" and "toggle". These values allow hiding and showing the animated element.

Tip: Use "+=" or "-=" for relative animations.

```html
<style>
  .default {
    background: #98bf21;
    height: 100px;
    width: 100px;
    margin: 6px;
  }
  .width-anim {
    width: 300px;
    transition: width 0.5s ease-out;
  }
</style>

<div id="f27JQueryDemo" class="default"></div>

<script>
  $("#f27JQuery").on("click", function (e) {
    $("#f27JQueryDemo").animate({ width: "300px" });
  });
</script>
```

#### Example

<button id="f27JQuery">Try it</button>

<div id="f27JQueryDemo" class="default"></div>
