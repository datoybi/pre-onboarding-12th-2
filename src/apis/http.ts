import Axios, { AxiosRequestConfig } from 'axios';

const baseURL = `https://api.github.com/repos/facebook/react`;

const axios = Axios.create({
  baseURL,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-Github-Api-Version': '2022-11-28',
  },
});

export const http = {
  get: function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    return axios
      .get<Response>(url, config)
      .then(res => res.data)
      .catch(e => e.response.data);
  },
};
