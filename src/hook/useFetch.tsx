import axios, { Method } from "axios";
import { useCallback, useReducer } from "react";
enum ACTION_TYPE {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  RESET = "RESET",
  ERROR = "ERROR",
}
interface ParamsType<T extends object> {
  url: string;
  token?: string;
  headers?: T;
  params?: T;
  data?: T;
  method?: Method;
}
interface Action {
  type: string;
  payload?: any;
}

interface ErrorProps extends Error {
  message: string;
  code: number;
}
interface State {
  isLoading: boolean;
  data: any;
  error: any;
}
const initialState = {
  isLoading: false,
  data: null,
  error: null,
};
const reducerFunction = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPE.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTION_TYPE.RESET: 
      return {
        ...initialState
      }
    default:
      return state;
  }
};

const useFetch = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const fetchDataFromServer = useCallback(
    async <T extends object>({
      method,
      url,
      token,
      headers,
      params,
      data,
    }: ParamsType<T>) => {
      try {
        dispatch({
          type: ACTION_TYPE.LOADING,
        });
        const response = await axios({
          url: url,
          method: method ? method : "GET",
          headers:
            token || headers
              ? {
                  ...headers,
                  Authorization: "Bearer " + token,
                }
              : {},
          params: params
            ? {
                ...params,
              }
            : null,
          data: data
            ? {
                ...data,
              }
            : null,
        });
        if (response.status >= 400 || response.data.code >= 400) {
          const error = new Error() as ErrorProps;
          error.message = response.data.message;
          error.code = response.data?.code || response.status;
          throw error;
        }
        dispatch({
          type: ACTION_TYPE.SUCCESS,
          payload: response.data,
        });
      } catch (err: any) {
        const error = err;
        dispatch({
          type: ACTION_TYPE.ERROR,
          payload: {
            message: error.response?.data?.message || error.message || "Cannot get data from server",
            code: error.response?.data?.code || error?.code || 500
          },
        });
      }
    },
    []
  );
  const resetStateHandler = useCallback(() => {
    dispatch({
      type: ACTION_TYPE.RESET
    })
  }, []);
  return {
    ...state,
    fetchDataFromServer,
    resetStateHandler
  };
};

export default useFetch;
