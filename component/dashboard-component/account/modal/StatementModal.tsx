import { Modal } from "antd";
import React from "react";

import {
  CustomInput as Input,
  CustomButton as Button,
  CustomSelect as Select,
  CustomDatePicker as DatePicker,
} from "@/lib/AntdComponents";
const StatementModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered={true}
    >
      <div className=" flex flex-col">
        <h2 className="text-2xl font-bold mb-1 text-center">
          Get Account Statement
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Obtain a downloadable statement for this account.{" "}
        </p>
        <form className="w-full space-y-4 mt-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="time"
            >
              Time Range{" "}
            </label>
            <Input
              name="time"
              required
              id="text"
              type="text"
              placeholder="placeholder"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className=" w-2/4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                Start Date{" "}
              </label>
              <DatePicker className="h-fit w-full" placeholder="Start Date" />
            </div>
            <div className=" w-2/4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="text"
              >
                End Date{" "}
              </label>
              <DatePicker className="h-fit w-full" placeholder="End Date" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Format{" "}
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
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address{" "}
            </label>
            <Input
              name="email"
              required
              id="text"
              type="text"
              placeholder="placeholder"
            />
            <p className="text-xs text-gray-500">
              the statement will be send to This Email.
            </p>
          </div>{" "}
          <Button className="!h-[3rem] !bg-Primary w-full text-white hover:!text-white">
            Submit
          </Button>
          <Button
            onClick={() => setOpen(false)}
            className="!h-[3rem] !bg-transparent w-full"
          >
            Cancel
          </Button>
        </form>{" "}
      </div>{" "}
    </Modal>
  );
};

export default StatementModal;
