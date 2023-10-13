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
        <h5 className="text-[#181336] text-[18px] font-[700]">
          Tell us about the Business Owner
        </h5>
        <p className="text-[#515B6F] text-[16px] font-[400]">
          This is Business Owner information that you can update anytime.
        </p>
      </span>
      <div className="bg-white rounded-[10px] px-[20px] py-[24px] grid grid-cols-1">
        <div className="grid grid-cols-[30%_70%] gap-[5%] justify-between items-start border-b border-[#D6DDEB]">
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
        <div className="flex justify-end py-[0.5rem]">
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
              <label className="text-[#181336] text-[16px] font-[700]">
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
                <label className="text-[#181336] text-[16px] font-[700]">
                  Legal First name
                </label>
                <Input placeholder="First Name" />
              </span>
              <span>
                <label className="text-[#181336] text-[16px] font-[700]">
                  Legal Last name
                </label>
                <Input placeholder="Last Name" />
              </span>
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="text-[#181336] text-[16px] font-[700]">
                Phone Number
              </label>
              <Input prefix="+234" placeholder="00 000 000" />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="text-[#181336] text-[16px] font-[700]">
                Gender
              </label>
              <Select options={gender} />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="text-[#181336] text-[16px] font-[700]">
                Date of Birth
              </label>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="text-[#181336] text-[16px] font-[700]">
                Nationality
              </label>
              <Select options={gender} />
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <label className="text-[#181336] text-[16px] font-[700]">
                Residential Address
              </label>
              <Select options={gender} />
            </div>
            <div className="flex items-center justify-between gap-[1.5rem]">
              <span className="flex flex-col w-full">
                <label className="text-[#181336] text-[16px] font-[700]">
                  From of ID
                </label>
                <Select className="!w-full" options={gender} />
              </span>
              <span className="flex flex-col w-full">
                <label className="text-[#181336] text-[16px] font-[700]">
                  ID Number
                </label>
                <Input placeholder="Last Name" />
              </span>
            </div>
            <div className="grid grid-cols-1 gap-[0.1rem] items-stretch">
              <label className="text-[#181336] text-[16px] font-[700]">
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
            <Button
              className="!bg-[#0000] !p-[8px] !my-[0.2rem]"
              type="primary"
            >
              save
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default OwnerInfo;
