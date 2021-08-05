/* Iterate a collection of elements */
document.getElementById('example-va-29').addEventListener('click', function(){
  document.querySelectorAll('#result-va-29 > p').forEach(elm => elm.style.color = 'red')
})

/* Get parent elements */
document.getElementById('example-va-30').addEventListener('click', function(){
  document.getElementById('result-va-30').parentElement.style.fontWeight = 'bold'
})

/* Get children collection */
document.getElementById('example-va-31').addEventListener('click', function(){
  document.querySelectorAll('#result-va-31 .children *').forEach(elm => elm.style.fontWeight = 'bold')
})

/* Get elements with a certain class */
document.getElementById('example-va-32').addEventListener('click', function(){
  document.querySelectorAll('#result-va-32 .list').forEach(elm => elm.style.fontWeight = 'bold')
})

/* Get elements by id */
document.getElementById('example-va-33').addEventListener('click', function(){
  this.style.fontWeight = 'bold'
})

/* Get all elements that have a certain class and display none */
document.getElementById('example-va-34').addEventListener('click', function(){
  document.querySelectorAll('#result-va-34 .list[style="display: none;"]').forEach(elm => {
    elm.style.color = 'red'
    elm.style.display = 'block'
  })
})

/* Get option selected */
document.getElementById('example-va-35').addEventListener('click', function(){
  let select = document.getElementById('result-va-35')
  let value = select.options[select.selectedIndex].value;
  select.insertAdjacentText('afterend', value)
})

/* Change href */
document.getElementById('example-va-36').addEventListener('click', function(){
  document.getElementById('result-va-36').setAttribute('href', 'https://youtube.com')
})

/* Input value */
document.getElementById('example-va-37').addEventListener('click', function(){
  alert(this.value)
})

/* Remove by selector */
document.getElementById('example-va-38').addEventListener('click', function(){
  document.querySelectorAll('#result-va-38 *').forEach(elm => elm.remove())
})

/* Animate element */
document.getElementById('example-va-39').addEventListener('click', function(){
  let elm = document.getElementById('result-va-39')
  elm.style.transition = '0.5s'
  elm.style.width = '100%'
})

document.addEventListener("DOMContentLoaded", function() {
  
  let elm = document.getElementById('title-page')
  
  elm.style.position = 'relative'
  elm.style.top = '-100px'
  elm.style.opacity = '0'
  elm.style.display = 'block'
  elm.style.transition = '0.5s'

  setTimeout(() => {
    elm.style.opacity = '1'
    elm.style.top = '0'
  }, 2000)
})