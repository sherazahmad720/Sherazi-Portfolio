import React from "react";
import EducationWorkCard from "./educationWork/EducationWorkCard";

export default function WorkSection() {
  return (
    <div className="flex-col flex gap-3">
      <EducationWorkCard
        title={"CTO & Senior Flutter Developer"}
        year={"Feb 2024-present"}
        subtitle={"Techanion Pvt Ltd, Islamabad"}
        colorClass={"bg-blue-100"}
      />
      <EducationWorkCard
        title={"Senior Flutter Developer"}
        year={"Feb 2021-Feb 2024"}
        subtitle={"Techorra, Islamabad"}
        colorClass={"bg-red-100"}
      />
      <EducationWorkCard
        title={"Flutter Developer"}
        year={"Sep 2019-Feb 2021"}
        subtitle={"GlowSIMS, Phalia"}
        colorClass={"bg-blue-100"}
      />
    </div>
  );
}
