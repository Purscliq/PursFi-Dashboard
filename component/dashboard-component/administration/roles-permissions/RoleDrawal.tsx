"use client";
import { Drawer } from "antd";
import PreviewRole from "../adminstration-tab/PreviewRole";
import { CustomButton as Button } from "@/lib/AntdComponents";
interface AccountDetailsProps {
  Open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
}

const RoleDrawal: React.FC<AccountDetailsProps> = ({ Open, setOpen, id }) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer onClose={onClose} maskClosable={false} open={Open}>
      <PreviewRole id={id} />
      <Button className="!w-full !mt-[2rem]">Update</Button>
    </Drawer>
  );
};

export default RoleDrawal;
