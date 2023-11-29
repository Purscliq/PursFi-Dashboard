"use client";
import DashboardLayout from "@/component/layout/dashboard-layout/DashboardLayout";
import {
  useGetTransactionStatusQuery,
  useGetExpensesQuery,
} from "@/services/transactionService";
import {
  useGetWalletQuery,
  useGetWalletHistoryQuery,
} from "@/services/walletService";
import logo from "@/assets/logo.svg";
import Image from "next/image";
const Template = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useGetWalletHistoryQuery({});
  const { isLoading: isFetchingWallet } = useGetWalletQuery({});
  const { isLoading: isFetchingTransactionStatus } =
    useGetTransactionStatusQuery("");
  const { isLoading: isFetchingExpenses } = useGetExpensesQuery({});
  return (
    <>
      {isLoading &&
      isFetchingExpenses &&
      isFetchingTransactionStatus &&
      isFetchingWallet ? (
        <div className="relative h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="fixed top-0 left-0 px-6 py-4">
            <Image src={logo} alt="logo" className="w-28 h-28" />
          </div>

          {/* Black blur overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-50" />

          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin z-50" />
        </div>
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </>
  );
};

export default Template;
