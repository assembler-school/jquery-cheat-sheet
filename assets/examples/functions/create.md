# Create element

## Javascript

```html
<script>
  const selector = document.getElementById("e12Js").children;

  for (const li of selector) {
    li.addEventListener("click", function (e) {
      alert(e.target.textContent);
    });
  }
</script>
```

Click the button to create a P element with some text.

<button id="f0Js">Try it</button>

<div id="f0JsDemo"></div>

## jQuery

```html
<script>
  $("#f0JQuery").on("click", function (e) {
    let para = $("<p>", { text: "This is a paragraph." });
    //or
    // let para = $("<p>").text("This is a paragraph.");
    $("#f0JQueryDemo").append(para);
  });
</script>
```

Click the button to create a P element with some text.

<button id="f0JQuery">Try it</button>

<div id="f0JQueryDemo"></div>
