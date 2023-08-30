import axios from 'axios';
import {getItem} from '~utils';

const token = getItem('token');

const instance = axios.create();

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

const get = async url => {
  return await instance.get(url);
};

const post = async (url, data) => {
  return instance.post(url, data);
};

const put = async (url, data) => {
  return instance.put(url, data);
};

const patch = async (url, data) => {
  return instance.patch(url, data);
};

const destroy = async url => {
  return instance.delete(url);
};

export {instance, get, post, put, patch, destroy};
