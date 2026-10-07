import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ReduxHookPageState } from './types';

const reduxHookPageInitialState: ReduxHookPageState  = {
  isMenuDrawerOpen: false,
};

const reduxHookPageSlice = createSlice({
  name: "reduxHook",
  initialState: reduxHookPageInitialState,
  reducers: {
    setReduxHookPageState: (
      state,
      action: PayloadAction<Partial<ReduxHookPageState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default reduxHookPageSlice.reducer;
export const { setReduxHookPageState } =
  reduxHookPageSlice.actions;