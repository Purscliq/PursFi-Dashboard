import { ApiSlice } from "./Api";
import { updateWallet } from "@/store/userSlice";
import { logOut } from "@/store/userSlice";

const billPaymentSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBillPaymentWallet: builder.query({
      query: () => ({
        url: "billpayment/wallet",
      }),
      //   onQueryStarted(id, { dispatch, queryFulfilled }) {
      //     queryFulfilled
      //       .then((apiResponse) => {
      //         dispatch(updateWallet(apiResponse?.data?.wallet));
      //       })
      //       .catch(() => {
      //         // dispatch(logOut());
      //       });
      //   },
    }),
    getBillPaymentTransactions: builder.query({
      query: () => ({
        url: "billpayment/transactions/all",
      }),
      //   transformResponse: (res: Record<string, any>) => {
      //     const arr = res?.wallet?.map((e: Record<string, any>) => {
      //       const formattedDate = new Date(e?.date).toLocaleString("en-US", {
      //         month: "short",
      //         day: "2-digit",
      //       });
      //       return { balance: e?.balance, date: formattedDate };
      //     });
      //     return arr;
      //   },
    }),
    getBillPaymentRecurringTransactions: builder.query({
      query: () => ({
        url: "billpayment/transactions/recurring",
      }),
    }),
    getBillPaymentTransactionDetails: builder.query({
      query: () => ({
        url: "billpayment/transactions/details",
      }),
    }),
    getBillPaymentAnalytics: builder.query({
      query: () => ({
        url: "billpayment/analytics",
      }),
    }),
    getBillPaymentDataPlans: builder.query({
      query: (body) => ({
        url: "billpayment/dataplans",
        params: {
          networkId:body?.id,
        },
      }),
    }),
    getBillPaymentNetworks: builder.query({
      query: () => ({
        url: "billpayment/networks",
      }),
    }),
    fundWalletInstant: builder.mutation({
      query: (body) => ({
        url: "billpayment/fund/wallet/instant",
        body,
        method: "POST",
      }),
    }),
    fundWalletScheduled: builder.mutation({
      query: (body) => ({
        url: "billpayment/fund/wallet/scheduled",
        body,
        method: "POST",
      }),
    }),
    fundWalletRecurring: builder.mutation({
      query: (body) => ({
        url: "billpayment/fund/wallet/recurring",
        body,
        method: "POST",
      }),
    }),
    sellAirtime: builder.mutation({
      query: (body) => ({
        url: "billpayment/sell/airtime",
        body,
        method: "POST",
      }),
    }),
    sellDataPlan: builder.mutation({
      query: (body) => ({
        url: "billpayment/sell/dataplan",
        body,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useFundWalletInstantMutation,
  useFundWalletRecurringMutation,
  useFundWalletScheduledMutation,
  useGetBillPaymentAnalyticsQuery,
  useGetBillPaymentDataPlansQuery,
  useGetBillPaymentNetworksQuery,
  useGetBillPaymentRecurringTransactionsQuery,
  useGetBillPaymentTransactionDetailsQuery,
  useGetBillPaymentTransactionsQuery,
  useGetBillPaymentWalletQuery,
  useLazyGetBillPaymentAnalyticsQuery,
  useLazyGetBillPaymentDataPlansQuery,
  useLazyGetBillPaymentNetworksQuery,
  useLazyGetBillPaymentRecurringTransactionsQuery,
  useLazyGetBillPaymentTransactionDetailsQuery,
  useLazyGetBillPaymentTransactionsQuery,
  useLazyGetBillPaymentWalletQuery,
  useSellAirtimeMutation,
  useSellDataPlanMutation,
} = billPaymentSlice;
