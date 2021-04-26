## Add data atrribute

Set a data-src attribute to a img element

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

Add data atrribute

<button id="f12Js">Try it</button>
<img id="f12Js" src = "./assets/img/assembler.png"></img>

### jQuery

```html
<script>
  $("#f11JQuery").on("click", function (e) {
    $("#f11JQueryDemo").removeAttr("disabled");
  });
</script>
```

#### Example

Add data atrribute

<button id="f12JQuery">Try it</button>
<img id="f12JQueryDemo" src = "./assets/img/assembler.png"></img>
