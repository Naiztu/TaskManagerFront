import { apiClient } from "./apiClient";
export interface IPropsTask {
  title: string;
  description: string;
  token: string;
}

/**
 * The function `token` sends a POST request to the "/task" endpoint with a title and description,
 * including an Authorization header with a bearer token.
 * @param {IPropsTask}  - The `token` function is an asynchronous function that takes an object with
 * properties `title`, `description`, and `token` as parameters. It then makes a POST request to the
 * `/task` endpoint using the `apiClient` with the provided `title` and `description`. The
 * `Authorization`
 * @returns The `token` function is returning the data from the response of the POST request made to
 * the "/task" endpoint using the `apiClient`.
 */
export async function token({ title, description, token }: IPropsTask) {
  const response = await apiClient.post(
    "/tasks",
    {
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

/**
 * The function `getTasks` makes an asynchronous request to retrieve tasks using a provided token for
 * authorization.
 * @param {string} token - The `token` parameter is a string that represents the authentication token
 * needed to access the tasks endpoint in the API. This token is typically obtained after a user
 * successfully logs in and is used to authenticate and authorize the user's access to the tasks
 * resource.
 * @returns The function `getTasks` is returning the data from the response of the API call to retrieve
 * tasks.
 */
export async function getTasks(token: string) {
  const response = await apiClient.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

/**
 * The function `deleteTask` asynchronously deletes a task using the provided ID and authorization
 * token.
 * @param {number} id - The `id` parameter is the unique identifier of the task that you want to
 * delete. It is a number that specifies which task you want to remove from the system.
 * @param {string} token - The `token` parameter in the `deleteTask` function is a string that
 * represents the authentication token needed to authorize the deletion of a task. This token is
 * typically obtained during the user authentication process and is used to verify the user's identity
 * and permissions when making requests to the API.
 * @returns The function `deleteTask` is returning the data from the response of the API call after
 * deleting the task with the specified `id` and using the provided `token` for authorization.
 */
export async function deleteTask(id: number, token: string) {
  const response = await apiClient.delete(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
