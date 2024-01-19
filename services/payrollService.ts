import { ApiSlice } from "./Api";

const payrollSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["payroll" as const],
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
    }),
    getBusinessBeneficiaries: builder.query({
      query: () => ({
        url: "payroll/business/beneficiaries",
      }),
    }),
    getSingleBeneficiary: builder.query({
      query: (id) => ({
        url: `payroll/single/beneficiary?memberId=${id}`,
      }),
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
} = payrollSlice;
