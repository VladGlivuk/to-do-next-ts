/* eslint-disable no-console */

import axios, {AxiosRequestConfig} from 'axios';

// import {vaultService} from 'core/services';

// const service = vaultService();

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (req) => {
    return req;
  },
  (err) => {
    throw err;
  }
);

instance.interceptors.response.use(
  async (res) => {
    console.log('API response', res);
    return res;
  },
  async (err) => {
    console.log(err);
  }
);

const API = instance;

export {API};
