import { ApiSlice } from "./Api";
import { updateWallet } from "@/store/userSlice";
import { logOut } from "@/store/userSlice";

const walletSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWallet: builder.query({
      query: () => ({
        url: "wallet",
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            dispatch(updateWallet(apiResponse.data?.wallet));
          })
          .catch(() => {
            dispatch(logOut());
          });
      },
    }),
    getWalletHistory: builder.query({
      query: () => ({
        url: "wallet/history?duration=yearly",
      }),
    }),
  }),
});

export const { useGetWalletQuery, useGetWalletHistoryQuery } = walletSlice;
