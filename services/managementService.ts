import { ApiSlice } from "./Api";

const payrollSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["roles" as const, "permissions" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => ({
        url: "roles/business",
      }),
    }),
    getSingleRole: builder.query({
      query: (id) => ({
        url: `roles/business/id?roleId=${id}`,
      }),
    }),
    getPermissions: builder.query({
      query: () => ({
        url: "roles/permissions",
      }),
    }),
    getEmployees: builder.query({
      query: () => ({
        url: "employee",
      }),
    }),
    getSingleEmployee: builder.query({
      query: (id) => ({
        url: `employee/id?employeeId=${id}`,
      }),
    }),
    createRole: builder.mutation({
      query: (body) => ({
        url: "roles/create",
        body,
        method: "POST",
      }),
    }),
    updateRole: builder.mutation({
      query: (body) => ({
        url: "roles/update",
        body,
        method: "POST",
      }),
    }),
    createEmployee: builder.mutation({
      query: (body) => ({
        url: "employee/create",
        body,
        method: "POST",
      }),
    }),
    updateEmployee: builder.mutation({
      query: (body) => ({
        url: "employee/update",
        body,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetRolesQuery,
  useGetSingleRoleQuery,
  useGetPermissionsQuery,
  useGetEmployeesQuery,
  useGetSingleEmployeeQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useLazyGetEmployeesQuery,
  useLazyGetSingleEmployeeQuery,
  useLazyGetSingleRoleQuery
} = payrollSlice;
