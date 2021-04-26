## Insert element after

Create and add an HTML element with any text value after another element

### Javascript

```html
<script>
  const selector = document.getElementById("f4Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelectorAll(".f4JsDemo");

    para.forEach((element) => {
      let btn = document.createElement("button");
      btn.textContent = "Click";
      element.insertAdjacentElement("afterend", btn);
    });
  });
</script>
```

#### Example

Insert span element after each p element

<button id="f4Js">Try it</button>

<p class="f4JsDemo">This is a paragraph 1</p>
<p class="f4JsDemo">This is a paragraph 2</p>

### jQuery

```html
<script>
  $("#f4JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click" });
    $(".f4JQueryDemo").after(para);
  });
</script>
```

#### Example

Insert span element after each p element

<button id="f4JQuery">Try it</button>

<p class="f4JQueryDemo">This is a paragraph 1</p>
<p class="f4JQueryDemo">This is a paragraph 2</p>
