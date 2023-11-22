import Active from "@/assets/icon/Active";
import Inactive from "@/assets/icon/Inactive";
import { Drawer } from "antd";
interface AccountDetailsProps {
  Open: boolean;
  setOpen: (value: boolean) => void;
}

const MemberDrawal: React.FC<AccountDetailsProps> = ({ Open, setOpen }) => {
  return (
    <Drawer placement="right" onClose={() => setOpen(false)} open={Open}>
      <div className="grid grid-cols-1 gap-[0.5rem] p-[3%] bg-[#F9FFFF]">
        <span className="flex flex-col">
          <h4 className="text-[#181336] text-[16px] font-[700]">
            Admin role priviledges
          </h4>
          <p className="text-[#515B6F] text-[16px] font-[400]">
            Admin have the following privileges
          </p>
        </span>
        <div className="flex flex-col">
          <h4 className="text-[#181336] text-[16px] font-[700]">
            Payment and invoices
          </h4>
          <span className="flex items-center justify-between w-full">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Prepare and manage payment and invoices
            </p>
            <Inactive />
          </span>
        </div>
        <div className="flex flex-col gap-[0.3rem]">
          <h4 className="text-[#181336] text-[16px] font-[700]">Account</h4>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can View Account
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can download statement
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can create account
            </p>
            <Active />
          </span>
        </div>
        <div className="flex flex-col gap-[0.3rem]">
          <h4 className="text-[#181336] text-[16px] font-[700]">Account</h4>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can View Account
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can download statement
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can create account
            </p>
            <Active />
          </span>
        </div>
        <div className="flex flex-col gap-[0.3rem]">
          <h4 className="text-[#181336] text-[16px] font-[700]">Account</h4>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can View Account
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can download statement
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can create account
            </p>
            <Active />
          </span>
        </div>
        <div className="flex flex-col gap-[0.3rem]">
          <h4 className="text-[#181336] text-[16px] font-[700]">Account</h4>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can View Account
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can download statement
            </p>
            <Inactive />
          </span>
          <span className="flex items-center justify-between">
            <p className="text-[#515B6F] text-[16px] font-[400]">
              Can create account
            </p>
            <Active />
          </span>
        </div>
      </div>
    </Drawer>
  );
};

export default MemberDrawal;
