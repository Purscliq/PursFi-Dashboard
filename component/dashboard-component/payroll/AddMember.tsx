"use client";
import {
  CustomInput as Input,
  CustomRadioGroup as RadioGroup,
  CustomDatePicker as DatePicker,
  CustomInputNumber as InputNumber,
  CustomButton as Button,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import {
  useCreateBeneficiariesMutation,
  useGetPayrollQuery,
} from "@/services/payrollService";
import { RadioChangeEvent, message } from "antd";
import { useState, ChangeEventHandler, FormEventHandler } from "react";

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
const salary: any = "";
const initialState = {
  email: "",
  employmentType: "",
  firstName: "",
  lastName: "",
  hireDate: "",
  salary,
  address: "",
  lga: "",
  state: "",
  phone: "",
  accountNumber: "",
  bankCode: "",
  bankName: "",
  single: true,
  businessId: "",
  reference: "",
};
const AddMember = () => {
  const { data } = useGetPayrollQuery({});
  const [createBeneficiary, { isLoading }] = useCreateBeneficiariesMutation();
  const [formData, setFormData] = useState(initialState);
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (formData.employmentType && formData.hireDate) {
      createBeneficiary(formData)
        .unwrap()
        .then((res) => {
          console.log(res);
          message.success("beneficiary created successfully");
          setFormData(initialState);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
      <form
        onSubmit={onFormSubmit}
        className="bg-white rounded-[10px] flex flex-col p-[2%] gap-[1rem] w-[90%] mr-auto"
      >
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
            value={formData.employmentType}
            onChange={(e: RadioChangeEvent) => {
              setFormData((prev) => ({
                ...prev,
                employmentType: e.target.value,
              }));
            }}
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
              <Input
                name="firstName"
                value={formData.firstName}
                className="!w-full"
                placeholder="Enter your name"
                required
                onChange={onInputChange}
              />
            </span>
            <span className="flex flex-col gap-2 w-full">
              <label className="text-[#24272C]">Last Name</label>
              <Input
                name="lastName"
                required
                onChange={onInputChange}
                value={formData.lastName}
                className="!w-full"
                placeholder="Enter your name"
              />
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
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              required
              className="!w-full"
              placeholder="Enter your name"
            />
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
            <DatePicker
              onChange={(_, date) => {
                setFormData((prev) => ({ ...prev, hireDate: date }));
              }}
              className="!w-full"
              placeholder="Hire Date"
            />
          </span>
        </span>
        <span className="grid grid-cols-[40%_60%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Select Payroll
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Lorem ipsum dolor sit amet consectetur. Sed purus gravida augue
              vulputate vel.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Payroll
            </label>
            <Select />
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
              value={formData.salary}
              className="!w-full"
              placeholder="salary"
              required
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, salary: e }));
              }}
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
              <Input
                value={formData.address}
                name="address"
                onChange={onInputChange}
                required
                className="!w-full"
                placeholder="Enter your address"
              />
            </span>
            <span className="flex items-start gap-2 justify-between">
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C]">LGA</label>
                <Input
                  name="lga"
                  value={formData.lga}
                  onChange={onInputChange}
                  className="!w-full"
                  placeholder="Enter your name"
                />
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C]">State</label>
                <Input
                  name="state"
                  value={formData.state}
                  onChange={onInputChange}
                  className="!w-full"
                  placeholder="Enter state"
                />
              </span>
            </span>
          </span>
        </span>
        <Button
          htmlType="submit"
          loading={isLoading}
          type="primary"
          className="!bg-black !w-[60%] self-end"
        >
          save
        </Button>
      </form>
    </div>
  );
};

export default AddMember;
