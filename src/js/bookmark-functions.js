//save Bookmark to LocalStorage
export function saveBookmark(newBookmark) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  bookmarks.push(newBookmark);

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
