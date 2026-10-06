import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ReduxHookPageState } from './types';
import { ActivePageEnum } from './types';

const reduxHookPageInitialState: ReduxHookPageState  = {
  isMenuDrawerOpen: false,
  activePage: ActivePageEnum.DOSSIER_PLANNING_PAGE,
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