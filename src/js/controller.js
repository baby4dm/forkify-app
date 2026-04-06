import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { UPLOAD_TIMEOUT_SEC } from './config.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};
const controlSearch = async function () {
  try {
    const query = searchView.getQuery();
    resultsView.renderSpinner();
    await model.loadSearches(query);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (error) {
    resultsView.renderError(error);
  }
};

const controlPagination = function (page) {
  resultsView.render(model.getSearchResultsPage(page));
  paginationView.render(model.state.search);
};

const controlServings = function (servings) {
  model.updateServings(servings);
  recipeView.update(model.state.recipe);
};
const controlEditBookmarks = function (recipe) {
  console.log(recipe);
  if (recipe.bookmarked) {
    model.deleteBookmarks(recipe.id);
  } else {
    model.addBookmarks(recipe);
  }
  if (model.state.bookmarks.length === 0) {
    bookmarksView.renderError();
  } else {
    bookmarksView.render(model.state.bookmarks);
  }
  recipeView.update(model.state.recipe);
};

const controlBookmarks = function () {
  const data = localStorage.getItem('bookmarks');
  if (!data) return;
  model.state.bookmarks = JSON.parse(data);
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (recipe) {
  try {
    await model.uploadRecipe(recipe);
    recipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
    bookmarksView.render(model.state.bookmarks);

    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    setTimeout(() => {
      addRecipeView.handleToogle();
      setTimeout(() => addRecipeView.resetForm(), 500);
    }, UPLOAD_TIMEOUT_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error);
  }
};
const init = function () {
  bookmarksView.addHandlerLoad(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerPagination(controlPagination);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmarks(controlEditBookmarks);
  addRecipeView.addHandlerSubmitForm(controlAddRecipe);
};
init();
