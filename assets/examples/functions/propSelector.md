# Property selector

## Javascript

```html
<script>
  const selector = document.getElementById("f22Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelectorAll('.textJs[style="display:none;"]');

    para.forEach((element) => {
      element.style.display = "block";
      element.style.color = "red";
    });
  });
</script>
```

Get all the elements that have a certain class and the display property of none and change their font color

<button id="f22Js">Try it</button>

<p>This is a paragraph 1</p>
<p  class="textJs" style="display:none;">This is a paragraph 2</p>
<p class="textJs" style="display:none;">This is a paragrap 3</p>

## jQuery

```html
<script>
  $("#f22JQuery").on("click", function (e) {
    $('.textJq[style="display:none;"]').css({
      color: "red",
      display: "block",
    });
  });
</script>
```

Get all the elements that have a certain class and the display property of none and change their font color

<button id="f22JQuery">Try it</button>

<p>This is a paragraph 1</p>
<p class="textJq" style = "display:none;">This is a paragraph 2</p>
<p class="textJq" style="display:none;">This is a paragraph 3</p>
