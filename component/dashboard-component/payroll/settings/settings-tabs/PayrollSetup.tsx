import {
  CustomRadioGroup as RadioGroup,
  CustomDatePicker as DatePicker,
  CustomButton as Button,
} from "@/lib/AntdComponents";

const payrollOptions = [
  { label: "Automatically run Payroll on selected date", value: true },
  { label: "Manually run Payroll on selected date", value: false },
];
const PayrollSetup = () => {
  return (
    <div className="p-[2%] flex flex-col gap-[1rem]">
      <span className="w-full grid grid-cols-[40%_55%] gap-[5%] items-start justify-between">
        <label>
          <h6 className="text-[#181336] text-[16px] font-[700]">
            Select your payroll date
          </h6>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can decide when to pay your employees.for example, if you choose
            January 31, your employees will be paid on January 31st. If you
            choose option 1, your employees will be paid for January on February
            1st.
          </p>
        </label>
        <DatePicker className="w-full" picker="date" />
      </span>
      <span className="w-full grid grid-cols-[40%_55%] gap-[5%] items-start justify-between">
        <label>
          <h6 className="text-[#181336] text-[16px] font-[700]">
            Select your Option
          </h6>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can either manually request execution each month before the
            paycheck is executed, or Pursbusiness can execute your payroll
            automatically on the date you choose.
          </p>
        </label>
        <RadioGroup
          className="!flex !flex-col !gap-[1rem]"
          options={payrollOptions}
        />
      </span>
      <Button type="primary" className="!bg-black !ml-auto !w-[55%] self-end">
        save
      </Button>
    </div>
  );
};

export default PayrollSetup;
