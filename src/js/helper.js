import { API_URL } from './config';

export const getJsonResponse = async function (id) {
  try {
    const recipeResponse = await fetch(`${API_URL}${id}`);
    if (!recipeResponse.ok) {
      throw new Error('Failed to fetch data');
    }
    const recipeData = await recipeResponse.json();
    return recipeData;
  } catch (err) {
    throw err;
  }
};
