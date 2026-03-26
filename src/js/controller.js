import * as model from './model.js';
import recipeView from './views/recipeView.js';

const controlRecipes = async function () {
  recipeView.renderSpinner();
  const id = window.location.hash.slice(1);
  await model.loadRecipe(id);
};

['hashchange', 'load'].forEach(el =>
  window.addEventListener(el, controlRecipes),
);
