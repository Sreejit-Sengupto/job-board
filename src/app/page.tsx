import LeftPanel from "@/components/LeftPanel/LeftPanel";
import Navbar from "@/components/Navbar";
import RightPanel from "@/components/RightPanel/RightPanel";
import SubNavbar from "@/components/SubNavbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SubNavbar />

      <div className="lg:grid grid-cols-6">
        <div className="col-span-5 border-r-[1px]">
          <LeftPanel />
        </div>
        <div className="col-span-1 border-l-[1px] bg-[#FCFCFC]">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
