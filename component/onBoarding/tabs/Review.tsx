import {
  CustomCheckBox as CheckBox,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import FileIcon from "@/assets/icon/FileIcon";

const Review = () => {
  return (
    <main>
      <span className="flex flex-col">
        <h5 className="text-[#181336] text-[18px] font-[700]">
          Review your Application
        </h5>
        <p className="text-[#515B6F] text-[16px] font-[400]">
          this is the final look at your application. Make sure you met all the
          registration requirement.
        </p>
      </span>
      <div className="bg-white rounded-[10px] px-[20px] py-[24px] grid grid-cols-1 gap-[0.5rem]">
        <div className="rounded-[5px] border border-[#E9EBEB] bg-[#FFF] items-center justify-between grid grid-cols-[10%_90%] px-[20px] py-[25px]">
          <FileIcon />
          <span className="flex flex-col gap-[0.2rem]">
            <h5 className="text-[#181336] text-[18px] font-[500]">
              Company Information
            </h5>
            <p className="text-[#515B6F] text-[16px] font-[400[">
              Personal information of the business Owner(s)
            </p>
          </span>
        </div>
        <div className="rounded-[5px] border border-[#E9EBEB] bg-[#FFF] items-center justify-between grid grid-cols-[10%_90%] px-[20px] py-[25px]">
          <FileIcon />
          <span className="flex flex-col gap-[0.2rem]">
            <h5 className="text-[#181336] text-[18px] font-[500]">
              Owner Information
            </h5>
            <p className="text-[#515B6F] text-[16px] font-[400[">
              Personal information of the business Owner(s)
            </p>
          </span>
        </div>
        <div className="rounded-[5px] border border-[#E9EBEB] bg-[#FFF] items-center justify-between grid grid-cols-[10%_90%] px-[20px] py-[25px]">
          <FileIcon />
          <span className="flex flex-col gap-[0.2rem]">
            <h5 className="text-[#181336] text-[18px] font-[500]">
              Business Documentation
            </h5>
            <p className="text-[#515B6F] text-[16px] font-[400[">
              Personal information of the business Owner(s)
            </p>
          </span>
        </div>
        <span className="flex items-center gap-[0.2rem]">
          <CheckBox id="check" />
          <label htmlFor="check">
            I Confirm tis information provide Are Accurate and legit
          </label>
        </span>
        <Button
          className="!bg-[#000] !h-[3rem] !mx-auto w-[50%]"
          type="primary"
        >
          Submit Application
        </Button>
      </div>
    </main>
  );
};

export default Review;
