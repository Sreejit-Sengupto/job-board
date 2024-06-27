import Image from "next/image";
import React from "react";

const Requirements = () => {
  return (
    <div className="grid grid-cols-4 max-w-5xl text-xs lg:text-base">
      <div>
        <p className="text-[#6E6D6D] mb-4">Skills required</p>
        <p className="flex justify-start items-center border rounded-lg px-3 py-1 max-w-fit">
          <Image src={"/figma.svg"} alt="figma icon" height={20} width={20} />
          <span className="text-xs ml-1">Figma</span>
        </p>
        <p className="flex justify-start items-center border rounded-lg px-1 lg:px-3 py-1 max-w-fit my-2">
          <Image
            src={"/illustrator.svg"}
            alt="adobe illustrator icon"
            height={20}
            width={20}
          />
          <span className="text-xs ml-1">Adobe Illustrator</span>
        </p>
        <p className="flex justify-start items-center border rounded-lg px-3 py-1 max-w-fit">
          <Image src={"/xd.svg"} alt="adobe xd icon" height={20} width={20} />
          <span className="text-xs ml-1">Adobe XD</span>
        </p>
      </div>

      <div className="text-[#6E6D6D]">
        <p>Preferred Language</p>
        <p className="text-[#3D3D3D] font-bold">English</p>
      </div>

      <div className="text-[#6E6D6D]">
        <p>Type</p>
        <p className="text-[#3D3D3D] font-bold">Full time</p>
      </div>

      <div className="text-[#6E6D6D]">
        <p>Years of Experience</p>
        <p className="text-[#3D3D3D] font-bold">3+ Years of Experience</p>
      </div>
    </div>
  );
};

export default Requirements;
