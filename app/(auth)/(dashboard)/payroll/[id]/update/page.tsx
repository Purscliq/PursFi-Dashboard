import UpdatePayrollSettings from "@/component/dashboard-component/payroll/settings/UpdatePayrollSettings";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <UpdatePayrollSettings id={params?.id} />;
};

export default page;
