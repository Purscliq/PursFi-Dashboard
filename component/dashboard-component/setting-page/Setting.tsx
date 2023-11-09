"use client";
import { Select } from "antd";
import React from "react";
import SettingTab from "./SettingTab";

const Setting = () => {
  return (
    <div className="mx-auto flex flex-col py-2 px-6 h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-9 my-4">
        <span>
          <h2 className="text-2xl font-medium"> Setting </h2>
          <p className="text-sm text-gray-600">
            Showing your Account metrics for July 19, 2021 - July 25, 2021
          </p>
        </span>{" "}
        <SettingTab />
      </header>
    </div>
  );
};

export default Setting;
