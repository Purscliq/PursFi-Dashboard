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
  const { data, isLoading, isSuccess } = useProfileQuery({});
  const { business, user } = useAppSelector((state) => state.user);
  const { isLoading: isFetchingBusiness, isSuccess: isBusinessSuccess } =
    useBusinessProfileQuery({});
  useEffect(() => {
    if (user?.id && business?.id) {
      if (!user?.isPhoneValidated && user?.id) {
        push("/signup-otp");
      }
      if (!user?.isEmailValidated && user?.id) {
        push("/verifyEmail");
      } else {
        if (business?.id && !business?.isOnboardingCompleted && user?.id) {
          push("/onboarding");
        }
      }
    }
  }, [
    JSON.stringify(data),
    isSuccess,
    isBusinessSuccess,
    JSON.stringify(business),
  ]);
  return (
    <>
      {isLoading && isFetchingBusiness && !isSuccess && !isBusinessSuccess ? (
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
