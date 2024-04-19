import React from "react";

export default function EducationWorkCard({
  title,
  year,
  subtitle,
  colorClass,
}: {
  title: string;
  year: string;
  subtitle: string;
  colorClass: string;
}) {
  return (
    <div className="flex-grow">
      <div className={`card ${colorClass}  text-black p-4 gap-1 flex flex-col`}>
        <div className="text-slate-700 font-light">{year}</div>
        <div>{title}</div>
        <div className="text-slate-700 font-light">{subtitle}</div>
      </div>
    </div>
  );
}
