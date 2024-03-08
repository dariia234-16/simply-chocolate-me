(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-reviews-open]"),
    closeModalBtn: document.querySelector("[data-reviews-close]"),
    modal: document.querySelector("[data-modal-reviews]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.overlay.classList.toggle("is-hidden");
  }
})();
