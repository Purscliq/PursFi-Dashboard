import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Modal, message } from "antd";
import Mtn from "@/assets/icon/Mtn";
import {
  CustomDatePicker as DatePicker,
  CustomTimePicker as TimePicker,
  CustomRadioGroup as RadioGroup,
  CustomInputNumber as InputNumber,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { valueType } from "antd/es/statistic/utils";
import dayjs from "dayjs";
import {
  useFundWalletScheduledMutation,
  useFundWalletInstantMutation,
  useFundWalletRecurringMutation,
} from "@/services/bill-payment";
import { useAppSelector } from "@/store/hooks";

interface Props {
  provider: {
    title: string;
    network: number;
  };
}
const options = [
  { label: "Instant", value: "instant" },
  { label: "Schedule", value: "schedule" },
  { label: "Recurring", value: "recurring" },
];
const amount: any = 0;
const initialState = {
  product: "data",
  provider: "",
  paymentType: "",
  amount,
  businessId: "",
  scheduleDate: "",
  scheduleTime: "",
  name: "",
  pattern: "",
  frequency: "",
};
const DataTopupModal: React.FC<Props> = ({ provider }) => {
  const profile = useAppSelector((store) => store.user.business);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormdata] = useState({
    ...initialState,
    provider: `${provider?.network + 1}`,
    businessId: profile?.id,
  });
  const [fundWalletInstant, { isLoading: isLoadingInstant }] =
    useFundWalletInstantMutation();
  const [fundWalletRecurring, { isLoading: isLoadingRecurring }] =
    useFundWalletRecurringMutation();
  const [fundWalletScheduled, { isLoading: isLoadingScheduled }] =
    useFundWalletScheduledMutation();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!formdata?.paymentType || !formdata?.amount) {
      message.error("all fields are required");
    }
    if (formdata?.paymentType === options[0]?.value) {
      fundWalletInstant(formdata)
        .unwrap()
        .then((res) => {
          setFormdata(initialState);
          handleCancel();
          message.success("airtime wallet funded succesfully");
        })
        .catch((err) => {});
    }
    if (formdata?.paymentType === options[1]?.value) {
      fundWalletScheduled(formdata)
        .unwrap()
        .then((res) => {
          setFormdata(initialState);
          handleCancel();
          message.success("airtime wallet funded succesfully");
        })
        .catch((err) => {});
    }
    if (formdata?.paymentType === options[2]?.value) {
      fundWalletRecurring(formdata)
        .unwrap()
        .then((res) => {
          setFormdata(initialState);
          handleCancel();
          message.success("airtime wallet funded succesfully");
        })
        .catch((err) => {});
    }
  };

  return (
    <>
      <button
        onClick={showModal}
        title="Top up"
        className="text-[#0D24F1] font-medium text-[12px]"
      >
        + Top up
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        centered
      >
        <span className="flex gap-4">
          {/* {provider.icon} */}
          <Mtn />
          <p className="text-[24px] font-bold py-2">Data Top up</p>
        </span>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-3">
          <span className="flex flex-col gap-2">
            <label
              htmlFor="amount"
              className="text-[#24272C] text-base font-medium"
            >
              Amount
            </label>
            <InputNumber
              name="amount"
              id="amount"
              className="!w-full"
              placeholder="Amount"
              value={formdata?.amount}
              onChange={(value: valueType | null) =>
                setFormdata((prev) => ({ ...prev, amount: value }))
              }
              required
              min={100}
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="tag">Payment Tag</label>
            <RadioGroup
              id="tag"
              name="paymentType"
              onChange={(e) =>
                setFormdata((prev) => ({
                  ...prev,
                  paymentType: e.target.value,
                }))
              }
              options={options}
              value={formdata.paymentType}
              className="!flex !justify-between !gap-[4rem]"
            />
          </span>
          {(formdata.paymentType === options[2].value ||
            formdata.paymentType === options[1].value) && (
            <span className="flex flex-col gap-1">
              <label>Select Day</label>
              <span className="flex items-center justify-between gap-[2rem]">
                <DatePicker
                  onChange={(value, date) => {
                    setFormdata((prev) => ({
                      ...prev,
                      scheduleDate: date,
                    }));
                  }}
                  value={
                    formdata?.scheduleDate
                      ? dayjs(formdata?.scheduleDate)
                      : undefined
                  }
                  picker="date"
                  className="!w-full"
                />
                <TimePicker
                  format={"HH:mm"}
                  value={
                    formdata?.scheduleTime
                      ? dayjs(formdata?.scheduleTime, "HH:mm")
                      : undefined
                  }
                  onChange={(value, date) => {
                    setFormdata((prev) => ({
                      ...prev,
                      scheduleTime: date,
                    }));
                  }}
                  className="!w-full "
                />
              </span>
            </span>
          )}
          <span className="flex flex-col gap-4 mt12">
            <Button
              loading={
                isLoadingInstant || isLoadingRecurring || isLoadingScheduled
              }
              htmlType="submit"
              type="primary"
              className="bg-black text-white text-center w-full !h-[40px] rounded-md text-base font-bold"
            >
              Proceed
            </Button>
            <button
              type="reset"
              onClick={handleCancel}
              className="text-black border border-[#E9EBEB] text-center w-full p-3 rounded-md text-base font-medium"
            >
              Cancel
            </button>
          </span>
        </form>
      </Modal>
    </>
  );
};

export default DataTopupModal;
