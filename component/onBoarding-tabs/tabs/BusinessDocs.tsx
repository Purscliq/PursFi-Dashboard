import {
  CustomInput as Input,
  CustomUpload as Upload,
} from "@/lib/AntdComponents";
import LinkIcon from "@/assets/icon/LinkIcon";
const BusinessDocs = () => {
  return (
    <main>
      <span>
        <h2 className="text-black font-semibold mb-1">
          Please submit your business documentation
        </h2>
        <p className="text-sm">
          Ensure the business documentation you are submitting is valid
        </p>
      </span>
      <div className="flex flex-col bg-white w-full mt-4 p-3 rounded-md">
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Tax Identification Number{" "}
            </h2>
            <p className="text-sm">
              A Taxpayer Identification Number (TIN) is an identification number
              used by the Internal Revenue Service (IRS) in the administration
              of tax laws
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="text"
            >
              Tax Identification Number (TIN)
            </label>
            <Input id="text" type="text" placeholder="placeholder" />
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Certification Of Incorporation
            </h2>
            <p className="text-sm">
              A certificate of incorporation is a document given by the
              companies regulation agency of a country Note:(PDF,JPEG,PNG only).
              Limited 5mb
            </p>
          </div>{" "}
          <div className=" w-2/4">
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
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">
              Memorandum And Articles Of Association{" "}
            </h2>
            <p className="text-sm">
              A memorandum of association - a legal statement signed by all
              initial shareholders or guarantors agreeing to form the company.
              articles of association - written rules about running the company
              agreed by the shareholders Note:(PDF,JPEG,PNG only) Limited 5mb
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <div className="grid grid-cols-1 gap-[0.1rem] items-stretch">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Attach your memorandum and articles of association{" "}
              </label>
              <Upload className="">
                <span className="flex items-center gap-[0.2rem] justify-center stroke-[#515B6F] hover:stroke-[#000000]">
                  <LinkIcon className="stroke-inherit" />
                  <p className="text-sm font-semibold">
                    Attach Doc (PDF, Jpeg, PNG only) Limited 5mb
                  </p>
                </span>
              </Upload>
            </div>
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">Form CAC7 </h2>
            <p className="text-sm">
              The Corporate Affairs Commission (CAC) is the statutory body
              charged with the administration of the Companies and Allied
              Matters Act (the Act) which includes the regulation and
              supervision of the formation
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <div className="grid grid-cols-1 gap-[0.1rem] items-stretch">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Attach your cooperate affairs commission{" "}
              </label>
              <Upload className="">
                <span className="flex items-center gap-[0.2rem] justify-center stroke-[#515B6F] hover:stroke-[#000000]">
                  <LinkIcon className="stroke-inherit" />
                  <p className="text-sm font-semibold">Attach Doc</p>
                </span>
              </Upload>
            </div>
          </div>
        </article>
        <article className="flex flex-col md:flex-row space-x-14 p-2 border-b ">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">Utility Bills </h2>
            <p className="text-sm">
              A utility bill is a monthly statement of the amount a household or
              business owes for essential services or utilities
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <div className="grid grid-cols-1 gap-[0.1rem] items-stretch">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Attach your utility bills{" "}
              </label>
              <Upload className="">
                <span className="flex items-center gap-[0.2rem] justify-center stroke-[#515B6F] hover:stroke-[#000000]">
                  <LinkIcon className="stroke-inherit" />
                  <p className="text-sm font-semibold">Attach Doc</p>
                </span>
              </Upload>
            </div>
          </div>
        </article>
        <div className="mt-3 flex space-x-10">
          <div className="w-[30%]"></div>
          <div className="w-2/4">
            <button className="btn bg-Primary hover:bg-Primary border-none text-white capitalize w-full">
              Save and continue{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessDocs;
