//save Bookmark to LocalStorage
export function saveBookmark(newBookmark) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  bookmarks.push(newBookmark);

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
//Delete Bookmark
export function handleBtnDelete(e) {
  if (!e.target.classList.contains('delete-btn')) return;

  const liItem = e.target.closest('.list-items');
  const title = liItem.firstElementChild.textContent;
  liItem.remove();
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const index = bookmarks.findIndex(bookmark => bookmark.title === title);
  if (index !== -1) {
    bookmarks.splice(index, 1);
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// //Edit Bookmark
export function handleEditBtn(e) {
  if (!e.target.classList.contains('edit-btn')) return;
  const li = e.target.closest('.list-items');
  const btn = e.target;

  //Btn Edit
  if (btn.textContent === 'edit') {
    const h1 = li.querySelector('h1');
    const a = li.querySelector('a');
    //create input
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    const inputUrl = document.createElement('input');
    inputUrl.type = 'url';
    //Add input value
    inputTitle.value = h1.textContent;
    inputUrl.value = a.href;
    //toggle elements
    h1.replaceWith(inputTitle);
    a.replaceWith(inputUrl);

    btn.textContent = 'save';
    inputTitle.focus();
  } else if (btn.textContent === 'save') {
    const inputTitle = li.querySelector('input[type="text"]');
    const inputUrl = li.querySelector('input[type="url"]');

    const h1 = document.createElement('h1');
    h1.textContent = inputTitle.value;

    const a = document.createElement('a');
    a.href = inputUrl.value;
    a.textContent = inputUrl.value;
    a.href = inputUrl.value;
    a.textContent = 'Visit';
    a.target = '_blank';
    a.classList.add('url-item');

    inputTitle.replaceWith(h1);
    inputUrl.replaceWith(a);

    btn.textContent = 'Edit';
  }
}
