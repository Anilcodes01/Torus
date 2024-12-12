import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import analyticsReducer from "../redux/analytics/analyticsSlice";
import authenticationReducer from "../redux/auth/authenticationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    analytics: analyticsReducer,
    authentication: authenticationReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;
