"strict mode";

document.addEventListener("DOMContentLoaded", () => {
  const modalOpen = document.querySelector("#modal__open_js"),
    modalClose = document.querySelector("#modal__close_js"),
    modal = document.querySelector("#my-modal"),
    modalMini = document.querySelector("#modal__mini_js");

  function removeClass(selector) {
    selector.classList.remove("open");
  }

  function handleOpenModal(selector) {
    selector.classList.add("open");
  }

  function handleCloseModal() {
    removeClass(modal);

    handleOpenModal(modalMini);
    setTimeout(() => removeClass(modalMini), 1000);
  }

  modalOpen.addEventListener("click", () => handleOpenModal(modal));
  modalClose.addEventListener("click", handleCloseModal);
});
