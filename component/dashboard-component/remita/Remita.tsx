"use client";
import RemitaCable from "@/assets/icon/RemitaCable";
import RemitaIcon from "@/assets/icon/RemitaIcon";
import RemitaTsi from "@/assets/icon/RemitaTsi";
import RemitaWaec from "@/assets/icon/RemitaWaec";
import RemitaWater from "@/assets/icon/RemitaWater";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import { useRouter } from "next/navigation";

const Remita = () => {
  const date = new Date();
  const route = useRouter();
  const data = [
    {
      title: "Buy Electricity",
      route: "remita-electricity",
      icon: <RemitaIcon />,
    },
    {
      title: "Buy Cable Tv",
      route: "remita-cable",
      icon: <RemitaCable />,
    },
    {
      title: "Pay Water",
      route: "remita-water",
      icon: <RemitaWater />,
    },
    {
      title: "Pay TSA & States",
      route: "remita-tsa",
      icon: <RemitaTsi />,
    },
    {
      title: "Pay Taxes",
      route: "remita-taxes",
      icon: <RemitaIcon />,
    },
    {
      title: "Direct Debit",
      route: "remita-debit",
      icon: <RemitaWater />,
    },
    {
      title: "Buy WAEC",
      route: "remita-waec",
      icon: <RemitaWaec />,
    },
  ];
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col md:flex-row justify-between items-center mt-8">
        <span>
          <h2 className="text-3xl font-bold mb-1">
            {" "}
            Remita -{" "}
            <span className="text-2xl text-gray-400 font-medium">Biller</span>
          </h2>
          <p className="text-sm text-gray-600">
            Showing your Account metrics for{" "}
            {date.toLocaleString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </span>
        <div className="flex justify-center items-center space-x-5">
          <button className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case">
            + Quick Service
          </button>
          <Select
            className="!w-full !h-[2.5rem]"
            options={[
              { value: "1 month", label: "1 month" },
              { value: "2 month", label: "2 month" },
            ]}
            placeholder="Show stats Yearly"
          />
        </div>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.5em] items-center mt-8">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => route.push(item.route)}
            className="p-4 bg-white flex items-center space-x-6 justify-center cursor-pointer"
          >
            {item.icon}
            <p className="text-[18px]">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Remita;
