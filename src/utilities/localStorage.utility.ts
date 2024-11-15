
/**
 * The function `persistLocalStorage` stores an object in the browser's local storage using a specified
 * key.
 * @param {string} key - The `key` parameter is a string that represents the key under which the value
 * will be stored in the local storage.
 * @param {object} value - The `value` parameter is an object that you want to store in the browser's
 * local storage.
 */
export const persistLocalStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * The function `clearLocalStorage` removes a specified key from both localStorage and sessionStorage.
 * @param {string} key - The `key` parameter in the `clearLocalStorage` function is a string that
 * represents the key of the item to be removed from both the `localStorage` and `sessionStorage`.
 */
export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};

/**
 * The function `getLocalStorage` retrieves the value stored in the localStorage with the specified
 * key.
 * @param {string} key - A string representing the key used to retrieve data from the local storage.
 * @returns The `getLocalStorage` function is returning the value stored in the `localStorage` with the
 * specified `key`.
 */
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
