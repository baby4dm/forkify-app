export const state = { recipe: {} };

export const loadRecipe = async function (id) {
  const recipe = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes/${id}`,
  );
  console.log(recipe);
};
