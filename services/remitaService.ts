import { ApiSlice } from "./Api";

const remitaSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["remita-transaction" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "RemPayment/categories",
      }),
    }),
    getBillersByCategory: builder.query({
      query: ({ categoryId }) => ({
        url: "RemPayment/category/biller",
        params: {
          categoryId,
        },
      }),
    }),
    getBillers: builder.query({
      query: () => ({
        url: "RemPayment/billers",
      }),
    }),
    getBillerProducts: builder.query({
      query: ({ billerId }) => ({
        url: "RemPayment/biller/products",
        params: {
          billerId,
        },
      }),
    }),
    getTransactionHistory: builder.query({
      query: ({ page, type }) => ({
        url: "RemPayment/transaction/history",
        params: {
          limit: 10,
          page,
          type,
        },
      }),
      providesTags: ["remita-transaction"],
    }),
    getSingleTransaction: builder.query({
      query: ({ reference }) => ({
        url: "RemPayment/transaction/single",
        params: {
          reference,
        },
      }),
    }),
    makePayment: builder.mutation({
      query: (body) => ({
        url: "rempayment/make/payment",
        body,
      }),
      invalidatesTags: ["remita-transaction"],
    }),
  }),
});

export const {
  useGetBillerProductsQuery,
  useGetBillersByCategoryQuery,
  useGetBillersQuery,
  useGetCategoriesQuery,
  useGetSingleTransactionQuery,
  useGetTransactionHistoryQuery,
  useLazyGetBillerProductsQuery,
  useLazyGetBillersByCategoryQuery,
  useLazyGetBillersQuery,
  useLazyGetCategoriesQuery,
  useLazyGetSingleTransactionQuery,
  useLazyGetTransactionHistoryQuery,
  useMakePaymentMutation,
} = remitaSlice;
