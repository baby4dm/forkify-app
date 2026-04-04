import { View } from './View';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _openBtn = document.querySelector('.nav__btn--add-recipe');
  _closeBtn = document.querySelector('.btn--close-modal');
  _message = 'Recipe was successfully uploaded :)';

  constructor() {
    super();
    this._addHandlerOpenWindow();
    this._addHandlerCloseWindow();
  }
  handleToogle() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }
  _addHandlerOpenWindow() {
    this._openBtn.addEventListener('click', this.handleToogle.bind(this));
  }
  _addHandlerCloseWindow() {
    this._overlay.addEventListener('click', this.handleToogle.bind(this));
    this._closeBtn.addEventListener('click', this.handleToogle.bind(this));
  }

  addHandlerSubmitForm(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}
export default new AddRecipeView();
