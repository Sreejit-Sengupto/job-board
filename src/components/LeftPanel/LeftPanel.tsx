import React from "react";
import JobTitle from "./JobTitle";
import Requirements from "./Requirements";
import AboutJob from "./AboutJob";
import CompanyDetails from "./CompanyDetails";

const LeftPanel = () => {
  return (
    <div>
      <div className="px-4 lg:px-24 py-10 border-b-[1px] border-b-[#D1D1D1]">
        <JobTitle />
      </div>

      <div className="px-4 lg:px-24 py-10 border-b-[1px] border-b-[#D1D1D1]">
        <Requirements/>
      </div>

      <div className="px-4 lg:px-24 py-10 border-b-[1px] border-b-[#D1D1D1]">
        <AboutJob />
      </div>

      <div className="px-4 lg:px-24 py-10 border-b-[1px] border-b-[#D1D1D1]">
        <CompanyDetails />
      </div>
    </div>
  );
};

export default LeftPanel;
