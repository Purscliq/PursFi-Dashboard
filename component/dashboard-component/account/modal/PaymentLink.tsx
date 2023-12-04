import { Modal } from "antd";
import React from "react";
import { CustomButton as Button } from "@/lib/AntdComponents";
const PaymentLink = ({
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
          Share Account Details
        </h2>
        <p className="text-sm text-gray-500 text-center">
          move fund from this account to another company account
        </p>
        <div className="w-full space-y-6 py-4 mt-4">
          <p className="font-semibold">
            Share this link to get paid directly to your pursbusiness account
          </p>
          <div className=" border rounded-md flex items-center space-x-2 p-2">
            <textarea
              className="w-full h-10 p-2  rounded-md resize-none focus:outline-none font-semibold "
              readOnly
            >
              http//pursbusiness/paymemymonet/445467
            </textarea>
            <button className="bg-black text-white px-4 py-1 rounded-md hover:bg-black focus:outline-none">
              Copy
            </button>
          </div>
          <p className="font-semibold">Download Payment Flyer</p>
          <div className="bg-[#D9D9D9] h-[12rem] w-full"></div>
        </div>{" "}
        <Button className="!h-[3rem] !bg-black w-full text-white hover:!text-white">
          Download Flyer
        </Button>
      </div>{" "}
    </Modal>
  );
};

export default PaymentLink;
