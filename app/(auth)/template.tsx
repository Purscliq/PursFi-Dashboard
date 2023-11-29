"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useProfileQuery,
  useBusinessProfileQuery,
} from "@/services/authService";
import Image from "next/image";
import logo from "@/assets/logo.svg";
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
        <div className="relative h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="fixed top-0 left-0 px-6 py-4">
            <Image src={logo} alt="logo" className="w-28 h-28" />
          </div>

          {/* Black blur overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-50" />

          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin z-50" />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Template;
