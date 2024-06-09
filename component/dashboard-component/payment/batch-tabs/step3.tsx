import TableIcon from "@/assets/icon/TableIcon";
import {
    CustomButton as Button,
    CustomTable as Table
} from "@/lib/AntdComponents";

import { ColumnsType } from "antd/es/table"


interface Props {
    next: () => void;
}

export interface DataType {
    accountname: string;
    accountnumber: string;
    bankname: string;
    date: string;
    status: string;
    amount: string;
}
const Step3 = ({ next }: Props) => {
    const dataa = [
        {
            accountname: "Samuel woodfree",
            accountnumber: "1020123457",
            bankname: "UBA",
            date: "13 July, 2021",
            status: "Pending",
            amount: "N 44,500",
        }
    ]
    const columns: ColumnsType<DataType> = [
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Date</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "createdAt",
            render: (date) =>
                `${new Date(date).toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })}`,

        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Account Name</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "accountname",
            render: (accountname) =>
                `${accountname}`,

        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Bank Name</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "bankname",
            render: (bankname) =>
                `${bankname}`,

        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Account Number</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "accountnumber",
            render: (accountnumber) =>
                `${accountnumber}`,

        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Amount</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "amount",
            render: (amount) =>
                `${amount}`,
        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Status</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "status",
            render: (status) =>
                <span className="p-[7%] rounded-[80px] bg-[#FFD03A]/[10%] text-[#FFD03A] text-center  text-[14px] font-[600]">
                    {status}
                </span>,
        },

    ]
    const handleNext = () => {
        next()
    }
    return (
        <section className=" mt-5">
            <div className=" flex justify-end">
                <Button className=" bg-black font-normal border-0 text-white text-base py-5 !hover:text-black">Make Payment</Button>
            </div>
            <div className=" bg-white px-2 py-5 mt-5">
                <Table
                    columns={columns}
                    dataSource={dataa}
                />
            </div>
            <Button onClick={handleNext}>
                Next
            </Button>
        </section>
    )
}

export default Step3