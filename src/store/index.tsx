import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PageFormSlice, { PageState } from "./PageFormSlice";
export interface RootState {
  page: PageState
}

const reducerRoot = combineReducers({
  page: PageFormSlice.reducer
});

const store = configureStore({
  reducer: reducerRoot,
});

export default store;
