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


/******* SEASON EFFECTS********/

const body = document.body

switch(new Date().getMonth()) {
    case 2:
    case 3:
    case 4:
        springEffect();
        break;
    case 5:
    case 6:
    case 7:
        summerEffect();
        break;
    case 8:
    case 9:
    case 10:
        autumnEffect();
        break;
    case 11:
    case 12:
    case 1:
        winterEffect();
        break;
}

// Winter effect
function winterEffect() {
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
}


// Summer effect 
function summerEffect() {
    setInterval(createSun, 50)

    function createSun() {
        const sun = document.createElement('i');
        sun.classList.add('fas');
        sun.classList.add('fa-sun');
        sun.style.left = Math.random() * window.innerWidth + 'px';
        sun.style.animationDuration = Math.random() * 3 + 4 + 's';
        sun.style.opacity = Math.random();
        sun.style.fontSize = Math.random() * 10 + 10 + 'px';

        document.body.appendChild(sun);

        setTimeout(() => {
            sun.remove();
        }, 5000)
    }
}


// Spring effect 
function springEffect() {
    setInterval(createRain, 50)

    function createRain() {
        const tint = document.createElement('i');
        tint.classList.add('fas');
        tint.classList.add('fa-tint');
        tint.style.left = Math.random() * window.innerWidth + 'px';
        tint.style.animationDuration = Math.random() * 3 + 4 + 's';
        tint.style.opacity = Math.random();
        tint.style.fontSize = Math.random() * 10 + 10 + 'px';

        document.body.appendChild(tint);

        setTimeout(() => {
            tint.remove();
        }, 5000)
    }
}

// Autumn affect
function autumnEffect() {
    setInterval(createLeaves, 50)

    function createLeaves() {
        const leaves = document.createElement('i');
        leaves.classList.add('fas');
        leaves.classList.add('fa-leaf');
        leaves.style.left = Math.random() * window.innerWidth + 'px';
        leaves.style.animationDuration = Math.random() * 3 + 4 + 's';
        leaves.style.opacity = Math.random();
        leaves.style.fontSize = Math.random() * 10 + 10 + 'px';
    
        document.body.appendChild(leaves);
    
        setTimeout(() => {
            leaves.remove();
        }, 5000)
    }
}

