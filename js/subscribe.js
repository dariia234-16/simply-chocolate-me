(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-subscribe-open]"),
    closeModalBtn: document.querySelector("[data-subscribe-close]"),
    modal: document.querySelector("[data-modal-subscribe]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.overlay.classList.toggle("is-hidden");
  }
})();
