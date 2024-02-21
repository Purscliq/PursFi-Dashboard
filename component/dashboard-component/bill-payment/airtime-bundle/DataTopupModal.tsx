import React, { useState } from "react";
import { Modal } from "antd";
import { CustomSelect as Select } from "@/lib/AntdComponents";

interface Props {
  provider: {
    icon: JSX.Element;
  };
}

const DataTopupModal: React.FC<Props> = ({ provider }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
      >
        <span className="flex gap-4">
          {provider.icon}
          <p className="text-[24px] font-bold py-2">Data bundle Top up</p>
        </span>
        <form className="mt-12">
          <label
            htmlFor="amount"
            className="text-[#24272C] text-base font-medium"
          >
            Data Bundle
          </label>
          <Select
            id="amount"
            className="!w-full !h-[50px] mt-2"
            options={[
              { value: "100", label: "100" },
              { value: "200", label: "200" },
              { value: "500", label: "500" },
              { value: "1,000", label: "1,000" },
            ]}
            placeholder="Select bundle"
          />

          <span className="flex flex-col gap-4 mt-12">
            <button
              type="submit"
              className="bg-black text-white text-center w-full p-3 rounded-md text-base font-bold"
            >
              Proceed
            </button>
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
