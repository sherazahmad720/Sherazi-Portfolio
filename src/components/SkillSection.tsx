import React from "react";
import SkillBar from "./skills/SkillBar";

export default function SkillSection() {
  return (
    <div className="flex flex-col gap-2 ">
      <SkillBar title={"Flutter/Dart"} presentage={90} colorClass={"bg-blue-400"} />
      <SkillBar title={"Node Js"} presentage={78} colorClass={"bg-green-500"} />
      <SkillBar title={"Next Js"} presentage={30} colorClass={"bg-blue-800"} />
      <SkillBar title={"Figma"} presentage={70} colorClass={"bg-pink-500"} />
      <SkillBar title={"Asp.net"} presentage={25} colorClass={"bg-purple-500"} />
    </div>
  );
}
