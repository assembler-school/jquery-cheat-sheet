# Prepend element

## Javascript

```html
<script>
  const selector = document.getElementById("f3Js");

  selector.addEventListener("click", function (e) {
    let para = document.createElement("button");
    para.innerText = "Click Me!";
    document.getElementById("f3JsDemo").prepend(para);
  });
</script>
```

Insert span element after each p element

<button id="f4Js">Try it</button>

<div id="f4JsDemo">This is a div</div>

## jQuery

```html
<script>
  $("#f3JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click Me!" });
    $("#f3JQueryDemo").prepend(para);
  });
</script>
```

Click the button to prepend a button

<button id="f3JQuery">Try it</button>

<div id="f3JQueryDemo">This is a div</div>
