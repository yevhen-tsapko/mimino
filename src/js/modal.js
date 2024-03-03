const btns = document.querySelectorAll('.btn-js');
const body = document.querySelector('body');
const modalOverlay = document.querySelector('.modal__overlay');
const modals = document.querySelectorAll('.modal');
const closeModal = path => {
  modalOverlay.classList.remove('modal__overlay--visible');
  body.classList.remove('modal-open');
};

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    let path = e.currentTarget.getAttribute('data-modal');
    modals.forEach(modal => modal.classList.remove('modal--visible'));
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('modal--visible');
    modalOverlay.classList.add('modal__overlay--visible');
    body.classList.add('modal-open');
    const closeBtn = document.querySelector(
      `[data-target="${path}"] .close-button`
    );

    closeBtn.addEventListener('click', e => closeModal(path));
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal(path);
    });
  });
});
