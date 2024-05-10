import { logOut } from "@/store/userSlice";
import {
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
//   import { notification } from "antd";
//   import { logOut } from "@/store/userSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
    headers.set("Accept", "application/json");
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus || result?.error?.status === 401) {
    if (result?.error?.status === 401) {
      api.dispatch(logOut());
    }
    // if (result?.error?.data?.message !== "Invalid login") {
    //   notification.error({
    //     message: result?.error?.data?.message,
    //     duration: 1,
    //     onClose() {
    //       // api.dispatch(logOut());
    //     },
    //   });
    // }
  }

  return result;
};

export const ApiSlice = createApi({
  reducerPath: "api",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
