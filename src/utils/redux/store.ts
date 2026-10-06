import { configureStore } from '@reduxjs/toolkit';
import reduxHookPageReducer from "./reduxHookPageSlice";

const store = configureStore({
  reducer: {
    reduxHookPage: reduxHookPageReducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;