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
      query: () => ({
        url: "payroll/beneficiaries",
      }),
      providesTags: ["beneficiaries"],
    }),
    getPayroll: builder.query({
      query: () => ({
        url: "payroll",
      }),
      transformResponse: (res: Record<string, any>) => {
        console.log(res);
        const arrList = res?.data?.map((e: Record<string, string>) => ({
          label: e?.title,
          value: e?.reference,
        }));
        return arrList;
      },
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
      query: (id) => ({
        url: `payroll/single/beneficiary?memberId=${id}`,
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
      query: (id) => ({
        url: `payroll/delete/beneficiary`,
        method: "DELETE",
        params: {
          memberId: id,
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
  useGetPayrollQuery,
  useGetPayrollBeneficiariesQuery,
  useLazyGetPayrollBeneficiariesQuery,
  useGetBusinessBeneficiariesQuery,
  useLazyGetBusinessBeneficiariesQuery,
  useGetSingleBeneficiaryQuery,
  useLazyGetSingleBeneficiaryQuery,
  useUpdateBeneficiaryMutation,
  useDeleteBeneficiaryMutation,
} = payrollSlice;
