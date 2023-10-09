import logo from "@/assets/logo 3.png";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntdComponents";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[500px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-xl mb-2 text-Primary">
          Welcome Back !
        </h1>
        <p className=" text-gray-700">Login to visit your dashboard</p>
        <form className="w-full space-y-5 mt-4">
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
            />
          </div>
          <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full mb-3!">
            Login
          </button>
          <div className=" text-sm hover:underline hover:duration-300 text-gray-600 ">
            <Link href="forgetpass">Forgot Password? </Link>{" "}
          </div>
          <span className="flex justify-center items-center mt-6">
            <p className="text-sm leading-6 text-gray-600">
              New to Purscliq Business?{" "}
              <Link href="signup" className="hover:underline hover:duration-300 cursor-pointer text-Primary">
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
