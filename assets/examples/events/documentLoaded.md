## Document Loaded event

### Javascript

```html
<script>
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
  });
</script>
```

#### Example:

### jQuery

```html
<script>
  $(document).ready(function () {
    console.log("DOM loaded from jQuery");
  });
</script>
```

#### Example:
