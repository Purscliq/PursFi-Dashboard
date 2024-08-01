import { ApiSlice } from "./Api";


const securitySlice = ApiSlice.injectEndpoints({
  
  endpoints: (builder) => ({
    createPin: builder.mutation({
        query: (body) => ({
          url: "SecurityService/pin",
          body,
          method: "POST",
        }),
      }),
    updatePin: builder.mutation({
        query: (body) => ({
          url: "SecurityService/pin",
          body,
          method: "PUT",
        }),
      }),
    GetSecurityDetails: builder.query({
        query: (id) => ({
          url: `SecurityService/${id}`,
        }),
      }),
    validatePin: builder.mutation({
        query: (body) => ({
          url: `SecurityService/validate-pin`,
          body,
          method: "POST",
        }),
      }),
   
   
  }),
});

export const {
    useCreatePinMutation,
    useUpdatePinMutation,
    useLazyGetSecurityDetailsQuery,
    useValidatePinMutation

} = securitySlice;
