import { ApiSlice } from "./Api";

const transactionSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => ({
        url: "transactions/expense",
      }),
    }),
  }),
});

export const { useGetExpensesQuery } = transactionSlice;
