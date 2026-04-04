import { View } from './View';

class SearchView extends View {
  _parentElement = document.querySelector('.search');

  getQuery() {
    return this._parentElement.querySelector('.search__field').value;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      this._clear;
      handler();
    });
  }
}

export default new SearchView();
