import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createBookmarkItems, itemTemplate } from './js/render';
import { saveBookmark } from './js/bookmark-functions';
const refs = {
  form: document.querySelector('.form'),
  bookMarkList: document.querySelector('.bookmark-list'),
};
const { form, bookMarkList } = refs;

//Load all bookmarks from local Storage
document.addEventListener('DOMContentLoaded', () => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  if (!bookmarks) {
    return;
  }
  const markup = createBookmarkItems(bookmarks);
  bookMarkList.innerHTML = markup;
});

// add bookmark to Bookmark list
form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const inputValue = {
    title: formData.get('title').trim(),
    url: formData.get('url').trim(),
  };

  if (!inputValue.title || !inputValue) {
    iziToast.show({
      message: 'Please fill all fields!',
    });
    return;
  }
  saveBookmark(inputValue);

  const markup = itemTemplate(inputValue);
  bookMarkList.insertAdjacentHTML('beforeend', markup);

  form.reset();
}
