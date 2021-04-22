# Append element

## Javascript

```html
<script>
  const selector = document.getElementById("f2Js");

  selector.addEventListener("click", function (e) {
    let para = document.createElement("button");
    para.innerText = "Click Me!";
    document.getElementById("f2JsDemo").appendChild(para);
  });
</script>
```

Click the button to append a button

<button id="f2Js">Try it</button>

<div id="f2JsDemo"></div>

## jQuery

```html
<script>
  $("#f2JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click Me!" });
    $("#f2JQueryDemo").append(para);
  });
</script>
```

Click the button to append a button

<button id="f2JQuery">Try it</button>

<div id="f2JQueryDemo"></div>
