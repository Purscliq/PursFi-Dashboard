import UpdateSettingsTabs from "./settings-tabs/UpdateSettingsTabs";

const UpdatePayrollSettings = ({ id }: { id: string }) => {
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll space-y-8">
      <header className="flex flex-col space-y-3 my-1">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium">
              Update Payroll - <span className="text-gray-400">Setting</span>{" "}
            </h2>
          </span>
        </div>
      </header>
      <div className="bg-white p-2 rounded-md">
        {" "}
        <UpdateSettingsTabs id={id} />
      </div>
    </div>
  );
};

export default UpdatePayrollSettings;
