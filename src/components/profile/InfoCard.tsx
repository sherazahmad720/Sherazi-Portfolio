import React from "react";

export default function InfoCard({ title, value, icon }: any) {
  return (
    <div className="flex items-center gap-2 pt-2">
      <div className=" flex items-center justify-center card  h-[35px] w-[35px] bg-white text-center">
        {icon}
      </div>
      <div className="g">
        <p className="text-gray-900 font-light text-[12px]">{title}</p>
        <p className="text-black text-[14px]">{value}</p>
      </div>
    </div>
  );
}
