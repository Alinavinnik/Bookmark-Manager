import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createBookmarkItems } from './render';
const refs = {
  form: document.querySelector('.form'),
  bookMarkList: document.querySelector('.bookmark-list'),
};

const { form, bookMarkList } = refs;
document.addEventListener('DOMContentLoaded', () => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  if (!bookmarks) {
    return;
  }
  const markup = createBookmarkItems(bookmarks);
  return (bookMarkList.innerHTML = markup);
});

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const inputValue = {
    title: formData.get('title'),
    url: formData.get('url'),
  };
  saveData(inputValue);

  const markup = createBookmarkItems(inputValue);
  bookMarkList.insertAdjacentHTML('beforeend', markup);
  form.reset();
}

function saveData(data) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  bookmarks.push(data);

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
