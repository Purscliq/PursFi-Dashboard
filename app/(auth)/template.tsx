"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useProfileQuery,
  useBusinessProfileQuery,
} from "@/services/authService";

const Template = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const { data, isLoading } = useProfileQuery({});
  const { data: business, isLoading: fetchingBusiness } =
    useBusinessProfileQuery({});
  if (data?.isPhoneValidated) push("/signup-otp");
  if (data?.isEmailValidated) push("/verifyEmail");
  if (business?.business?.id && !business?.business?.isOnboardingCompleted) {
    push("/onboarding");
  }
  return (
    <>
      {isLoading && !data && fetchingBusiness && !business ? (
        <div className="h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Template;
