"use client";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import { useRouter } from "next/navigation";

const AirtimeBundle = () => {
  const { push } = useRouter();
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-6">
        <div className="flex items-center justify-between ">
          <span>
            okY
          </span>
          <div className="flex justify-end items-center space-x-5">
            <button
              onClick={() => push("/quick-service")}
              className="btn btn-md border flex items-center bg-[#000] text-sm normal-case text-white hover:bg-[#000]"
            >
              + Quick Service
            </button>
            <Select
              className="!w-full !h-[3rem]"
              options={[
                { value: "1 month", label: "1 month" },
                { value: "2 month", label: "2 month" },
              ]}
              placeholder="Show stats Yearly"
            />
          </div>
        </div>
      </header>{" "}
      <div>AirtimeBundle</div>
    </div>
  );
};

export default AirtimeBundle;
