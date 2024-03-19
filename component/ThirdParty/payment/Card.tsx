import { CustomButton as Button } from "@/lib/AntdComponents";

const Card = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative mb[1rem]">
        <label
          className="absolute top-[10%] text-[12px] px-[16px] text-[#899A9A]"
          htmlFor="cardNumber"
        >
          CARD NUMBER
        </label>
        <input
          required={true}
          id="cardNumber"
          name="cardNumber"
          placeholder="0000 0000 0000 000"
          className="w-full h-[50px] text-[12px] py[20px] pt-[10px] px-[16px] rounded-[5px] border-solid border-[1.5px] text-[#899A9A] border-[#B8C9C9] focus-visible:outline-[#3180E7]"
        />
      </div>
      <div className="grid grid-cols-2 items-center justify-between gap-[0.5rem]">
        <div className="relative">
          <label
            className="absolute top-[10%] text-[12px] px-[16px] text-[#899A9A]"
            htmlFor="validDate"
          >
            VALID TILL
          </label>
          <input
            required={true}
            id="validDate"
            name="validDate"
            placeholder="MM/YY"
            className="w-full h-[50px] text-[12px] py[20px] pt-[10px] px-[16px] rounded-[5px] border-solid border-[1.5px] text-[#899A9A] border-[#B8C9C9] focus-visible:outline-[#3180E7]"
          />
        </div>
        <div className="relative">
          <label
            className="absolute top-[10%] text-[12px] px-[16px] text-[#899A9A]"
            htmlFor="cvv"
          >
            CVV
          </label>
          <input
            required={true}
            id="cvv"
            name="cvv"
            placeholder="123"
            className="w-full h-[50px] text-[12px] py[20px] pt-[10px] px-[16px] rounded-[5px] border-solid border-[1.5px] text-[#899A9A] border-[#B8C9C9] focus-visible:outline-[#3180E7]"
          />
        </div>
      </div>
      <Button>Pay Now</Button>
    </div>
  );
};

export default Card;
