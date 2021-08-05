/* Iterate a collection of elements */
$('#example-jq-29').on('click', function(){
  $('#result-jq-29 > p').css({"color": "red"})
})

/* Get parent element */
$('#example-jq-30').on('click', function(){
  $('#result-jq-30').parent().css({"font-weight": "bold"})
})

/* Get the collection of children */
$('#example-jq-31').on('click', function(){
  $('#result-jq-31 .children *').css({"font-weight": "bold"})
})

/* Get all elements that have a certain class */
$('#example-jq-32').on('click', function(){
  $('#result-jq-32 .list').css({"font-weight": "bold"})
})

/* Get element by id */
$('#example-jq-33').on('click', function(){
  $(this).css({"font-weight": "bold"})
})

/* Get all elements that have a certain class and display none */
$('#example-jq-34').on('click', function(){
  $('#result-jq-34 .list[style="display: none;"]').css({"color": "red", "display": "block"})
})

/* Get option selected */
$('#example-jq-35').on('click', function(){
  let value = $('#result-jq-35').val()
  $('#result-jq-35').after(value)
})

/* Change href */
$('#example-jq-36').on('click', function(){
  $('#result-jq-36').attr('href', 'https://youtube.com')
})

/* Input value */
$('#example-jq-37').on('click', function(){
  alert($(this).val())
})

/* Remove by selector */
$('#example-jq-38').on('click', function(){
  $('#result-jq-38 *').remove()
})

/* Animate element */
$('#example-jq-39').on('click', function(){
  $('#result-jq-39').animate({
    "width": "100%"
  }, 500)
})