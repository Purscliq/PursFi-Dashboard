"use client";
import {
  useState,
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
} from "react";
import {
  CustomSelect as Select,
  CustomInput as Input,
  CustomInputNumber as InputNumber,
  CustomText as Text,
  CustomRadioGroup as RadioGroup,
  CustomButton as Button,
  CustomDatePicker as DatePicker,
  CustomTimePicker as TimePicker,
  CustomSpinner as Spinner,
} from "@/lib/AntdComponents";
import {
  useGetBanksQuery,
  useVerifyAccountMutation,
  useSingleTransferMutation,
  useRecurringExpenditureMutation,
  useScheduledExpenditureMutation,
} from "@/services/disbursementService";
import { valueType } from "antd/es/statistic/utils";
import { useAppSelector } from "@/store/hooks";
import SuccessfulPaymentModal from "../modals/successfulPaymentModal";
import { message } from "antd";
const options = [
  { label: "instant payment", value: "instant_payment" },
  { label: "Schedule Payment", value: "schedule_payment" },
  { label: "Recurring payment", value: "recurring_payment" },
];
const amount: any = "";
const initialState = {
  amount: amount,
  bankName: "",
  narration: "",
  businessId: "",
  transactionCategory: "",
  day: "",
  hour: "",
  month: "",
  fee: "0",
};
const initAcctDetails = {
  bankCode: "",
  accountNumber: "",
  currency: "NGN",
};
const MakePayment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profile = useAppSelector((store) => store.user?.user);
  const [formdata, setFormdata] = useState(initialState);
  const { data } = useGetBanksQuery({});
  const [verify, { isLoading: isVerifying }] = useVerifyAccountMutation();
  const [transfer, { isLoading: isProcessing }] = useSingleTransferMutation();
  const [recurring_transfer, { isLoading: isProcessing_recurring }] =
    useRecurringExpenditureMutation();
  const [scheduled_transfer, { isLoading: isProcessing_scheduled }] =
    useScheduledExpenditureMutation();
  const wallet = useAppSelector((store) => store.user.wallet);
  const [acctdetails, setAcctDetails] = useState(initAcctDetails);
  useEffect(() => {
    if (acctdetails.accountNumber.length === 10 && acctdetails.bankCode)
      verify(acctdetails)
        .unwrap()
        .then((res) => {
          setFormdata((prev) => ({
            ...prev,
            acc: res?.data?.data,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
  }, [acctdetails.accountNumber, acctdetails.bankCode]);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formdata.bankName && formdata.transactionCategory === options[0].value)
      transfer({
        ...formdata,
        ...acctdetails,
        amount: formdata?.amount.toString(),
        businessId: profile?.businessId,
      })
        .unwrap()
        .then((res) => {
          setIsModalOpen(true);
          setAcctDetails(initAcctDetails);
          setFormdata(initialState);
          message.success("payment successful");
        })
        .catch((err) => {
          message.error(
            err?.data?.responseDescription || "something went wrong"
          );
        });
    else if (
      formdata.bankName &&
      formdata.transactionCategory === options[1].value
    )
      scheduled_transfer({
        ...formdata,
        ...acctdetails,
        amount: formdata?.amount.toString(),
        businessId: profile?.businessId,
      })
        .unwrap()
        .then((res) => {
          setIsModalOpen(true);
          setAcctDetails(initAcctDetails);
          setFormdata(initialState);
          message.success("payment queued successful");
        })
        .catch((err) => {
          message.error(
            err?.data?.responseDescription || "something went wrong"
          );
        });
    else if (
      formdata.bankName &&
      formdata.transactionCategory === options[2].value
    )
      recurring_transfer({
        ...formdata,
        ...acctdetails,
        amount: formdata?.amount.toString(),
        businessId: profile?.businessId,
        active: true,
        automatic: true,
      })
        .unwrap()
        .then((res) => {
          setIsModalOpen(true);
          setAcctDetails(initAcctDetails);
          setFormdata(initialState);
          message.success("payment successful");
        })
        .catch((err) => {
          message.error(
            err?.data?.responseDescription || "something went wrong"
          );
        });
  };
  const onSearchChange = (value: string) => {
    setAcctDetails((prev) => ({ ...prev, bankCode: value }));
  };
  const onFormChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onAccountNumChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAcctDetails((prev) => ({ ...prev, accountNumber: e.target?.value }));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 w-[80%] gap-[1rem] px-[3%] relative"
      >
        {isVerifying && (
          <div className="flex items-center justify-center h-[80vh] w-full absolute opacity-[0.7] bg-gray-100 z-[100]">
            <Spinner className="!m-auto !block" />
          </div>
        )}
        <span className="flex items-center justify-between gap-[2rem]">
          <span className="flex flex-col w-full">
            <label htmlFor="bank">Bank Name</label>
            <Select
              showSearch
              placeholder="select bank"
              optionFilterProp="label"
              onChange={onSearchChange}
              id="bank"
              options={data}
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="bank">Account Number</label>
            <Input
              onChange={onAccountNumChange}
              maxLength={10}
              minLength={10}
              value={acctdetails.accountNumber}
              required
              type="number"
              className="!w-full"
              placeholder=""
            />
          </span>
        </span>
        <span className="flex flex-col">
          <label htmlFor="acct_name">Account Name</label>
          <Input value={formdata.bankName} disabled={true} id="acct_name" />
        </span>
        <span className="flex items-center justify-between gap-[2rem]">
          <span className="flex flex-col w-full">
            <label htmlFor="bank">Select bank account to pay from</label>
            <Select
              id="bank"
              options={[{ label: wallet?.accountDetails?.accountName }]}
              value={wallet?.accountDetails?.accountName}
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="bank">Amount</label>
            <InputNumber
              name="amount"
              value={formdata.amount}
              onChange={(value: valueType | null) =>
                setFormdata((prev) => ({ ...prev, amount: value }))
              }
              className="!w-full"
              prefix="N"
              placeholder=""
              required
            />
          </span>
        </span>
        <span className="flex flex-col">
          <label htmlFor="memo">Payment Memo</label>
          <Text
            name="narration"
            value={formdata.narration}
            onChange={onFormChange}
            required
            id="memo"
          />
        </span>
        <span className="flex flex-col">
          <label htmlFor="tag">Payment Tag</label>
          <RadioGroup
            id="tag"
            name="transactionCategory"
            onChange={(e) =>
              setFormdata((prev) => ({
                ...prev,
                transactionCategory: e.target.value,
              }))
            }
            options={options}
            value={formdata.transactionCategory}
            className="!flex !justify-start !gap-[4rem]"
          />
        </span>
        {(formdata.transactionCategory === options[2].value ||
          formdata.transactionCategory === options[1].value) && (
          <span className="flex flex-col gap-1">
            <label>Select Day</label>
            <span className="flex items-center justify-between gap-[2rem]">
              <DatePicker
                onChange={(value, date) => {
                  setFormdata((prev) => ({
                    ...prev,
                    day: date.split("-")[2],
                    month: date.split("-")[1],
                  }));
                }}
                picker="date"
                className="!w-full"
              />
              <TimePicker
                format={"HH"}
                onChange={(value, date) => {
                  setFormdata((prev) => ({ ...prev, hour: date }));
                }}
                className="!w-full"
              />
            </span>
          </span>
        )}
        {/* {formdata.transactionCategory === options[1].value && (
          <span className="flex flex-col gap-1">
            <label>Select Month</label>
            <span className="flex items-center justify-between gap-[2rem]">
              <DatePicker
                onChange={(value, date) => {
                  setFormdata((prev) => ({
                    ...prev,
                    month: date.split("-")[1],
                  }));
                }}
                picker="month"
                className="!w-full"
              />
            </span>
          </span>
        )} */}
        <span className="flex flex-col">
          <label htmlFor="info">Addition Information(optional)</label>
          <Text id="info" />
          <span className="flex justify-between">
            <p>Maximum 500 characters</p>
            <p>0 / 500</p>
          </span>
        </span>
        <Button
          loading={
            isProcessing || isProcessing_recurring || isProcessing_scheduled
          }
          htmlType="submit"
          className="!bg-black !h-[45px]"
          type="primary"
        >
          Send Payment
        </Button>
      </form>
      <SuccessfulPaymentModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};

export default MakePayment;
