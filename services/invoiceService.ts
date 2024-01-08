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
<<<<<<< HEAD
    VerifyInvoice: builder.query({
      query: (reference) => ({
        url: `invoice/verify?reference=${reference}`,
=======
    verifyInvoice: builder.query({
      query: (reference) => ({
        url: "invoice/verify",
        params: { reference },
>>>>>>> 01703f106af5aea5d9073b5dd4cdf19055af42af
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
<<<<<<< HEAD


=======
  useLazyVerifyInvoiceQuery,
>>>>>>> 01703f106af5aea5d9073b5dd4cdf19055af42af
} = invoiceSlice;
