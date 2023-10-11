import logo from "@/assets/logo 3.png";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntdComponents";
import Image from "next/image";
import Link from "next/link";
const ResetPass = () => {
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[450px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-xl mb-2 text-Primary">
          Change Password{" "}
        </h1>
        <p className=" text-gray-700 text-sm text-center">
          Your new password must be different from previous used passwords
        </p>
        <form className="w-full space-y-5 mt-4">
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
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="confirmPassword"
              className="text-[#181336] text-sm font-[500]"
            >
              Confirm password
            </label>
            <PasswordInput
              className="w-full"
              placeholder="This is a placeholder"
              id="confirmPassword"
              type="password"
            />
          </div>
          <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full mb-3!">
            Change Password{" "}
          </button>
        </form>
      </main>
    </div>
  );
};

export default ResetPass;
