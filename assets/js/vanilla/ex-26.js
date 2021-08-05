setTimeout(() => {
  document.querySelector('img').dataset.src = 'image';
  document.querySelector('#result').innerHTML = '<br>Add data-src to image';
}, 2000);
