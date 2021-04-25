## Change event on select element

### Javascript

```html
<script>
  const selector = document.getElementById("e9Js");
  selector.addEventListener("change", function (e) {
    let value = e.target.value;
    alert("You selected: " + value);
  });
</script>
```

#### Example:

Select an option and you will see the result

<select id="e9Js">
    <option value="1">one</option>
    <option value="2">two</option>
    <option value="3">three</option>
</select>

### jQuery

```html
<script>
  const selector = document.getElementById("e9Js");
  selector.addEventListener("change", function (e) {
    let value = e.target.value;
    alert("You selected: " + value);
  });
</script>
```

#### Example:

Select an option and you will see the result

<select id="e9JQuery">
    <option value="1">one</option>
    <option value="2">two</option>
    <option value="3">three</option>
</select>
