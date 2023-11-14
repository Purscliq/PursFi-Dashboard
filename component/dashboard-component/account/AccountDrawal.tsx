import { Drawer } from "antd";
import { DataType } from "./AccountTable";
import { CustomButton as Button } from "@/lib/AntdComponents";
interface AccountDetailsProps {
  Open: boolean;
  onClose: () => void;
  account: DataType | null;
}

const AccountDrawal: React.FC<AccountDetailsProps> = ({
  Open,
  onClose,
  account,
}) => {
  const getAmountColorClass = (type: string) => {
    if (type === "Debit") {
      return "text-red-500";
    } else {
      return "text-green-500";
    }
  };

  return (
    <Drawer placement="right" onClose={onClose} open={Open}>
      {account && (
        <>
          <div className="flex flex-col justify-center items-center  h-[120px]">
            <h1
              className={`leading-tight font-semibold text-3xl ${getAmountColorClass(
                account.type
              )}`}
            >
              {account.amount}
            </h1>
            <p className="text-slate-700 mt-3">{account.name}</p>
          </div>
          <h1 className="font-bold p-2">Transaction Information</h1>
          <div className="p-4 border border-gray-100 space-y-4 mt-5">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="text-slate-500 pr-2">Amount :</div>
              <div className="leading-tight font-semibold">
                {account.amount}
              </div>
              <div className="text-slate-500 pr-2">Date:</div>
              <div className="leading-tight font-semibold">{account.date}</div>
              <div className="text-slate-500 pr-2">Counter party:</div>
              <div className="leading-tight font-semibold">
                {account.name}
              </div>{" "}
              <div className="text-slate-500 pr-2">Bank Name:</div>
              <div className="leading-tight font-semibold">First Bank </div>
              <div className="text-slate-500 pr-2">Account Number:</div>
              <div className="leading-tight font-semibold">0378392849244 </div>
              <div className="text-slate-500 pr-2">Source:</div>
              <div className="leading-tight font-semibold">
                PurBusness main account{" "}
              </div>
            </div>
            <div className="border border-gray-200"></div>
          </div>
          <span className="mt-6">
            <p className="font-semibold">Transaction Memo</p>
            <p className="text-slate-500 text-md">{`${account.type} transaction`}</p>
          </span>
          <div className="my-6 space-y-4">
            <Button className="!h-[3rem] !bg-Primary w-full text-white hover:!text-white">
              Download Reciept
            </Button>
            <Button className="!h-[3rem] !bg-transparent w-full">
              Report Reciept{" "}
            </Button>
          </div>
        </>
      )}
    </Drawer>
  );
};

export default AccountDrawal;
