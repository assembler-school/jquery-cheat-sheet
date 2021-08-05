setTimeout(() => {
  document.querySelector('img').removeAttribute("data-src");
  document.querySelector('#result').innerHTML = '<br>Remove data-src to image';
}, 2000);
