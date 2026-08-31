export function createBookmarkItems(items) {
  const itemsArray = Array.isArray(items) ? items : [items];
  const markup = itemsTemplate(itemsArray);
  return markup;
}

//render one item
export function itemTemplate(item) {
  return `<li class='list-items'>
          <h1 class="item-title">${item.title}</h1>
          <div class="buttons">
           <a href="${item.url}" target="_blank" class="url-item">Visit</a>
          <button type="button" class="delete-btn">delete</button>
      <button type="button" class="edit-btn">edit</button>
      </div>
        </li>`;
}

//render array items
function itemsTemplate(items) {
  return items.map(itemTemplate).join('');
}
