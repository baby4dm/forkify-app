export const state = { recipe: {} };

export const loadRecipe = async function () {
  const recipe = await fetch(
    'https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886',
  );
  console.log(recipe);
};
