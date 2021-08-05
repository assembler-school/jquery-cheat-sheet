/********** DISPLAY MODAL *************/

// Access elements of list items and modals
let liItems = document.querySelectorAll('.list__item');
let modals = document.querySelectorAll('.modal__parent');
let modalParent = document.querySelectorAll('.modal__parent');

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

// Compare data-modal with id of every modal to get the right one
liItems.forEach(item => {
    item.addEventListener('click', event => {
        hideModals();
        displayModal(item.dataset.modal)
    })
})

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