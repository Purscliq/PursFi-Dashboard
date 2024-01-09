import { Drawer } from "antd";
import {
  CustomButton as Button,
  CustomSpinner as Spinner,
} from "@/lib/AntdComponents";
import { useLazyGetSingleTransactionQuery } from "@/services/transactionService";
import { useEffect } from "react";
interface AccountDetailsProps {
  Open: boolean;
  onClose: () => void;
  id: string;
}

const AccountDrawal: React.FC<AccountDetailsProps> = ({
  Open,
  onClose,
  id,
}) => {
  const getAmountColorClass = (type: string) => {
    if (type === "debit") {
      return "text-red-500";
    } else {
      return "text-green-500";
    }
  };
  const [getTransaction, { isLoading, data }] =
    useLazyGetSingleTransactionQuery();
  useEffect(() => {
    if (id)
      getTransaction(id)
        .unwrap()
        .then((res) => {})
        .catch((err) => {});
  }, [id]);

  return (
    <Drawer
      placement="right"
      className="!relative"
      onClose={onClose}
      open={Open}
    >
      <>
        {isLoading ? (
          <div className="flex items-center justify-center h-[80vh] w-full absolute opacity-[0.7] bg-gray-100 z-[100]">
            <Spinner className="!m-auto !block" />
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center  h-[120px]">
              <h1
                className={`leading-tight font-semibold text-3xl ${getAmountColorClass(
                  data?.data?.transactionType
                )}`}
              >
                {data?.data?.transactionType === "debit" ? "-" : "+"}
                {data?.data?.amount}
              </h1>
              <p className="text-slate-700 mt-3 uppercase">
                {data?.data?.accountName}
              </p>
            </div>
            <h1 className="font-bold p-2">Transaction Information</h1>
            <div className="p-4 border border-gray-100 space-y-4 mt-5">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="text-slate-500 pr-2">Amount :</div>
                <div className="leading-tight font-semibold">
                  {data?.data?.amount}
                </div>
                <div className="text-slate-500 pr-2">Date:</div>
                <div className="leading-tight font-semibold">
                  {new Date(data?.data?.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </div>
                <div className="text-slate-500 pr-2">Counter party:</div>
                <div className="leading-tight font-semibold">
                  {data?.data?.accountName}
                </div>{" "}
                <div className="text-slate-500 pr-2">Bank Name:</div>
                <div className="leading-tight font-semibold">
                  {data?.data?.bankName}
                </div>
                <div className="text-slate-500 pr-2">Account Number:</div>
                <div className="leading-tight font-semibold">
                  {data?.data?.accountNumber}
                </div>
                <div className="text-slate-500 pr-2">Source:</div>
                <div className="leading-tight font-semibold">
                  PurFinance main account{" "}
                </div>
              </div>
              <div className="border border-gray-200"></div>
            </div>
            <span className="mt-6">
              <p className="font-semibold">Transaction Memo</p>
              <p className="text-slate-500 text-md">{`${data?.data?.domain} transaction`}</p>
            </span>
            <div className="my-6 space-y-4">
              {/* <Button
                type="primary"
                className="!h-[3rem] !bg-[#000] w-full text-white hover:!text-white"
              >
                Download Reciept
              </Button>
              <Button className="!h-[3rem] !bg-transparent w-full">
                Report Transaction
              </Button> */}
            </div>
          </>
        )}
      </>
    </Drawer>
  );
};

export default AccountDrawal;
