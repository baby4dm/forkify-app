export const state = { recipe: {} };

export const loadRecipe = async function (id) {
  const recipeResponse = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes/${id}`,
  );
  const recipeData = await recipeResponse.json();
  this.state.recipe = createRecipeObject(recipeData);
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
