# Read first input value

Show an alert with the value of the first <code>input</code> of the page (Create an <code>input</code> element to test this case)

## Javascript

```html
<form id="f25JsDemo">
  <label for="name">Name</label>
  <input type="text" name="name" id="name"></input>
  <label for="address">Address</label>
  <input type="text" name="address" id="address"></input>
</form>

<script>
  const selector = document.getElementById("f1Js");

  selector.addEventListener("click", function (e) {
    document.getElementById("f1JsDemo").remove();
  });
</script>
```

<button id="f25Js">Try it</button>

<form id="f25JsDemo">
  <label for="name">Name</label>
  <input type="text" name="name" id="name"></input>
  <label for="address">Address</label>
  <input type="text" name="address" id="address"></input>
</form>

## jQuery

```html
<form id="f25JQueryDemo">
  <label for="name">Name</label>
  <input type="text" name="name" id="name"></input>
  <label for="address">Address</label>
  <input type="text" name="address" id="address"></input>
</form>

<script>
  $("#f25JQuery").on("click", function (e) {
    let para = $("#f25JQueryDemo input").first().val();
    alert("Your name is: " + para);
  });
</script>
```

<button id="f25JQuery">Try it</button>

<form id="f25JQueryDemo">
  <label for="name">Name</label>
  <input type="text" name="name" id="name"></input>
  <label for="address">Address</label>
  <input type="text" name="address" id="address"></input>
</form>
