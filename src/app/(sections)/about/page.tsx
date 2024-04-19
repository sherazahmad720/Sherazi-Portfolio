
import DoingSection from "@/components/DoingSection";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-[36px]">About</h1>
      </div>
      <p>
        Experienced Application Developer with a demonstrated history of working
        in the computer software industry. Skilled in Cross-platform
        Development, Flutter, Dart, Graphic Design, User Experience Design
        (UED), and Video Editing. Strong engineering professional with an Mcs
        focused in Computer Programming from the Virtual University of Pakistan.
      </p>
      <div className="mb-4 mt-6">
        <h1 className="font-bold text-[24px]">What I Do!</h1>
      </div>
      <DoingSection />
    </div>
  );
}
