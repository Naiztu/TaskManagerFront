import axios from "axios";

/* This code snippet is setting up an Axios client for making HTTP requests in a TypeScript
environment. Here's what it's doing: */
const baseURL = import.meta.env.VITE_URL_BACK_API_BASE;
export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});