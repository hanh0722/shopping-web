import { createSlice } from "@reduxjs/toolkit";

export interface PageState {
  page: string;
}
export enum PAGE_TYPE {
  INTRODUCTION_FORM = "INTRODUCTION_FORM",
  SIGN_IN_FORM = "SIGNIN_FORM",
}

const page: PageState = {
  page: PAGE_TYPE.INTRODUCTION_FORM,
};
const PageFormSlice = createSlice({
  name: "form-slice",
  initialState: page,
  reducers: {
    changePageHandler(
      state,
      action: { payload: PAGE_TYPE.INTRODUCTION_FORM | PAGE_TYPE.SIGN_IN_FORM }
    ) {
      state.page = action.payload;
    },
  },
});

export const PageFormActions = PageFormSlice.actions;

export default PageFormSlice;
