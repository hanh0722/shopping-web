import axios from "axios";
import { CORE_API } from "./apis/base";

interface ConfigAxios<T extends object> {
  data?: T;
  params?: T;
  onProgress?: (value: number) => void;
  headers?: T;
  token?: string;
}
interface RequestAxios<T extends object> extends ConfigAxios<T> {
  url: string;
}

interface AxiosParamsConfig<T extends object> extends ConfigAxios<T> {
  onUploadProgress?: (ProgressEvent: ProgressEvent) => void;
}

const CreateAxios = axios.create({
  baseURL: CORE_API,
});

const configAxios = <T extends object>(
  params?: T,
  token?: string,
  onProgress?: (value: number) => void,
  headers?: any
) => {
  const config: AxiosParamsConfig<T> = {
    params: params
      ? {
          ...params,
        }
      : undefined,
    onUploadProgress: (ProgressEvent: ProgressEvent) => {
      if (onProgress) {
        const { loaded, total } = ProgressEvent;
        const percentage = Math.floor((loaded * 100) / total);
        onProgress(percentage);
      }
    },
    headers: (token || headers) ? {
      ...headers,
      Authorization: "Bearer " + token,
    } : undefined
  };
  return config;
};

const request = {
  get: <T extends object>({
    url,
    params,
    token,
    onProgress,
    headers,
  }: RequestAxios<T>) => {
    return CreateAxios.get(url, {
      ...configAxios(params || {}, token, onProgress, headers || {}),
    });
  },
  post: <T extends object>({
    url,
    data,
    params,
    token,
    onProgress,
    headers,
  }: RequestAxios<T>) => {
    return CreateAxios.post(
      url,
      { ...data },
      {
        ...configAxios(params || {}, token, onProgress, headers || {}),
      }
    );
  },
  put: <T extends object>({
    url,
    data,
    params,
    token,
    onProgress,
    headers,
  }: RequestAxios<T>) => {
    return CreateAxios.put(url, data, {
        ...configAxios(params || {}, token, onProgress, headers || {})
    });
  },
  delete: <T extends object>({url, params, token, onProgress, headers}: RequestAxios<T>) => {
    return CreateAxios.delete(url, {
        ...configAxios(params || {}, token, onProgress, headers || {})
    })
  }
};

export default request;