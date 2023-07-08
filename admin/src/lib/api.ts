import { auth, prefixFileUrlWithBackendUrl } from '@strapi/helper-plugin';
import Axios from 'axios';

import pluginId from '../pluginId';

import type { Settings } from '../types/settings';
import type {
  AxiosError,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const axios = Axios.create({
  baseURL: process.env.PUBLIC_URL ?? prefixFileUrlWithBackendUrl('/'),
});

axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.headers = {
      Authorization: `Bearer ${auth.getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    } as AxiosRequestHeaders;

    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      auth.clearAppStorage();
      window.location.reload();
    }

    throw error;
  }
);

const getApiURL = (endPoint = '') => `/${pluginId}/${endPoint}`;

export const fetchSettings = async () => {
  const { data } = await axios.get(getApiURL());
  return data;
};

export const updateSettings = async (settings: Settings) => {
  const { data } = await axios.put(getApiURL('update-settings'), settings);
  return data;
};
