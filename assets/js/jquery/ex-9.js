$('#form').on('submit',(e) => {
    e.preventDefault();
    $('#result').html('You have made submit to the form');
});

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector('#result').innerHTML = 'You have made submit to the form';
  });
  