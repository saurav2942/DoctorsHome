import React from "react";

const HeaderShimmer = () => {
  return (
    <div className="noise bg-[#fff] m-0 p-5 animate-pulse">
      <div className="flex flex-col w-screen h-auto relative font-sansInter">
        {/* {Logo and Buttun Component} */}
        <div className="flex justify-center items-center w-full h-[60px] relative">
          <h2 className="bg-gray-200 rounded-xl px-4 py-4 w-[10%] h-[30%]"></h2>
          <div className="w-[18%] h-auto absolute top-4 right-10 flex gap-5 font-medium text-[#fff]">
            <button className="bg-gray-200 rounded-3xl px-4 py-4 w-[30%] h-[30%]"></button>
            <button className="bg-gray-200 rounded-3xl px-4 py-4 w-[30%] h-[30%]"></button>
          </div>
        </div>

        {/* {Line Break} */}
        <div className="w-screen h-[1px] op-[10%] bg-[#000000] border-[1px]"></div>

        {/* {Navbar compnent} */}
        <div className="w-auto h-auto relative">
          <div className="w-full flex p-3 justify-center font-medium">
            <div className="w-[70%] flex justify-evenly">
              <div className="bg-gray-200 rounded-xl px-4 py-4 w-[10%] h-[30%]"></div>
              <div className="bg-gray-200 rounded-xl px-4 py-4 w-[10%] h-[30%]"></div>
              <div className="bg-gray-200 rounded-xl px-4 py-4 w-[10%] h-[30%]"></div>
              <div className="bg-gray-200 rounded-xl px-4 py-4 w-[10%] h-[30%]"></div>
              <div className="bg-gray-200 rounded-xl px-4 py-4 w-[10%] h-[30%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderShimmer;
