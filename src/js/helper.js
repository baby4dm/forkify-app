import { API_URL, TIMEOUT_SEC } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const recipePromise = uploadData
      ? fetch(`${API_URL}${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(`${API_URL}${url}`);
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
