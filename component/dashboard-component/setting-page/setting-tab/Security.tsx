import { CustomPasswordInput as PasswordInput } from "@/lib/AntdComponents";
import React from "react";
import OtpInput from "react18-input-otp";

const Security = () => {
  return (
    <div className="flex flex-col py-4 w-full space-y-3">
      <span>
        <h1 className="font-semibold">Security Information </h1>
        <p className="text-gray-600 text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>
      <div className=" w-full rounded-md">
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between ">
          <div className="text-sm flex-col flex">
            <h1 className="font-semibold">Change Password</h1>{" "}
            {/* validation */}
          </div>
          <div className="w-full md:w-[400px] flex flex-col space-y-2">
            <div className="flex flex-col  ">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Current Password
              </label>
              <PasswordInput
                placeholder="This is a placeholder"
                id="password"
                type="password"
                required
                name="password"
              />
            </div>
            <div className="flex flex-col  ">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                New Password
              </label>
              <PasswordInput
                placeholder="This is a placeholder"
                id="password"
                type="password"
                required
                name="password"
              />
            </div>
            <div className="flex flex-col  ">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <PasswordInput
                placeholder="This is a placeholder"
                id="password"
                type="password"
                required
                name="password"
              />
            </div>
            <div className="flex justify-end items-end my-3">
              <button
                disabled
                className="btn w-[400px]   disabled:bg-gray-200 disabled:text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between ">
        <div className="text-sm flex-col flex">
            <h1 className="font-semibold">Set pin</h1> {/* validation */}
          </div>
          <div className="w-full md:w-[400px] flex flex-col space-y-2">
            <div className="flex flex-col  ">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                New Pin
              </label>
              <OtpInput
                numInputs={4}
                separator={<span style={{ width: "20px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid #CFD3DB",
                  borderRadius: "8px",
                  width: "50px",
                  height: "50px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "800",
                  caretColor: "blue",
                  margin: "4px",
                }}
                focusStyle={{
                  border: "1px solid #DEE3EB",
                  outline: "none",
                }}
              />{" "}
            </div>
            <div className="flex flex-col  ">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Confirm Pin{" "}
              </label>
              <OtpInput
                numInputs={4}
                separator={<span style={{ width: "20px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid #CFD3DB",
                  borderRadius: "8px",
                  width: "50px",
                  height: "50px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "800",
                  caretColor: "blue",
                  margin: "4px",
                }}
                focusStyle={{
                  border: "1px solid #DEE3EB",
                  outline: "none",
                }}
              />
            </div>
            <div className="flex justify-end items-end my-3">
              <button
                disabled
                className="btn w-[400px]   disabled:bg-gray-200 disabled:text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
