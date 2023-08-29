import axios from "axios";
export const ENDPOINT = "https://64e1aa1aab0037358818514c.mockapi.io/travel/";

export const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
});

export const ENDPOINT_All =
  "https://64e9d0babf99bdcc8e66fd64.mockapi.io/all-country/";

export const request_all = axios.create({
  baseURL: ENDPOINT_All,
  timeout: 10000,
});
