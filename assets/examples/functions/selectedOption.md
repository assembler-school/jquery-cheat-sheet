## Get selected option

Get the options of a select element that are selected (attribute selected)

### Javascript

```html
<select id="f23JsDemo">
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="pineapple">Pineapple</option>
  <option value="banana">Banana</option>
</select>

<p id="f23JsP">Selected:</p>

<script>
  const selector = document.getElementById("f23Js");

  selector.addEventListener("click", function (e) {
    let para = document.getElementById("f23JsDemo").value;
    let p = document.getElementById("f23JsP");
    p.textContent = "Selected: " + para;
  });
</script>
```

#### Example

<button id="f23Js">Try it</button>

<select id="f23JsDemo">
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="pineapple">Pineapple</option>
  <option value="banana">Banana</option>
</select>

<p id="f23JsP">Selected: </p>

### jQuery

```html
<select id="f23JQueryDemo">
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="pineapple">Pineapple</option>
  <option value="banana">Banana</option>
</select>

<p id="f23JQueryP">Selected:</p>

<script>
  $("#f23JQuery").on("click", function (e) {
    let para = $("#f23JQueryDemo option:selected").text();
    // Or value
    // $("#f23JQueryDemo option:selected").val();
    $("#f23JQueryP").text("Selected: " + para);
  });
</script>
```

#### Example

<button id="f23JQuery">Try it</button>

<select id="f23JQueryDemo">
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="pineapple">Pineapple</option>
  <option value="banana">Banana</option>
</select>

<p id="f23JQueryP">Selected: </p>
