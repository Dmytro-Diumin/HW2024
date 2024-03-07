import './js/shoppingListRender.js';
import './js/support.js';
import './js/pagination.js';
import './js/theme.js';

import './img/noptimizesprite.svg';

import { refs } from './js/refs.js';
import { onAddThemeLocalStorage } from './js/localStorage.js';
import { toggleModal } from './js/modalburger.js';

// Темна тема
if (localStorage.getItem('theme') === 'dark') {
  refs.themeCheckbox.checked = true;
  document.body.classList.add('dark-theme');
}

refs.themeCheckbox.addEventListener('change', onAddThemeLocalStorage);

// Бургер меню

refs.burgerBtn.addEventListener('click', () => {
  refs.burgerCont.classList.toggle('is-open-burger');
  refs.body.classList.toggle('modal-open-burger');
  toggleModal();
});
