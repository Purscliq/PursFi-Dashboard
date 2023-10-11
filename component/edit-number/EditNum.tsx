import Image from "next/image";
import logo from "@/assets/logo 3.png";
import { CustomInput as Input } from "@/lib/AntdComponents";
const EditNum = () => {
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[450px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-xl mb-2 text-Primary">
          Edit Your Phone Number!{" "}
        </h1>
        <p className=" text-gray-700  text-center">
          Cross check your number or enter another phone number to receive your
          OTP{" "}
        </p>
        <form className="w-full space-y-5 mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone number
            </label>
            <div className="flex ">
              <select
                id="phone"
                className="  px-2 py-1 rounded-l bg-blue-100"
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>

              <Input
                type="text"
                id="phone"
                className="appearance-none border rounded w-full py-2 px-3   text-gray-600 leading-tight focus:outline-none placeholder:text-sm"
                placeholder="Phone Number"
              />
            </div>
          </div>{" "}
          <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full mb-3!">
            Resnd OTP
          </button>
        </form>
      </main>
      <p className="flex justify-center my-8 text-gray-400 font-thin ">
        Terms of service. Having problem with login?
      </p>
    </div>
  );
};

export default EditNum;
