import './js/support';
/*LIBRARIES
1. Axios
(docs) - https://www.npmjs.com/package/axios?activeTab=readme
2.izitoast
(docs) - https://www.npmjs.com/package/izitoast
3.tui-pagination
(docs) - https://www.npmjs.com/package/tui-pagination
4.Swiper 
(docs) - https://www.npmjs.com/package/swiper
*/
if (localStorage.getItem('theme') === 'dark') {
  refs.themeCheckbox.checked = true;
  // Сюди треба навішати класи для темної теми або функцію яка це робитиме
}
import { loadHomeBooks } from './js/homeRender';
loadHomeBooks();

import { categoriesSelected } from './js/categories.js';
categoriesSelected();
import { refs } from './js/refs.js';
import { onAddThemeLocalStorage } from './js/localStorage.js';
refs.themeCheckbox.addEventListener('change', onAddThemeLocalStorage);

// import { onBookClick, bookListRef } from './js/modalWindowFunctions.js';
// bookListRef.addEventListener('click', onBookClick);