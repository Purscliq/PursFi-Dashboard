import { ApiSlice } from "./Api";

const payrollSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["payroll" as const, "beneficiaries" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    createPayroll: builder.mutation({
      query: (body) => ({
        url: "payroll/create",
        body,
        method: "POST",
      }),
    }),
    createBeneficiaries: builder.mutation({
      query: (body) => ({
        url: "payroll/beneficiaries",
        body,
        method: "POST",
      }),
      invalidatesTags: ["beneficiaries"],
    }),
    updatePayroll: builder.mutation({
      query: (body) => ({
        url: "payroll/update",
        body,
        method: "POST",
      }),
    }),
    payrollHistory: builder.mutation({
      query: (body) => ({
        url: "payroll/history",
        body,
        method: "POST",
      }),
    }),
    manualPayroll: builder.mutation({
      query: (body) => ({
        url: "payroll/manual",
        body,
        method: "POST",
      }),
    }),
    getBeneficiaries: builder.query({
      query: ({ id, count, type }) => ({
        url: "payroll/employees/contractor",
        params: {
          payrollId: id,
          count: count,
          beneficiaryType: type,
        },
      }),
      providesTags: ["beneficiaries"],
    }),
    togglePayroll: builder.mutation({
      query: (body) => ({
        url: "payroll/toggle",
        body,
        method: "POST",
      }),
    }),
    getPayroll: builder.query({
      query: (body) => ({
        url: "payroll",
        params: {
          count: body?.count,
        },
      }),
      // transformResponse: (res: Record<string, any>) => {
      //   const arrList = res?.data?.map((e: Record<string, string>) => ({
      //     label: e?.title,
      //     value: e?.reference,
      //     ...e,
      //   }));
      //   return arrList;
      // },
    }),
    getSinglePayroll: builder.query({
      query: (id) => ({
        url: "payroll/single",
        params: {
          payrollId: id,
        },
      }),
    }),
    getPayrollBeneficiaries: builder.query({
      query: (payrollId) => ({
        url: `payroll/beneficiaries?payrollId=${payrollId}`,
      }),
      providesTags: ["beneficiaries"],
    }),
    getBusinessBeneficiaries: builder.query({
      query: () => ({
        url: "payroll/business/beneficiaries",
      }),
      providesTags: ["beneficiaries"],
    }),
    getSingleBeneficiary: builder.query({
      query: (body) => ({
        url: `payroll/single/beneficiary`,
        params: {
          payrollId: body?.payrollId,
          beneficiaryId: body?.beneficiaryId,
        },
      }),
      providesTags: ["beneficiaries"],
    }),
    updateBeneficiary: builder.mutation({
      query: (body) => ({
        url: "payroll/update/beneficiaries",
        body,
        method: "PUT",
      }),
      invalidatesTags: ["beneficiaries"],
    }),
    deleteBeneficiary: builder.mutation({
      query: (body) => ({
        url: `payroll/delete/beneficiary`,
        method: "DELETE",
        params: {
          payrollId: body?.payrollId,
          beneficiaryId: body?.beneficiaryId,
        },
      }),
      invalidatesTags: ["beneficiaries"],
    }),
    deletePayroll: builder.mutation({
      query: (body) => ({
        url: `payroll/delete`,
        method: "DELETE",
        params: {
          payrollId: body?.payrollId,
        },
      }),
      invalidatesTags: ["beneficiaries"],
    }),
  }),
});

export const {
  useCreatePayrollMutation,
  useManualPayrollMutation,
  usePayrollHistoryMutation,
  useUpdatePayrollMutation,
  useCreateBeneficiariesMutation,
  useGetBeneficiariesQuery,
  useLazyGetBeneficiariesQuery,
  useGetPayrollQuery,
  useGetPayrollBeneficiariesQuery,
  useLazyGetPayrollBeneficiariesQuery,
  useGetBusinessBeneficiariesQuery,
  useLazyGetBusinessBeneficiariesQuery,
  useGetSingleBeneficiaryQuery,
  useLazyGetSingleBeneficiaryQuery,
  useUpdateBeneficiaryMutation,
  useDeleteBeneficiaryMutation,
  useDeletePayrollMutation,
} = payrollSlice;
