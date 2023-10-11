"use client"
import logo from "@/assets/logo 3.png";
import {
  CustomInput as Input,
} from "@/lib/AntdComponents";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgetPass = () => {
  const route = useRouter()
  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    route.push('reset-password')
  }
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[500px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-xl mb-2 text-Primary">
          Reset Password{" "}
        </h1>
        <p className=" text-gray-700 text-sm text-center">
          Enter the email associated with your account and we’ll send an email
          with instruction to reset your Password
        </p>
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
            />
          </div>

          <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full mb-3!">
            Send reset link
          </button>
          <span className="flex justify-center items-center mt-6">
            <p className="text-sm leading-6 text-gray-600">
              Remembered your password ? kindly {" "}
              <Link
                href="/"
                className="hover:underline hover:duration-300 cursor-pointer text-Primary"
              >
              click  here
              </Link>
              {' '}to Login
            </p>
          </span>
        </form>
      </main>
    </div>
  );
};

export default ForgetPass;
