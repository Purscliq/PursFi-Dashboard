import { CustomSelect as Select } from "@/lib/AntdComponents";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  const date = new Date();
  return (
    <div className="mx-auto flex flex-col py-2 px-6 h-screen overflow-y-scroll">
      <header className="flex flex-col md:flex-row justify-between items-center my-6">
        <span>
          <h2 className="text-2xl font-medium">Transaction</h2>
          <p className="text-sm text-gray-600">
            Showing your Account metrics for July 19, 2021 - July 25, 2021
          </p>
        </span>
        <Select
          className="!w-full"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
          ]}
          placeholder="Show stats Yearly"
        />
      </header>
      <main className="grid grid-cols-1">
        <TransactionTable />
      </main>
    </div>
  );
};

export default Transactions;
