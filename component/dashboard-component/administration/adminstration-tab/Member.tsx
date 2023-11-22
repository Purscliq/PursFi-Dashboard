import TableIcon from "@/assets/icon/TableIcon";
import { Dropdown, Menu, MenuProps } from "antd";
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

const Member = () => {
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
          <p>{record.email}</p>
        </>
      ),
    },
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Last Activity</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "activity",
      key: "activity",
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
          <p>Status</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "Active" ? (
          <span className="p-[4%] rounded-[80px] bg-green-50  text-[#0AA07B]  text-center  text-[14px] font-[600]">
            {status}
          </span>
        ) : (
          <span className="p-[4%] rounded-[80px] bg-[#0AA07B]/[10%] text-[#0AA07B] text-center text-[14px] font-[600]">
            {status}
          </span>
        ),
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
        const menu: React.ReactElement<MenuProps> = (
          <Menu>
            <Menu.Item key="show-details">View Rules</Menu.Item>
            <Menu.Item key="download-receipt">Edit Details</Menu.Item>
            <Menu.Item key="report-transaction">Delete</Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <span className="cursor-pointer">...</span>
          </Dropdown>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={memberData} />
    </div>
  );
};

export default Member;
