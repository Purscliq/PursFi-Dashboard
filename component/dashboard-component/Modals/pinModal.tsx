import {
  CustomModal as Modal,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { useValidatePinMutation } from "@/services/securityService";
import { useAppSelector } from "@/store/hooks";
import { message } from "antd";
import React, { useState, useRef, ChangeEvent, KeyboardEvent, useEffect } from "react";

interface Props {
  modal: boolean;
  setModal: (data: boolean) => void;
  setPinValid: (data: boolean) => void;
}

const PinModal: React.FC<Props> = ({ modal, setModal,setPinValid }) => {
  //const [modal, setModal] = useState(false);
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const inputRefsConfirm = useRef<(HTMLInputElement | null)[]>([]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [errMessage, setErrMessage] = useState("")
  const [validatePin, { isLoading }] = useValidatePinMutation();

  const businessId = useAppSelector((state) => state.user.user.businessId);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown !== null) {
      if (countdown > 0) {
        timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      } else {
        setErrMessage("");
        setCountdown(null);
      }
    }
    return () => clearTimeout(timer);
  }, [countdown]);


  const handleChangeConfirm = (value: string, index: number) => {
    const newPin = [...pin];
    if (/^\d*$/.test(value)) {
      newPin[index] = value;
      if (value.length > 0 && index < 3) {
        inputRefsConfirm.current[index + 1]?.focus();
      }
      setPin(newPin);
    }
  };
  const handleKeyDownConfirm = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
    if (e.key === "Backspace" && index > 0 && pin[index] === "") {
      inputRefsConfirm.current[index - 1]?.focus();
    }
  };

  const handleValidatePin = () => {
    validatePin({ businessId, pin: pin.join("")}).unwrap()
    .then(()=>{
      setPinValid(true);
      setPin(["","","",""])
      setModal(false)
    })
    .catch((err)=>{
      setErrMessage(err?.data?.message);
      setCountdown(60);
    
    })
  };

  return (
    <section>
      <Modal
        open={modal}
        title=""
        //width={700}
        footer={false}
        onCancel={() => setModal(false)}
        maskClosable={false}
      >
        {errMessage && (
          <div className=" text-red-600 font-bold text-lg text-center mb-5">
            {errMessage}
          </div>
        )}
        <h1 className=" text-center text-[28px] font-bold mt-10">
          Enter Your 4-digit Pin
        </h1>
        <p className=" text-center text-sm text-gray-400">Enter your 4-digit PIN to authorize this payment</p>

        <div className=" mt-10">
          <h6 className=" text-base font-semibold">Enter Pin</h6>
          <div className=" flex gap-5 mt-5 justify-center">
            {pin.map((digit, index) => (
              <input
                key={index}
                type="text" // Change to text to prevent number input scroll behavior
                inputMode="numeric" // Ensures numeric keyboard on mobile devices
                placeholder="0"
                maxLength={1}
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeConfirm(e.target.value, index)
                }
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDownConfirm(e, index)
                }
                ref={(el) => {
                  inputRefsConfirm.current[index] = el;
                }}
                className=" w-[50px] h-[50px] border border-gray-200 rounded-md p-1 text-center"
              />
            ))}
          </div>

          <div className=" mt-5">
            <Button
            loading={isLoading}
            onClick={handleValidatePin}
             className=" w-full bg-black text-white !h-10"
             disabled={countdown !== null}
             >
              Send Payments
            </Button>
          </div>
          {countdown && (
          <div className=" text-red-600 font-bold text-lg text-center mt-5">
             {countdown !== null && `(${countdown}s)`}
          </div>
        )}
        </div>
      </Modal>
    </section>
  );
};

export default PinModal;
