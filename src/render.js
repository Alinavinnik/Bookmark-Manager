const bookMarkList = document.querySelector('.bookmark-list');

export function createBookmarkItems(items) {
  const itemsArray = Array.isArray(items) ? items : [items];
  function itemTemplate(item) {
    return `<li class='list-items'>
          <h1>${item.title}</h1>
          <a href="${item.url}" target="blank">Відкрити посилання </a>
          <button type="button" class="delete-btn">Delete</button>
      <button type="button" class="edit-btn">Edit</button>
        </li>`;
  }

  function itemsTemplate(items) {
    return items.map(itemTemplate).join('');
  }
  const markup = itemsTemplate(itemsArray);
  return bookMarkList.insertAdjacentHTML('beforeend', markup);
}
