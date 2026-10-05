import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ReduxHookState } from './types';

const reduxHookInitialState: ReduxHookState = {
  isMenuDrawerOpen: false,
};

const reduxHookSlice = createSlice({
  name: "reduxHook",
  initialState: reduxHookInitialState,
  reducers: {
    setReduxHookState: (
      state,
      action: PayloadAction<Partial<ReduxHookState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default reduxHookSlice.reducer;
export const { setReduxHookState } =
  reduxHookSlice.actions;