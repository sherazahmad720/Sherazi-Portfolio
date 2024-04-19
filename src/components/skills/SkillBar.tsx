import React from "react";

export default function SkillBar({
  title,
  presentage,
  colorClass,
}: {
  title: string;
  presentage: number;
  colorClass: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2">
        <div>{title}</div>
        <div>{presentage}%</div>
      </div>
      <div className="bg-gray-300 h-[7px] rounded-full ">
        <div
          className={` ${colorClass} h-[7px] rounded-full w-[${presentage}%] ${colorClass}`}
        ></div>
      </div>
    </div>
  );
}
