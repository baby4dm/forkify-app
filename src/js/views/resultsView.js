import { View } from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _generateMarkup() {
    return this._data.map(el => this._generatePreviewElement(el)).join('');
  }
  _generatePreviewElement(data) {
    return `<li class="preview">
            <a class="preview__link preview__link--active" href="#${data.id}">
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

export default new ResultsView();
