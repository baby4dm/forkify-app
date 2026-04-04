import { View } from './View';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';

  _generateMarkup() {
    return this._data.map(el => previewView.render(el, false)).join('');
  }

  addHandlerLoad(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarksView();
