# Click event

## Javascript

```html
<script>
  const selector = document.getElementById("f5Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelectorAll(".f5JsDemo");

    para.forEach((element) => {
      let btn = document.createElement("button");
      btn.textContent = "Click";
      element.insertAdjacentElement("beforebegin", btn);
    });
  });
</script>
```

Insert span element before each p element

<button id="f5Js">Try it</button>

<p class="f5JsDemo">This is a paragraph 1</p>
<p class="f5JsDemo">This is a paragraph 2</p>

## jQuery

```html
<script>
  $("#f5JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click" });
    $(".f5JQueryDemo").before(para);
  });
</script>
```

Insert span element before each p element

<button id="f5JQuery">Try it</button>

<p class="f5JQueryDemo">This is a paragraph 1</p>
<p class="f5JQueryDemo">This is a paragraph 2</p>
