/* Create an HTML element with any text value */
document.getElementById('example-va-13').addEventListener('click', function(){
  let newElm = document.createElement('p')
  newElm.textContent = 'P tag created'
  document.getElementById('result-va-13').insertAdjacentElement('afterend', newElm)
})

/* Remove an HTML element with any text value */
document.getElementById('example-va-14').addEventListener('click', function(){
  this.remove()
})

/* Append HTML element with any text value */
document.getElementById('example-va-15').addEventListener('click', function(){
  document.getElementById('result-va-15').insertAdjacentHTML( "beforeend", '<p>P tag created</p>')
})

/* Append HTML element with any text value */
document.getElementById('example-va-16').addEventListener('click', function(){
  document.getElementById('result-va-16').insertAdjacentHTML( "afterbegin", '<p>P tag created</p>')
})

/* Create and add after */
document.getElementById('example-va-17').addEventListener('click', function(){
  document.getElementById('result-va-17').insertAdjacentHTML( "afterend", '<p>P tag created</p>')
})

/* Create and add before */
document.getElementById('example-va-18').addEventListener('click', function(){
  document.getElementById('result-va-18').insertAdjacentHTML( "beforebegin", '<p>P tag created</p>')
})

/* Create and add before */
document.getElementById('example-va-19').addEventListener('click', function(){
  let clone = document.getElementById('result-va-19').cloneNode(true) 
  document.getElementById('result-va-19').insertAdjacentElement( "afterend", clone)
})

/* Add class */
document.getElementById('example-va-20').addEventListener('click', function(){ 
  document.getElementById('result-va-20').classList.add('red')
})

/* Remove class */
document.getElementById('example-va-21').addEventListener('click', function(){ 
  document.getElementById('result-va-21').classList.remove('red')
})

/* Toggle class */
document.getElementById('example-va-22').addEventListener('click', function(){ 
  document.getElementById('result-va-22').classList.toggle('red')
})

/* Add disable attr */
document.getElementById('example-va-23').addEventListener('click', function(){ 
  this.setAttribute('disabled', true)
  this.textContent = '😥'
})

/* Remove disable attr */
document.getElementById('example-va-24').addEventListener('click', function(){ 
  document.getElementById('result-va-24').removeAttribute('disabled')
  document.getElementById('result-va-24').textContent = '😀'
})

/* Add data src */
document.getElementById('example-va-25').addEventListener('click', function(){ 
  document.getElementById('result-va-25').setAttribute('data-src', 'This is the data-src of the img')
  document.getElementById('result-va-25').insertAdjacentHTML('afterend', document.getElementById('result-va-25').getAttribute('data-src'))
})

/* Add data src */
document.getElementById('example-va-26').addEventListener('click', function(){ 
  document.getElementById('result-va-26').removeAttribute('data-src')
  document.getElementById('result-va-26').insertAdjacentHTML('afterend', 'Data removed')
})

/* Fade in */
document.getElementById('example-va-27').addEventListener('click', function(){ 
  let elm = document.getElementById('result-va-27')
  elm.style.display = 'block'
  elm.style.transition = 'opacity 0.25s'
  elm.style.opacity = '0'
  setTimeout(() => {
    elm.style.opacity = '1'
  }, 250)
})

/* Fade out */
document.getElementById('example-va-28').addEventListener('click', function(){ 
  let elm = document.getElementById('result-va-28')
  elm.style.transition = 'opacity 0.25s'
  elm.style.opacity = '1'
  elm.style.opacity = '0'
  setTimeout(() => {
    elm.style.display = 'none'
  }, 250)
})