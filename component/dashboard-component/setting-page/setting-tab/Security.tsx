import {
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useUpdatePasswordMutation } from "@/services/authService";
import { message } from "antd";
import { passwordSchema } from "@/lib/validationSchema";

const initialState = {
  password: "",
  newPassword: "",
  confirmNewPassword: "",
};
const Security = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const [formData, setFormData] = useState(initialState);
  const [validationError, setValidationError] = useState("");
  const [confirmValidationError, setConfirmValidationError] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!validationError && !confirmValidationError)
      updatePassword(formData)
        .unwrap()
        .then(() => {
          message.success("password updated successfully");
          setFormData(initialState);
        })
        .catch((err) => {
          message.error(
            err?.data?.responseDescription ||
              err?.data?.title ||
              "something went wrong"
          );
        });
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.name === "newPassword")
      passwordSchema
        .validate({ password: e.target?.value })
        .then(() => setValidationError(""))
        .catch((error) => setValidationError(error.message));
    if (
      e.target.name === "confirmNewPassword" &&
      e.target.value !== formData.newPassword
    )
      setConfirmValidationError("password must match");
    else if (
      e.target.name === "confirmNewPassword" &&
      e.target.value == formData.newPassword
    )
      setConfirmValidationError("");
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target?.value,
    }));
  };
  return (
    <div className="flex flex-col py-4 w-full space-y-3">
      <span>
        <h1 className="font-semibold">Security Information </h1>
        <p className="text-gray-600 text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>
      <form onSubmit={handleSubmit} className=" w-full rounded-md">
        <div className="mb-4 p-2 grid grid-cols-[400px,1fr] gap-6 items-start">
          <div className="text-sm flex-col flex">
            <h1 className="font-semibold">Change Password</h1>{" "}
            {formData.newPassword && validationError && (
              <ul className="bg-white rounded-[5px] p-[3%]">
                <li className="flex items-center gap-[0.5rem]">
                  <span
                    className={`h-[13px] w-[13px] rounded-full ${
                      /^(.{8,})$/.test(formData.newPassword)
                        ? "bg-black"
                        : "bg-slate-300"
                    }`}
                  ></span>
                  <p className="text-[#252B33] text-[12px] font-[400]">
                    A minimum of 8 characters
                  </p>
                </li>
                <li className="flex items-center gap-[0.5rem]">
                  <span
                    className={`h-[13px] w-[13px] rounded-full ${
                      /.*[a-zA-Z].*/.test(formData.newPassword)
                        ? "bg-black"
                        : "bg-slate-300"
                    }`}
                  ></span>
                  <p className="text-[#252B33] text-[12px] font-[400]">
                    At least one letter
                  </p>
                </li>
                <li className="flex items-center gap-[0.5rem]">
                  <span
                    className={`h-[13px] w-[13px] rounded-full ${
                      /.*[0-9].*/.test(formData.newPassword)
                        ? "bg-black"
                        : "bg-slate-300"
                    }`}
                  ></span>
                  <p className="text-[#252B33] text-[12px] font-[400]">
                    At least one number
                  </p>
                </li>
                <li className="flex items-center gap-[0.5rem]">
                  <span
                    className={`h-[13px] w-[13px] rounded-full ${
                      /[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword)
                        ? "bg-black"
                        : "bg-slate-300"
                    }`}
                  ></span>
                  <p className="text-[#252B33] text-[12px] font-[400]">
                    At least one special character
                  </p>
                </li>
              </ul>
            )}
            {/* validation */}
          </div>
          <div className="w-full md:w-[400px] flex flex-col space-y-4">
            <div className="flex flex-col  ">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Current Password
              </label>
              <PasswordInput
                placeholder="current password"
                id="password"
                type="password"
                required
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                New Password
              </label>
              <PasswordInput
                placeholder="Enter your password"
                id="password"
                type="password"
                required
                value={formData.newPassword}
                name="newPassword"
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 ml2">
              {" "}
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="confirmpass"
              >
                Confirm password
              </label>
              <PasswordInput
                placeholder="Confirm password"
                id="password"
                type="password"
                name="confirmNewPassword"
                required
                value={formData.confirmNewPassword}
                onChange={handleChange}
              />
              <p>{confirmValidationError}</p>
            </div>
            <div className="flex justify-end items-end my-[1rem]">
              <Button
                htmlType="submit"
                type="primary"
                loading={isLoading}
                className="!bg-black w-full"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Security;
