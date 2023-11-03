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
  const { isLoading: fetchingBusiness } = useBusinessProfileQuery({});
  useEffect(() => {
    if (data?.isPhoneValidated) push("/signup-otp");
    if (data?.isEmailValidated) push("/verifyEmail");
  }, [data]);

  return (
    <>
      {isLoading && !data && fetchingBusiness ? (
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
