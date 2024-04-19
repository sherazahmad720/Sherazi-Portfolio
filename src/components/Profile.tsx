import React from "react";
import SocialIconSection from "./profile/SocialIconSection";
import Info from "./profile/InfoSection";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <div className=" w-[300px] ">
      <div className="lex flex-col m-3 ">
        <div className="h-[150px]"></div>
        <div className="flex flex-col bg-white rounded-lg items-center pb-6 ">
          <div className="h-[220px] w-[200px] bg-gray-100 rounded-xl -mt-[120px]">
            <Image
              src={"/profile.jpg"}
              alt={"Profile Picture"}
              width={200}
              height={200}
              className="object-cover object-top  h-[220px] w-[200px]  rounded-xl"
            ></Image>
          </div>
          <h2 className="text-black mt-5 font-bold">Muhammd Sheraz</h2>
          <div className="px-4 py-1  card mt-1 ">
            <h4 className="text-black">Flutter Developer</h4>
          </div>
          <SocialIconSection />
          <Info />
          <Link href={"/resume.pdf"} target="blank">
            <div className=" flex gap-2 card p-2 m-2 bg-blue-600 hover:bg-white text-white hover:text-black hover:border-blue-600 border">
              <div></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Download Resume</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
