"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useLazyProfileQuery,
  useLazyBusinessProfileQuery,
} from "@/services/authService";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useAppDispatch } from "@/store/hooks";
import { updateUser, updateBusiness } from "@/store/userSlice";
const Template = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [getUser, { isLoading, isUninitialized }] = useLazyProfileQuery({});
  const [
    getBusiness,
    { isLoading: isFetchingBusiness, isUninitialized: isBusinessUninitialized },
  ] = useLazyBusinessProfileQuery({});
  useEffect(() => {
    getUser({})
      .unwrap()
      .then((res) => {
        dispatch(updateUser(res?.user));
        if (!res?.user?.businessId) {
          push("/signup-business");
          return;
        }
        if (!res?.user?.isEmailValidated) {
          push("/verifyEmail");
          return;
        }
        getBusiness({})
          .unwrap()
          .then((res) => {
            dispatch(updateBusiness(res?.business));
            if (!res?.business?.isOnboardingCompleted) {
              push("/onboarding");
              return;
            }
            return;
          });
      });
    // if (!user?.isPhoneValidated && user?.id) {
    //   push("/signup-otp");
    //   return;
    // }
  }, []);
  return (
    <>
      {(isLoading && isFetchingBusiness) || isUninitialized ? (
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
