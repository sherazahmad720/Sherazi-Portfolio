import React from "react";
import EducationWorkCard from "./educationWork/EducationWorkCard";

export default function EducationSection() {
  return (
    <div className="flex-col flex gap-3">
      <EducationWorkCard
        title={"Master in Computer Science (MCs)"}
        year={"2020"}
        subtitle={"Virtual University Of Pakistan"}
        colorClass={"bg-red-100"}
      />
      <EducationWorkCard
        title={"Bachelor in Computer Science (BCs)"}
        year={"2017"}
        subtitle={"Punjab University "}
        colorClass={"bg-blue-100"}
      />
      <EducationWorkCard
        title={"Intermediate in Science (FSc Pre-Medical)"}
        year={"2015"}
        subtitle={"Board Of Intermediat & Secondary Education Gujranwala"}
        colorClass={"bg-red-100"}
      />
    </div>
  );
}
