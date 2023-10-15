"use client";
import logo from "@/assets/logo.svg";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import Image from "next/image";
import Link from "next/link";
import { message, Alert } from "antd";
import { useLoginMutation } from "@/services/authService";
import { useState, ChangeEventHandler, FormEventHandler } from "react";

const initailState = {
  email: "",
  password: "",
};
const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState(initailState);
  const [alert, setAlert] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    login(formData)
      .unwrap()
      .then((res) => {
        console.log(res);
        message.success(res?.message);
      })
      .catch((err) => {
        console.log(err);
        setAlert(err?.data?.message);
      });
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (alert) setAlert("");
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target?.value,
    }));
  };
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[500px] mx-auto mt-4 p-6">
        {alert && <Alert type="error" closable message={alert} />}
        <h1 className="font-semibold text-xl mb-2 text-[#000000]">
          Welcome Back !
        </h1>
        <p className=" text-gray-700">Login to visit your dashboard</p>
        <form onSubmit={handleSubmit} className="w-full space-y-5 mt-4">
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="email"
              className="text-[#181336] text-sm font-[500]"
            >
              Email Address
            </label>
            <Input
              className="w-full authInput"
              placeholder="This is a placeholder"
              id="email"
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="password"
              className="text-[#181336] text-sm font-[500]"
            >
              Password
            </label>
            <PasswordInput
              className="w-full"
              placeholder="This is a placeholder"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            className="!h-[3rem] !bg-Primary w-full"
          >
            Login
          </Button>
          <div className=" text-sm hover:underline hover:duration-300 text-gray-600 ">
            <Link href="forget-password">Forgot Password? </Link>{" "}
          </div>
          <span className="flex justify-center items-center mt-6">
            <p className="text-sm leading-6 text-gray-600">
              New to Purscliq Business?{" "}
              <Link
                href="signup"
                className="hover:underline hover:duration-300 cursor-pointer text-Primary"
              >
                {" "}
                Sign Up
              </Link>{" "}
            </p>
          </span>
        </form>
      </main>
      <p className="flex justify-center my-8 text-gray-400 font-thin ">
        Terms of service. Having problem with login?
      </p>
    </div>
  );
};

export default Login;
