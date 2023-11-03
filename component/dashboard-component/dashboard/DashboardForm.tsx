import React from "react";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import { FaRegCopy } from "react-icons/fa";

const DashboardForm = () => {
  return (
    <div>
      <form className="w-full space-y-4 mt-4">
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            PursBusiness main Account
          </label>
          <Select
            className="!w-full"
            placeholder="This is a placeholder"
            options={[
              { value: "individual", label: "Individual" },
              { value: "business", label: "Business" },
              { value: "enterprise", label: "Enterprise" },
              { value: "limited liability", label: "Limited Liability" },
            ]}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1 ">
            <label
              className="block text-black text-sm font-semibold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <Select
              className="!w-full"
              placeholder="This is a placeholder"
              options={[
                { value: "individual", label: "Individual" },
                { value: "business", label: "Business" },
                { value: "enterprise", label: "Enterprise" },
                { value: "limited liability", label: "Limited Liability" },
              ]}
            />
          </div>
          <div className="flex-1 ml-2">
            {" "}
            <label
              className="block text-black text-sm font-semibold mb-2"
              htmlFor="bank"
            >
              Bank
            </label>
            <Select
              className="!w-full"
              placeholder="This is a placeholder"
              options={[
                { value: "individual", label: "Individual" },
                { value: "business", label: "Business" },
                { value: "enterprise", label: "Enterprise" },
                { value: "limited liability", label: "Limited Liability" },
              ]}
            />
          </div>
        </div>
        <p className="font-semibold text-sm">Dial this code on your device and follow the prompt </p>
        <div className="flex justify-between items-center  ">
          <span>
            <p>your USSD Code</p>{" "}
            <p className="text-lg font-bold">*707*50000*464694456#</p>
          </span>{" "}
          <button className="border items-center  flex space-x-2 p-1 rounded-sm">
            <FaRegCopy className="text-blue-400" />
            <p>copy</p>{" "}
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default DashboardForm;
