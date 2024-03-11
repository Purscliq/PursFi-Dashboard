import { Modal } from "antd";
import React from "react";
import {
  CustomInput as Input,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { useGetBillPaymentTransactionDetailsQuery } from "@/services/bill-payment";
const TransactionModal = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
}) => {
  const { data, isLoading } = useGetBillPaymentTransactionDetailsQuery({ id });
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered={true}
      title="Transaction Details"
    >
      <div className="w-full space-y-4 mt-4 flex flex-col">
        <span className="flex justify-between items-center">
          <p className="text-slate-500 ">Amount :</p>
          <p className="leading-tight font-semibold">
            {data?.data[0]?.type === "buy" ? "+" : "-"}
            {data?.data[0]?.amount}
          </p>
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Date:</p>
          <p className="leading-tight font-semibold">
            {new Date(data?.data[0]?.createdAt).toDateString()}
          </p>{" "}
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Product:</p>
          <p className="leading-tight font-semibold">
            {data?.data[0]?.model?.product}{" "}
          </p>{" "}
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Provider:</p>
          <p className="leading-tight font-semibold">
            {data?.data[0]?.model?.network}
          </p>
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Transaction Type:</p>
          <p className="leading-tight font-semibold">
            {data?.data[0]?.model?.paymentMethod}
          </p>
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Status:</p>
          <p className="leading-tight font-semibold">
            {data?.data[0]?.model?.status}
          </p>
        </span>
        <div className="border border-gray-200"></div>
        <Button className="!h-[3rem] !bg-black w-full text-white hover:!text-white">
          Download Reciept
        </Button>
        <Button className="!h-[3rem] !bg-transparent w-full">
          Report Transaction
        </Button>
      </div>{" "}
    </Modal>
  );
};

export default TransactionModal;
