import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ApiSlice } from "@/services/Api";

const rootReducer = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ApiSlice.middleware),
  });
export const store = createStore();

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];
