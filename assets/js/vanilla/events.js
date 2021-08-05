/* Document ready */
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem('documentReady')) {
    alert("ready!")
    localStorage.removeItem('documentReady')
  }
})
document.getElementById('example-va-0').addEventListener('click', function(event) {
  localStorage.setItem('documentReady', 'true')
  location.reload()
})

/* Element on Click */
document.getElementById('example-va-1').addEventListener('click', function(event) {
  alert('Click from vanilla!')
})

/* Element on Double Click */
document.getElementById('example-va-2').addEventListener('dblclick', function(event) {
  alert('Double click from vanilla!')
})

/* Keyboard on key dow */
document.addEventListener('keydown', function(event) {
  keyName = event.key
  document.getElementById('example-va-3').innerHTML = keyName
})

/* Cursor on move */
document.getElementById('example-va-4').addEventListener('mousemove', function(event) {
  document.getElementById('result-va-4').innerHTML = `event.pageX: ${event.pageX}, event.pageY: ${event.pageY}`
})

/* Input on change */
document.getElementById('example-va-5').addEventListener('change', function(event) {
  document.getElementById('result-va-5').innerHTML = `${event.target.value}`
})

/* IMG on load */
document.getElementById('example-va-6').addEventListener('load', function(response) {
  document.getElementById('result-va-6').innerHTML = 'Image loaded!';
})

/* IMG on load fail */
document.getElementById('example-va-7').addEventListener('error', function(event) {
  document.getElementById('result-va-7').innerHTML = 'Image not found!';
})

/* Form on submit */
document.getElementById('example-va-8').addEventListener('submit', function(event) {
  event.preventDefault()
  alert('Form submitted!')
});

/* Select option on change */
document.getElementById('example-va-9').addEventListener('change', function(event) {
  document.getElementById('result-va-9').innerHTML = `${event.target.value}`
})

/* Mouse over an element */
document.getElementById('example-va-10').addEventListener('mouseenter', function(event) {
  this.style.cursor = 'grabbing'
})

/* Input checked true/false */
document.getElementById('example-va-11').addEventListener('change', function(event) {
  document.getElementById('result-va-11').innerHTML = this.checked
})

