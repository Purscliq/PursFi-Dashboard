import UplaodImage from "@/assets/icon/uploadImage"
import { CustomDragger as Dragger } from "@/lib/AntdComponents"
import { Button } from "antd";

interface Props {
    next: () => void;
  }


const Step1 = ({next} : Props) => {
    const handleNext = () => {
        next()
      }
    return (
        <section className=" bg-white mt-5">
            <div className=" flex justify-between p-5 items-center">
                <div className=" text-left max-w-[300px]">
                    <h2 className=" font-medium text-2xl">Upload Batch Payment</h2>
                    <p className=" text-[#515B6F] text-base">
                        Upload the payment file, including the amount, bank source code, bank name, account name, bank name
                    </p>
                </div>

                <Dragger className=" w-[40%] h-[150px]">
                <div className=" flex flex-col justify-center items-center">
                    <UplaodImage />
                   <h4 className=" font-medium text-base">Click to replace <span className=" text-[#515B6F] font-normal"> or drag and drop</span></h4>
                   <p className=" text-[#C1C5D0] font-normal text-base">CSV File or Excel File</p>

                </div>
                </Dragger>
            </div>

            <Button onClick={handleNext}>
                Next
            </Button>
        </section>
    )
}

export default Step1