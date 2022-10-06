// Виконуй це завдання у файлах 01 - gallery.html і
// 01 - gallery.js.Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems
//  і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
//  Використовуй CDN сервіс jsdelivr і додай у проект посилання на
// мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.
//  Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
//  Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.


import { galleryItems } from './gallery-items.js';
// Change code below this line

// import { basicLightbox } from  'basiclightbox';

let items = galleryItems; 
const gallery = document.querySelector('.gallery');

const markup = items.reduce((acc, item) => acc + `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
  </div>`, '');


gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClick);
console.log(gallery);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) return;

    const currentImage = evt.target;
    console.log('Current image: ${currentImage.dataset.source}')

    const instance = basicLightbox.create(`<div class="modal"><img src="${currentImage.dataset.source}" width="800" height="600"></div>`)
   
    instance.show();
   
    document.addEventListener('keydown', esc);
    function esc(close) {
        if (close.key === 'Escape') {
            instance.close();
            
        }
        document.removeEventListener("keydown", esc);
        console.log(esc)
    };
}