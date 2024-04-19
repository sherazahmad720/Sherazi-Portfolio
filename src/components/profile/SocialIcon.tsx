import React from "react";

export default function SocialIcon({ icon, colorClass }: any) {
  return (
    <div
      className={`card items-center text-center ${colorClass} hover:text-white h-[40px] w-[40px] p-2`}
    >
      {icon}
    </div>
  );
}
