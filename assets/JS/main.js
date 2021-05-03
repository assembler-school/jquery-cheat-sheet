const modalSection = document.getElementById("modal-section");
const modalCloseButton = document.querySelector(".modal-button.fa-window-close");
const modalContent = document.getElementById("modal-content");


modalCloseButton.addEventListener("click", closeFirstModal);
// modalSection.addEventListener("click", closeFirstModal);

function closeFirstModal() {
    // modalCloseButton.removeEventListener("click", closeFirstModal);
    modalSection.classList.add("hidden");
}

window.addEventListener("keyup", closeEscEventOut);

function closeEscEventOut(event) {
    const escEventNow = event.keyCode || event.which;
    if (escEventNow == 27) {
    closeFirstModal();
    }
};
