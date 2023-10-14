import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ApiSlice } from "@/services/Api";
import { CountrySlice } from "@/services/country";

const rootReducer = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  [CountrySlice.reducerPath]: CountrySlice.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        ApiSlice.middleware,
        CountrySlice.middleware,
      ]),
  });
export const store = createStore();

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];
