"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useValidateEmailOtpMutation } from "@/services/authService";
import { message } from "antd";
import { useRouter } from "next/navigation";

const page = () => {
  const params = useSearchParams();
  const { replace } = useRouter();
  const [validate, { isLoading }] = useValidateEmailOtpMutation();
  useEffect(() => {
    validate({ username: params.get("email"), otp: params.get("token") })
      .unwrap()
      .then((res) => {
        message.success(
          res?.data?.responseDescription || res?.responseDescription
        );
        replace("/");
      })
      .catch((err) => {
        message.success(
          err?.data?.responseDescription || err?.responseDescription
        );
        replace("/");
      });
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin"></div>
      </div>
    </>
  );
};

export default page;
