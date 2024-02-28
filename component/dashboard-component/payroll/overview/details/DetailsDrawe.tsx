import { Drawer } from "antd";
import {
  CustomButton as Button,
  CustomInputNumber,
  CustomSelect as Select,
  CustomTimePicker as TimePicker,
  CustomInput as Input,
} from "@/lib/AntdComponents";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useState } from "react";
import DeleteMemberModal from "./DeleteMemberModal";
import dayjs from "dayjs";
interface PayrollDetailsProps {
  Open: boolean;
  onClose: () => void;
}

const DeatilsDrawe: React.FC<PayrollDetailsProps> = ({ Open, onClose }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [activeTab, setActiveTab] = useState("payroll-details");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Drawer
        placement="right"
        className="!relative"
        onClose={onClose}
        open={Open}
        width={500}
      >
        <>
          <button
            type="button"
            className="btn btn-ghost hover:bg-transparent p-0"
          >
            <label
              htmlFor="DeactivateAccount"
              title="Deactivate Account"
              className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
            >
              <input
                title="Checked"
                type="checkbox"
                id="DeactivateAccount"
                // defaultChecked
                className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
              />

              <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"></span>

              <span className="absolute inset-0 rounded-full peer-checked:bg-[#E93C3C] transition bg-green-500"></span>
            </label>
          </button>
          <div className="flex flex-col justify-center items-center  h-[120px]">
            <div className="mx-auto flex items-center justify-center">
              <HiOutlineUserCircle className="text-[40px]" />
            </div>

            <p className="text-[#181336] text-[20px] font-[600] capitalize">
              John David Doe
            </p>
            <p className="text-[#515B6F] text-[12px] font-[400] mt3 uppercase">
              Admin{" "}
            </p>
          </div>
          <div>
            <div className="flex space-x-4 items-start ">
              <Button
                onClick={() => handleTabClick("payroll-details")}
                className={`!w-full ${
                  activeTab === "payroll-details"
                    ? "!bg-black !text-white "
                    : "!bg-transparent"
                }  `}
              >
                Payroll Details
              </Button>
              <Button
                onClick={() => handleTabClick("summary")}
                className={`!w-full ${
                  activeTab === "summary"
                    ? "!bg-black !text-white"
                    : "!bg-transparent"
                }  `}
              >
                Summary{" "}
              </Button>
            </div>
            <div className=" mt-2">
              {activeTab === "payroll-details" && (
                <>
                  <h1 className="font-bold p-2">Payroll Details</h1>
                  <hr />
                  <h1 className="font-semibold p-2">Salary Details</h1>
                  <form className="grid grid-cols-1 gap-[1.5rem] px-[3%] mt-5">
                    <span className="flex items-center justify-between gap-[2rem]">
                      <span className="flex flex-col w-full">
                        <label htmlFor="product">Monthly Wage</label>
                        <TimePicker
                          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                        />{" "}
                        <p>total hours spend working</p>
                      </span>
                      <span className="flex flex-col w-full">
                        <label htmlFor="bank">Total Amount</label>
                        <CustomInputNumber
                          name="amount"
                          className="!w-full"
                          prefix="&#8358;"
                          placeholder=""
                          required
                        />
                        <p>total hours spend working</p>
                      </span>
                    </span>
                    <p className="leading-tight font-semibold">
                      + Add Salary Type{" "}
                    </p>
                    <hr />
                    <span className="flex flex-col w-full">
                      <label htmlFor="bank">Tax Code</label>
                      <Input
                        className="!w-full"
                        placeholder="144444444444"
                        required
                      />
                    </span>
                    <span className="flex flex-col w-full">
                      <label htmlFor="bank">Deductions</label>
                      <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Please select"
                      />
                    </span>
                    <hr />
                    <p className="leading-tight font-semibold">+ Add Bonus</p>
                    <p className="leading-tight font-semibold">
                      + Add Deduction
                    </p>
                    <p className="leading-tight font-semibold">
                      + Add Expenses
                    </p>
                  </form>
                </>
              )}
              {activeTab === "summary" && (
                <>
                  <h1 className="font-medium text-gray-400 p-2"> Summary </h1>
                  <div className="p-4 space-y-4 mt-5">
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">Gross pay:</div>
                      <div className="leading-tight font-semibold">
                        &#8358;200,000
                      </div>
                    </span>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">Salary :</div>
                      <div className="leading-tight font-semibold">
                        &#8358;80,000
                      </div>
                    </span>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">Bonuse:</div>
                      <div className="leading-tight font-semibold text-green-500">
                        &#8358;30,000
                      </div>
                    </span>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">Transportation:</div>
                      <div className="leading-tight font-semibold text-red-500">
                        -&#8358;10,000
                      </div>
                    </span>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">Lunch Plan:</div>
                      <div className="leading-tight font-semibold text-red-500">
                        -&#8358;10,000
                      </div>
                    </span>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">Income Tax:</div>
                      <div className="leading-tight font-semibold text-red-500 break-words">
                        -&#8358;10,000
                      </div>
                    </span>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">Net pay:</div>
                      <div className="leading-tight font-semibold">
                        - &#8358;2,000
                      </div>
                    </span>
                    <div className="border border-gray-200"></div>
                  </div>
                  <div className="p-4 space-y-4 mt-5 items-center">
                    <p className="leading-tight font-semibold">
                      Employer Contribution
                    </p>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2">
                        Employer Pension:
                      </div>
                      <div className="leading-tight font-semibold">
                        &#8358;200,000
                      </div>
                    </span>
                    <span className="flex justify-between items-center">
                      <div className="text-slate-500 pr-2 text-center">
                        Employer Health:
                      </div>
                      <div className="leading-tight font-semibold">
                        &#8358;80,000
                      </div>
                    </span>
                  </div>
                  <div className="my-6 space-y-4">
                    <Button
                      type="primary"
                      onClick={() => setOpenDeleteModal(true)}
                      className="!h-[3rem] !bg-[#000] w-full text-white hover:!text-white"
                    >
                      Delete Member
                    </Button>
                    <Link
                      href={`/update-payroll-beneficiary`}
                      className="h-[3rem] bg-transparent w-full rounded-[5px] border border-solid border-[#000000] py-[12px] px-[24px] block text-center text-[16px] font-[500] text-[#000000] hover:text-[#000000]"
                    >
                      Edit Details
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      </Drawer>
      <DeleteMemberModal open={openDeleteModal} setOpen={setOpenDeleteModal} />
    </>
  );
};

export default DeatilsDrawe;
