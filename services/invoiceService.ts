import { ApiSlice } from "./Api";

const invoiceSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["invoice" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    createInvoice: builder.mutation({
      query: (body) => ({
        url: "invoice/create",
        body,
        method: "POST",
      }),
    }),
    invoiceHistory: builder.mutation({
      query: (body) => ({
        url: "invoice/history",
        body,
        method: "POST",
      }),
    }),
    verifyInvoice: builder.query({
      query: () => ({
        url: "invoice/history",
      }),
    }),
  }),
});

export const {
  useCreateInvoiceMutation,
  useVerifyInvoiceQuery,
  useInvoiceHistoryMutation,
} = invoiceSlice;
