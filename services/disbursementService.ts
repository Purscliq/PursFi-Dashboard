import { ApiSlice } from "./Api";

const disbursementSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    recurringExpenditure: builder.mutation({
      query: (body) => ({
        url: "disbursement/recurring/expenditure",
        body,
        method: "POST",
      }),
    }),
    scheduledExpenditure: builder.mutation({
      query: (body) => ({
        url: "disbursement/scheduled/expenditure",
        body,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRecurringExpenditureMutation,
  useScheduledExpenditureMutation,
} = disbursementSlice;
