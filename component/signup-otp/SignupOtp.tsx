"use client";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import Image from "next/image";
import logo from "@/assets/logo 3.png";
import Link from "next/link";

const SignupOtp = () => {
  const [code, setCode] = useState();
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[500px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-xl mb-2 text-Primary">
          Verify Your Phone Number!{" "}
        </h1>
        <p className=" text-gray-700">
          We sent an OTP to 0812xxxx345 by SMS and WhatsApp.
        </p>
        <form className="w-full space-y-5 mt-4">
          <h1 className="text-sm">Enter OTP Code</h1>
          <OTPInput
            numInputs={6}
            value={code}
            onChange={(otp) => setCode(otp)}
            renderSeparator={<span style={{ width: "20px" }}></span>}
            renderInput={(props, index) => (
              <input
                {...props}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #CFD3DB",
                  borderRadius: "8px",
                  width: "50px",
                  height: "50px",
                  fontSize: "16px", // Increased font size for better visibility
                  color: "#000",
                  fontWeight: "800",
                  caretColor: "blue",
                  margin: "4px",
                  textAlign: "center",
                }}
              />
            )}
            shouldAutoFocus={true}
          />
          <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full mb-3!">
            verify
          </button>
          <p className=" text-sm text-grayText ">
            Didn’t get the code?{" "}
            <button className="text-Primary text-sm font-bold">
              Click Resend
            </button>
          </p>
          <p className="bg-blue-100 text-sm p-2 text-Primary">
            Still not recevie your OTP kindly cross check you phone number by
            <Link href="edit-number" className="font-semibold">
              Click here
            </Link>
          </p>
        </form>
      </main>
      <p className="flex justify-center my-8 text-gray-400 font-thin ">
        Terms of service. Having problem with login?
      </p>
    </div>
  );
};

export default SignupOtp;
