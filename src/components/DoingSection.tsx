import React from "react";
import DoingCard from "./doing/DoingCard";


export default function DoingSection() {
  return (
    <div className="grid grid-cols-2 gap-10">
      {doing.map((item) => (
        <DoingCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
          colorClass={item.colorClass}
        />
      ))}
    </div>
  );
}

let doing = [
  {
    title: "Mobile App Design",
    description:
      " I specialize in creating intuitive and visually appealing interfaces for mobile applications. From concept to prototype, I ensure user engagement and satisfaction. Whether refining existing designs or creating new ones, I'm committed to elevating functionality and aesthetics for a seamless user experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-[50px] h-[50px] text-pink-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
        />
      </svg>
    ),
    colorClass: "bg-green-100",
  },
  {
    title: "Mobile App Development",
    description:
      "Leveraging the power of Flutter, I specialize in building high-quality, cross-platform mobile applications. From sleek UI designs to robust backend integration, I ensure seamless performance and user satisfaction. With a focus on Flutter, I deliver efficient and visually stunning apps that meet your unique requirements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-[50px] h-[50px] text-blue-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    colorClass: "bg-yellow-100",
  },
  {
    title: "Web Design",
    description:
      "Bringing visions to life on the digital canvas, I specialize in crafting captivating and user-friendly websites. From responsive layouts to engaging user interfaces, I ensure your online presence is both aesthetically pleasing and functional. With a keen eye for detail and a focus on user experience, I create websites that leave a lasting impression and drive results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-[50px] h-[50px] text-orange-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    ),
    colorClass: "bg-blue-100",
  },
  {
    title: "Web Development",
    description:
      "I specialize in crafting dynamic and responsive web applications. From sleek front-end designs to robust back-end functionalities, I bring your ideas to life with seamless integration and optimized performance. With a focus on user experience and scalability, I deliver web solutions that exceed expectations and drive success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-[50px] h-[50px] text-green-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
    colorClass: "bg-red-100",
  },
];
