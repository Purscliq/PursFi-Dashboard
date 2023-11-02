"use client";
import DashboardLayout from "@/component/layout/dashboard-layout/DashboardLayout";
import { useBusinessProfileQuery } from "@/services/authService";

const Template = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useBusinessProfileQuery({});
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <DashboardLayout>{children}</DashboardLayout>
        </>
      )}
    </>
  );
};

export default Template;
