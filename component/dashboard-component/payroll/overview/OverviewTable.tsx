import TableIcon from "@/assets/icon/TableIcon";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import Table, { ColumnsType } from "antd/es/table";
interface DataType {
  fullname: string;
  email: string;
  role: string;
  activity: string;
  status: string;
}

const memberData: DataType[] = [
  {
    fullname: "Samuel Woodfree",
    email: "samuel@email.com",
    role: "Operation Manager",
    activity: "13th December 2020",
    status: "Active",
  },
  {
    fullname: "Samuel Woodfree",
    email: "samuel@email.com",
    role: "Operation Manager",
    activity: "13th December 2020",
    status: "Active",
  },
  {
    fullname: "Samuel Woodfree",
    email: "samuel@email.com",
    role: "Operation Manager",
    activity: "13th December 2020",
    status: "Active",
  },
  {
    fullname: "Samuel Woodfree",
    email: "samuel@email.com",
    role: "Operation Manager",
    activity: "13th December 2020",
    status: "Active",
  },
  {
    fullname: "Samuel Woodfree",
    email: "samuel@email.com",
    role: "Operation Manager",
    activity: "13th December 2020",
    status: "Active",
  },
];

const OverviewTable = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Full Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "fullname",
      key: "fullname",
      render: (text: string, record: DataType) => (
        <>
          <h1 className="font-semibold">{text}</h1>
        </>
      ),
    },
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Email Address</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "email",
      key: "email",
      render: (email: string) => <p>{email}</p>,
    },
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Role</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "role",
      key: "role",
    },
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Action</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "id",
      render: (_: any, record: DataType) => {
        return <span className="cursor-pointer">...</span>;
      },
    },
  ];
  return (
    <div className="bg-white p-4">
      <span>
        <h4 className="text-[18px] font-[600] text-black">Team Members</h4>
        <span className="flex items-baseline gap-1">
          <label htmlFor="select">Filter By:</label>
          <Select id="select" />
        </span>
      </span>
      <Table columns={columns} dataSource={memberData} />
    </div>
  );
};

export default OverviewTable;
