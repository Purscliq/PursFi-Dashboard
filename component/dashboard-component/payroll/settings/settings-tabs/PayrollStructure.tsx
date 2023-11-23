import CheckIcon from "@/assets/icon/CheckIcon";
import {
  CustomRadioGroup as RadioGroup,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { useState } from "react";
import StructureTable from "./StructureTable";

const payrollOptions = [
  { label: "Automatically run Payroll on selected date", value: true },
  { label: "Manually run Payroll on selected date", value: false },
];
interface DataType {
  key: React.Key;
  name: string;
  percentage: number;
  tax: string;
}
const PayrollStructure = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 0,
      name: "Base Salary",
      percentage: 50,
      tax: "Yes",
    },
    {
      key: 1,
      name: "HRA",
      percentage: 25,
      tax: "Yes",
    },
    {
      key: 2,
      name: "LTA",
      percentage: 15,
      tax: "Yes",
    },
    {
      key: 3,
      name: "Special Allowance",
      percentage: 10,
      tax: "Yes",
    },
  ]);
  return (
    <div className="p-[2%] bg-white flex flex-col gap-[1rem]">
      <span className="w-full grid grid-cols-[40%_55%] items-center justify-between gap-[5%]">
        <span>
          <h6 className="text-[#181336] text-[16px] font-[700]">
            Default Salary Structure
          </h6>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can decide when to pay your employees.for example, if you choose
            January 31, your employees will be paid on January 31st. If you
            choose option 1, your employees will be paid for January on February
            1st.
          </p>
        </span>
        <span className="flex flex-col gap-[0.5rem]">
          <span className="text-[#181336] text-[16px] font-[700] flex items-center justify-between gap-1">
            <CheckIcon className="w-[20px]" />
            <p>
              You can change the salary structure that Pursbusiness employs by
              default for your employees.
            </p>
          </span>
          <span className="text-[#181336] text-[16px] font-[700] flex items-center justify-between gap-1">
            <CheckIcon className="w-[20px]" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Enim ut vel diam sociis et
              cras amet. A turpis massa eu tortor facilisi vel facilisis eros.
            </p>
          </span>
        </span>
      </span>
      <span className="w-full grid grid-cols-[40%_55%] items-start justify-between gap-[5%]">
        <span>
          <h6 className="text-[#181336] text-[16px] font-[700]">
            Select your Option
          </h6>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can either manually request execution each month before the
            paycheck is executed, or Pursbusiness can execute your payroll
            automatically on the date you choose.
          </p>
        </span>
        <span className="flex flex-col gap-[0.5rem]">
          {/* <RadioGroup className="!flex !flex-col" options={payrollOptions} /> */}
          <StructureTable
            dataSource={dataSource}
            setDataSource={setDataSource}
          />
        </span>
      </span>
      <Button type="primary" className="!bg-black !ml-auto !w-[55%] self-end">
        save
      </Button>
    </div>
  );
};

export default PayrollStructure;
