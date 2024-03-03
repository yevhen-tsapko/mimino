const nightsNumber = document.querySelector('.modal__select.nights-number');
const price = document.querySelector('.modal__input.price');

nightsNumber.addEventListener('click', e => {
  price.placeholder = nightsNumber.value * 1000;
});
