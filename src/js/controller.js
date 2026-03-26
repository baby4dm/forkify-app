import * as model from './model.js';
import recipeView from './views/recipeView.js';

const controlRecipes = async function () {
  recipeView.renderSpinner();
  await model.loadRecipe();
};
controlRecipes();
