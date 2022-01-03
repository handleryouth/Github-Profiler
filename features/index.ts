import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme";

export const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
