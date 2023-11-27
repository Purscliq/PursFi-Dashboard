"use client";
import React, {
  ChangeEventHandler,
  FormEventHandler,
  SetStateAction,
} from "react";
import {
  CustomInput as Input,
  CustomSelect as Select,
  CustomText as TextArea,
  CustomButton as Button,
  ThemeRadioButton as RadioButton,
  ThemeRadioGroup as RadioGroup,
} from "@/lib/AntdComponents";
import { useBusinessProfileQuery } from "@/services/authService";
import { docsData } from "../OnBoardingTabs";
const filter = [
  { label: "Individual", value: "inidividual" },
  { label: "Business", value: "business" },
  { label: "Enterprise", value: "enterprise" },
  { label: "Limited Liability", value: "limited liability" },
];
const industry = [
  { value: "finance", label: "Finance" },
  { value: "tech", label: "Tech" },
];
const CompanyInfo = ({
  formData,
  setFormData,
  setActive,
}: {
  formData: Record<string, any>;
  setFormData: React.Dispatch<SetStateAction<docsData>>;
  setActive: React.Dispatch<SetStateAction<string>>;
}) => {
  const {
    data: { business },
  } = useBusinessProfileQuery({});
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setActive("2");
  };
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target?.value,
    }));
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white w-full mt-4 p-3 rounded-md"
      >
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Choose Merchant Type{" "}
            </h2>
          </div>{" "}
          <div className="w-[60%]">
            <h2 className="py-2">Merchant type</h2>
            <RadioGroup
              optionType="button"
              defaultValue={business?.merchantType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  merchantType: e.target.value,
                }))
              }
            >
              <div className="flex w-full md:grid grid-cols-2 justify-start items-center gap-[0.5rem]">
                {filter.map((e, i) => (
                  <div key={i}>
                    <RadioButton
                      style={{
                        color:
                          formData.merchantType === e.value ? "#FFF" : "#000",
                      }}
                      disabled
                      value={e.value}
                      key={i}
                      className="!border-[#000]/[10%]"
                    >
                      {e.label}
                    </RadioButton>
                  </div>
                ))}
              </div>
            </RadioGroup>
            <p className="text-sm py-2 underline">
              View all the requirement document needed
            </p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
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
          </div>
          <div className=" w-2/4">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                Enter your Business name
              </label>
              <Input
                name="businessName"
                value={business?.businessName}
                onChange={handleChange}
                disabled
                required
                id="text"
                type="text"
                placeholder="placeholder"
              />
            </div>
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
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
                className="!w-full"
                options={industry}
                placeholder="placeholder"
                value={formData.BusinessIndustry}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, BusinessIndustry: value }))
                }
              />
            </div>
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
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
                About your Business
              </label>
              <TextArea
                value={formData.Description}
                onChange={handleChange}
                name="Description"
                required
                placeholder="Type your text here..."
                rows={5}
                cols={40}
                className="w-full bg-transparent border border-gray-200 p-2 outline-none focus:border-blue-300"
              />
              <p>{formData.Description.length}/500 characters</p>
            </div>
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Verify your Company Location
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
                Company adress
              </label>
              <Input
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
                id="text"
                type="text"
                placeholder="placeholder"
              />
            </div>
            {/* <div className="">
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
            </div> */}
            {/* <div className="">
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
            </div> */}
          </div>
        </article>
        <div className="mt-3 flex space-x-10">
          <div className="w-[30%]"></div>
          <div className="w-2/4">
            <Button
              htmlType="submit"
              type="primary"
              className="!h-[3rem] !bg-Primary w-full"
            >
              save and continue
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CompanyInfo;
