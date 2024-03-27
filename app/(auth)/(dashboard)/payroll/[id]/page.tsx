import React from "react";
import Details from "@/component/dashboard-component/payroll2/overview/details/Details";

const page = ({ params }: { params: { id: string } }) => {
  return <Details id={params?.id} />;
};

export default page;
