export function createBookmarkItems(items) {
  const itemsArray = Array.isArray(items) ? items : [items];
  itemsTemplate(items);
  const markup = itemsTemplate(itemsArray);
  return markup;
}

//render one item
export function itemTemplate(item) {
  return `<li class='list-items'>
          <h1>${item.title}</h1>
          <a href="${item.url}" target="blank">Visit</a>
          <button type="button" class="delete-btn">Delete</button>
      <button type="button" class="edit-btn">Edit</button>
        </li>`;
}

//render array items
function itemsTemplate(items) {
  return items.map(itemTemplate).join('');
}
