import React from "react";
import {
  Trash2,
  Edit2,
  Users2,
  UserCheck2,
  MessageSquare,
  Eye,
} from "lucide-react";

const RightPanel = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center items-center">
        <button className="px-6 py-[0.41rem] bg-[#FEF4F2] flex justify-center items-center border border-[#DC4A2D] rounded-lg mr-1 max-w-xl">
          <Trash2 color="#DC4A2D" width={20} height={20} />
          <p className="text-[#DC4A2D]">Delete Job</p>
        </button>
        <button className="px-6 py-2 bg-[#DC4A2D] flex justify-center items-center rounded-lg ml-1 max-w-xl">
          <Edit2 color="white" width={20} height={20} />
          <p className="text-white ml-1">Edit Job</p>
        </button>
      </div>

      <div>
        <div className="text-base text-[#4F4F4F] flex justify-between items-center px-6 py-6 border-b-[1px] border-b-[#E7E7E7]">
          <p className="flex justify-center items-center">
            <Users2 width={20} height={20}/> <span className="ml-1">Applicants</span>
          </p>
          <p className="font-bold">400</p>
        </div>
        <div className="text-base text-[#4F4F4F] flex justify-between items-center px-6 py-6 border-b-[1px] border-b-[#E7E7E7]">
          <p className="flex justify-center items-center">
            <UserCheck2 width={20} height={20}/> <span className="ml-1">Matches</span>
          </p>
          <p className="font-bold">100</p>
        </div>
        <div className="text-base text-[#4F4F4F] flex justify-between items-center px-6 py-6 border-b-[1px] border-b-[#E7E7E7]">
          <p className="flex justify-center items-center">
            <MessageSquare width={20} height={20}/> <span className="ml-1">Messages</span>
          </p>
          <p className="font-bold">147</p>
        </div>
        <div className="text-base text-[#4F4F4F] flex justify-between items-center px-6 py-6 border-b-[1px] border-b-[#E7E7E7]">
          <p className="flex justify-center items-center">
            <Eye width={20} height={20}/> <span className="ml-1">Views</span>
          </p>
          <p className="font-bold">800</p>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
