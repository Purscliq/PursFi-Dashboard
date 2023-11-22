import { Modal } from "antd";
import {
  CustomInput as Input,
  CustomButton as Button,
  CustomText as Text,
  CustomCheckBox as Checkbox,
} from "@/lib/AntdComponents";
const CreateInvoiceModal = ({
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
    >
      <div className=" flex flex-col">
        <h2 className="text-2xl font-bold mb-1 text-center">Send Invoice </h2>
        <p className="text-sm text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          quidem voluptatem!{" "}
        </p>
        <form className="w-full space-y-4 mt-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="from"
            >
              From
            </label>
            <Input
              name="time"
              required
              id="text"
              type="text"
              placeholder="your address"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="to"
            >
              To
            </label>
            <Input
              name="to"
              required
              id="text"
              type="text"
              placeholder="your recipent address"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="subject"
            >
              Email Subject
            </label>
            <Input
              name="time"
              required
              id="text"
              type="text"
              placeholder="subject"
            />
          </div>

          <span className="flex flex-col">
            <label htmlFor="info">Email Message</label>
            <Text id="info" placeholder="messages here" />
            <span className="flex justify-between">
              <p>Maximum 500 characters</p>
              <p>0 / 500</p>
            </span>
          </span>
          <span className="flex flex-col space-y-2">
            <Checkbox>Send a copy of invoice to me</Checkbox>
            <Checkbox>Attach PDF to the invoice</Checkbox>
          </span>
          <div className="mt-4 space-y-3">
            <Button className="!h-[3rem] !bg-Primary w-full text-white hover:!text-white">
              Send invite
            </Button>
            <Button className="!h-[3rem] w-full text-black hover:!text-black">
              Cancel
            </Button>
          </div>
        </form>{" "}
      </div>{" "}
    </Modal>
  );
};

export default CreateInvoiceModal;
