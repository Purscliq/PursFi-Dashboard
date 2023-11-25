import {
  CustomInput as Input,
  CustomRadioGroup as RadioGroup,
  CustomDatePicker as DatePicker,
  CustomInputNumber as InputNumber,
  CustomButton as Button,
} from "@/lib/AntdComponents";

const employeeOptions = [
  {
    label: "Employee",
    value: "employee",
  },
  {
    label: "Contractor",
    value: "contractor",
  },
];
const AddMember = () => {
  return (
    <div className="flex flex-col p-[2%]">
      <header className="flex flex-col space-y-3 my-1 border-b border-[#D6DDEB] py-[2%]">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium">
              Add employees and contractors |{" "}
              <span className="text-gray-400">Add one</span>
            </h2>
          </span>
        </div>
      </header>
      <div className="bg-white rounded-[10px] flex flex-col p-[2%] gap-[1rem] w-[90%] mr-auto">
        <span className="grid grid-cols-[40%_60%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Select your option
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              is this an employee or a contractor.
            </p>
          </span>
          <RadioGroup
            className="!flex !flex-col gap-[0.5rem]"
            options={employeeOptions}
          />
        </span>
        <span className="grid grid-cols-[40%_60%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">Full Name</h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Sed purus gravida augue
              vulputate vel.
            </p>
          </span>
          <span className="flex items-start justify-between gap-2">
            <span className="flex flex-col gap-2 w-full">
              <label className="text-[#24272C]">First Name</label>
              <Input className="!w-full" placeholder="Enter your name" />
            </span>
            <span className="flex flex-col gap-2 w-full">
              <label className="text-[#24272C]">Last Name</label>
              <Input className="!w-full" placeholder="Enter your name" />
            </span>
          </span>
        </span>
        <span className="grid grid-cols-[40%_60%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">Email</h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Sed purus gravida augue
              vulputate vel.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Email
            </label>
            <Input className="!w-full" placeholder="Enter your name" />
          </span>
        </span>
        <span className="grid grid-cols-[40%_60%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">Hire Date</h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Sed purus gravida augue
              vulputate vel.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Hire Date
            </label>
            <DatePicker className="!w-full" placeholder="Hire Date" />
          </span>
        </span>
        <span className="grid grid-cols-[40%_60%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">Salary</h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Sed purus gravida augue
              vulputate vel.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Enter Salary
            </label>
            <InputNumber
              controls={false}
              className="!w-full"
              placeholder="salary"
            />
          </span>
        </span>
        <span className="grid grid-cols-[40%_60%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">Address</h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Sed purus gravida augue
              vulputate vel.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <span className="flex flex-col gap-2">
              <label className="text-[#24272C]">Address</label>
              <Input className="!w-full" placeholder="Enter your name" />
            </span>
            <span className="flex items-start gap-2 justify-between">
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C]">LGA</label>
                <Input className="!w-full" placeholder="Enter your name" />
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C]">State</label>
                <Input className="!w-full" placeholder="Enter your name" />
              </span>
            </span>
          </span>
        </span>
        <Button type="primary" className="!bg-black !w-[60%] self-end">
          save
        </Button>
      </div>
    </div>
  );
};

export default AddMember;
