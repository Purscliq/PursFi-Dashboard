"use client";
import logo from "@/assets/logo 3.png";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntdComponents";
import { Checkbox } from "antd";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[480px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-3xl text-Primary">
          Create an account
        </h1>
        <p className="text-sm text-gray-600">
          Sign up to create your merchant account
        </p>
        <form className="w-full space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 ">
              {" "}
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <Input
                id="firstName"
                className="w-full"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex-1 ml-2">
              {" "}
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                Last name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone number
            </label>
            <div className="phone-input-container">
              <PhoneInput
                country={"ng"}
                containerClass="!w-full"
                inputClass="phone-input-input !w-full"
              />
            </div>{" "}
          </div>{" "}
          <div>
            <label htmlFor="" className="text-gray-700 text-sm mb-4 ">
              Create your Password
            </label>
            <div className="flex justify-between">
              <div className="flex-1 ">
                {" "}
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <PasswordInput
                  placeholder="This is a placeholder"
                  id="password"
                  type="password"
                />
              </div>
              <div className="flex-1 ml-2">
                {" "}
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="confirmpass"
                >
                  Confirm password
                </label>
                <PasswordInput
                  placeholder="This is a placeholder"
                  id="password"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <Checkbox />
            <label htmlFor="remember" className="text-gray-600 ml-3 text-sm">
              By clicking continue, you acknowledge that you have read and
              accept the{" "}
              <span className="text-Primary ">
                Terms Of Service and Privacy Policy{" "}
              </span>{" "}
            </label>
          </div>
          <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full mb-3!">
            Get Started
          </button>
          <p className="text-sm font-medium text-gray-600 flex items-center justify-center">
            Already have an account ?{" "}
            <Link
              href="/login"
              className="text-md hover:underline hover:duration-300 text-Primary"
            >
              Log in
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
