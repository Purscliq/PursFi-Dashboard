"use client";
import logo from "@/assets/logo 3.png";
import verifyImage from "@/assets/Group 5.png";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "antd";
import { CustomRadio  } from "@/lib/AntdComponents";
const VerifyEmail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col space-y-5 items-center justify-center bg-white w-full md:w-[500px] mx-auto mt-4 p-6">
        <Image src={verifyImage} alt="verify-image" />
        <h1 className="font-semibold text-3xl text-Primary">
          Verify your Email{" "}
        </h1>
        <p className="text-md text-gray-600 text-center">
          We have sent a confirmation email to the address you provided. This
          verification link is only good for 24 hours.{" "}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full mb-3!"
        >
          View Requirement
        </button>
        <button className="btn bg-transparent hover:bg-transparent border-gray-200 text-Primary capitalize w-full  hover:border-gray-300">
          Resend Link
        </button>
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={false}
        >
          <h1 className="font-semibold text-3xl text-Primary text-center">
            Verify your Email{" "}
          </h1>
          <p className="text-md text-gray-600 text-center mb-4">
            We have sent a confirmation email to the address you provided. This
            verification link is only good for 24 hours.{" "}
          </p>
          <div className="flex flex-col space-y-5 bg-black/80 p-3 rounded text-white">
            <p className="text-lg">NON Governmental Organization</p>
            <CustomRadio value="1" >Business Information</CustomRadio>
            <CustomRadio value="2">CAC IT form</CustomRadio>
            <CustomRadio value="3">CAC IT form</CustomRadio>
            <CustomRadio value="4">CAC IT form</CustomRadio>
            <CustomRadio value="5">CAC IT form</CustomRadio>
          </div>
          <button onClick={() => setIsModalOpen(false)} className="btn bg-transparent hover:bg-transparent border-gray-200 text-Primary capitalize w-full  hover:border-gray-300 mt-4">
            Cancel{" "}
          </button>
        </Modal>
      </main>
    </div>
  );
};

export default VerifyEmail;
