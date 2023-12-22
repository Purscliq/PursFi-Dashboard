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
        url: `invoice/status`,
        body,
        method: "POST",
      }),
    }),
    invoiceStatus: builder.query({
      query: (body) => ({
        url: `invoice/history?time=${body?.time}`,
      }),
    }),
    VerifyInvoice: builder.query({
      query: (reference) => ({
        url: `invoice/verify?reference=${reference}`,
      }),
    }),
  }),
});

export const {
  useCreateInvoiceMutation,
  useVerifyInvoiceQuery,
  useLazyVerifyInvoiceQuery,
  useInvoiceHistoryMutation,
  useInvoiceStatusQuery,
  useLazyInvoiceStatusQuery,


} = invoiceSlice;
