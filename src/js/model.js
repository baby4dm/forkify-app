import { getJsonResponse } from './helper';
import { RES_PER_PAGE } from './config';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export const loadRecipe = async function (id) {
  try {
    const recipeData = await getJsonResponse(id);
    this.state.recipe = createRecipeObject(recipeData);
  } catch (error) {
    throw error;
  }
};

const createRecipeObject = function (recipe) {
  const { recipe: data } = recipe.data;
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

export const loadSearches = async function (query) {
  try {
    const searchData = await getJsonResponse(`?search=${query}`);
    if (searchData.results < 1) {
      throw new Error('Cannot find anything');
    }
    this.state.search.results = mapToPreviewObjects(searchData);
  } catch (error) {
    throw error;
  }
};

const mapToPreviewObjects = function (recipe) {
  const { recipes } = recipe.data;
  return recipes.map(r => {
    return {
      id: r.id,
      image: r.image_url,
      title: r.title,
      publisher: r.publisher,
    };
  });
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * 10;
  const end = page * 10;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  if (newServings < 1) return;
  this.state.recipe.ingredients.forEach(
    ing =>
      (ing.quantity =
        (ing.quantity * newServings) / this.state.recipe.servings),
  );
  this.state.recipe.servings = newServings;
};
