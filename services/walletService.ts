import { ApiSlice } from "./Api";

const walletSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWallet: builder.query({
      query: () => ({
        url: "wallet",
      }),
    }),
    getWalletHistory: builder.query({
      query: () => ({
        url: "wallet/history?duration=yearly",
      }),
    }),
  }),
});

export const { useGetWalletQuery, useGetWalletHistoryQuery } = walletSlice;
