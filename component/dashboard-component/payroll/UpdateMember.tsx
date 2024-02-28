"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CustomInput as Input,
  CustomRadioGroup as RadioGroup,
  CustomDatePicker as DatePicker,
  CustomInputNumber as InputNumber,
  CustomButton as Button,
  CustomSelect as Select,
  CustomSpinner as Spinner,
} from "@/lib/AntdComponents";
import {
  useGetPayrollQuery,
  useUpdateBeneficiaryMutation,
  useLazyGetSingleBeneficiaryQuery,
} from "@/services/payrollService";
import { useGetBanksQuery } from "@/services/disbursementService";
import { useVerifyAccountMutation } from "@/services/disbursementService";
import { RadioChangeEvent, message } from "antd";
import {
  useState,
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
} from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import dayjs from "dayjs";

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
  accountNumber: "",
  bankCode: "",
  bankName: "",
  single: true,
  businessId: "",
  reference: "",
  phone: "",
};
const UpdateMember = () => {
  const { back } = useRouter();
  const params = useSearchParams();
  const { data } = useGetBanksQuery({});
  const [verify, { isLoading: isVerifying }] = useVerifyAccountMutation();
  const { data: payroll } = useGetPayrollQuery({});
  const [getBeneficiary, { isLoading: isLoadingBeneficiary }] =
    useLazyGetSingleBeneficiaryQuery();
  const [updateBeneficiary, { isLoading }] = useUpdateBeneficiaryMutation();
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (params.get("id")) {
      getBeneficiary(params.get("id") as string)
        .then((res) => {
          setFormData({
            ...res.data.data,
          });
        })
        .catch((err) => {
          message.error(
            err?.data?.responseDescription ||
              "error getting beneficiary details"
          );
          back();
        });
    }
  }, [params]);
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!formData?.phone) {
      message.error("please provide phone field");
      return;
    }
    if (formData.employmentType && formData.hireDate) {
      updateBeneficiary({ ...formData, salary: formData.salary.toString() })
        .unwrap()
        .then((res) => {
          console.log(res);
          message.success("beneficiary created successfully");
          setFormData(initialState);
          back();
        })
        .catch((err) => {
          const errors = Object.keys(err?.data?.errors).join(", ");
          message.error(
            `please provide ${errors} field` || "something went wrong"
          );
        });
    }
  };
  useEffect(() => {
    if (formData?.accountNumber?.length === 10 && formData?.bankCode)
      verify({
        accountNumber: formData.accountNumber,
        bankCode: formData.bankCode,
        currency: "NGN",
      })
        .unwrap()
        .then((res) => {
          setFormData((prev) => ({ ...prev, bankName: res?.data?.data }));
        })
        .catch((err) => {
          message.error(
            err?.data?.responseDescription || "something went wrong"
          );
        });
  }, [
    JSON.stringify(formData?.accountNumber),
    JSON.stringify(formData?.bankCode),
  ]);
  return (
    <div className="relative flex flex-col px-[2%] w-[95%] mx-auto">
      <header className="flex flex-col space-y-3 my-1 border-b border-[#D6DDEB] py-[2%]">
        <div className="flex items-center justify-between ">
          <span className="text-2xl font-medium flex gap-1 items-center">
            <GrFormPreviousLink className="cursor-pointer" onClick={back} />
            <span>
              <h2 className="text-2xl font-medium">
                Update employee details{" "}
                <span className="text-gray-400">Add one</span>
              </h2>
            </span>
          </span>
        </div>
      </header>
      <form
        onSubmit={onFormSubmit}
        className="bg-white rounded-[10px] flex flex-col p-[2%] gap-[1rem] w[90%] mxauto relative overflow-x-hidden"
      >
        {isVerifying ||
          (isLoadingBeneficiary && (
            <div className="flex items-center justify-center h-full w-full absolute opacity-[0.7] bg-gray-100 z-[100]">
              <Spinner className="!m-auto !block" />
            </div>
          ))}
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Employment Status
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Indicate whether an Employee or Contractor{" "}
            </p>
          </span>
          <RadioGroup
            className="!flex !flex-col gap-[0.5rem]"
            options={employeeOptions}
            value={formData?.employmentType}
            onChange={(e: RadioChangeEvent) => {
              setFormData((prev) => ({
                ...prev,
                employmentType: e.target.value,
              }));
            }}
          />
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">Full Name</h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Please Enter Employee Full Name for Payroll Processing
            </p>
          </span>
          <span className="flex items-start justify-between gap-2">
            <span className="flex flex-col gap-2 w-full">
              <label className="text-[#24272C] text-[16px] font-[700]">
                First Name
              </label>
              <Input
                name="firstName"
                value={formData?.firstName}
                className="!w-full"
                placeholder="Enter your name"
                required
                onChange={onInputChange}
              />
            </span>
            <span className="flex flex-col gap-2 w-full">
              <label className="text-[#24272C] text-[16px] font-[700]">
                Last Name
              </label>
              <Input
                name="lastName"
                required
                onChange={onInputChange}
                value={formData?.lastName}
                className="!w-full"
                placeholder="Enter your name"
              />
            </span>
          </span>
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Email Address
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Provide a Valid Email for Payroll Notifications and Updates.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData?.email}
              onChange={onInputChange}
              required
              className="!w-full"
              placeholder="Enter your name"
            />
          </span>
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Account Details
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Securely Enter Employees Necessary Bank Account Information
            </p>
          </span>
          <span className="flex flex-col gap-4">
            <span className="flex items-start justify-between gap-3">
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C] text-[16px] font-[700]">
                  Select Bank
                </label>
                <Select
                  showSearch
                  placeholder="select bank"
                  optionFilterProp="label"
                  onSelect={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      bankCode: value,
                    }))
                  }
                  value={
                    data?.find(
                      (e: Record<string, any>) => e.value === formData?.bankCode
                    )?.label || ""
                  }
                  id="bank"
                  options={Array.isArray(data) ? data : []}
                />
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C] text-[16px] font-[700]">
                  Account Number
                </label>
                <Input
                  onChange={onInputChange}
                  name="accountNumber"
                  maxLength={10}
                  minLength={10}
                  value={formData?.accountNumber}
                  required
                  type="number"
                  className="!w-full"
                  placeholder=""
                />
              </span>
            </span>
            <Input disabled value={formData?.bankName} />
          </span>
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">Hire Date</h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Please Specify Employee Joining Date with the Company.
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
              value={dayjs(formData?.hireDate)}
            />
          </span>
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Select Payroll
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Choose Payroll Preferences for Customized Payments
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Payroll
            </label>
            <Select
              value={formData?.reference}
              onSelect={(value) =>
                setFormData((prev) => ({ ...prev, reference: value }))
              }
              options={Array.isArray(payroll) ? payroll : []}
            />
          </span>
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Phone Number
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Enter Employee Contact Number for Communication and Updates
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Phone
            </label>
            <PhoneInput
              country={"ng"}
              disableDropdown
              disableCountryCode
              containerClass="!w-full"
              inputClass="phone-input-input !w-full"
              value={formData?.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value }))
              }
            />
          </span>
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Salary Information
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Please Provide Details of Your Compensation
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <label className="text-[#24272C] text-[16px] font-[700]">
              Enter Salary
            </label>
            <InputNumber
              controls={false}
              value={formData?.salary}
              className="!w-full"
              placeholder="salary"
              required
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, salary: e }));
              }}
            />
          </span>
        </span>
        <span className="grid grid-cols-[40%_50%] gap-[10%]">
          <span className="flex flex-col gap-1">
            <h6 className="text-[#181336] text-[16px] font-[700]">
              Address Details
            </h6>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Enter Employee Current Residence Information
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <span className="flex flex-col gap-2">
              <label className="text-[#24272C] text-[16px] font-[700]">
                Address
              </label>
              <Input
                value={formData?.address}
                name="address"
                onChange={onInputChange}
                required
                className="!w-full"
                placeholder="Enter your address"
              />
            </span>
            <span className="flex items-start gap-2 justify-between">
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C] text-[16px] font-[700]">
                  LGA
                </label>
                <Input
                  name="lga"
                  value={formData?.lga}
                  onChange={onInputChange}
                  className="!w-full"
                  placeholder="Enter your name"
                />
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[#24272C] text-[16px] font-[700]">
                  State
                </label>
                <Input
                  name="state"
                  value={formData?.state}
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
          className="!bg-black !w-[50%] self-end"
        >
          save
        </Button>
      </form>
    </div>
  );
};

export default UpdateMember;
