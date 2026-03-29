import { getJsonResponse } from './helper';

export const state = { recipe: {} };

export const loadRecipe = async function (id) {
  try {
    const recipeData = await getJsonResponse(id);
    this.state.recipe = createRecipeObject(recipeData);
  } catch (error) {}
};

const createRecipeObject = function (recipe) {
  const { recipe: data } = recipe.data;
  console.log(data);
  return {
    id: data.id,
    image: data.image_url,
    title: data.title,
    time: data.cooking_time,
    servings: data.servings,
    ingredients: data.ingredients,
    publisher: data.publisher,
    source: data.source_url,
  };
};
