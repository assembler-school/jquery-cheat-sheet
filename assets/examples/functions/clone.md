## Clone element

Clone an HTML element within other element

### Javascript

```html
<script>
  const selector = document.getElementById("f6Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f6JsDemo");
    let cln = para.cloneNode(true);
    para.insertAdjacentElement("afterbegin", cln);
  });
</script>
```

#### Example

Clone element

<button id="f6Js">Try it</button>

<p id="f6JsDemo">This is a paragraph</p>

### jQuery

```html
<script>
  $("#f6JQuery").on("click", function (e) {
    let cln = $("#f6JQueryDemo").clone();
    $("#f6JQueryDemo").after(cln);
  });
</script>
```

#### Example

Clone element

<button id="f6JQuery">Try it</button>

<p id="f6JQueryDemo">This is a paragraph</p>
