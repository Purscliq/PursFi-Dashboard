"use client";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.svg";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
  CustomCheckBox as Checkbox,
} from "@/lib/AntdComponents";
import { message, Alert } from "antd";
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import {
  useRegisterMutation,
  useGenerateOtpMutation,
} from "@/services/authService";
import { passwordSchema } from "@/lib/validationSchema";
import { useState, ChangeEventHandler, FormEventHandler } from "react";

const initailState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { replace } = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const [generateOtp, { isLoading: isGenerating }] = useGenerateOtpMutation();
  const [formData, setFormData] = useState(initailState);
  const [cta, setCta] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [confirmValidationError, setConfirmValidationError] = useState("");
  const [alert, setAlert] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!validationError && !confirmValidationError && cta)
      register(formData)
        .unwrap()
        .then((res) => {
          message.success("account created successfully");
          generateOtp({ username: formData.phoneNumber })
            .unwrap()
            .then(() => {
              setFormData(initailState);
              replace("/signup-otp");
            })
            .catch(() => {
              setFormData(initailState);
              replace("/signup-otp");
            });
        })
        .catch((err) => {
          setAlert(err?.data?.responseDescription || err?.data?.title);
        });
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (alert) setAlert("");
    if (e.target.name === "password")
      passwordSchema
        .validate({ password: e.target?.value })
        .then(() => setValidationError(""))
        .catch((error) => setValidationError(error.message));
    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== formData.password
    )
      setConfirmValidationError("password must match");
    else if (
      e.target.name === "confirmPassword" &&
      e.target.value == formData.password
    )
      setConfirmValidationError("");
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target?.value,
    }));
  };
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[480px] mx-auto mt-4 p-6">
        {alert && <Alert type="error" closable message={alert} />}
        <h1 className="font-semibold text-3xl text-Primary">
          Create an account
        </h1>
        <p className="text-sm text-gray-600">
          Sign up to create your merchant account
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 ">
              {" "}
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <Input
                id="firstName"
                className="w-full"
                required
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex-1 ml-2">
              {" "}
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                Last name
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone number
            </label>
            <div className="phone-input-container">
              <PhoneInput
                country={"ng"}
                containerClass="!w-full"
                inputClass="phone-input-input !w-full"
                value={formData.phoneNumber}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, phoneNumber: value }))
                }
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="text-gray-700 text-sm mb-4 ">
              Create your Password
            </label>
            <div className="flex justify-between">
              <div className="flex-1 ">
                {" "}
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <PasswordInput
                  placeholder="Enter your password"
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                />
                {formData.password && validationError && (
                  <ul className="bg-white rounded-[5px] p-[3%]">
                    <li className="flex items-center gap-[0.5rem]">
                      <span
                        className={`h-[13px] w-[13px] rounded-full ${
                          /^(.{8,})$/.test(formData.password)
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
                          /.*[a-zA-Z].*/.test(formData.password)
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
                          /.*[0-9].*/.test(formData.password)
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
                          /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
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
              </div>
              <div className="flex-1 ml-2">
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
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <p>{confirmValidationError}</p>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <Checkbox
              onChange={(e) => {
                setCta(e.target.checked);
              }}
              name="check"
            />
            <label htmlFor="remember" className="text-gray-600 ml-3 text-sm">
              By clicking continue, you acknowledge that you have read and
              accept the{" "}
              <span className="text-Primary ">
                Terms Of Service and Privacy Policy{" "}
              </span>{" "}
            </label>
          </div>
          <Button
            loading={isLoading || isGenerating}
            htmlType="submit"
            type="primary"
            className="!h-[3rem] !bg-Primary w-full"
          >
            Get Started
          </Button>
          <p className="text-sm font-medium text-gray-600 flex items-center justify-center">
            Already have an account ?{" "}
            <Link
              href="/"
              className="text-md hover:underline hover:duration-300 text-Primary"
            >
              Log in
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
