import DashboardLayout from "@/component/layout/dashboard-layout/DashboardLayout";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default template;
