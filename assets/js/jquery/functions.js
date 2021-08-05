/* Create an HTML element with any text value */
$('#example-jq-13').on('click', function() {
  let newElm = $('<p></p>')
  newElm.text('P tag created')
  $('#result-jq-13').append(newElm)
})

/* Create an HTML element with any text value */
$('#example-jq-14').on('click', function() {
  $(this).remove()
})

/* Append HTML element with any text value */
$('#example-jq-15').on('click', function() {
  $('#result-jq-15').append('<p>P tag created</p>')
})

/* Append HTML element with any text value */
$('#example-jq-16').on('click', function() {
  $('#result-jq-16').prepend('<p>P tag created</p>')
})

/* Create and add after */
$('#example-jq-17').on('click', function() {
  $('#result-jq-17').after('<p>P tag created</p>')
})

/* Create and add before */
$('#example-jq-18').on('click', function() {
  $('#result-jq-18').before('<p>P tag created</p>')
})

/* Clone element */
$('#example-jq-19').on('click', function() {
  let clone = $('#result-jq-19').clone()
  $('#result-jq-19').after(clone)
})

/* Add class element */
$('#example-jq-20').on('click', function() {
  $('#result-jq-20').addClass('red')
})

/* Remove class element */
$('#example-jq-21').on('click', function() {
  $('#result-jq-21').removeClass('red')
})

/* Toggle class element */
$('#example-jq-22').on('click', function() {
  $('#result-jq-22').toggleClass('red')
})

/* Add disabled attr */
$('#example-jq-23').on('click', function() {
  $(this).attr('disabled', true)
  $(this).text('😥')
})

/* Add disabled attr */
$('#example-jq-24').on('click', function() {
  $('#result-jq-24').attr('disabled', false)
  $('#result-jq-24').text('😀')
})

/* Add data-src */
$('#example-jq-25').on('click', function() {
  $('#result-jq-25').data('src', 'This is the data-src of the img')
  $('#result-jq-25').after($('#result-jq-25').data('src'))
})

/* Remove data-src */
$('#example-jq-26').on('click', function() {
  $('#result-jq-26').removeAttr('data-src')
  $('#result-jq-26').after('Data removed')
})

/* Fade in */
$('#example-jq-27').on('click', function() {
  $('#result-jq-27').fadeIn()
})

/* Fade out */
$('#example-jq-28').on('click', function() {
  $('#result-jq-28').fadeOut()
})