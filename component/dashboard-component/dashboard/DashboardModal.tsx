import { Modal } from "antd";
import React from "react";
import DashboardForm from "./DashboardForm";
import { CustomButton as Button } from "@/lib/AntdComponents";
const DashboardModal = ({
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
      centered={true}
      footer={null}
    >
      <div className=" flex flex-col  items-center justify-center">
        <h2 className="text-2xl font-bold mb-1">
          Transfer money to your Account
        </h2>
        <p className="text-sm text-gray-500">
          move fund from this account to another company account
        </p>
        <div className="mt-5">
          <Button
            type="primary"
            className="!h-[3rem] !bg-Primary"
          >
            Bank Transfer
          </Button>
          <DashboardForm />
        </div>{" "}
      </div>
    </Modal>
  );
};

export default DashboardModal;
