import { View } from './View';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';

  _generateMarkup() {
    return this._data.map(el => this._generatePreviewElement(el)).join('');
  }
  _generatePreviewElement(data) {
    return `<li class="preview">
            <a class="preview__link ${window.location.hash.slice(1) === data.id ? 'preview__link--active' : ''}" href="#${data.id}">
              <figure class="preview__fig">
                <img src="${data.image}" alt="${data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
                <p class="preview__publisher">${data.publisher}</p>
              </div>
            </a>
          </li>`;
  }
}

export default new BookmarksView();
