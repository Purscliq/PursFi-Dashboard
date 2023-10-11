import { CustomInput as Input } from "@/lib/AntdComponents";
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
      <div className="flex flex-col bg-white w-full mt-4 p-3">
        <article className="flex flex-col md:flex-row space-x-14 p-2">
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
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
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
            <div className="w-full space-y-2 font-Primary">
              <label className="block text-md font-medium font-Primary">
                Attach your certification of incorporation{" "}
              </label>
              <div className="w-full  p-6 border border-dashed border-blue-300 rounded-md flex flex-col items-center justify-center">
                <input
                  type="file"
                  id="fileInput"
                  accept=".pdf, .docx"
                  className="hidden"
                />
                <div className="flex items-center space-x-3 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3904_1007)">
                      <path
                        d="M14.9997 6.99996L8.4997 13.5C8.10188 13.8978 7.87838 14.4374 7.87838 15C7.87838 15.5626 8.10188 16.1021 8.4997 16.5C8.89753 16.8978 9.43709 17.1213 9.9997 17.1213C10.5623 17.1213 11.1019 16.8978 11.4997 16.5L17.9997 9.99996C18.7954 9.20432 19.2423 8.12518 19.2423 6.99996C19.2423 5.87475 18.7954 4.79561 17.9997 3.99996C17.2041 3.20432 16.1249 2.75732 14.9997 2.75732C13.8745 2.75732 12.7954 3.20432 11.9997 3.99996L5.4997 10.5C4.30623 11.6934 3.63574 13.3121 3.63574 15C3.63574 16.6878 4.30623 18.3065 5.4997 19.5C6.69318 20.6934 8.31188 21.3639 9.9997 21.3639C11.6875 21.3639 13.3062 20.6934 14.4997 19.5L20.9997 13"
                        stroke="#3180E7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3904_1007">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm font-semibold">
                    Attach Doc (PDF, Jpeg, PNG only) Limited 5mb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
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
            <div className="w-full space-y-2 font-Primary">
              <label className="block text-md font-medium font-Primary">
                Attach your memorandum and articles of association{" "}
              </label>
              <div className="w-full  p-6 border border-dashed border-blue-300 rounded-md flex flex-col items-center justify-center">
                <input
                  type="file"
                  id="fileInput"
                  accept=".pdf, .docx"
                  className="hidden"
                />
                <div className="flex items-center space-x-3 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3904_1007)">
                      <path
                        d="M14.9997 6.99996L8.4997 13.5C8.10188 13.8978 7.87838 14.4374 7.87838 15C7.87838 15.5626 8.10188 16.1021 8.4997 16.5C8.89753 16.8978 9.43709 17.1213 9.9997 17.1213C10.5623 17.1213 11.1019 16.8978 11.4997 16.5L17.9997 9.99996C18.7954 9.20432 19.2423 8.12518 19.2423 6.99996C19.2423 5.87475 18.7954 4.79561 17.9997 3.99996C17.2041 3.20432 16.1249 2.75732 14.9997 2.75732C13.8745 2.75732 12.7954 3.20432 11.9997 3.99996L5.4997 10.5C4.30623 11.6934 3.63574 13.3121 3.63574 15C3.63574 16.6878 4.30623 18.3065 5.4997 19.5C6.69318 20.6934 8.31188 21.3639 9.9997 21.3639C11.6875 21.3639 13.3062 20.6934 14.4997 19.5L20.9997 13"
                        stroke="#3180E7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3904_1007">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm font-semibold">
                    Attach Doc (PDF, Jpeg, PNG only) Limited 5mb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
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
            <div className="w-full space-y-2 font-Primary">
              <label className="block text-md font-medium font-Primary">
                Attach your cooperate affairs commission{" "}
              </label>
              <div className="w-full  p-6 border border-dashed border-blue-300 rounded-md flex flex-col items-center justify-center">
                <input
                  type="file"
                  id="fileInput"
                  accept=".pdf, .docx"
                  className="hidden"
                />
                <div className="flex items-center space-x-3 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3904_1007)">
                      <path
                        d="M14.9997 6.99996L8.4997 13.5C8.10188 13.8978 7.87838 14.4374 7.87838 15C7.87838 15.5626 8.10188 16.1021 8.4997 16.5C8.89753 16.8978 9.43709 17.1213 9.9997 17.1213C10.5623 17.1213 11.1019 16.8978 11.4997 16.5L17.9997 9.99996C18.7954 9.20432 19.2423 8.12518 19.2423 6.99996C19.2423 5.87475 18.7954 4.79561 17.9997 3.99996C17.2041 3.20432 16.1249 2.75732 14.9997 2.75732C13.8745 2.75732 12.7954 3.20432 11.9997 3.99996L5.4997 10.5C4.30623 11.6934 3.63574 13.3121 3.63574 15C3.63574 16.6878 4.30623 18.3065 5.4997 19.5C6.69318 20.6934 8.31188 21.3639 9.9997 21.3639C11.6875 21.3639 13.3062 20.6934 14.4997 19.5L20.9997 13"
                        stroke="#3180E7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3904_1007">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm font-semibold">Attach Doc</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
        <article className="flex flex-col md:flex-row space-x-14 p-2">
          <div className="w-[28%]">
            <h2 className="text-black font-semibold mb-1">Utility Bills </h2>
            <p className="text-sm">
              A utility bill is a monthly statement of the amount a household or
              business owes for essential services or utilities
            </p>
          </div>{" "}
          <div className=" w-2/4">
            <div className="w-full space-y-2 font-Primary">
              <label className="block text-md font-medium font-Primary">
                Attach your utility bills{" "}
              </label>
              <div className="w-full  p-6 border border-dashed border-blue-300 rounded-md flex flex-col items-center justify-center">
                <input
                  type="file"
                  id="fileInput"
                  accept=".pdf, .docx"
                  className="hidden"
                />
                <div className="flex items-center space-x-3 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3904_1007)">
                      <path
                        d="M14.9997 6.99996L8.4997 13.5C8.10188 13.8978 7.87838 14.4374 7.87838 15C7.87838 15.5626 8.10188 16.1021 8.4997 16.5C8.89753 16.8978 9.43709 17.1213 9.9997 17.1213C10.5623 17.1213 11.1019 16.8978 11.4997 16.5L17.9997 9.99996C18.7954 9.20432 19.2423 8.12518 19.2423 6.99996C19.2423 5.87475 18.7954 4.79561 17.9997 3.99996C17.2041 3.20432 16.1249 2.75732 14.9997 2.75732C13.8745 2.75732 12.7954 3.20432 11.9997 3.99996L5.4997 10.5C4.30623 11.6934 3.63574 13.3121 3.63574 15C3.63574 16.6878 4.30623 18.3065 5.4997 19.5C6.69318 20.6934 8.31188 21.3639 9.9997 21.3639C11.6875 21.3639 13.3062 20.6934 14.4997 19.5L20.9997 13"
                        stroke="#3180E7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3904_1007">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-sm font-semibold">Attach Doc</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className=" border border-b mt-2" />
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
