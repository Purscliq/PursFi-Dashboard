"use client";
import {
  useState,
  FormEventHandler,
  ChangeEventHandler,
  useEffect,
} from "react";
import logo from "@/assets/logo.svg";
import {
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { message, Alert } from "antd";
import Image from "next/image";
import {
  useResetPasswordMutation,
  useForgotPasswordMutation,
} from "@/services/authService";
import { useSearchParams, useRouter } from "next/navigation";
const initialState = {
  email: "",
  newPassword: "",
  confirmPassword: "",
  otp: "",
};
const ResetPass = () => {
  const { replace } = useRouter();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [forgetPassword, { isLoading: isResending }] =
    useForgotPasswordMutation();
  const [formData, setFormData] = useState(initialState);
  const [alert, setAlert] = useState("");
  const searchParams = useSearchParams();
  useEffect(() => {
    const otp = searchParams.get("token");
    const email = searchParams.get("email");
    setFormData((prev) => ({ ...prev, otp: otp || "", email: email || "" }));
  }, [searchParams]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target?.value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    resetPassword(formData)
      .unwrap()
      .then((res) => {
        message.success("password reset successfully");
        setFormData(initialState);
        replace("/");
      })
      .catch((err) => {
        setAlert(
          err?.data?.title ||
            err?.data?.responseDescription ||
            "something went wrong"
        );
      });
  };
  const resendLink = () => {
    forgetPassword({ email: formData.email })
      .unwrap()
      .then((res) => {
        message.success("password reset mail successfully");
        setFormData(initialState);
      })
      .catch((err) => {
        setAlert(err?.data?.title || "something went wrong");
      });
  };
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[450px] mx-auto mt-4 p-6">
        {alert && <Alert type="error" closable message={alert} />}
        <h1 className="font-semibold text-xl mb-2 text-Primary">
          Change Password{" "}
        </h1>
        <p className=" text-gray-700 text-sm text-center">
          Your new password must be different from previous used passwords
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-5 mt-4">
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="password"
              className="text-[#181336] text-sm font-[500]"
            >
              Password
            </label>
            <PasswordInput
              className="w-full"
              placeholder=" Enter your password"
              id="password"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="confirmPassword"
              className="text-[#181336] text-sm font-[500]"
            >
              Confirm password
            </label>
            <PasswordInput
              className="w-full"
              placeholder="Confirm your password"
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
          </div>
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            disabled={isResending}
            className="!h-[3rem] !bg-Primary w-full"
          >
            Change Password
          </Button>
          <span
            onClick={resendLink}
            className="text-sm font-medium text-gray-600 flex items-center justify-center cursor-pointer underline"
          >
            Resend Link
          </span>
        </form>
      </main>
    </div>
  );
};

export default ResetPass;
