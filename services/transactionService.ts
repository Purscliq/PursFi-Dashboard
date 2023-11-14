import { ApiSlice } from "./Api";

const transactionSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => ({
        url: "transactions/expense",
      }),
    }),
    Transactions: builder.mutation({
      query: (body) => ({
        url: "transactions/filters",
        body,
        method: "POST",
      }),
    }),
    disbursementTransactions: builder.mutation({
      query: (body) => ({
        url: "transactions/disbursement",
        body,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useTransactionsMutation,
  useDisbursementTransactionsMutation,
} = transactionSlice;
