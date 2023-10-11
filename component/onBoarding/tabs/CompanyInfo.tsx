import React, { useState } from "react";
import { CustomInput as Input } from "@/lib/AntdComponents";
import { Select } from "antd";
const CompanyInfo = () => {
  const [text, setText] = useState("");
  const maxCharacters = 500;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= maxCharacters) {
      setText(inputText);
    }
  };
  return (
    <main>
      <span>
        <h2 className="text-black font-semibold mb-1">
          Tell us about your Company
        </h2>
        <p className="text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>
      <div className="flex flex-col bg-white w-full mt-4 p-3">
        <article className="flex flex-col md:flex-row space-x-14 p-2">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              What type of company is PURS
            </h2>
          </div>{" "}
          <div className=" w-2/4">
            <h2>Business type</h2>
            <div className="grid grid-cols-2 gap-4">
              <span className=" flex items-center justify-center p-2 bg-blue-100 text-blue-300">
                NGO
              </span>
              <span className="border flex items-center justify-center p-2">
                NGO
              </span>
              <span className="border flex items-center justify-center p-2">
                NGO
              </span>
              <span className="border flex items-center justify-center p-2">
                NGO
              </span>
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Tell us your business Resister{" "}
            </h2>
            <p className="text-sm">
              this most be the name on your registration Documentation. <br />
              <span className="text-red-400">
                Note: the name can not be change again
              </span>
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                Enter your Business name{" "}
              </label>
              <Input id="text" type="text" placeholder="placeholder" />
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Select your industry{" "}
            </h2>
            <p className="text-sm">
              Choose the Industry closet to the ine in which your Business
              Operate
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                Select Industry
              </label>
              <Select
                style={{ width: "100%" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                ]}
                placeholder="placeholder"
              />{" "}
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Tell us about your business
            </h2>
            <p className="text-sm">
              in a few sentence describe your Company and the Product or
              Services your render
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                About your Business{" "}
              </label>
              <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type your text here..."
                rows={5}
                cols={40}
                className="w-full bg-transparent border border-gray-200 p-2 outline-none focus:border-blue-300"
              />
              <p>
                {text.length}/{maxCharacters} characters
              </p>
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Verify your Company Location{" "}
            </h2>
            <p className="text-sm">
              We will Require you to Submit A copy of your utility bill
              associated to the address in the documentation part of the
              onboarding
            </p>
          </div>{" "}
          <div className=" w-2/4 space-y-3">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                Company adress{" "}
              </label>
              <Input id="text" type="text" placeholder="placeholder" />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                Local government area{" "}
              </label>
              <Select
                style={{ width: "100%" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                ]}
                placeholder="placeholder"
              />{" "}
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <Select
                style={{ width: "100%" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                ]}
                placeholder="placeholder"
              />{" "}
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <div className="mt-3 flex space-x-10">
          <div className="w-[30%]"></div>
          <div className="w-2/4">
            <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full">
              Save and continue{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyInfo;
