import AddMember from "@/component/dashboard-component/payroll/AddMember";

const page = ({ params }: { params: { id: number } }) => {
  return <AddMember id={params?.id} />;
};

export default page;
