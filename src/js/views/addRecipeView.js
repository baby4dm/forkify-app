import { View } from './View';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _openBtn = document.querySelector('.nav__btn--add-recipe');
  _closeBtn = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerOpenWindow();
    this._addHandlerCloseWindow();
  }
  _handleToogle() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }
  _addHandlerOpenWindow() {
    this._openBtn.addEventListener('click', this._handleToogle.bind(this));
  }
  _addHandlerCloseWindow() {
    this._overlay.addEventListener('click', this._handleToogle.bind(this));
    this._closeBtn.addEventListener('click', this._handleToogle.bind(this));
  }

  _generateMarkup() {}
}
export default new AddRecipeView();
