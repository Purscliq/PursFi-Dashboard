import React from "react";
import AsideBar from "./AsideBar";

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open text-black">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#EEF2F7] "> {children}</div>
      <AsideBar />
    </div>
  );
};

export default OnboardingLayout;
