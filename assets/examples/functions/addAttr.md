# Add atrribute

## Javascript

```html
<script>
  const selector = document.getElementById("f10Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f10Js");
    para.setAttribute("disabled", "true");
  });
</script>
```

Add attribute

<button id="f10Js">Try it</button>

## jQuery

```html
<script>
  $("#f10JQuery").on("click", function (e) {
    $(this).attr("disabled", "true");
  });
</script>
```

Add attribute

<button id="f10JQuery">Try it</button>
