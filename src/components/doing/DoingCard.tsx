import React from "react";

export default function DoingCard({
  title,
  description,
  icon,
  colorClass,
}: {
  title: string;
  description: string;
  icon: any;
  colorClass: string;
}) {
  return (
    <div className={`card ${colorClass} flex p-4 gap-4`}>
      <div>{icon}</div>
      <div>
        <h1 className="font-semibold mb-2">{title}</h1>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
}
