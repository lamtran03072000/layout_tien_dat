import axios from 'axios';
export const TOKEN_TRANHOANGLAM = '';
export const BASE_URL = 'http://localhost:8000';
export const configHeader = () => {
  return {
    TokenCybersoft: TOKEN_TRANHOANGLAM,
  };
};
export let https = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: "Bearer " + userInfoLocal.get()?.accessToken,
  },
});
