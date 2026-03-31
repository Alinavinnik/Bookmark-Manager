import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createBookmarkItems } from './render';
const refs = {
  form: document.querySelector('.form'),
};

const { form } = refs;

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const inputValue = {
    title: formData.get('title'),
    url: formData.get('url'),
  };
  saveData(inputValue);

  createBookmarkItems(inputValue);

  form.reset();
}

function saveData(data) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  bookmarks.push(data);

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
