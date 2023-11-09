import { Avatar, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ChangeEventHandler, useState } from "react";

const CompanySeting = () => {
  const [Description, setDescription] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  return (
    <div className="flex flex-col py-4 w-full space-y-3">
      <span>
        <h1 className="font-semibold">Company Information </h1>
        <p className="text-gray-600 text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>
      <div className=" w-full rounded-md">
        {/* profil Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-semibold ">Company Logo</h1>
          <div className="flex items-center space-x-3 w-full md:w-[400px]">
            <div>
              <Avatar
                style={{ backgroundColor: "#CDA4FF" }}
                size={40}
                className="!text-sm text-black"
              >
                JD
              </Avatar>
              <p className="text-xs mt-1 font-medium"> Add photo</p>
            </div>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="hidden w-full h-full cursor-pointer "
            />
            <p className="text-xs">
              we only accept this type of format (PNG, JPG). <br /> kindly
              upload photo not more that 5mb
            </p>
          </div>
        </div>
        <hr />
        {/* First Name Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 flex-col flex">
            <h1 className="font-semibold">Busness Name</h1>{" "}
            <span className="text-xs mt-2">
              You won&rsquo;t be able to change your name.{" "}
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full md:w-[400px]">
            <label htmlFor="email" className="font-semibold text-sm">
              Busness Name
            </label>
            <input
              type="email"
              id="email"
              placeholder="Busness Name"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div>
        </div>
        <hr />
        {/* Email Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 flex-col flex">
            <h1 className="font-semibold ">Company Bio</h1>
            <span className="text-xs mt-2">
              Tell us more about your company
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full md:w-[400px]">
            <label htmlFor="email" className="font-semibold text-sm">
              Bio
            </label>
            <TextArea
              onChange={handleChange}
              name="Description"
              required
              placeholder="Type your text here..."
              rows={5}
              cols={40}
              className="w-full bg-transparent border border-gray-200 p-2 outline-none focus:border-blue-300"
            />
            <p>{Description.length}/500 characters</p>
          </div>
        </div>
        <hr />
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 flex-col flex">
            <h1 className="font-semibold ">Busness Industry</h1>
            <span className="text-xs mt-2">
              Specific sector, in which your organization primarily operates.
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full md:w-[400px]">
            <label htmlFor="email" className="font-semibold text-sm">
              Industry
            </label>
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
              placeholder="Placehohlder"
            />{" "}
          </div>
        </div>
        {/* Phone Number Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 flex-col flex">
            <h1 className="font-semibold ">Busness Adress</h1>
            <span className="text-xs mt-2">
              This is the location of your business
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-1 w-full md:w-[400px]">
              <label htmlFor="email" className="font-semibold text-sm">
                Adress
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="space-x-2 flex flex-col md:flex-row w-full md:w-[400px]">
              <div className="w-full space-y-1">
                <label htmlFor="firstName" className="font-semibold text-sm">
                  LGA
                </label>
                <Select
                  style={{ width: "100%" }}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                  ]}
                  placeholder="Placehohlder"
                />{" "}
              </div>
              <div className="w-full  space-y-1">
                <label htmlFor="firstName" className="font-semibold text-sm">
                  State
                </label>
                <Select
                  style={{ width: "100%" }}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                  ]}
                  placeholder="Placehohlder"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <hr />{" "}
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
  );
};
export default CompanySeting;
