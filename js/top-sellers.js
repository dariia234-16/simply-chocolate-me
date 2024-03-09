(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buynow-open]"),
    openModalBtnSecondary: document.querySelector(
      "[data-buynow-open-secondary]"
    ),
    closeModalBtn: document.querySelector("[data-buynow-close]"),
    modal: document.querySelector("[data-modal-buynow]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnSecondary.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.overlay.classList.toggle("is-hidden");
  }
})();
