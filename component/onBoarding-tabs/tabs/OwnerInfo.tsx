import {
  CustomButton as Button,
  CustomInput as Input,
  CustomSelect as Select,
  CustomDatePicker as DatePicker,
  CustomUpload as Upload,
} from "@/lib/AntdComponents";
import DeleteIcon from "@/assets/icon/DeleteIcon";
import LinkIcon from "@/assets/icon/LinkIcon";

const gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
const OwnerInfo = () => {
  return (
    <main className="">
      <span className="flex flex-col">
        <h2 className="text-black font-semibold mb-1">
          Tell us about the Business Owner
        </h2>
        <p className="text-sm">
          This is Business Owner information that you can update anytime.
        </p>
      </span>
      <div className="flex flex-col bg-white w-full mt-4 p-3 rounded-md">
        <div className="flex flex-col md:flex-row justify-between items-start border-b py-2 border-[#D6DDEB]">
          <span>
            <h5 className="text-[#181336] text-[16px] font-[700]">
              Enter business Owner Details
            </h5>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Personal information of the business Owner(s)
            </p>
          </span>
          <Button type="primary" className="!w-fit !bg-[#000000] !p-[8px]">
            Add Business Owner
          </Button>
        </div>
        <div className="flex justify-end py-[0.5rem] mt-4">
          <DeleteIcon className="cursor-pointer" />
        </div>
        <div className="grid grid-cols-[40%_60%] justify-between items-start border-b border-[#D6DDEB] w-[90%]">
          <span>
            <h5 className="text-[#181336] text-[16px] font-[700]">
              Tell us your about business
            </h5>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              this most be the name on your registration Documentation.
            </p>
          </span>
          <form className="flex flex-col gap-[0.5rem]">
            <div className="flex flex-col gap-[0.1rem]">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                BVN
              </label>
              <span>
                <Input placeholder="BVN" />
                <p className="text-[#000000] text-[14px] font-[400]">
                  To get your BVN dial *565*0# on your registered mobile number.
                </p>
              </span>
            </div>
            <div className="flex items-center justify-between gap-[1.5rem]">
              <span>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Legal First name
                </label>
                <Input placeholder="First Name" />
              </span>
              <span>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Legal Last name
                </label>
                <Input placeholder="Last Name" />
              </span>
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number
              </label>
              <Input prefix="+234" placeholder="00 000 000" />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Gender
              </label>
              <Select options={gender} />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Date of Birth
              </label>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Nationality
              </label>
              <Select options={gender} />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Residential Address
              </label>
              <Input placeholder="2,oseni close..." />
            </div>
            <div className="flex items-center justify-between gap-[1.5rem]">
              <span className="flex flex-col w-full">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  From of ID
                </label>
                <Select
                  className="!w-full"
                  options={[
                    { label: "NIN", value: "NIN" },
                    { label: "Passport", value: "Passport" },
                    { label: "Driver license", value: "Driver license" },
                  ]}
                />
              </span>
              <span className="flex flex-col w-full">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  ID Number
                </label>
                <Input placeholder="Id Number" />
              </span>
            </div>
            <div className="grid grid-cols-1 gap-[0.1rem] items-stretch">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Upload ID
              </label>
              <Upload className="">
                <span className="flex items-center gap-[0.2rem] justify-center stroke-[#515B6F] hover:stroke-[#000000]">
                  <LinkIcon className="stroke-inherit" />
                  <p className="text-[#515B6F] text-[16px] font-[500]">
                    Attach Document
                  </p>
                </span>
              </Upload>
            </div>
            <div className="flex items-center gap-4 my-4">
              <Button
                className="!bg-[#000] !h-[3rem] !mx-auto w-[50%] "
                type="primary"
              >
                save
              </Button>
              <Button
                className="!bg-white !text-black !h-[3rem] !mx-auto w-[50%] "
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default OwnerInfo;
