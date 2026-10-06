import { configureStore } from '@reduxjs/toolkit';
import reduxHookReducer from "./reduxHookPageSlice";

const store = configureStore({
  reducer: {
    reduxHookPage: reduxHookReducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;