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
    }),
    getBillPaymentRecurringTransactions: builder.query({
      query: () => ({
        url: "billpayment/transactions/recurring",
      }),
    }),
    getBillPaymentTransactionDetails: builder.query({
      query: ({ id }) => ({
        url: "billpayment/transactions/details",
        params: {
          transactionId: id,
        },
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
          networkId: body?.id,
        },
      }),
      transformResponse: (res: Record<string, any>) => {
        const arr = res?.data?.map((e: Record<string, any>) => {
          return {
            ...e,
            value: e?.planDescription,
            label: e?.planDescription,
          };
        });
        return arr;
      },
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
