import Image from "next/image";
import React from "react";

const CompanyDetails = () => {
  return (
    <div>
      <div className="flex justify-start items-center mb-5">
        <Image
          src={"/icon-rect.svg"}
          alt="company logo"
          width={40}
          height={40}
        />
        <p className="text-2xl text-[#4F4F4F] font-medium ml-2">Atlassian</p>
      </div>

      <div className="flex justify-start items-center">
        <div className="mr-10">
          <div className="my-4">
            <p className="text-[#6E6D6D] font-medium my-1">Company Size</p>
            <p className="text-[#3D3D3D] text-lg">1k - 2k Employees</p>
          </div>
          <div className="my-4">
            <p className="text-[#6E6D6D] font-medium my-1">Sector</p>
            <p className="text-[#3D3D3D] text-lg">Information Technology, Infrastructure</p>
          </div>
          <div className="my-4">
            <p className="text-[#6E6D6D] font-medium my-1">Founded in</p>
            <p className="text-[#3D3D3D] text-lg">2019</p>
          </div>
        </div>

        <div className="ml-10">
          <div className="my-4">
            <p className="text-[#6E6D6D] font-medium my-1">Type</p>
            <p className="text-[#3D3D3D] text-lg">Private</p>
          </div>
          <div className="my-4">
            <p className="text-[#6E6D6D] font-medium my-1">Funding</p>
            <p className="text-[#3D3D3D] text-lg">Bootstrapped</p>
          </div>
          <div className="my-4">
            <p className="text-[#6E6D6D] font-medium my-1">Founded By</p>
            <p className="text-[#3D3D3D] text-lg">Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
