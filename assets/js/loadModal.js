/********** DISPLAY MODAL *************/

// Access elements of list items and modals
let liItems = document.querySelectorAll('.list__item');
let modals = document.querySelectorAll('.modal__parent');
let modalParent = document.querySelectorAll('.modal__parent');

// Compare data-modal with id of every modal to get the right one
liItems.forEach(item => {
    item.addEventListener('click', event => {
        hideModals();
        displayModal(item.dataset.modal)
    })
})

// Display modal
function displayModal(id) {
    let m = document.getElementById(id);
    m.classList.add('visible')
}

// Undisplay modal
function hideModals() {
    modals.forEach(modal => {
        modal.classList.remove('visible')
    })
}

// Close modal with "x" element
modals.forEach(item => {
    let close = item.querySelector('.x');
    close.addEventListener('click', hideModals);
})

// Close modal when clicking  anywhere outside the modal__content
window.onclick = function (event) {
    modalParent.forEach(modal => {
        if (event.target === modal) {
            hideModals();
        }
    })
};


/******* SNOWFLAKE EFFECTS********/

const body = document.body

setInterval(createSnowFlake, 50)

function createSnowFlake() {
    const snowFlake = document.createElement('i');
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 4 + 's';
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snowFlake);

    setTimeout(() => {
        snowFlake.remove();
    }, 5000)
}