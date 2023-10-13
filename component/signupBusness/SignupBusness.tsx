"use client";
import logo from "@/assets/logo.svg";
import {
  CustomInput as Input,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { Select } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
}
const SignupBusness = () => {
  const [countries, setCountries] = useState<Record<string, string>[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((response: AxiosResponse<Country[]>) => {
        const countryData = response.data;
        console.log(countryData);
        const countryNames = countryData.map((country) => ({
          label: country.name.common,
          flag: country?.flags?.svg,
          value: country.name.common,
        }));
        setCountries(countryNames);
        setSelectedCountry(
          countryNames.find((country) => country.label === "Nigeria")?.flag!
        );
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (
    value: string,
    option: Record<string, string> | Record<string, string>[]
  ) => {
    if (!Array.isArray(option)) {
      setSelectedCountry(option?.flag);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[480px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-3xl text-Primary">
          Create an account
        </h1>
        <p className="text-sm text-gray-600">
          Sign up to create your merchant account
        </p>
        <form className="w-full space-y-4 mt-4">
          <div className="">
            <label
              className="block text-gray-600 text-sm font-semibold mb-2"
              htmlFor="busness"
            >
              Busness/ Company Name{" "}
            </label>
            <Input id="busness" type="text" name="busness" />
            <p className="text-xs text-gray-400 my-3">
              Please ensure that the business name provided is the same name on
              your registration documents
            </p>
          </div>

          <div className="country-selector flex items-center">
            <Select
              showSearch
              placeholder="Select a country"
              optionFilterProp="value"
              onChange={handleCountryChange}
              style={{ width: "100%" }}
              options={countries}
              defaultValue={"Nigeria"}
              suffixIcon={
                <Image
                  src={selectedCountry}
                  alt="flag"
                  width={40}
                  height={45}
                  className=" border"
                />
              }
            />
          </div>
          <div className="">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              What type of business do you run?{" "}
            </label>
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
            />{" "}
          </div>
          <div className="">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Business size?{" "}
            </label>
            <Input type="number" />
          </div>
          <div className="">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              How long has you company been in business before
            </label>
            <Input type="number" />
          </div>
          <Button type="primary" className="!h-[3rem] !bg-Primary w-full">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
};

export default SignupBusness;
