import { Modal, message } from "antd";
import { FormEventHandler, ChangeEventHandler } from "react";
import {
  CustomInput as Input,
  CustomButton as Button,
  CustomText as Text,
  CustomCheckBox as Checkbox,
} from "@/lib/AntdComponents";
import { dataType } from "./CreateInvoice";
import { useCreateInvoiceMutation } from "@/services/invoiceService";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ErrorList from "antd/es/form/ErrorList";
const CreateInvoiceModal = ({
  open,
  setOpen,
  formData,
  setFormData,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  formData: dataType;
  setFormData: React.Dispatch<React.SetStateAction<dataType>>;
}) => {
  const [createInvoice, { isLoading }] = useCreateInvoiceMutation();
  const onInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createInvoice({ ...formData })
      .unwrap()
      .then((res) => {
        console.log(res);
        message.success("invoice sent");
      })
      .catch((err) => {
        console.log(ErrorList);
      });
  };
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered={true}
    >
      <div className=" flex flex-col">
        <h2 className="text-2xl font-bold mb-1 text-center">Send Invoice </h2>
        <form onSubmit={onFormSubmit} className="w-full space-y-4 mt-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="from"
            >
              From
            </label>
            <Input
              disabled
              name="senderMail"
              value={formData?.SenderMail}
              required
              id="text"
              type="text"
              placeholder="your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              To
            </label>
            <Input
              name="clientMail"
              value={formData.clientMail}
              onChange={onInputChange}
              required
              id="email"
              type="email"
              placeholder="your recipient address"
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
              name="subject"
              value={formData.subject}
              onChange={onInputChange}
              required
              id="text"
              type="text"
              placeholder="subject"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="subject"
            >
              Client Phone
            </label>
            <PhoneInput
              country={"ng"}
              containerClass="!w-full"
              inputClass="phone-input-input !w-full"
              value={formData.ClientPhone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, ClientPhone: value }))
              }
            />
          </div>

          <span className="flex flex-col">
            <label htmlFor="info">Email Message</label>
            <Text
              name="message"
              value={formData.message}
              onChange={onInputChange}
              id="info"
              placeholder="messages here"
              required
            />
            <span className="flex justify-between">
              <p>Maximum 500 characters</p>
              <p>{formData.message.length} / 500</p>
            </span>
          </span>
          <span className="flex flex-col space-y-2">
            <Checkbox>Send a copy of invoice to me</Checkbox>
            <Checkbox>Attach PDF to the invoice</Checkbox>
          </span>
          <div className="mt-4 space-y-3">
            <Button
              type="primary"
              loading={isLoading}
              htmlType="submit"
              className="!h-[3rem] !bg-black w-full text-white hover:!text-white"
            >
              Send invite
            </Button>
            <Button
              onClick={() => setOpen(false)}
              className="!h-[3rem] w-full text-black hover:!text-black"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateInvoiceModal;
