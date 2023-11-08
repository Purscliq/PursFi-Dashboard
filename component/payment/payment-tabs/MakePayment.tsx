import {
  CustomSelect as Select,
  CustomInput as Input,
} from "@/lib/AntdComponents";

const MakePayment = () => {
  return (
    <div className="grid grid-cols-1">
      <span className="flex items-center justify-between">
        <span className="flex flex-col">
          <label htmlFor="bank">Select bank account to pay from</label>
          <Select id="bank" options={[]} />
        </span>
        <span className="flex flex-col">
          <label htmlFor="bank">Account Number</label>
          <Input placeholder="" />
        </span>
      </span>
      <span className="flex items-center justify-between">
        <span className="flex flex-col">
          <label htmlFor="bank">Bank Name</label>
          <Select id="bank" options={[]} />
        </span>
        <span className="flex flex-col">
          <label htmlFor="bank">Amount</label>
          <Input placeholder="" />
        </span>
      </span>
    </div>
  );
};

export default MakePayment;
