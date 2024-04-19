import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
   

   return (
     <div className="card bg-white flex-grow mt-10 mb-10 flex flex-col text-black px-12 py-12 ">
        {children}
     </div>
   );
}
