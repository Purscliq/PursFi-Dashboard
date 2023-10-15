import { ApiSlice } from "./Api";

const authSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: "login/refresh",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "register/user",
        method: "POST",
        body,
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            localStorage.setItem(
              "refresh",
              apiResponse.data?.token?.refreshToken
            );
            localStorage.setItem("token", apiResponse.data?.token?.token);
          })
          .catch(() => {});
      },
    }),
    profile: builder.query({
      query: () => ({
        url: "user/me",
      }),
    }),
    generateOtp: builder.mutation({
      query: (body) => ({
        url: "validation/phone/generate/otp",
        method: "POST",
        body,
      }),
    }),
    validateOtp: builder.mutation({
      query: (body) => ({
        url: "validation/phone/validate/otp",
        method: "POST",
        body,
      }),
    }),
    generateEmailOtp: builder.mutation({
      query: (body) => ({
        url: "validation/email/generate/otp",
        method: "POST",
        body,
      }),
    }),
    validateEmailOtp: builder.mutation({
      query: (body) => ({
        url: "validation/email/validate/otp",
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "password/forgot",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "password/reset",
        method: "POST",
        body,
      }),
    }),
    businessProfile: builder.query({
      query: () => ({
        url: "business",
      }),
    }),
    createBusiness: builder.mutation({
      query: (body) => ({
        url: "business/create",
        method: "POST",
        body,
      }),
    }),
    createBusinessOwner: builder.mutation({
      query: (body) => ({
        url: "business/create/owner",
        method: "POST",
        body,
      }),
    }),
    completeBusinessOnboarding: builder.mutation({
      query: (body) => ({
        url: "business/complete/onboarding",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useBusinessProfileQuery,
  useCompleteBusinessOnboardingMutation,
  useCreateBusinessMutation,
  useCreateBusinessOwnerMutation,
  useForgotPasswordMutation,
  useGenerateOtpMutation,
  useProfileQuery,
  useRefreshMutation,
  useResetPasswordMutation,
  useValidateOtpMutation,
  useGenerateEmailOtpMutation,
  useValidateEmailOtpMutation,
} = authSlice;
