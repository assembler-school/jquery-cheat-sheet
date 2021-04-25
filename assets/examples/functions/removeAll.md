## Remove all items

Remove all items from a specific selector

### Javascript

```html
<p class="text">This is a paragraph 1</p>
<p class="text">This is a paragraph 2</p>
<p class="text">This is a paragraph 3</p>

<script>
  const selector = document.getElementById("f26Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelectorAll(".text");
    para.forEach((element) => {
      element.remove();
    });
  });
</script>
```

#### Example

<button id="f26Js">Try it</button>

<p class="text">This is a paragraph 1</p>
<p class="text">This is a paragraph 2</p>
<p class="text">This is a paragraph 3</p>

### jQuery

```html
<p class="textjq">This is a paragraph 1</p>
<p class="textjq">This is a paragraph 2</p>
<p class="textjq">This is a paragraph 3</p>

<script>
  $("#f26JQuery").on("click", function (e) {
    $(".textjq").remove();
  });
</script>
```

#### Example

<button id="f26JQuery">Try it</button>

<p class="textjq">This is a paragraph 1</p>
<p class="textjq">This is a paragraph 2</p>
<p class="textjq">This is a paragraph 3</p>
