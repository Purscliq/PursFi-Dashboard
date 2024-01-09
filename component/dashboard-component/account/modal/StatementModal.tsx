import { Modal } from "antd";
import { FormEventHandler, useState } from "react";
import { useGenerateStatementMutation } from "@/services/transactionService";
import {
  CustomInput as Input,
  CustomButton as Button,
  CustomSelect as Select,
  CustomDatePicker as DatePicker,
} from "@/lib/AntdComponents";
import { message } from "antd";
const initialState = {
  businessId: "",
  startDate: "",
  endDate: "",
};
import { useAppSelector } from "@/store/hooks";
const StatementModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [formData, setFormData] = useState(initialState);
  const [generateStatement, { isLoading }] = useGenerateStatementMutation();
  const profile = useAppSelector((store) => store?.user?.user);
  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (formData.startDate && formData.endDate)
      generateStatement({
        ...formData,
        businessId: profile.businessId,
        userId: profile?.id,
      })
        .unwrap()
        .then((res) => {
          console.log(res);
          setFormData(initialState);
          message.success("account statement sent");
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
          message.error(
            err?.data?.responseDescription || "something went wrong"
          );
        });
  };
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
        <form onSubmit={onFormSubmit} className="w-full space-y-4 mt-4">
          {/* <div>
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
              placeholder="Time Range"
            />
          </div> */}
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="text"
            >
              Start Date{" "}
            </label>
            <DatePicker
              onChange={(_, date) => {
                setFormData((prev) => ({ ...prev, startDate: date }));
              }}
              className="h-fit !w-full"
              placeholder="Start Date"
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="text"
            >
              End Date{" "}
            </label>
            <DatePicker
              onChange={(_, date) => {
                setFormData((prev) => ({ ...prev, endDate: date }));
              }}
              className="h-fit !w-full"
              placeholder="End Date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Format{" "}
            </label>
            <Select
              className="!w-full"
              placeholder="Format"
              defaultValue={"PDF"}
              options={[{ value: "PDF", label: "PDF" }]}
            />
          </div>
          {/* <div>
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
              placeholder="Email Address"
            />
            <p className="text-xs text-gray-500">
              the statement will be send to This Email.
            </p>
          </div> */}
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            className="!h-[3rem] !bg-black w-full text-white hover:!text-white"
          >
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
