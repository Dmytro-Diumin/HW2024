// const categoriesRef = document.querySelector('.categories__list');
// console.log(categoriesRef);
// categoriesRef.addEventListener('click', onCategoriesClick);

// async function onCategoriesClick(e) {
//   e.preventDefault();
// }

// document
//   .getElementById('scrollableList')
//   .addEventListener('click', function (e) {
//     const selectedCategory = e.target;
//     if (!selectedCategory.classList.contains('categories__item')) {
//       return; //якщо клік не на категорії
//     }

//     const allCategories = Array.from(this.children);

//     // Знімає вибір з усіх категорій
//     allCategories.forEach(category => {
//       category.classList.remove('selected');
//       category.textContent = category.dataset.originalText;
//     });

//     // Додаємо клас 'selected' до обраної категорії
//     selectedCategory.classList.add('selected');
//     selectedCategory.textContent = selectedCategory.textContent.toUpperCase();

//     console.log(selectedCategory);
//   });

const categoriesRef = document.querySelector('.categories__list');

categoriesRef.addEventListener('click', onCategoriesClick);

async function onCategoriesClick(e) {
  e.preventDefault();
}

function categoriesSelected() {
  return new Promise(resolve => {
    document
      .getElementById('scrollableList')
      .addEventListener('click', function (e) {
        const selectedCategory = e.target;
        if (!selectedCategory.classList.contains('categories__item')) {
          return; // якщо клік не на категорії
        }

        const allCategories = Array.from(this.children);

        // Знімає вибір з усіх категорій
        allCategories.forEach(category => {
          category.classList.remove('selected');
          category.textContent = category.dataset.originalText;
        });

        // Додаємо клас 'selected' до обраної категорії
        selectedCategory.classList.add('selected');
        selectedCategory.textContent =
          selectedCategory.textContent.toUpperCase();

        resolve(selectedCategory);
      });
  });
}

categoriesSelected().then(selectedCategory => {});
