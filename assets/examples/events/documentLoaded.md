## Document Loaded event

When the HTML document has been loaded and you can manipulate it with JavaScript

### Javascript

```html
<script>
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
  });
</script>
```

#### Example:

go to browser console to show result

### jQuery

```html
<script>
  $(document).ready(function () {
    console.log("DOM loaded from jQuery");
  });
</script>
```

#### Example:

go to browser console to show result
