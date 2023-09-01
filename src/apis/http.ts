import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ORGANIZATION, REPO } from '../utils/constants';

const baseURL = `https://api.github.com/repos/${ORGANIZATION}/${REPO}`;

const axios = Axios.create({
  baseURL,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-Github-Api-Version': '2022-11-28',
    Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`,
  },
});

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status > 200) {
      throw error;
    }
  }
);

export const http = {
  get: function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>> {
    return axios.get<Response>(url, config);
  },
};
