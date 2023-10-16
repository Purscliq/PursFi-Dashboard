import {
  CustomCheckBox as CheckBox,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import FileIcon from "@/assets/icon/FileIcon";

const Review = () => {
  return (
    <main>
      <span className="flex flex-col">
        <h2 className="text-black font-semibold mb-1">
          Review your Application
        </h2>
        <p className="text-sm">
          this is the final look at your application. Make sure you met all the
          registration requirement.{" "}
        </p>
      </span>
      <div className="flex flex-col bg-white w-full mt-4 p-3 rounded-md">
        <div className="rounded-[5px] border border-[#E9EBEB] bg-[#FFF] items-center justify-between grid grid-cols-[10%_90%] px-[20px] py-[25px]">
          <FileIcon />
          <span className="flex flex-col gap-[0.2rem]">
            <h2 className="text-black font-semibold mb-1">
              Company Information
            </h2>
            <p className="text-sm">
              Personal information of the business Owner(s)
            </p>
          </span>
        </div>
        <div className="rounded-[5px] border border-[#E9EBEB] bg-[#FFF] items-center justify-between grid grid-cols-[10%_90%] px-[20px] py-[25px]">
          <FileIcon />
          <span className="flex flex-col gap-[0.2rem]">
            <h2 className="text-black font-semibold mb-1">
            Owner Information
            </h2>
            <p className="text-sm">
              Personal information of the business Owner(s)
            </p>
          </span>
        </div>
        <div className="rounded-[5px] border border-[#E9EBEB] bg-[#FFF] items-center justify-between grid grid-cols-[10%_90%] px-[20px] py-[25px]">
          <FileIcon />
          <span className="flex flex-col gap-[0.2rem]">
            <h2 className="text-black font-semibold mb-1">
            Owner Information
            </h2>
            <p className="text-sm">
              Personal information of the business Owner(s)
            </p>
          </span>
        </div>
        <span className="flex items-center gap-[0.5rem]">
          <CheckBox id="check" />
          <label htmlFor="check">
            I Confirm tis information provide Are Accurate and legit
          </label>
        </span>
        <Button
          className="!bg-[#000] !h-[3rem] !mx-auto w-[50%] !mt-4"
          type="primary"
        >
          Submit Application
        </Button>
      </div>
    </main>
  );
};

export default Review;
