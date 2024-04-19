"use client";
import Link from "next/dist/client/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function MenuCard({
  title,
  icon,
  selected,
  path,
}: {
  title: string;
  icon: any;
  selected: boolean;
  path: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <div
        className={`flex w-[84px] h-[84px] text-black  card hover:bg-blue-600 hover:text-white ${
          pathname == path ? `bg-blue-600 text-white` : ``
        } items-center justify-center`}
      >
        <div className="flex flex-col items-center">
          {icon}
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}
