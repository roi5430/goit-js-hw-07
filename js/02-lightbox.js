// Створення і рендер розмітки на підставі масиву даних galleryItems і 
// наданого шаблону елемента галереї.Використовуй готовий код з першого завдання.

// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли: simple - lightbox.min.js і
// simple - lightbox.min.css.

// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

// Подивися в документації секцію «Options» і додай відображення підписів до зображень
// з атрибута alt.Нехай підпис буде знизу і з'являється через 250 мілісекунд 
// після відкриття зображення.







import { galleryItems } from './gallery-items.js';
// Change code below this line


let items = galleryItems; 
const gallery = document.querySelector('.gallery');

const markup = items.reduce((acc, item) => acc + `
    <a class="gallery__item" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>`, '');


gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClick);

function onClick(evt) {
       evt.preventDefault();
    if (evt.target === evt.currentTarget) return;

}

  let click = new SimpleLightbox(".gallery a", {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
    });

console.log(galleryItems);
