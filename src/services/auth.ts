import { apiClient } from "./apiClient";
export interface IPropsAuth {
  email: string;
  password: string;
}

/**
 * This async function `login` sends a POST request to the "/login" endpoint with the provided email
 * and password, and returns the response data.
 * @param {IPropsAuth}  - The `login` function is an asynchronous function that takes an object as a
 * parameter with properties `email` and `password`. The object is expected to implement the
 * `IPropsAuth` interface. The function makes a POST request to the `/login` endpoint of an `apiClient`
 * and sends the
 * @returns The `login` function is returning the data from the response of the API call made to the
 * "/login" endpoint.
 */
export async function login({ email, password }: IPropsAuth) {
  const response = await apiClient.post("/auth/login", {
    email,
    password,
  });
  return response.data;
}

/**
 * This async function registers a user by sending a POST request to the "/register" endpoint with the
 * provided email and password.
 * @param {IPropsAuth}  - The `register` function is an asynchronous function that takes an object as a
 * parameter with properties `email` and `password`. The object is expected to have the shape of
 * `IPropsAuth`. The function then makes a POST request to the `/register` endpoint using `apiClient`
 * with the provided
 * @returns The `register` function is returning the data from the response of the POST request made to
 * the "/register" endpoint using the `apiClient`.
 */
export async function register({ email, password }: IPropsAuth) {
  const response = await apiClient.post("/auth/register", {
    email,
    password,
  });
  return response.data;
}
