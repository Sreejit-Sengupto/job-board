import Link from "next/link";
import React from "react";
import { Briefcase, MessageSquareDot, HandCoins, BellDot, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full grid grid-cols-6 place-items-center border border-b-[#D1D1D1] p-3">
      <div className="lg:w-[100px] lg:h-[61px] col-span-1 lg:p-5 p-3 bg-[#E7E7E7] text-[#DC4A2D] flex justify-center items-center">
        <p className="font-semibold">Logo</p>
      </div>

      <div className="col-span-4 border border-[#D1D1D1] rounded-full p-2 lg:w-[538px] lg:h-[74px] flex justify-between items-center text-xs lg:text-base">
        <Link
          href={"/"}
          className="bg-[#DC4A2D] px-4 py-2 lg:px-8 lg:py-4 rounded-full text-white font-semibold flex justify-center items-center"
        >
          <span className="lg:mr-1">
            <Briefcase color="white" size={20} />
          </span>
          <span className="hidden lg:inline">Jobs</span>
        </Link>
        <Link
          href={"/"}
          className="mx-6 lg:mx-10 text-[#B0B0B0] font-semibold flex justify-center items-center"
        >
          <span className="mr-1">
            <MessageSquareDot />
          </span>
          <span className="hidden lg:inline">Messages</span>
        </Link>
        <Link
          href={"/"}
          className="text-[#B0B0B0] font-semibold flex justify-center items-center"
        >
          <span className="mr-1">
            <HandCoins />
          </span>
          <span className="hidden lg:inline">Payments</span>
        </Link>
      </div>


      <div className="col-span-1 flex justify-center items-center">
        <BellDot width={32} height={32} className="mr-1 lg:mr-6"/>
        <Image src={'/icon.svg'} alt="icon" width={40} height={40}/>
        <ChevronDown width={20} height={20}/>
      </div>
    </div>
  );
};

export default Navbar;
