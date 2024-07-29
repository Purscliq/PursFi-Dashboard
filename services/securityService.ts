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
   
   
  }),
});

export const {
    useCreatePinMutation,
    useUpdatePinMutation,
    useLazyGetSecurityDetailsQuery

} = securitySlice;
