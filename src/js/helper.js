import { API_URL, TIMEOUT_SEC } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJsonResponse = async function (url) {
  try {
    const recipePromise = fetch(`${API_URL}${url}`);
    const recipeResponse = await Promise.race([
      recipePromise,
      timeout(TIMEOUT_SEC),
    ]);
    const recipeData = await recipeResponse.json();
    return recipeData;
  } catch (err) {
    throw err;
  }
};
