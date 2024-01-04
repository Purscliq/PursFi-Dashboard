"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useProfileQuery,
  useBusinessProfileQuery,
} from "@/services/authService";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useAppSelector } from "@/store/hooks";
const Template = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const { isLoading, isSuccess, isUninitialized } = useProfileQuery({});
  const {
    isLoading: isFetchingBusiness,
    isSuccess: isBusinessSuccess,
    isError,
    isUninitialized: isBusinessUninitialized,
  } = useBusinessProfileQuery({});
  const { business, user } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user?.id) {
      // if (!user?.isPhoneValidated && user?.id) {
      //   push("/signup-otp");
      //   return;
      // }
      if (!business?.id && isError && user?.id) {
        push("/signup-business");
        return;
      }
      if (!user?.isEmailValidated && user?.id) {
        push("/verifyEmail");
        return;
      }
      if (business?.id && !business?.isOnboardingCompleted && user?.id) {
        push("/onboarding");
        return;
      }
    }
  }, [JSON.stringify(user), JSON.stringify(business)]);
  return (
    <>
      {(isLoading && isFetchingBusiness && !isSuccess && !isBusinessSuccess) ||
      isBusinessUninitialized ||
      isUninitialized ? (
        <div className="relative h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="fixed top-0 left-0 px-6 py-4">
            <Image src={logo} alt="logo" className="w-28 h-28" />
          </div>
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
