"use client";

import { useRouter } from "next/navigation";
import {
  // CustomInput as Input,
  CustomRadioGroup as RadioGroup,
  CustomDatePicker as DatePicker,
  CustomInputNumber as InputNumber,
  CustomButton as Button,
  CustomSelect as Select,
  CustomSpinner as Spinner,
} from "@/lib/AntdComponents";
import { Input } from "antd";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

import {
  useState,
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
} from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { CgAttachment } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const { TextArea } = Input;

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AddMany = () => {
  const { back } = useRouter();

  return (
    <div className="relative flex flex-col gap-4 px-[2%] w-[95%] mx-auto">
      <header className="flex flex-col space-y-3 my-1 border-b border-[#D6DDEB] py-[2%]">
        <div className="flex items-center justify-between ">
          <span className="text-2xl font-medium flex gap-1 items-center">
            <GrFormPreviousLink className="cursor-pointer" onClick={back} />
            <span>
              <h2 className="text-2xl font-medium">
                Add employees and contractors |{" "}
                <span className="text-gray-400">Invite many</span>
              </h2>
            </span>
          </span>
        </div>
      </header>
      <div>
        <h2 className="text-[18px] text-[#061A14] font-semibold">
          Bulk invite Employees and contractors
        </h2>
        <p className="font-normal text-base text-[#5A5C5C]">
          This is Company information that you can update anytime.
        </p>
      </div>
      {/* form */}
      <form className="bg-white p-4 space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="space-y-2 w-full md:max-w-sm">
            <p className="font-semibold text-base">Full Name</p>
            <p className="font-normal text-base text-[#515B6F]">
              Enter the email addresses of your employees, separated by commas.
              They will be sent emails to join Pursbusiness and put in their
              information.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-base">Invite Employees</label>
            <TextArea
              rows={4}
              className="w-full"
              placeholder="emp1@example.com, emp2@example.com, emp3@example.com"
            />
            <span className="flex gap-4 justify-between">
              <p className="text-[#515B6F]">Maximum 500 characters</p>
              <p className="text-[#515B6F]">0 / 500</p>
            </span>
          </div>
        </div>
        <hr />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="space-y-2 w-full md:max-w-sm">
            <p className="font-semibold text-base">Full Name</p>
            <p className="font-normal text-base text-[#515B6F]">
              Enter the email addresses of your employees, separated by commas.
              They will be sent emails to join Pursbusiness and put in their
              information.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-base">
              Invite Contractors
            </label>
            <TextArea
              rows={4}
              className="w-full"
              placeholder="emp1@example.com, emp2@example.com, emp3@example.com"
            />
            <span className="flex gap-4 justify-between">
              <p className="text-[#515B6F]">Maximum 500 characters</p>
              <p className="text-[#515B6F]">0 / 500</p>
            </span>
          </div>
        </div>
        <hr />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="space-y-2 w-full md:max-w-sm">
            <p className="font-semibold text-base">Upload Employee names</p>
            <p className="font-normal text-base text-[#515B6F]">
              Enter the email addresses of your employees, separated by commas.
              They will be sent emails to join Pursbusiness and put in their
              information.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-base">
              Attach your CSV file
            </label>
            <Dragger {...props}>
              <span className="flex gap-4">
                <CgAttachment className="w-6 h-6" />
                <p className="text-[#515B6F] text-base font-medium">
                  Attach File
                </p>
              </span>
            </Dragger>
          </div>
        </div>
        <hr />

        {/* submit */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="space-y-2 w-full md:max-w-sm" />
          <div>
            <Button
              htmlType="submit"
              className="bg-black text-white hover:!text-white !h-[45px] font-semibold w-full text-base"
            >
              Add Everyone
            </Button>
          </div>
        </div>
      </form>
      {/* end */}
    </div>
  );
};

export default AddMany;
