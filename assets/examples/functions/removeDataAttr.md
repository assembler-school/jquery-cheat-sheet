## Add and remove data atrribute

Remove the data-src attribute of the img element

### Javascript

```html
<script>
  const btn1 = document.getElementById("f12Jsb1");
  const btn2 = document.getElementById("f12Jsb2");

  btn1.addEventListener("click", function (e) {
    const img = document.getElementById("f12JsImg");
    img.dataset.src = "./assembler.png";
    alert("data-src is: " + img.dataset.src);
  });

  btn2.addEventListener("click", function (e) {
    const img = document.getElementById("f12JsImg");
    img.removeAttribute("data-src");
    alert("data-src  is: " + img.dataset.src);
  });
</script>
```

#### Example

Remove data atrribute

<img id="f12JsImg" src="./assets/img/assembler.png"></img>
<button id="f12Jsb1">add data attr</button>
<button id="f12Jsb2">remove data attr</button>

### jQuery

```html
<script>
  $("#f12JQueryb1").on("click", function () {
    $("#f12JQueryImg").attr("data-src", "./assembler.png");
    alert("data-src is: " + $("#f12JQueryImg").attr("data-src"));
  });

  $("#f12JQueryb2").on("click", function () {
    $("#f12JQueryImg").removeAttr("data-src");
    alert("data-src is: " + $("#f12JQueryImg").attr("data-src"));
  });
</script>
```

#### Example

Remove data attribute

Using the data() method to update data does not affect attributes in the DOM. To set a data-\* attribute value, use attr.

<img id="f12JQueryImg" src="./assets/img/assembler.png"></img>
<button id="f12JQueryb1">add data attr</button>
<button id="f12JQueryb2">remove data attr</button>
