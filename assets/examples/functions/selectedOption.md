# Get selected option

## Javascript

```html
<script>
  const selector = document.getElementById("f1Js");

  selector.addEventListener("click", function (e) {
    document.getElementById("f1JsDemo").remove();
  });
</script>
```

Get the options of a select element that are selected (attribute selected)

<button id="f23Js">Try it</button>

<select id="f23JsDemo">
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="pineapple">Pineapple</option>
  <option value="banana">Banana</option>
</select>

<p id="f23JsP">Selected: </p>

## jQuery

```html
<script>
  $("#f1JQuery").on("click", function (e) {
    $("#f1JQueryDemo").remove();
  });
</script>
```

Get the options of a select element that are selected (attribute selected)

<button id="f23JQuery">Try it</button>

<select id="f23JQueryDemo">
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="pineapple">Pineapple</option>
  <option value="banana">Banana</option>
</select>

<p id="f23JQueryP">Selected: </p>
