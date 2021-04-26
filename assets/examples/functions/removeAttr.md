## Remove disabled atrribute

Remove the disabled attribute of an HTML button

### Javascript

```html
<script>
  const selector = document.getElementById("f11Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f11JsDemo");
    para.removeAttribute("disabled");
  });
</script>
```

#### Example

Remove attribute

<button id="f11Js">Try it</button>
<button id="f11JsDemo" disabled>Click</button>

### jQuery

```html
<script>
  $("#f11JQuery").on("click", function (e) {
    $("#f11JQueryDemo").removeAttr("disabled");
  });
</script>
```

#### Example

Remove attribute

<button id="f11JQuery">Try it</button>
<button id="f11JQueryDemo" disabled>Click</button>
