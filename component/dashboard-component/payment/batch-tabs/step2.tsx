import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber } from 'antd';
import TableIcon from "@/assets/icon/TableIcon";
import { CustomButton as Button, CustomTable as Table } from "@/lib/AntdComponents";
import { ColumnsType, ColumnType } from "antd/es/table";
import Papa from 'papaparse';
import { DataType } from '../batchPayment';
import "../../../customStyles/soa.css"

interface Props {
    next: () => void;
    csvData: string;
    data: DataType[];
    setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}


interface EditableColumnType<DataType> extends ColumnType<DataType> {
    editable?: boolean;
}

const Step2: React.FC<Props> = ({ next, csvData, data, setData }) => {
    
    const [editingKey, setEditingKey] = useState<string>('');
    const [form] = Form.useForm();

    useEffect(() => {
        if (csvData) {
            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    const parsedData = (result.data as any[]).map((item, index) => ({
                        key: item.key.toString(),
                        date: item['Date'],
                        accountname: item['Account Name'],
                        bankname: item['Bank Name'],
                        accountnumber: item['Account Number'],
                        amount: item['Amount'],
                        status: "Pending", // Default status
                    }));
                    setData(parsedData);
                },
            });
        }
    }, [csvData, setData]);

    const isEditing = (record: DataType) => record.key === editingKey;

    const edit = (record: DataType) => {
        form.setFieldsValue({ ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: string) => {
        try {
            const row = (await form.validateFields()) as DataType;
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns: EditableColumnType<DataType>[] = [
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Date</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "date",
            render: (date: string) =>
                `${date}`,
        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Account Name</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "accountname",
        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Bank Name</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "bankname",
        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Account Number</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "accountnumber",
            editable: true,
        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Amount</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "amount",
            editable: true,
        },
        {
            title: (
                <span className="flex items-center space-x-2 text-[#7C8493] text-base">
                    <p>Status</p>
                    <TableIcon />
                </span>
            ),
            dataIndex: "status",
            render: (status: string) => (
                <span className="p-[7%] rounded-[80px] bg-[#FFD03A]/[10%] text-[#FFD03A] text-center text-[14px] font-[600]">
                    {status}
                </span>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record: DataType) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            onClick={() => save(record.key)}
                            style={{ marginRight: 8 }}
                        >
                            Save
                        </a>
                        <a onClick={cancel}>Cancel</a>
                    </span>
                ) : (
                    editingKey === '' ? (
                        <a onClick={() => edit(record)}>Edit</a>
                    ) : null
                );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                inputType: col.dataIndex === 'amount' ? 'number' : 'text',
                editing: isEditing(record),
            }),
        };
    });

    const EditableCell: React.FC<any> = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                        rules={[{ required: true, message: `Please Input ${title}!` }]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    const handleNext = () => {
        next();
    };

    return (
        <section className="mt-5">
            <div className="flex justify-end">
                <Button className="bg-[#F9FFFF] font-normal border-0 text-[#899A9A] text-base py-5 !hover:text-black"
                onClick={handleNext}
                >
                    Batch Payment
                </Button>
            </div>
            <div className="bg-white px-2 py-5 mt-5">
                <Form form={form} component={false}>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        dataSource={data}
                        columns={mergedColumns as ColumnsType<DataType>}
                        rowClassName="editable-row"
                        pagination={{ pageSize: 10 }}
                    />
                </Form>
            </div>
        </section>
    );
};

export default Step2;
