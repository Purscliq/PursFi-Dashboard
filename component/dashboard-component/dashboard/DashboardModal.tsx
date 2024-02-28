import { Modal } from "antd";
import { useState } from "react";
import {
  CustomButton as Button,
  CustomInput as Input,
  CustomTooltip as Tooltip,
} from "@/lib/AntdComponents";
import { FaRegCopy } from "react-icons/fa";
import { useAppSelector } from "@/store/hooks";
const DashboardModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [toogleTooltip, setToogleTooltip] = useState(false);
  const wallet = useAppSelector((store) => store?.user?.wallet);
  return (
    <Modal centered open={open} onCancel={() => setOpen(false)} footer={null}>
      <div className=" flex flex-col">
        <h2 className="text-2xl font-bold mb-1">
          Transfer money to your Account
        </h2>
        <p className="text-sm text-gray-500">
          move fund from this account to another company account
        </p>
        <div className="mt-5 space-y-4">
          <Button type="primary" className="!h-[3rem] !bg-black w-full">
            Bank Transfer
          </Button>
          <form className="w-full space-y-8 mt-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-semibold mb-2">
                PursFinance Main Account
              </label>
              <Input
                required
                id="text"
                type="text"
                placeholder="pursfi main account"
                disabled
              />
            </div>

            <div className="flex justify-between items-end  border border-gray-300 p-2 rounded-md">
              <span className="space-y-3">
                <p className="font-medium ">Bank Transfer</p>
                <p>Bank Name - {wallet?.accountDetails?.bankName}</p>{" "}
                <p>Account Number - {wallet?.accountDetails?.accountNumber}</p>
                <p>Account Name - {wallet?.accountDetails?.accountName}</p>
              </span>{" "}
              <Tooltip title="copied!" trigger={"click"} open={toogleTooltip}>
                <Button
                  onClick={() => {
                    setToogleTooltip(true);
                    navigator.clipboard
                      .writeText(
                        `Bank Name:${wallet?.accountDetails?.bankName} \n Account Name:${wallet?.accountDetails?.accountName} \n Account Number:${wallet?.accountDetails?.accountNumber}`
                      )
                      .finally(() => {
                        setTimeout(() => {
                          setToogleTooltip(false);
                        }, 2000);
                      });
                  }}
                  icon={<FaRegCopy />}
                  className="border !items-center !flex space-x-3 p-2 rounded-md"
                >
                  copy
                </Button>
              </Tooltip>
            </div>
          </form>{" "}
        </div>{" "}
      </div>
    </Modal>
  );
};

export default DashboardModal;
