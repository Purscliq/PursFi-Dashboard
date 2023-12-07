import { ApiSlice } from "./Api";
import {
  updateUser,
  logOut,
  updateBusiness,
  updateWallet,
} from "@/store/userSlice";

const authSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const, "business" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            localStorage.setItem("refresh", apiResponse.data?.refreshToken);
            localStorage.setItem("token", apiResponse.data?.token);
          })
          .catch(() => {});
      },
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
              apiResponse?.data?.token?.refreshToken
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
      providesTags: ["profile"],
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            dispatch(updateUser(apiResponse?.data?.user));
          })
          .catch(() => {
            dispatch(logOut());
          });
      },
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
      providesTags: ["business"],
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            dispatch(updateBusiness(apiResponse?.data?.business));
          })
          .catch(() => {
            // dispatch(logOut());
          });
      },
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
        formData: true,
      }),
    }),
    updateBusinessOwner: builder.mutation({
      query: (body) => ({
        url: "business/update",
        method: "POST",
        body,
        formData: true,
      }),
    }),
    completeBusinessOnboarding: builder.mutation({
      query: (body) => ({
        url: "business/complete/onboarding",
        method: "POST",
        body,
        formData: true,
      }),
    }),
    createIndividualOwner: builder.mutation({
      query: (body) => ({
        url: "user/update/owner",
        method: "POST",
        body,
        headers: {
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
        formData: true,
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
  useCreateIndividualOwnerMutation,
  useUpdateBusinessOwnerMutation,
  useForgotPasswordMutation,
  useGenerateOtpMutation,
  useProfileQuery,
  useRefreshMutation,
  useResetPasswordMutation,
  useValidateOtpMutation,
  useGenerateEmailOtpMutation,
  useValidateEmailOtpMutation,
} = authSlice;
