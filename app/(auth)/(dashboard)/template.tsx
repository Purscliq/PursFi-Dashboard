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
        <div className="h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </>
  );
};

export default Template;
