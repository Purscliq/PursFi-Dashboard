import {
  CustomModal as Modal,
  CustomButton as Button,
} from "@/lib/AntdComponents";

const DeleteMemberModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered={true}
      width="35%"
      maskClosable={false}
    >
      <div className=" flex flex-col gap-[1rem] items-center">
        <h2 className="text-[28px] font-[700] text-[#000]">Delete Member</h2>
        <p className="text-[#515B6F] text-[18px] font-[400] text-center">
          permanently delete this member from payroll beneficiary.
        </p>
        <Button
          danger
          type="primary"
          className="!h-[3rem] !bg-[#F6513B] w-full text-white hover:!text-white"
        >
          Yes
        </Button>
        <Button className="!h-[3rem] w-full" onClick={() => setOpen(false)}>
          No
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteMemberModal;
