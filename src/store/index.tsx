import { configureStore, combineReducers } from "@reduxjs/toolkit";

export interface RootState {
  counter: number;
}

const reducerRoot = combineReducers({});

const store = configureStore({
  reducer: reducerRoot,
});

export default store;
