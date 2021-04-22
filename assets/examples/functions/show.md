# Toggle class

## Javascript

```html
<button id="f14Js">Try it</button>
<p id="f14JsDemo" style="display:none;"">This is a paragraph</p>

<script>
  const selector = document.getElementById("f14Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f14JsDemo");
    para.style.display = "block";
  });
</script>
```

show hidden element

<button id="f14Js">Try it</button>

<p id="f14JsDemo" style="display:none;"">This is a paragraph</p>

<!-- ------------------- JQUERY ------------------- -->

## jQuery

```html
<button id="f14Js">Try it</button>
<p id="f14JsDemo" style="display:none;"">This is a paragraph</p>

<script>
  $("#f14JQuery").on("click", function (e) {
    $("#f14JQueryDemo").show();
  });
</script>
```

show hidden element

<button id="f14JQuery">Try it</button>

<p id="f14JQueryDemo" style="display:none;">This is a paragraph</p>
