# Load event

## Javascript

```html
<script>
  let img1 = document.createElement("img");
  img1.src = "./assets/img/assembler.png";
  document.getElementById("e6Js").append(img1);
  img1.onload = function () {
    document.getElementById("e6JsDemo").textContent = "Image loaded.";
  };
</script>
```

<div id="e6Js"></div>

<p id="e6JsDemo"></p>

## jQuery

```html
<script>
  $("#e6JQuery").append($("<img>", { src: "./assets/img/assembler.png" }));
  $("img").on("load", function () {
    $("#e6JQueryDemo").text("Image loaded.");
  });
</script>
```

<div id="e6JQuery"></div>

<p id="e6JQueryDemo"></p>
