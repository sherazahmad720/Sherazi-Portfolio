import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-gray-500 w-[300px]">
        <div className="lex flex-col">
          <div className="h-[150px]">

          </div>
          <div className="flex flex-col bg-white rounded-lg items-center ">
            <div className="h-[240px] w-[240px] bg-blue-500 rounded-lg -mt-[120px]"></div>
            <h3 className="text-black">Sherazi</h3>
            <h4 className="text-black">Flutter Developer</h4>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 flex-grow ">details section</div>
      <div className="bg-red-500 w-[150px]"> drawer/side menu</div>
    </div>
  );
}
