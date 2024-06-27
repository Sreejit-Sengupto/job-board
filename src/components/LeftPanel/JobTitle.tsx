import React from "react";
import { Dot } from "lucide-react";
import Image from "next/image";

const JobTitle = () => {
  return (
    <div>
      <div className="flex justify-start items-center">
        <p className="text-xl lg:text-4xl font-bold">Senior Product Engineer</p>

        <Dot color="#888888" />

        <p className="text-xs text-[#888888] font-medium">posted 2 days ago</p>

        <div className="flex justify-center items-center rounded-full px-1 bg-[#ABEFC6] text-xs ml-1 border">
          <Dot color="#17B169" />
          <span className="text-[#17B169] font-medium">Open</span>
        </div>
      </div>

      <div className="flex justify-start items-center mt-10 text-base lg:text-xl text-[#5D5D5D]">
        <div className="flex items-center justify-center">
          <p className="flex justify-center items-center">
            <Image
              src={"/location.svg"}
              alt="location icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Delaware,
          </p>
          <p> USA</p>
        </div>

        <Dot color="#888888" />

        <div className="flex justify-center items-center">
          <Image
            src={"/coins-stacked.svg"}
            alt="coin stacked icon"
            height={30}
            width={30}
          />
          <p className="ml-2">$300k-$400k</p>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
