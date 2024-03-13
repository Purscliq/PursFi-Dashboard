import {
  CustomModal as Modal,
  CustomButton as Button,
} from "@/lib/AntdComponents";

const RunPayrollModal = ({
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
      <div className=" flex flex-col gap-10">
        <span className="flex flex-col gap-4 items-center">
          <h2 className="text-[28px] font-[700] text-[#000]">Run Payroll</h2>
          <p className="text-[#515B6F] text-[18px] font-[400] text-center">
            Lorem ipsum dolor sit amet consectetur. Aliquam scelerisque duis
            mollis ullamcorper ac felis. Commodo duis metus facilisi.
          </p>
        </span>
        <span className="w-full flex flex-col gap-3">
          <Button className="!h-[3rem] w-full">Yes</Button>
          <Button
            //   disabled={isLoading}
            className="!h-[3rem] !bg-[#F6513B] w-full text-white hover:!text-white"
            onClick={() => setOpen(false)}
          >
            No
          </Button>
        </span>
      </div>
    </Modal>
  );
};

export default RunPayrollModal;
