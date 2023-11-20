import { Avatar } from "antd";

const Persoanal = () => {
  return (
    <div className="flex flex-col py-4 w-full space-y-3">
      <span>
        <h1 className="font-semibold">Personal Information </h1>
        <p className="text-gray-600 text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>
      <div className=" w-full rounded-md">
        {/* profil Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-semibold text-sm">Profile Photo</h1>
          <div className="flex items-center space-x-3 w-full md:w-[400px]">
            <div>
              <Avatar
                style={{ backgroundColor: "#CDA4FF" }}
                size={40}
                className="!text-sm text-black"
              >
                JD
              </Avatar>
              <p className="text-sm mt-1 font-medium"> Add photo</p>
            </div>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="hidden w-full h-full cursor-pointer "
            />
            <p className="text-sm">
              we only accept this type of format (PNG, JPG). <br /> kindly
              upload photo not more that 5mb
            </p>
          </div>
        </div>
        <hr />
        {/* First Name Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm flex-col flex">
            <h1 className="font-semibold">First Name</h1>{" "}
            <span className="text-sm mt-2">
              You won&rsquo;t be able to change your name.{" "}
            </span>
          </div>
          <div className="space-x-2 flex flex-col md:flex-row w-full md:w-[400px]">
            <div className="w-full space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="  w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className=" disabled:bg-blue-50 w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>
        <hr />
        {/* Email Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm flex-col flex">
            <h1 className="font-semibold ">Email Address</h1>
            <span className="text-sm mt-2">
              Your email address will receive all <br />
              communications and activity notifications from your account.{" "}
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full md:w-[400px]">
            <label htmlFor="email" className="font-semibold text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div>
        </div>
        <hr />
        {/* Phone Number Section */}
        <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm flex-col flex">
            <h1 className="font-semibold">Phone Number</h1>
            <span className="text-sm mt-2">
              OTP is sent to your phone number for verification purposes.{" "}
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full md:w-[400px]">
            <label htmlFor="" className="font-semibold text-sm">
              Phone Number
            </label>
            <div className="flex items-center">
              <select
                id="countryCode"
                className="w-1/4 px-3 py-2 disabled:bg-blue-50 border border-gray-300 text-gray-800 text-sm rounded-l-md focus:outline-none"
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="w-3/5 px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-r-md focus:outline-none"
              />
            </div>
          </div>
        </div>
        <hr />
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
export default Persoanal;
