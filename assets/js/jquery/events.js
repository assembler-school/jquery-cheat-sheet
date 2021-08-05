/* Document ready */
$( document ).ready(function() {
  if (localStorage.getItem('documentReady')) {
    alert("ready!")
    localStorage.removeItem('documentReady')
  }
});
$('#example-jq-0').on('click', function(event) {
  localStorage.setItem('documentReady', 'true')
  location.reload()
})


/* Element on Click */
$('#example-jq-1').on('click', function(event) {
  alert('Click from jQuery')
})

/* Element on Double Click */
$('#example-jq-2').on('dblclick', function(event) {
  alert('Double click from jQuery')
})

/* Keyboard on key dow */
$(document).on('keydown', event => {
  keyName = event.key
  $('#example-jq-3').text(keyName)
})

/* Cursor on move */
$('#example-jq-4').on('mousemove', function(event) {
  $('#result-jq-4').text(`event.pageX: ${event.pageX}, event.pageY: ${event.pageY}`)
})

/* Input on change */
$('#example-jq-5').on('change', function(event) {
  $('#result-jq-5').text($(this).val())
})

/* IMG on load */
$('#example-jq-6').on('load', function() {
  $('#result-jq-6').text('Image loaded!')
})

/* IMG on load fail */
$('#example-jq-7').on('error', function() {
  $('#result-jq-7').text('Image not found!')
})

/* Form on submit */
$('#example-jq-8').on('submit', function(event){
  event.preventDefault()
  alert('Form submitted!')
})

/* Select option on change */
$('#example-jq-9').on('change', function(event){
  $('#result-jq-9').text($(this).val())
})

/* Mouse over an element */
$('#example-jq-10').on('mouseenter', function(event){
  $(this).css({"cursor": "grabbing"})
})

/* Input checked true/false */
$('#example-jq-11').on('change', function(event){
  let checked = $(this).prop('checked')
  $('#result-jq-11').text(checked)
})

/* Get child element on parent click */
$('#example-jq-12').on('click', function(event) {
  let child = event.target
  $('#result-jq-12').text(child.textContent)
})