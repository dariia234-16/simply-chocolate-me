(() => {
  const refs = {
    openModalBtn: document.querySelector("[top-sellers-open]"),
    closeModalBtn: document.querySelector("[top-sellers-close]"),
    modal: document.querySelector("[modal-top-sellers]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.overlay.classList.toggle("is-hidden");
  }
})();
